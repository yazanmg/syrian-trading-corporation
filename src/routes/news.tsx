import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gov/Header";
import { Footer } from "@/components/gov/Footer";
import { Icon } from "@/components/gov/Icon";
import { PageHead } from "@/components/gov/PageHead";
import { publicAsset } from "@/lib/assets";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "الأخبار — المؤسسة السورية للتجارة" },
      {
        name: "description",
        content: "أحدث أخبار وبيانات المؤسسة السورية للتجارة، تحديثات الأسعار، الفعاليات، والإعلانات الرسمية.",
      },
    ],
  }),
  component: NewsPage,
});

const CATS = ["الكل", "إعلان رسمي", "أسعار", "خدمات", "فعاليات", "توظيف"];
const NEWS = [
  { date: "18 تموز 2026", cat: "إعلان رسمي", title: "افتتاح صالة المؤسسة الجديدة في حلب لخدمة أكثر من 40 ألف عائلة", excerpt: "أعلنت المؤسسة السورية للتجارة عن افتتاح صالتها الجديدة في مدينة حلب ضمن خطة التوسع." },
  { date: "12 تموز 2026", cat: "أسعار", title: "تحديث قائمة الأسعار الرسمية للمواد التموينية لشهر تموز", excerpt: "نشرت المؤسسة القائمة المحدّثة للأسعار الرسمية للمواد المدعومة والمتوفرة." },
  { date: "05 تموز 2026", cat: "خدمات", title: "إطلاق خدمة الطلب الإلكتروني والتوصيل إلى المنازل في دمشق", excerpt: "بالتعاون مع وزارة الاتصالات تُطلق المؤسسة خدمة الطلب عبر البوابة الرقمية." },
  { date: "28 حزيران 2026", cat: "فعاليات", title: "مشاركة المؤسسة في معرض دمشق الدولي بجناح رسمي", excerpt: "استعرضت المؤسسة أحدث خدماتها الرقمية ومنتجاتها الوطنية خلال المعرض." },
  { date: "20 حزيران 2026", cat: "توظيف", title: "الإعلان عن مسابقة توظيف لعدد من الفروع في المحافظات", excerpt: "أطلقت المؤسسة مسابقة توظيف لعدد من الاختصاصات الإدارية والفنية في فروعها." },
  { date: "14 حزيران 2026", cat: "أسعار", title: "قرار جديد بخفض أسعار السلع الأساسية بنسبة تصل إلى 12%", excerpt: "أصدرت المؤسسة قرارًا بخفض أسعار عدد من المواد الأساسية استجابةً لتوجيهات الوزارة." },
];

function NewsPage() {
  const [featured, ...rest] = NEWS;
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <PageHead
        eyebrow="غرفة الأخبار"
        title="أخبار وبيانات المؤسسة"
        subtitle="تغطية رسمية وشاملة لأنشطة وقرارات وإعلانات المؤسسة السورية للتجارة."
        crumbs={[{ label: "الرئيسية", to: "/" }, { label: "الأخبار" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {/* Toolbar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {CATS.map((c, i) => (
              <button
                key={c}
                className={
                  "rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors " +
                  (i === 0
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:bg-surface")
                }
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
            <Icon name="search" size={18} className="text-muted-foreground" />
            <input
              placeholder="ابحث في الأخبار…"
              className="w-56 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Featured */}
        <article className="card-gov card-gov-hover mb-8 grid overflow-hidden lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden bg-primary-deep p-8 text-primary-foreground">
            <img
              src={publicAsset("emblem-syria.webp")}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 object-contain opacity-[0.08]"
            />
            <div className="relative flex h-full flex-col justify-end">
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gold px-3 py-1 text-[11.5px] font-semibold text-primary-deep">
                مميّز
              </span>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
              <span className="rounded-md bg-gold-soft px-2 py-0.5 font-semibold text-primary-deep">
                {featured.cat}
              </span>
              <span className="inline-flex items-center gap-1">
                <Icon name="event" size={14} />
                {featured.date}
              </span>
            </div>
            <h2 className="mt-3 text-[26px] font-bold leading-snug text-primary-deep">
              {featured.title}
            </h2>
            <p className="mt-4 leading-loose text-muted-foreground">{featured.excerpt}</p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-deep"
            >
              قراءة البيان الكامل
              <Icon name="arrow_back" size={16} />
            </a>
          </div>
        </article>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((n) => (
            <article key={n.title} className="card-gov card-gov-hover flex flex-col overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
                <div className="absolute inset-0 grid place-items-center">
                  <Icon name="newspaper" size={52} className="text-primary/30" />
                </div>
                <span className="absolute right-3 top-3 rounded-md bg-background/90 px-2 py-0.5 text-[11.5px] font-semibold text-primary-deep">
                  {n.cat}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-[11.5px] text-muted-foreground">{n.date}</div>
                <h3 className="mt-1.5 text-[16px] font-semibold leading-snug text-primary-deep">
                  {n.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-loose text-muted-foreground">
                  {n.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-deep"
                >
                  اقرأ المزيد
                  <Icon name="arrow_back" size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
