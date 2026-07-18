import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gov/Header";
import { Footer } from "@/components/gov/Footer";
import { Icon } from "@/components/gov/Icon";
import { PageHead } from "@/components/gov/PageHead";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "الفروع — المؤسسة السورية للتجارة" },
      {
        name: "description",
        content:
          "دليل فروع المؤسسة السورية للتجارة في جميع المحافظات السورية مع أوقات العمل والخدمات المتاحة والاتصال.",
      },
    ],
  }),
  component: BranchesPage,
});

const BRANCHES = [
  { name: "فرع دمشق — المزة", gov: "دمشق", phone: "011-6612345", hours: "08:00 — 16:00", services: ["مواد تموينية", "توصيل منزلي", "بطاقة العائلة"] },
  { name: "فرع دمشق — الميدان", gov: "دمشق", phone: "011-8823411", hours: "08:00 — 16:00", services: ["مواد تموينية", "منظفات"] },
  { name: "فرع ريف دمشق — دوما", gov: "ريف دمشق", phone: "011-5540122", hours: "08:00 — 15:00", services: ["مواد تموينية", "توصيل"] },
  { name: "فرع حلب المركزي", gov: "حلب", phone: "021-2231455", hours: "08:00 — 16:30", services: ["مواد تموينية", "منتجات موسمية"] },
  { name: "فرع حمص — الوعر", gov: "حمص", phone: "031-4415322", hours: "08:00 — 16:00", services: ["مواد تموينية", "بطاقة العائلة"] },
  { name: "فرع اللاذقية — الشاطئ الأزرق", gov: "اللاذقية", phone: "041-2233114", hours: "08:00 — 17:00", services: ["مواد تموينية", "منتجات بحرية"] },
  { name: "فرع طرطوس المركزي", gov: "طرطوس", phone: "043-8812200", hours: "08:00 — 16:00", services: ["مواد تموينية"] },
  { name: "فرع حماة — العاصي", gov: "حماة", phone: "033-2278890", hours: "08:00 — 16:00", services: ["مواد تموينية", "منظفات"] },
  { name: "فرع درعا المركزي", gov: "درعا", phone: "015-2213340", hours: "08:00 — 15:30", services: ["مواد تموينية"] },
  { name: "فرع السويداء", gov: "السويداء", phone: "016-2245591", hours: "08:00 — 15:00", services: ["مواد تموينية"] },
];

function BranchesPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <PageHead
        eyebrow="شبكة الفروع"
        title="فروع المؤسسة في المحافظات"
        subtitle="ابحث عن أقرب فرع، اعرف مواعيد العمل والخدمات المتاحة، واحصل على الاتجاهات."
        crumbs={[{ label: "الرئيسية", to: "/" }, { label: "الفروع" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {/* Search bar */}
        <div className="card-gov flex flex-wrap items-center gap-3 p-4">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2.5">
            <Icon name="search" size={20} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="ابحث باسم الفرع أو المدينة…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <select className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm">
            <option>كل المحافظات</option>
            <option>دمشق</option>
            <option>ريف دمشق</option>
            <option>حلب</option>
            <option>حمص</option>
            <option>اللاذقية</option>
          </select>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
            <Icon name="filter_alt" size={18} />
            بحث
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="card-gov overflow-hidden lg:col-span-7">
            <div className="border-b border-border bg-surface px-5 py-3 text-sm font-semibold text-primary-deep">
              الخريطة التفاعلية
            </div>
            <div className="relative aspect-[4/3] bg-surface-2 p-6">
              <SyriaBigMap />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold text-primary-deep">قائمة الفروع</div>
              <div className="text-xs text-muted-foreground">{BRANCHES.length} فرع</div>
            </div>
            <div className="space-y-3">
              {BRANCHES.map((b) => (
                <article key={b.name} className="card-gov card-gov-hover p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11.5px] font-medium uppercase tracking-wide text-gold">
                        {b.gov}
                      </div>
                      <h3 className="mt-1 text-[15.5px] font-semibold text-primary-deep">{b.name}</h3>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11.5px] font-medium text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> مفتوح الآن
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-y-2 text-[13px] text-muted-foreground">
                    <div className="inline-flex items-center gap-1.5">
                      <Icon name="schedule" size={16} />
                      {b.hours}
                    </div>
                    <div className="inline-flex items-center gap-1.5">
                      <Icon name="call" size={16} />
                      {b.phone}
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {b.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-surface-2 px-2 py-1 text-[11.5px] text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2 border-t border-border pt-4">
                    <a
                      href="#"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2 text-[13px] font-medium text-primary-foreground hover:bg-primary-deep"
                    >
                      <Icon name="directions" size={16} />
                      الاتجاهات
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border px-3 py-2 text-[13px] font-medium text-foreground hover:bg-surface"
                    >
                      <Icon name="info" size={16} />
                      التفاصيل
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function SyriaBigMap() {
  const dots = [
    { x: 42, y: 60, r: 3.5, label: "دمشق" },
    { x: 40, y: 52, r: 3.8, label: "ريف دمشق" },
    { x: 50, y: 26, r: 3.6, label: "حلب" },
    { x: 44, y: 40, r: 3, label: "حمص" },
    { x: 45, y: 34, r: 2.8, label: "حماة" },
    { x: 22, y: 40, r: 2.8, label: "اللاذقية" },
    { x: 20, y: 46, r: 2.5, label: "طرطوس" },
    { x: 74, y: 40, r: 2.5, label: "دير الزور" },
    { x: 82, y: 30, r: 2.5, label: "الحسكة" },
    { x: 66, y: 30, r: 2.5, label: "الرقة" },
    { x: 60, y: 26, r: 2.5, label: "إدلب" },
    { x: 50, y: 70, r: 2.3, label: "درعا" },
    { x: 56, y: 68, r: 2, label: "السويداء" },
    { x: 38, y: 72, r: 1.8, label: "القنيطرة" },
  ];
  return (
    <svg viewBox="0 0 100 80" className="h-full w-full" role="img" aria-label="خريطة تفاعلية">
      <path
        d="M12,44 L18,32 L26,22 L38,16 L52,14 L64,18 L78,22 L88,28 L92,36 L86,44 L80,48 L74,52 L68,58 L62,64 L54,74 L44,76 L36,72 L28,66 L22,58 L16,52 Z"
        fill="var(--color-background)"
        stroke="var(--color-primary)"
        strokeOpacity="0.35"
        strokeWidth="0.35"
      />
      {dots.map((d) => (
        <g key={d.label}>
          <circle cx={d.x} cy={d.y} r={d.r + 1.6} fill="var(--color-gold)" opacity="0.18" />
          <circle cx={d.x} cy={d.y} r={d.r} fill="var(--color-primary)" />
          <text
            x={d.x}
            y={d.y - d.r - 1.2}
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
  );
}
