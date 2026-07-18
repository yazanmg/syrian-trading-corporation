import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gov/Header";
import { Footer } from "@/components/gov/Footer";
import { Icon } from "@/components/gov/Icon";
import { PageHead } from "@/components/gov/PageHead";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "المنتجات — المؤسسة السورية للتجارة" },
      {
        name: "description",
        content:
          "دليل شامل بالمنتجات والسلع الأساسية المدعومة والمتوفرة في المؤسسة السورية للتجارة، مع الأسعار الرسمية والمخزون في كل فرع.",
      },
    ],
  }),
  component: ProductsPage,
});

const CATS = [
  ["الكل", 386],
  ["مواد غذائية", 148],
  ["زيوت وسمون", 32],
  ["مشروبات وألبان", 64],
  ["منظفات وعناية", 41],
  ["منتجات الأطفال", 23],
  ["منتجات موسمية", 18],
] as const;

const ITEMS = [
  { name: "سكر أبيض ناعم", unit: "1 كغ", price: "3,500", old: "4,200", tag: "مدعوم", avail: true, cat: "مواد غذائية" },
  { name: "أرز مصري ممتاز", unit: "5 كغ", price: "26,000", old: "29,500", tag: "عرض", avail: true, cat: "حبوب" },
  { name: "زيت دوار الشمس", unit: "1 لتر", price: "12,900", old: null, tag: "جديد", avail: true, cat: "زيوت" },
  { name: "شاي أسود سيلاني", unit: "450 غ", price: "8,750", old: null, tag: "مدعوم", avail: false, cat: "مشروبات" },
  { name: "معكرونة سباغيتي", unit: "500 غ", price: "2,400", old: null, tag: "مدعوم", avail: true, cat: "مواد غذائية" },
  { name: "طحين قمح فاخر", unit: "1 كغ", price: "2,150", old: "2,600", tag: "عرض", avail: true, cat: "مواد غذائية" },
  { name: "برغل خشن", unit: "1 كغ", price: "5,800", old: null, tag: "مدعوم", avail: true, cat: "حبوب" },
  { name: "عدس أحمر", unit: "1 كغ", price: "9,400", old: null, tag: "مدعوم", avail: true, cat: "حبوب" },
  { name: "زيت زيتون بكر", unit: "1 لتر", price: "48,000", old: "52,000", tag: "عرض", avail: true, cat: "زيوت" },
  { name: "حليب مبستر", unit: "1 لتر", price: "6,200", old: null, tag: "جديد", avail: true, cat: "ألبان" },
  { name: "لبنة بلدية", unit: "500 غ", price: "14,500", old: null, tag: "مدعوم", avail: false, cat: "ألبان" },
  { name: "صابون غار حلبي", unit: "قطعة 200 غ", price: "7,900", old: null, tag: "مميّز", avail: true, cat: "منظفات" },
];

const SWATCHES = [
  "oklch(0.94 0.02 90)",
  "oklch(0.95 0.015 80)",
  "oklch(0.92 0.09 95)",
  "oklch(0.9 0.03 150)",
  "oklch(0.94 0.025 70)",
  "oklch(0.93 0.02 40)",
];

function ProductsPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <PageHead
        eyebrow="كتالوج المنتجات"
        title="المنتجات المتوفرة"
        subtitle="تصفّح جميع السلع المدعومة والاستهلاكية بأسعار رسمية معتمدة."
        crumbs={[{ label: "الرئيسية", to: "/" }, { label: "المنتجات" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="card-gov p-5">
              <div className="mb-3 text-sm font-semibold text-primary-deep">التصنيفات</div>
              <ul className="space-y-1">
                {CATS.map(([c, n], i) => (
                  <li key={c}>
                    <button
                      className={
                        "flex w-full items-center justify-between rounded-md px-3 py-2 text-[13.5px] transition-colors " +
                        (i === 0
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-surface-2")
                      }
                    >
                      <span>{c}</span>
                      <span className={"text-[11.5px] " + (i === 0 ? "opacity-80" : "text-muted-foreground")}>
                        {n}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-gov mt-4 p-5">
              <div className="mb-3 text-sm font-semibold text-primary-deep">التوفّر</div>
              {["الكل", "متوفر حاليًا", "غير متوفر"].map((o, i) => (
                <label key={o} className="flex cursor-pointer items-center gap-2 py-1.5 text-[13.5px]">
                  <input type="radio" name="avail" defaultChecked={i === 0} className="accent-primary" />
                  {o}
                </label>
              ))}
            </div>

            <div className="card-gov mt-4 p-5">
              <div className="mb-3 text-sm font-semibold text-primary-deep">المحافظة</div>
              <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-[13.5px]">
                <option>جميع المحافظات</option>
                <option>دمشق</option>
                <option>حلب</option>
                <option>حمص</option>
                <option>اللاذقية</option>
              </select>
            </div>
          </aside>

          {/* Grid */}
          <div className="lg:col-span-9">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3">
              <div className="text-sm text-muted-foreground">
                عرض <span className="font-semibold text-foreground">{ITEMS.length}</span> منتج من أصل{" "}
                <span className="font-semibold text-foreground">386</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <label className="text-muted-foreground">ترتيب حسب:</label>
                <select className="rounded-md border border-border bg-background px-3 py-1.5 text-[13.5px]">
                  <option>الأحدث</option>
                  <option>السعر: من الأقل</option>
                  <option>السعر: من الأعلى</option>
                  <option>الأكثر طلبًا</option>
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ITEMS.map((p, idx) => (
                <article key={p.name} className="card-gov card-gov-hover group overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundColor: SWATCHES[idx % SWATCHES.length] }}
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <Icon name="package_2" size={64} className="text-primary-deep/25" />
                    </div>
                    <span
                      className={
                        "absolute right-3 top-3 rounded-md px-2 py-0.5 text-[11px] font-semibold " +
                        (p.tag === "عرض"
                          ? "bg-destructive text-destructive-foreground"
                          : p.tag === "جديد"
                          ? "bg-primary text-primary-foreground"
                          : "bg-gold text-primary-deep")
                      }
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="text-[11.5px] font-medium uppercase tracking-wide text-muted-foreground">
                      {p.cat}
                    </div>
                    <h3 className="mt-1 text-[15px] font-semibold text-primary-deep">{p.name}</h3>
                    <div className="mt-0.5 text-xs text-muted-foreground">{p.unit}</div>
                    <div className="mt-3 flex items-baseline justify-between">
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
                          className={
                            "h-1.5 w-1.5 rounded-full " +
                            (p.avail ? "bg-emerald-500" : "bg-muted-foreground/40")
                          }
                        />
                        {p.avail ? "متوفر" : "نافد"}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-1">
              {["chevron_right", "1", "2", "3", "…", "12", "chevron_left"].map((p, i) => (
                <button
                  key={i}
                  className={
                    "grid h-10 min-w-10 place-items-center rounded-md border px-3 text-sm transition-colors " +
                    (p === "2"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:bg-surface")
                  }
                >
                  {p.length > 2 ? <Icon name={p} size={18} /> : p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
