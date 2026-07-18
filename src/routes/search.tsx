import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gov/Header";
import { Footer } from "@/components/gov/Footer";
import { Icon } from "@/components/gov/Icon";
import { PageHead } from "@/components/gov/PageHead";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "البحث — المؤسسة السورية للتجارة" },
      { name: "description", content: "ابحث في محتوى بوابة المؤسسة السورية للتجارة: منتجات، أخبار، فروع، وخدمات." },
    ],
  }),
  component: SearchPage,
});

const RESULTS = [
  { type: "منتج", icon: "package_2", title: "سكر أبيض ناعم — كيس 1 كغ", desc: "منتج مدعوم بسعر رسمي 3,500 ل.س، متوفر في 92 فرعًا." },
  { type: "خبر", icon: "newspaper", title: "افتتاح صالة المؤسسة الجديدة في حلب", desc: "أعلنت المؤسسة عن افتتاح صالتها الجديدة في مدينة حلب لخدمة العائلات." },
  { type: "فرع", icon: "storefront", title: "فرع دمشق — المزة", desc: "أوقات العمل: 08:00 — 16:00 — الهاتف: 011-6612345." },
  { type: "خدمة", icon: "receipt_long", title: "بطاقة العائلة — إدارة البيانات", desc: "خدمة إلكترونية لتحديث بيانات المستفيدين من الدعم." },
  { type: "منتج", icon: "package_2", title: "أرز مصري ممتاز — كيس 5 كغ", desc: "خصم حالي بسعر عرض 26,000 ل.س بدلًا من 29,500 ل.س." },
  { type: "خبر", icon: "newspaper", title: "تحديث قائمة الأسعار الرسمية لشهر تموز", desc: "نشرت المؤسسة القائمة المحدّثة للأسعار للمواد التموينية." },
];

const TABS = [
  ["الكل", 128],
  ["منتجات", 76],
  ["أخبار", 24],
  ["فروع", 18],
  ["خدمات", 10],
] as const;

function SearchPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <PageHead
        eyebrow="البحث"
        title="ابحث في البوابة"
        subtitle="محرك بحث موحّد يشمل المنتجات، الأخبار، الفروع، وخدمات المواطن."
        crumbs={[{ label: "الرئيسية", to: "/" }, { label: "البحث" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="card-gov flex items-center gap-3 p-3">
          <div className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground">
            <Icon name="search" size={22} />
          </div>
          <input
            defaultValue="سكر مدعوم"
            className="flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
            placeholder="اكتب كلمة البحث…"
          />
          <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
            بحث
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-[12.5px] text-muted-foreground">
          <span>اقتراحات:</span>
          {["الأرز المصري", "قائمة الأسعار", "أقرب فرع", "بطاقة العائلة", "زيت دوار الشمس"].map((s) => (
            <button
              key={s}
              className="rounded-full border border-border bg-surface px-3 py-1 text-[12.5px] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-1 border-b border-border">
          {TABS.map(([label, count], i) => (
            <button
              key={label}
              className={
                "-mb-px flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors " +
                (i === 0
                  ? "border-primary text-primary-deep"
                  : "border-transparent text-muted-foreground hover:text-foreground")
              }
            >
              {label}
              <span
                className={
                  "rounded-md px-1.5 py-0.5 text-[11px] " +
                  (i === 0 ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground")
                }
              >
                {count}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4 text-[13px] text-muted-foreground">
          حوالي <span className="font-semibold text-foreground">128</span> نتيجة عن{" "}
          <span className="font-semibold text-foreground">"سكر مدعوم"</span> — 0.24 ثانية
        </div>

        <ul className="mt-6 space-y-4">
          {RESULTS.map((r, i) => (
            <li key={i} className="card-gov card-gov-hover flex gap-4 p-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gold-soft text-primary-deep">
                <Icon name={r.icon} size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                    {r.type}
                  </span>
                  <span>syrian-trade.gov.sy › {r.type}</span>
                </div>
                <a href="#" className="mt-1.5 block text-[16px] font-semibold text-primary hover:underline">
                  {r.title}
                </a>
                <p className="mt-1 text-[13.5px] leading-loose text-muted-foreground">{r.desc}</p>
              </div>
              <Icon name="arrow_back" size={20} className="mt-1 text-muted-foreground" />
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
}
