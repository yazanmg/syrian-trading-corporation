import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/gov/Header";
import { Footer } from "@/components/gov/Footer";
import { Icon } from "@/components/gov/Icon";
import { publicAsset } from "@/lib/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "المؤسسة السورية للتجارة — البوابة الرسمية" },
      {
        name: "description",
        content:
          "الموقع الرسمي للمؤسسة السورية للتجارة: خدمات المواطن، منتجات مدعومة، عروض، شبكة الفروع في المحافظات، وأحدث الأخبار.",
      },
    ],
  }),
  component: HomePage,
});

/* ─────────────────────────── Data ─────────────────────────── */

const QUICK_SERVICES = [
  { icon: "receipt_long", title: "بطاقة العائلة", desc: "إدارة وتحديث البيانات" },
  { icon: "storefront", title: "المنتجات المدعومة", desc: "التموين والسلع الأساسية" },
  { icon: "local_shipping", title: "طلب توصيل", desc: "خدمة إيصال إلى المنازل" },
  { icon: "forum", title: "الشكاوى", desc: "تقديم شكوى أو اقتراح" },
  { icon: "map", title: "أقرب فرع", desc: "دليل الفروع في المحافظات" },
  { icon: "gavel", title: "المناقصات", desc: "الإعلانات والعقود العامة" },
] as const;

const CATEGORIES = [
  { icon: "grain", title: "مواد غذائية", count: 148 },
  { icon: "restaurant", title: "زيوت وسمون", count: 32 },
  { icon: "local_cafe", title: "مشروبات وألبان", count: 64 },
  { icon: "soap", title: "منظفات وعناية", count: 41 },
  { icon: "child_care", title: "منتجات الأطفال", count: 23 },
  { icon: "eco", title: "منتجات موسمية", count: 18 },
] as const;

const PRODUCTS = [
  {
    name: "سكر أبيض ناعم",
    unit: "كيس 1 كغ",
    price: "3,500",
    old: "4,200",
    tag: "مدعوم",
    avail: true,
    cat: "مواد غذائية",
    swatch: "oklch(0.94 0.02 90)",
  },
  {
    name: "زيت دوار الشمس",
    unit: "عبوة 1 لتر",
    price: "12,900",
    old: null,
    tag: "جديد",
    avail: true,
    cat: "زيوت",
    swatch: "oklch(0.92 0.09 95)",
  },
  {
    name: "أرز مصري ممتاز",
    unit: "كيس 5 كغ",
    price: "26,000",
    old: "29,500",
    tag: "عرض",
    avail: true,
    cat: "حبوب",
    swatch: "oklch(0.95 0.015 80)",
  },
  {
    name: "شاي أسود سيلاني",
    unit: "علبة 450 غ",
    price: "8,750",
    old: null,
    tag: "مدعوم",
    avail: false,
    cat: "مشروبات",
    swatch: "oklch(0.55 0.06 40)",
  },
] as const;

const NEWS = [
  {
    date: "18 تموز 2026",
    cat: "إعلان رسمي",
    title: "افتتاح صالة المؤسسة الجديدة في محافظة حلب لخدمة أكثر من 40 ألف عائلة",
    excerpt:
      "أعلنت المؤسسة السورية للتجارة عن افتتاح صالتها الجديدة في مدينة حلب ضمن خطة توسع الشبكة وتحسين وصول المواطن إلى السلع الأساسية…",
  },
  {
    date: "12 تموز 2026",
    cat: "أسعار",
    title: "تحديث قائمة الأسعار الرسمية للمواد التموينية لشهر تموز",
    excerpt:
      "نشرت المؤسسة القائمة المحدّثة للأسعار الرسمية للمواد المدعومة والمتوفرة في جميع صالات البيع للمواطنين…",
  },
  {
    date: "05 تموز 2026",
    cat: "خدمات",
    title: "إطلاق خدمة الطلب الإلكتروني والتوصيل إلى المنازل في محافظة دمشق",
    excerpt:
      "بالتعاون مع وزارة الاتصالات، تُطلق المؤسسة خدمة الطلب عبر البوابة الرقمية مع إمكانية التوصيل خلال 24 ساعة…",
  },
] as const;

const BRANCHES = [
  { gov: "دمشق", count: 24 },
  { gov: "ريف دمشق", count: 31 },
  { gov: "حلب", count: 28 },
  { gov: "حمص", count: 19 },
  { gov: "حماة", count: 17 },
  { gov: "اللاذقية", count: 14 },
  { gov: "طرطوس", count: 12 },
  { gov: "درعا", count: 9 },
  { gov: "السويداء", count: 7 },
  { gov: "القنيطرة", count: 4 },
  { gov: "دير الزور", count: 11 },
  { gov: "الحسكة", count: 10 },
  { gov: "الرقة", count: 8 },
  { gov: "إدلب", count: 13 },
] as const;

/* ─────────────────────── Page ─────────────────────── */

function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <Hero />
      <QuickServices />
      <OffersStrip />
      <FeaturedProducts />
      <Categories />
      <BranchesMap />
      <Statistics />
      <LatestNews />
      <MobileApp />
      <Partners />
      <FAQ />
      <Footer />
    </div>
  );
}

/* ─────────────────────── Sections ─────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-deep text-primary-foreground">
      {/* subtle emblem watermark */}
      <img
        src={publicAsset("emblem-syria.webp")}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 object-contain opacity-[0.05]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12.5px] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            بيان رسمي — تموز 2026
          </div>
          <h1 className="text-[36px] font-bold leading-[1.25] sm:text-[46px] lg:text-[54px]">
            بوابة المواطن الرقمية
            <br />
            <span className="text-gold">للمؤسسة السورية للتجارة</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[16.5px] leading-loose text-white/80">
            منصة حكومية موحّدة تُتيح للمواطن السوري الوصول إلى المنتجات المدعومة، والخدمات
            التموينية، وشبكة الفروع في المحافظات كافة، بواجهة عربية أصيلة وتجربة رقمية موثوقة.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-primary-deep transition-transform hover:-translate-y-0.5"
            >
              تصفّح المنتجات
              <Icon name="arrow_back" size={18} />
            </Link>
            <Link
              to="/branches"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Icon name="location_on" size={18} />
              أقرب فرع إليك
            </Link>
          </div>

          {/* trust bar */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
            {[
              ["230+", "فرع في المحافظات"],
              ["1.4M", "مواطن مستفيد شهريًا"],
              ["24/7", "خدمة إلكترونية"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-bold text-gold">{n}</div>
                <div className="mt-1 text-xs text-white/70">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcement card */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-[12.5px] font-medium text-gold">
                <Icon name="campaign" size={18} />
                إعلان المؤسسة
              </div>
              <span className="rounded-md bg-destructive/90 px-2 py-0.5 text-[11px] font-semibold text-white">
                جديد
              </span>
            </div>
            <h3 className="text-lg font-bold leading-relaxed !text-white">
              إطلاق الطلب الإلكتروني والتوصيل إلى المنازل في دمشق وريفها
            </h3>
            <p className="mt-3 text-sm leading-loose text-white/75">
              بدأت المؤسسة السورية للتجارة تفعيل الطلب الإلكتروني عبر البوابة الرسمية،
              مع خدمة توصيل مجاني للمواطنين ضمن مناطق محددة.
            </p>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="schedule" size={16} />
                نُشر منذ 3 ساعات
              </span>
              <a href="#" className="inline-flex items-center gap-1 text-gold hover:opacity-80">
                قراءة البيان
                <Icon name="arrow_back" size={14} />
              </a>
            </div>
          </div>

          {/* mini status */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
              <div className="text-[11px] uppercase tracking-wide text-white/60">حالة الشبكة</div>
              <div className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                تعمل بشكل طبيعي
              </div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
              <div className="text-[11px] uppercase tracking-wide text-white/60">آخر تحديث</div>
              <div className="mt-1 text-sm font-semibold">اليوم 09:14 صباحًا</div>
            </div>
          </div>
        </div>
      </div>
      {/* gold hairline */}
      <div className="h-[3px] bg-gold" />
    </section>
  );
}

function QuickServices() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHead
        eyebrow="خدمات سريعة"
        title="ما الذي تودّ إنجازه اليوم؟"
        subtitle="اختر الخدمة الحكومية المطلوبة للوصول إليها مباشرة."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {QUICK_SERVICES.map((s) => (
          <a
            key={s.title}
            href="#"
            className="card-gov card-gov-hover group flex items-center gap-4 p-5"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-surface-2 text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon name={s.icon} size={26} />
            </div>
            <div className="flex-1">
              <div className="text-[15.5px] font-semibold text-primary-deep">{s.title}</div>
              <div className="mt-0.5 text-[13px] text-muted-foreground">{s.desc}</div>
            </div>
            <Icon
              name="arrow_back"
              size={18}
              className="text-muted-foreground transition-transform group-hover:-translate-x-1 group-hover:text-primary"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

function OffersStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <div className="inline-flex items-center gap-2 font-semibold text-primary-deep">
            <Icon name="local_offer" size={20} className="text-gold" filled />
            العروض الحالية
          </div>
          <Ticker />
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    "خصم 15% على الأرز المصري لغاية 30 تموز",
    "توزيع السكر المدعوم في جميع فروع اللاذقية اليوم",
    "توفّر زيت دوار الشمس بسعر رسمي جديد",
    "بدء استقبال طلبات التوصيل المنزلي في ريف دمشق",
  ];
  return (
    <div className="flex flex-1 flex-wrap items-center gap-x-8 gap-y-2 text-muted-foreground">
      {items.map((t, i) => (
        <span key={i} className="inline-flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-gold" />
          {t}
        </span>
      ))}
    </div>
  );
}

function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <SectionHead
          eyebrow="منتجات مميّزة"
          title="سلع أساسية بأسعار رسمية"
          subtitle="منتجات مدعومة ومتوفّرة في شبكة صالات البيع للمؤسسة."
        />
        <Link
          to="/products"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-deep sm:inline-flex"
        >
          عرض الكل
          <Icon name="arrow_back" size={16} />
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: (typeof PRODUCTS)[number] }) {
  return (
    <article className="card-gov card-gov-hover group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundColor: p.swatch }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <Icon
            name="package_2"
            size={72}
            className="text-primary-deep/25"
          />
        </div>
        <div className="absolute right-3 top-3 flex flex-col items-end gap-1.5">
          <span
            className={
              "rounded-md px-2 py-0.5 text-[11px] font-semibold " +
              (p.tag === "عرض"
                ? "bg-destructive text-destructive-foreground"
                : p.tag === "جديد"
                ? "bg-primary text-primary-foreground"
                : "bg-gold text-primary-deep")
            }
          >
            {p.tag}
          </span>
          {!p.avail && (
            <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              غير متوفر حاليًا
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          <button
            className="grid h-8 w-8 place-items-center rounded-md border border-border bg-background/95 text-muted-foreground transition-colors hover:text-destructive"
            aria-label="حفظ"
          >
            <Icon name="favorite" size={16} />
          </button>
          <button
            className="grid h-8 w-8 place-items-center rounded-md border border-border bg-background/95 text-muted-foreground transition-colors hover:text-primary"
            aria-label="مشاركة"
          >
            <Icon name="share" size={16} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-[11.5px] font-medium uppercase tracking-wide text-muted-foreground">
          {p.cat}
        </div>
        <h3 className="mt-1 text-[15.5px] font-semibold text-primary-deep">{p.name}</h3>
        <div className="mt-0.5 text-xs text-muted-foreground">{p.unit}</div>
        <div className="mt-3 flex items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary-deep">{p.price}</span>
            <span className="text-[11.5px] text-muted-foreground">ل.س</span>
            {p.old && (
              <span className="text-xs text-muted-foreground line-through">{p.old}</span>
            )}
          </div>
          <span
            className={
              "inline-flex items-center gap-1 text-[11.5px] font-medium " +
              (p.avail ? "text-emerald-700" : "text-muted-foreground")
            }
          >
            <span
              className={"h-1.5 w-1.5 rounded-full " + (p.avail ? "bg-emerald-500" : "bg-muted-foreground/40")}
            />
            {p.avail ? "متوفر" : "نافد"}
          </span>
        </div>
      </div>
    </article>
  );
}

function Categories() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHead
          eyebrow="الأقسام"
          title="تصفّح المنتجات حسب الفئة"
          subtitle="فئات معتمدة لتنظيم عرض السلع الأساسية والاستهلاكية."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {CATEGORIES.map((c) => (
            <a
              key={c.title}
              href="#"
              className="card-gov card-gov-hover group flex flex-col items-center gap-3 p-6 text-center"
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold-soft text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={c.icon} size={28} />
              </div>
              <div>
                <div className="text-[14.5px] font-semibold text-primary-deep">{c.title}</div>
                <div className="mt-0.5 text-[12px] text-muted-foreground">{c.count} منتج</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BranchesMap() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHead
        eyebrow="شبكة الفروع"
        title="حضور في كل المحافظات السورية"
        subtitle="أكثر من 230 فرعًا موزّعة على جميع المحافظات، مع خدمات متكاملة للمواطن."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        {/* Stylized Syria map (SVG) */}
        <div className="card-gov relative overflow-hidden p-6 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary-deep">خريطة تفاعلية</div>
            <div className="flex items-center gap-3 text-[11.5px] text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-primary" /> عالي
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-gold" /> متوسط
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/40" /> منخفض
              </span>
            </div>
          </div>
          <SyriaMap />
        </div>

        <div className="lg:col-span-2">
          <div className="card-gov p-3">
            <div className="mb-2 px-3 pt-2 text-sm font-semibold text-primary-deep">
              الفروع حسب المحافظة
            </div>
            <ul className="max-h-[420px] divide-y divide-border overflow-auto">
              {BRANCHES.map((b) => (
                <li
                  key={b.gov}
                  className="flex cursor-pointer items-center justify-between px-3 py-3 transition-colors hover:bg-surface"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon name="location_on" size={18} className="text-gold" filled />
                    <span className="text-[14.5px] font-medium text-foreground">{b.gov}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-surface-2 px-2 py-0.5 text-[12px] font-semibold text-primary-deep">
                      {b.count}
                    </span>
                    <Icon name="chevron_left" size={18} className="text-muted-foreground" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SyriaMap() {
  // Stylized abstract map — not geographically precise; premium & minimal.
  const dots = [
    { x: 42, y: 60, r: 10, label: "دمشق", intensity: 1 },
    { x: 40, y: 52, r: 12, label: "ريف دمشق", intensity: 1 },
    { x: 50, y: 26, r: 11, label: "حلب", intensity: 1 },
    { x: 44, y: 40, r: 8, label: "حمص", intensity: 0.8 },
    { x: 45, y: 34, r: 7, label: "حماة", intensity: 0.8 },
    { x: 22, y: 40, r: 7, label: "اللاذقية", intensity: 0.7 },
    { x: 20, y: 46, r: 6, label: "طرطوس", intensity: 0.7 },
    { x: 74, y: 40, r: 6, label: "دير الزور", intensity: 0.5 },
    { x: 82, y: 30, r: 6, label: "الحسكة", intensity: 0.5 },
    { x: 66, y: 30, r: 6, label: "الرقة", intensity: 0.5 },
    { x: 60, y: 26, r: 6, label: "إدلب", intensity: 0.6 },
    { x: 50, y: 70, r: 5, label: "درعا", intensity: 0.5 },
    { x: 56, y: 68, r: 4, label: "السويداء", intensity: 0.4 },
    { x: 38, y: 72, r: 3, label: "القنيطرة", intensity: 0.3 },
  ];
  return (
    <div className="relative">
      <svg viewBox="0 0 100 80" className="h-auto w-full" role="img" aria-label="خريطة سوريا">
        <defs>
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M4 0H0V4" fill="none" stroke="currentColor" strokeWidth="0.15" className="text-border" />
          </pattern>
        </defs>
        <rect width="100" height="80" fill="url(#grid)" />
        {/* Approx Syria silhouette */}
        <path
          d="M12,44 L18,32 L26,22 L38,16 L52,14 L64,18 L78,22 L88,28 L92,36 L86,44 L80,48 L74,52 L68,58 L62,64 L54,74 L44,76 L36,72 L28,66 L22,58 L16,52 Z"
          fill="var(--color-surface-2)"
          stroke="var(--color-primary)"
          strokeOpacity="0.35"
          strokeWidth="0.4"
        />
        {dots.map((d) => (
          <g key={d.label}>
            <circle
              cx={d.x}
              cy={d.y}
              r={d.r / 4 + 1.4}
              fill={d.intensity > 0.7 ? "var(--color-primary)" : d.intensity > 0.4 ? "var(--color-gold)" : "var(--color-muted-foreground)"}
              opacity="0.9"
            />
            <text
              x={d.x}
              y={d.y - 2.4}
              fontSize="2.1"
              textAnchor="middle"
              fill="var(--color-primary-deep)"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
            >
              {d.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function Statistics() {
  const stats = [
    { icon: "storefront", value: "234", label: "فرع فعّال", sub: "في 14 محافظة" },
    { icon: "inventory_2", value: "1,280+", label: "منتج مدرج", sub: "متجدّد أسبوعيًا" },
    { icon: "groups", value: "1.4M", label: "مواطن مستفيد", sub: "شهريًا" },
    { icon: "verified_user", value: "42", label: "سنة خبرة", sub: "منذ 1984" },
  ];
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-white/[0.08] text-gold">
                <Icon name={s.icon} size={26} />
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">{s.value}</div>
                <div className="mt-1 text-sm font-medium !text-white">{s.label}</div>
                <div className="mt-0.5 text-xs text-white/60">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestNews() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <SectionHead
          eyebrow="غرفة الأخبار"
          title="آخر أخبار المؤسسة"
          subtitle="بيانات رسمية وتغطية لأنشطة المؤسسة السورية للتجارة."
        />
        <Link
          to="/news"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-deep sm:inline-flex"
        >
          كل الأخبار
          <Icon name="arrow_back" size={16} />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {NEWS.map((n, i) => (
          <article
            key={n.title}
            className={
              "card-gov card-gov-hover group flex flex-col overflow-hidden " +
              (i === 0 ? "lg:col-span-2 lg:row-span-1" : "")
            }
          >
            <div
              className={
                "relative flex items-end overflow-hidden bg-primary-deep p-6 text-primary-foreground " +
                (i === 0 ? "aspect-[16/8]" : "aspect-[16/9]")
              }
            >
              <img
                src={publicAsset("emblem-syria.webp")}
                alt=""
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 object-contain opacity-[0.07]"
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11.5px] font-medium text-gold">
                  {n.cat}
                </div>
                <h3
                  className={
                    "mt-3 font-bold leading-relaxed !text-white " +
                    (i === 0 ? "text-2xl" : "text-lg")
                  }
                >
                  {n.title}
                </h3>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-sm leading-loose text-muted-foreground">{n.excerpt}</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="event" size={14} />
                  {n.date}
                </span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary-deep"
                >
                  اقرأ المزيد
                  <Icon name="arrow_back" size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MobileApp() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="card-gov relative overflow-hidden bg-primary-deep p-10 text-primary-foreground lg:p-14">
        <img
          src={publicAsset("emblem-syria.webp")}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-96 w-96 object-contain opacity-[0.05]"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-[12.5px] font-medium text-gold">
              <Icon name="smartphone" size={18} />
              التطبيق الرسمي
            </div>
            <h2 className="text-3xl font-bold !text-white lg:text-4xl">
              المؤسسة السورية للتجارة — الآن في جيبك
            </h2>
            <p className="mt-4 max-w-lg leading-loose text-white/75">
              حمّل التطبيق الرسمي للوصول إلى المنتجات المدعومة، متابعة العروض، وطلب التوصيل
              المنزلي من أقرب فرع.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-lg border border-white/25 bg-white/5 px-5 py-3 transition-colors hover:bg-white/10"
              >
                <Icon name="apple" size={26} className="text-gold" />
                <div className="text-right leading-tight">
                  <div className="text-[11px] text-white/70">حمّل من</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-lg border border-white/25 bg-white/5 px-5 py-3 transition-colors hover:bg-white/10"
              >
                <Icon name="android" size={26} className="text-gold" />
                <div className="text-right leading-tight">
                  <div className="text-[11px] text-white/70">حمّل من</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="mx-auto grid h-72 w-40 place-items-center rounded-[32px] border border-white/20 bg-white/5">
              <div className="grid h-64 w-32 place-items-center rounded-2xl bg-white/5">
                <img src={publicAsset("emblem-syria.webp")} alt="" className="h-16 w-16 opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    "وزارة الاقتصاد",
    "وزارة الصناعة",
    "المؤسسة العامة للحبوب",
    "الغرفة التجارية",
    "شركة الاتصالات السورية",
    "الجمارك السورية",
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHead
        eyebrow="شركاؤنا"
        title="بالتعاون مع مؤسسات الدولة"
        subtitle="نعمل ضمن منظومة حكومية متكاملة لخدمة المواطن السوري."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {partners.map((p) => (
          <div
            key={p}
            className="card-gov flex h-24 items-center justify-center p-4 text-center text-[13px] font-medium text-muted-foreground"
          >
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "كيف يمكنني الاطلاع على قائمة الأسعار الرسمية للمواد المدعومة؟",
      a: "تُنشر قائمة الأسعار الرسمية بشكل شهري في قسم الأخبار، ويمكن الاطلاع عليها أيضًا في كل فرع من فروع المؤسسة.",
    },
    {
      q: "ما هي مواعيد عمل الفروع في المحافظات؟",
      a: "تعمل معظم الفروع من الأحد حتى الخميس بين الساعة 08:00 و16:00، مع اختلاف بسيط في بعض المحافظات.",
    },
    {
      q: "هل تتوفر خدمة التوصيل المنزلي؟",
      a: "تتوفر الخدمة حاليًا في دمشق وريفها ضمن مناطق محددة، ويجري توسيعها تدريجيًا إلى بقية المحافظات.",
    },
    {
      q: "كيف يمكنني تقديم شكوى أو اقتراح؟",
      a: "عبر صفحة الشكاوى والمقترحات في البوابة، أو الاتصال بالخط الساخن 137 على مدار الساعة.",
    },
  ];
  return (
    <section id="faq" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHead
          eyebrow="الأسئلة الشائعة"
          title="إجابات لأكثر الاستفسارات تكرارًا"
        />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-xl border border-border bg-background">
          {items.map((it, i) => (
            <details key={i} className="group px-5 py-4 open:bg-surface-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-primary-deep">
                {it.q}
                <Icon
                  name="add"
                  size={22}
                  className="text-muted-foreground transition-transform group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 pr-1 text-[14px] leading-loose text-muted-foreground">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Bits ─────────────────────── */

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-wide text-gold">
        <span className="h-px w-6 bg-gold" />
        {eyebrow}
      </div>
      <h2 className="mt-3 text-[28px] font-bold leading-tight text-primary-deep sm:text-[34px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[15px] leading-loose text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
