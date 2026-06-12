import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Phone, Sparkles, ShieldCheck, TrendingUp, Users, Target, Send } from "lucide-react";
import { submitLead } from "@/lib/yandex-form.functions";
import dentist from "@/assets/hero-man.png";
import logo from "@/assets/logo-rmn.jpg";
import teamElizaveta from "@/assets/team-elizaveta.png";
import teamAlena from "@/assets/team-alena.png";
import teamAnastasia from "@/assets/team-anastasia.png";
import caseXray from "@/assets/case-xray.jpg";
import caseClinic from "@/assets/case-clinic.jpg";
import caseKid from "@/assets/case-kid.jpg";
import caseBraces from "@/assets/case-braces.jpg";
import caseAligners from "@/assets/case-aligners.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ДентаРост — комплексный маркетинг для стоматологий" },
      { name: "description", content: "Привлекаем пациентов в стоматологические клиники: Яндекс Директ, ВКонтакте, SEO, агрегаторы, CRM. Гарантия результата. Более 8 лет работы со стоматологиями." },
    ],
  }),
});

const PHONE = "+7 (960) 788-13-69";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="ДентаРост" className="h-11 w-11 rounded-xl object-contain" />
      <div className="leading-tight">
        <div className="text-base font-extrabold tracking-tight">ДентаРост</div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">маркетинг для клиник</div>
      </div>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky z-40 mx-auto transition-all duration-500 ease-out ${
        scrolled ? "top-2 w-[min(1180px,92%)]" : "top-4 w-[min(1240px,94%)]"
      }`}
    >
      <div
        className={`flex items-center justify-between gap-4 rounded-2xl border border-border backdrop-blur transition-all duration-500 ease-out ${
          scrolled
            ? "bg-background/80 px-4 py-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)]"
            : "bg-background/90 px-5 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]"
        }`}
      >
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#uslugi" className="transition-colors hover:text-foreground">Услуги</a>
          <a href="#strong" className="transition-colors hover:text-foreground">Что делаем</a>
          <a href="#cases" className="transition-colors hover:text-foreground">Кейсы</a>
          <a href="#team" className="transition-colors hover:text-foreground">Команда</a>
          <a href="#reviews" className="transition-colors hover:text-foreground">Отзывы</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="hidden text-sm font-semibold text-foreground sm:block">{PHONE}</a>
          <a href="#contact" className="cta-btn group inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            оставить заявку
            <ArrowUpRight className="h-4 w-4 cta-arrow" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto mt-8 w-[min(1240px,94%)]">
      <div className="relative overflow-hidden rounded-3xl bg-[oklch(0.96_0.012_60)] px-8 py-14 md:px-16 md:py-20">
        <svg className="pointer-events-none absolute right-0 top-0 h-full w-[55%] text-primary/15" viewBox="0 0 600 600" fill="none" aria-hidden>
          <path d="M0 60 L150 540 L300 200 L450 540 L600 60" stroke="currentColor" strokeWidth="120" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
        <div className="relative grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              специализация — только стоматологии
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Поток пациентов в клинику{" "}
              <span className="text-primary">с гарантией результата</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Более 8 лет работаем со стоматологиями: от частных кабинетов до сетевых клиник.
              Берём маркетинг под ключ и отвечаем за заявки, а не за «охваты».
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#contact" className="cta-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground">
                оставить заявку <ArrowUpRight className="h-4 w-4 cta-arrow" />
              </a>
              <a href="#cases" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold">
                посмотреть кейсы
              </a>
            </div>
            <p className="mt-6 max-w-md text-sm text-muted-foreground">
              Оставьте заявку прямо сейчас и получите бесплатный аудит клиники в видео-формате + PDF по всем источникам трафика.
            </p>
          </div>
          <div className="relative mx-auto flex h-[460px] w-full max-w-[460px] items-center justify-center md:h-[560px]">
            {/* decorative ring */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-primary/30 md:h-[380px] md:w-[380px]" />
            {/* main circular photo */}
            <div className="relative z-10 h-[260px] w-[260px] overflow-hidden rounded-full bg-primary/10 shadow-2xl ring-8 ring-background md:h-[340px] md:w-[340px]">
              <img
                src={dentist}
                alt="Эксперт по маркетингу для стоматологий"
                className="h-full w-full scale-110 object-cover object-top"
              />
            </div>

            {/* infographic badges — pinned to outer corners, outside the photo */}
            <div className="absolute left-0 top-2 z-20 rounded-2xl border border-border bg-background px-3 py-2 shadow-lg md:top-4 md:px-4 md:py-3">
              <div className="text-xl font-extrabold text-primary md:text-2xl">+312</div>
              <div className="text-[11px] text-muted-foreground md:text-xs">заявок / мес</div>
            </div>

            <div className="absolute right-0 top-2 z-20 rounded-2xl border border-border bg-background px-3 py-2 text-center shadow-lg md:top-4 md:px-4 md:py-3">
              <div className="text-xl font-extrabold text-primary md:text-2xl">8 лет</div>
              <div className="text-[11px] text-muted-foreground md:text-xs">опыт в стоматологиях</div>
            </div>

            <div className="absolute bottom-2 left-0 z-20 rounded-2xl border border-border bg-background px-3 py-2 shadow-lg md:bottom-4 md:px-4 md:py-3">
              <div className="text-xl font-extrabold text-primary md:text-2xl">ROMI 640%</div>
              <div className="text-[11px] text-muted-foreground md:text-xs">средний результат</div>
            </div>

            <div className="absolute bottom-3 right-0 z-20 rounded-full bg-primary px-3 py-2 text-[11px] font-semibold text-primary-foreground shadow-lg md:bottom-6 md:px-4 md:text-xs">
              ✓ гарантия по KPI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STRONG = [
  {
    title: "Привлечение первичных пациентов",
    items: [
      "Яндекс Директ (поиск, РСЯ, ретаргетинг)",
      "Таргет ВКонтакте под услуги клиники",
      "Подключение агрегаторов: ПроДокторов, Zoon, 32top, СберЗдоровье",
      "Гео-маркетинг (Яндекс Карты и 2ГИС)",
      "Работа с репутацией и отзывами",
    ],
  },
  {
    title: "Сайт и упаковка",
    items: [
      "Разработка сайта/посадочной под услугу",
      "Дизайн и прототипирование",
      "Полное соответствие ФЗ РФ (лицензии, прайс-лист)",
      "Подключение онлайн-записи и квизов",
      "SEO-продвижение клиники",
    ],
  },
  {
    title: "Удержание и LTV",
    items: [
      "Внедрение и настройка CRM (amoCRM)",
      "SMM — контент для пациентов и доверие",
      "Email- и Telegram-рассылки по базе",
      "Сквозная аналитика и коллтрекинг",
      "Работа с возвращаемостью и абонементами",
    ],
  },
];

function Strong() {
  return (
    <section id="strong" className="mx-auto mt-24 w-[min(1240px,94%)]">
      <h2 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
        В чём мы сильны и умеем давать <span className="text-primary">доходность клинике</span>
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {STRONG.map((c, i) => (
          <div key={i} className="flex flex-col rounded-3xl border-2 border-dashed border-border bg-background p-7">
            <div className="mb-6 h-9 w-9 rounded-full border border-border" />
            <h3 className="text-2xl font-extrabold text-primary">{c.title}</h3>
            <ul className="mt-5 flex-1 space-y-3 text-[15px]">
              {c.items.map((it) => (
                <li key={it} className="flex gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="cta-btn mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              оставить заявку <ArrowUpRight className="h-4 w-4 cta-arrow" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const SERVICES = [
  { price: "от 5 000", days: "от 2 дней", title: "Дизайн", desc: "Дизайн сайта, баннеров и материалов клиники в едином фирменном стиле." },
  { price: "от 40 000", days: "от 10 дней", title: "Яндекс Директ", desc: "Контекстная реклама на услуги: имплантация, виниры, ортодонтия. Заявки от 350 ₽." },
  { price: "от 50 000", days: "от 15 дней", title: "Разработка сайта", desc: "Лендинг или сайт клиники с онлайн-записью и интеграцией с amoCRM." },
  { price: "от 40 000", days: "от 10 дней", title: "Таргет ВКонтакте", desc: "Привлекаем пациентов из ВКонтакте, ведём на квиз или онлайн-запись." },
  { price: "от 40 000", days: "от 7 дней", title: "SMM для клиники", desc: "Контент-план, съёмки врачей, рилсы, прогрев — превращаем подписчиков в пациентов." },
  { price: "от 45 000", days: "от 30 дней", title: "SEO-продвижение", desc: "Выводим клинику в ТОП Яндекса по услугам в своём городе." },
  { price: "от 80 000", days: "от 30 дней", title: "Настройка amoCRM", desc: "Внедряем CRM, чтобы ни одна заявка не терялась, а администратор работал по скриптам." },
  { price: "от 20 000", days: "от 5 дней", title: "Подключение агрегаторов", desc: "ПроДокторов, Zoon, 32top, СберЗдоровье — карточки клиники, отзывы, рейтинг." },
  { price: "от 30 000", days: "от 10 дней", title: "Яндекс Карты и 2ГИС", desc: "Оформление карточки, приоритетное размещение, работа с отзывами." },
  { price: "от 45 000", days: "от 14 дней", title: "Закупка рекламы у блогеров", desc: "Подбор локальных инфлюенсеров, согласование, размещение, замер заявок." },
  { price: "от 100 000", days: "от 30 дней", title: "Брендинг клиники", desc: "Создание узнаваемого образа: логотип, фирменный стиль, тон коммуникации." },
];

function Services() {
  return (
    <section id="uslugi" className="mx-auto mt-24 w-[min(1240px,94%)]">
      <h2 className="text-3xl font-extrabold md:text-5xl">Услуги</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">Каждую услугу можно взять отдельно или собрать в комплекс. Цены — стартовые, итог считаем по задаче клиники.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const isLast = i === SERVICES.length - 1;
          return (
            <a
              key={i}
              href="#contact"
              className={`group flex min-h-[230px] flex-col justify-between rounded-3xl p-7 transition hover:-translate-y-1 ${isLast ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground"}`}
            >
              <div className="flex items-start justify-between">
                <div className={`text-xs ${isLast ? "text-primary-foreground/80" : "text-card-foreground/60"}`}>
                  {s.price} ₽ · {s.days}
                </div>
                <ArrowUpRight className="h-5 w-5 opacity-70 transition group-hover:rotate-45" />
              </div>
              <div>
                <h3 className="mt-4 text-2xl font-bold leading-tight">{s.title}</h3>
                <p className={`mt-3 text-sm ${isLast ? "text-primary-foreground/90" : "text-card-foreground/70"}`}>{s.desc}</p>
              </div>
            </a>
          );
        })}
        <a href="#contact" className="group flex min-h-[230px] flex-col justify-between rounded-3xl bg-primary p-7 text-primary-foreground transition hover:-translate-y-1">
          <div className="flex items-start justify-end">
            <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
          </div>
          <h3 className="text-2xl font-bold leading-tight">Комплексное<br/>продвижение клиники</h3>
        </a>
      </div>
    </section>
  );
}

const CASES = [
  { title: "Имплантация под ключ", clinic: "Сеть «Дента-Люкс», Москва", tag: "Яндекс Директ + сайт", stat: "+312 заявок/мес", tone: "dark", img: caseXray },
  { title: "Эстетическая стоматология", clinic: "Клиника «Smile&Co», СПб", tag: "ВКонтакте + SMM", stat: "CPL 480 ₽", tone: "orange", img: caseClinic },
  { title: "Детская стоматология", clinic: "«Зубёнок», Екатеринбург", tag: "Агрегаторы + Карты", stat: "x2.4 первичка", tone: "dark", img: caseKid },
  { title: "Ортодонтия и брекеты", clinic: "«Ортолайн», Казань", tag: "Сайт + Директ", stat: "ROMI 640%", tone: "orange", img: caseBraces },
  { title: "Премиум-клиника", clinic: "«Белый кабинет», Сочи", tag: "Брендинг + SEO", stat: "ТОП-3 по 87 запросам", tone: "dark", img: caseAligners },
  { title: "Сеть из 6 филиалов", clinic: "«Денталика», Новосибирск", tag: "amoCRM + сквозная аналитика", stat: "−38% потерянных заявок", tone: "orange", img: caseClinic },
];

function Cases() {
  return (
    <section id="cases" className="mx-auto mt-24 w-[min(1240px,94%)]">
      <h2 className="text-3xl font-extrabold md:text-5xl">Истории наших клиник</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CASES.map((c, i) => (
          <article
            key={i}
            className={`group relative aspect-square overflow-hidden rounded-3xl p-7 ${c.tone === "orange" ? "bg-primary text-primary-foreground" : "bg-[oklch(0.22_0.03_40)] text-white"}`}
          >
            <img
              src={c.img}
              alt={c.title}
              loading="lazy"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`pointer-events-none absolute inset-0 ${c.tone === "orange" ? "bg-gradient-to-t from-primary via-primary/80 to-primary/30" : "bg-gradient-to-t from-[oklch(0.22_0.03_40)] via-[oklch(0.22_0.03_40)]/85 to-[oklch(0.22_0.03_40)]/30"}`} />
            <div className="relative flex h-full flex-col">
              <h3 className="text-2xl font-bold leading-tight md:text-3xl">{c.title}</h3>
              <p className="mt-2 text-sm opacity-80">{c.clinic}</p>
              <div className="mt-auto">
                <div className="text-xs uppercase tracking-wider opacity-70">{c.tag}</div>
                <div className="mt-1 flex items-end justify-between gap-3">
                  <div className="text-2xl font-extrabold">{c.stat}</div>
                  <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline">Смотреть кейс →</a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const WHY = [
  { icon: ShieldCheck, title: "Только стоматологии", desc: "Не распыляемся. Знаем услуги, средний чек, циклы сделки." },
  { icon: TrendingUp, title: "Понимаем экономику", desc: "Считаем CAC, LTV и ROMI — не «лайки и охваты»." },
  { icon: Target, title: "Система привлечения", desc: "Связываем рекламу, сайт, CRM и администратора в единый поток." },
  { icon: Users, title: "Кейсы и цифры", desc: "Более 40 клиник в 18 городах. Показываем результаты в открытую." },
];

function Why() {
  return (
    <section className="mx-auto mt-24 w-[min(1240px,94%)]">
      <h2 className="text-3xl font-extrabold md:text-5xl">Почему мы</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w, i) => (
          <div key={i} className="rounded-3xl border-2 border-dashed border-border bg-background p-7">
            <w.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-xl font-extrabold text-primary">{w.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{w.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-3xl border-2 border-dashed border-border bg-background p-7">
        <div>
          <h3 className="text-xl font-extrabold text-primary">Работаем на результат — доходность клиники</h3>
          <p className="mt-1 text-sm text-muted-foreground">Привязываем KPI к количеству первичных пациентов и выручке, а не к показам рекламы.</p>
        </div>
        <a href="#contact" className="cta-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
          оставить заявку <ArrowUpRight className="h-4 w-4 cta-arrow" />
        </a>
      </div>
    </section>
  );
}

const TEAM = [
   { name: "Елизавета", role: "SMM-специалист", img: teamElizaveta },
   { name: "Алёна", role: "Таргетированная реклама ВКонтакте и Яндекс.Директ", img: teamAlena },
   { name: "Анастасия", role: "ГЕО-маркетинг", img: teamAnastasia },
 ];
 
 function Team() {
   return (
     <section id="team" className="mx-auto mt-24 w-[min(1240px,94%)]">
       <h2 className="text-3xl font-extrabold md:text-5xl">Команда</h2>
       <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
         {TEAM.map((p) => (
           <div key={p.name} className="flex flex-col items-center text-center">
             <div className="h-36 w-36 overflow-hidden rounded-full bg-[oklch(0.9_0.012_240)]">
               <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
             </div>
             <h3 className="mt-5 text-lg font-bold">{p.name}</h3>
             <p className="text-sm text-muted-foreground">{p.role}</p>
           </div>
         ))}
       </div>
     </section>
   );
 }

const REVIEWS = [
  { name: "Дмитрий В.", clinic: "Главврач, «Дента-Люкс»", text: "За 4 месяца поток первичных вырос в 2.7 раза. Что важно — заявки целевые, не «спросить цену»." },
  { name: "Ольга К.", clinic: "Владелец, «Smile&Co»", text: "Перестроили воронку, внедрили amoCRM. Администратор перестал терять обращения, конверсия в визит +34%." },
  { name: "Игорь М.", clinic: "Маркетолог, сеть «Денталика»", text: "Команда понимает специфику клиник. Не нужно объяснять, что такое имплантация и какие у неё циклы." },
];

function Reviews() {
  return (
    <section id="reviews" className="mx-auto mt-24 w-[min(1240px,94%)]">
      <h2 className="text-3xl font-extrabold md:text-5xl">Отзывы</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <div key={i} className="flex flex-col rounded-3xl bg-card p-7 text-card-foreground">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-background text-sm font-extrabold text-foreground">
                {r.name.split(" ").map(s=>s[0]).join("")}
              </div>
              <div>
                <div className="font-bold">{r.name}</div>
                <div className="text-xs text-card-foreground/60">{r.clinic}</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-card-foreground/85">«{r.text}»</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", city: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const submit = useServerFn(submitLead);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const name = form.name.trim();
    const phone = form.phone.trim();
    const city = form.city.trim();
    if (name.length < 2) return setError("Введите имя");
    if (!/^[+\d][\d\s()\-]{6,19}$/.test(phone)) return setError("Введите корректный телефон");
    setLoading(true);
    try {
      const res = await submit({ data: { name, phone, city } });
      if (res?.ok) {
        setSubmitted(true);
      } else {
        console.error("submitLead failed:", res?.error);
        setError(`Не удалось отправить заявку. ${res?.error ?? ""}`.trim());
      }
    } catch (err) {
      console.error(err);
      setError("Не удалось отправить заявку. Попробуйте позже или свяжитесь с нами другим способом.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mx-auto mt-24 w-[min(1240px,94%)]">
      <div className="overflow-hidden rounded-3xl bg-card text-card-foreground">
        <div className="grid gap-10 p-8 md:grid-cols-[1fr_1.1fr] md:p-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary">
              <Send className="h-3.5 w-3.5" /> бесплатный аудит за 24 часа
            </div>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">
              Оставьте заявку — соберём <span className="text-primary">план роста</span> вашей клиники
            </h2>
            <p className="mt-4 max-w-md text-card-foreground/75">
              Разберём текущие источники трафика, посчитаем экономику и пришлём PDF с конкретными точками роста.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary"/> {PHONE}</div>
              <div className="flex items-center gap-3"><Check className="h-4 w-4 text-primary"/> Без оплаты — оплачивается только если возьмёте в работу</div>
              <div className="flex items-center gap-3"><Check className="h-4 w-4 text-primary"/> Ответим в течение 24 часов</div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div
              className="w-full max-w-[520px] rounded-[24px] bg-white p-7 text-foreground md:p-9"
              style={{ boxShadow: "0 30px 80px -20px rgba(15, 23, 42, 0.25), 0 10px 30px -10px rgba(15, 23, 42, 0.12)" }}
            >
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div
                    className="grid h-16 w-16 place-items-center rounded-full"
                    style={{ backgroundColor: "rgba(255, 107, 61, 0.12)", color: "#FF6B3D" }}
                  >
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold text-slate-900">Спасибо!</h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-slate-500">
                    Мы получили заявку и свяжемся с вами в течение рабочего дня.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="f-name" className="mb-2 block text-sm font-semibold text-slate-700">
                      Имя
                    </label>
                    <input
                      id="f-name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Как к вам обращаться"
                      className="h-16 w-full rounded-2xl border border-slate-200 bg-white px-5 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#FF6B3D] focus:ring-2 focus:ring-[#FF6B3D]/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="f-phone" className="mb-2 block text-sm font-semibold text-slate-700">
                      Телефон
                    </label>
                    <input
                      id="f-phone"
                      type="tel"
                      required
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 ___ ___-__-__"
                      className="h-16 w-full rounded-2xl border border-slate-200 bg-white px-5 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#FF6B3D] focus:ring-2 focus:ring-[#FF6B3D]/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="f-city" className="mb-2 block text-sm font-semibold text-slate-700">
                      Город
                    </label>
                    <input
                      id="f-city"
                      type="text"
                      maxLength={100}
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="Например, Новосибирск"
                      className="h-16 w-full rounded-2xl border border-slate-200 bg-white px-5 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#FF6B3D] focus:ring-2 focus:ring-[#FF6B3D]/20"
                    />
                  </div>
                  {error && <p className="text-sm font-medium text-red-500">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 inline-flex h-16 w-full items-center justify-center gap-2 rounded-2xl text-[15px] font-semibold text-white transition hover:brightness-105 active:brightness-95 disabled:opacity-70"
                    style={{
                      backgroundColor: "#FF6B3D",
                      boxShadow: "0 14px 30px -10px rgba(255, 107, 61, 0.55)",
                    }}
                  >
                    {loading ? "Отправляем…" : "Получить аудит за 24 часа"}
                    {!loading && <ArrowUpRight className="h-5 w-5" />}
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto mt-24 w-[min(1240px,94%)] pb-10">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
        <Logo />
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} ДентаРост. Маркетинг для стоматологических клиник.</div>
        <a href={`tel:${PHONE.replace(/\D/g,"")}`} className="text-sm font-semibold">{PHONE}</a>
      </div>
    </footer>
  );
}

function OfferPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("dr_offer_shown")) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("dr_offer_shown", "1");
    }, 20000);
    return () => clearTimeout(t);
  }, []);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-300"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-border bg-background p-7 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted transition"
          aria-label="Закрыть"
        >
          ✕
        </button>
        <div className="mb-4 flex items-center gap-2">
          <img src={logo} alt="ДентаРост" className="h-9 w-9 rounded-lg object-contain" />
          <span className="text-sm font-extrabold tracking-tight">ДентаРост</span>
        </div>
        <h3 className="text-2xl font-extrabold leading-tight tracking-tight">
          Запишитесь на экскурсию в&nbsp;отдел маркетинга
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          На примере действующих клиник покажем, как мы делаем клиники прибыльными. Напишите нам — обсудим вашу ситуацию.
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <a
            href="https://t.me/sansberg"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#229ED9] px-5 py-4 text-base font-semibold text-white shadow-lg shadow-[#229ED9]/30 transition hover:opacity-95"
          >
            <Send className="h-5 w-5" /> Написать в Telegram
          </a>
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-muted/40 px-5 py-4 text-base font-semibold transition hover:bg-muted"
          >
            <Phone className="h-5 w-5" /> {PHONE}
          </a>
        </div>
        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Бесплатная консультация · ответим в течение 15 минут
        </p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen pb-10 pt-6">
      <Header />
      <Hero />
      <Strong />
      <Services />
      <Cases />
      <Why />
      <Team />
      <Reviews />
      <Contact />
      <Footer />
      <OfferPopup />
    </main>
  );
}
