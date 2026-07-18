import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gov/Header";
import { Footer } from "@/components/gov/Footer";
import { Icon } from "@/components/gov/Icon";
import { PageHead } from "@/components/gov/PageHead";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "اتصل بنا — المؤسسة السورية للتجارة" },
      {
        name: "description",
        content: "قنوات التواصل الرسمية مع المؤسسة السورية للتجارة: العناوين، الأرقام، البريد، وساعات العمل.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <PageHead
        eyebrow="اتصل بنا"
        title="قنوات التواصل الرسمية"
        subtitle="فريقنا جاهز للرد على استفساراتك ومساعدتك في الوصول إلى الخدمة المناسبة."
        crumbs={[{ label: "الرئيسية", to: "/" }, { label: "اتصل بنا" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "call", title: "الخط الساخن", value: "137", sub: "24 ساعة، مجاني" },
            { icon: "mail", title: "البريد الرسمي", value: "info@syrian-trade.gov.sy", sub: "رد خلال يومي عمل" },
            { icon: "location_on", title: "العنوان", value: "دمشق — شارع بغداد", sub: "الإدارة العامة" },
            { icon: "schedule", title: "أوقات الدوام", value: "الأحد — الخميس", sub: "08:00 — 16:00" },
          ].map((c) => (
            <div key={c.title} className="card-gov card-gov-hover p-6">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold-soft text-primary-deep">
                <Icon name={c.icon} size={22} />
              </div>
              <div className="mt-4 text-[12px] font-medium uppercase tracking-wide text-muted-foreground">
                {c.title}
              </div>
              <div className="mt-1 text-[15px] font-bold text-primary-deep">{c.value}</div>
              <div className="mt-1 text-[12.5px] text-muted-foreground">{c.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="card-gov p-8 lg:col-span-3">
            <h2 className="text-2xl font-bold text-primary-deep">أرسل لنا رسالة</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              سنعاود التواصل معك في أقرب وقت ممكن.
            </p>
            <form className="mt-6 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="الاسم">
                  <input className="input-gov" placeholder="الاسم الكامل" />
                </Field>
                <Field label="البريد الإلكتروني">
                  <input className="input-gov" placeholder="name@example.com" />
                </Field>
              </div>
              <Field label="الموضوع">
                <input className="input-gov" placeholder="موضوع الرسالة" />
              </Field>
              <Field label="الرسالة">
                <textarea rows={6} className="input-gov leading-loose" placeholder="اكتب رسالتك هنا…" />
              </Field>
              <button className="w-fit rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
                إرسال الرسالة
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="card-gov overflow-hidden">
              <div className="aspect-[4/3] bg-surface-2 p-4">
                <svg viewBox="0 0 100 80" className="h-full w-full">
                  <rect x="10" y="20" width="80" height="45" rx="2" fill="var(--color-surface)" stroke="var(--color-primary)" strokeWidth="0.3" />
                  {[0, 1, 2].map((r) =>
                    [0, 1, 2, 3].map((c) => (
                      <rect
                        key={`${r}-${c}`}
                        x={12 + c * 19}
                        y={22 + r * 15}
                        width="17"
                        height="13"
                        fill="var(--color-surface-2)"
                      />
                    ))
                  )}
                  <circle cx="50" cy="42" r="3" fill="var(--color-destructive)" />
                  <text x="50" y="72" textAnchor="middle" fontSize="3" fill="var(--color-primary-deep)" style={{ fontWeight: 600 }}>
                    الإدارة العامة — دمشق
                  </text>
                </svg>
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold text-primary-deep">الإدارة العامة</div>
                <div className="mt-1 text-[13px] text-muted-foreground">
                  دمشق، شارع بغداد، مبنى المؤسسة، الطابق الثاني.
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-deep"
                >
                  <Icon name="directions" size={16} />
                  فتح في الخرائط
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}
