import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SURVEY_ID = "6a13de2690fa7be6c53a8f5a";
const FORM_URL = `https://forms.yandex.ru/u/${SURVEY_ID}/`;
const POST_URL = "https://forms.yandex.ru/u/gateway/root/form/postSurvey";

const Schema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(40),
  city: z.string().trim().max(120).optional().default(""),
});

async function getCsrfAndCookies(): Promise<{ csrf: string; yuid: string; cookie: string }> {
  const res = await fetch(FORM_URL, {
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "ru,en;q=0.9",
    },
  });
  const html = await res.text();
  // Prefer getSetCookie when available (Workers / modern fetch)
  type HeadersWithGetSetCookie = Headers & { getSetCookie?: () => string[] };
  const h = res.headers as HeadersWithGetSetCookie;
  const setCookies: string[] = typeof h.getSetCookie === "function"
    ? h.getSetCookie()
    : (res.headers.get("set-cookie") ? [res.headers.get("set-cookie") as string] : []);
  const cookie = setCookies
    .map((c) => c.split(";")[0].trim())
    .filter(Boolean)
    .join("; ");
  const m = html.match(/window\.__DATA__\s*=\s*(\{.*?\});/s);
  if (!m) throw new Error("Yandex Forms: __DATA__ not found");
  const data = JSON.parse(m[1]);
  const csrf = data?.csrfToken as string;
  const yuid = data?.user?.yandexuid as string;
  if (!csrf || !yuid) throw new Error("Yandex Forms: csrf/yuid not found");
  console.log("Yandex CSRF fetched", { csrfLen: csrf.length, yuid, cookieLen: cookie.length });
  return { csrf, yuid, cookie };
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => Schema.parse(input))
  .handler(async ({ data }) => {
    try {
      const { csrf, yuid, cookie } = await getCsrfAndCookies();

      const body = {
        surveyId: SURVEY_ID,
        values: {
          answer_series_9008978941703940: [
            {
              answer_short_text_9008978941729648: data.name,
              "id-question-124494406": data.phone,
            },
          ],
          answer_short_text_9008978941758568: data.city || "",
        },
        parent: "",
        dryRun: false,
      };

      const res = await fetch(POST_URL, {
        method: "POST",
        headers: {
          "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36",
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "ru,en;q=0.9",
          "X-CSRF-Token": csrf,
          "x-forms-yandexuid": yuid,
          "x-use-collab": "1",
          Origin: "https://forms.yandex.ru",
          Referer: FORM_URL,
          Cookie: cookie,
        },
        body: JSON.stringify(body),
      });

      const text = await res.text();
      if (!res.ok) {
        console.error("Yandex Forms submission failed", res.status, text);
        return { ok: false as const, error: `Yandex Forms HTTP ${res.status}: ${text.slice(0, 300)}` };
      }
      let parsed: { answer_id?: number } = {};
      try {
        parsed = JSON.parse(text);
      } catch {
        // ignore
      }
      if (!parsed.answer_id) {
        console.error("Yandex Forms: no answer_id in response", text);
        return { ok: false as const, error: "Нет answer_id от Яндекс Форм" };
      }
      console.log("Yandex Forms submission ok", parsed.answer_id);
      return { ok: true as const, answerId: parsed.answer_id };
    } catch (e) {
      console.error("submitLead error:", e);
      return { ok: false as const, error: e instanceof Error ? e.message : "unknown" };
    }
  });
