import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gov/Header";
import { Footer } from "@/components/gov/Footer";
import { Icon } from "@/components/gov/Icon";
import { PageHead } from "@/components/gov/PageHead";

export const Route = createFileRoute("/complaints")({
  head: () => ({
    meta: [
      { title: "الشكاوى والمقترحات — المؤسسة السورية للتجارة" },
      {
        name: "description",
        content: "قدّم شكواك أو اقتراحك بشكل رسمي وسري إلى المؤسسة السورية للتجارة، وتابع حالة طلبك.",
      },
    ],
  }),
  component: ComplaintsPage,
});

function ComplaintsPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <PageHead
        eyebrow="خدمات المواطن"
        title="الشكاوى والمقترحات"
        subtitle="نلتزم بمعالجة كل شكوى بشفافية خلال 72 ساعة عمل. جميع المعلومات المرسلة سرّية."
        crumbs={[{ label: "الرئيسية", to: "/" }, { label: "الشكاوى" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="card-gov p-8">
              {/* Stepper */}
              <div className="mb-8 flex items-center justify-between">
                {["نوع الطلب", "التفاصيل", "الإرسال"].map((s, i) => (
                  <div key={s} className="flex flex-1 items-center gap-3">
                    <div
                      className={
                        "grid h-8 w-8 place-items-center rounded-full text-[13px] font-bold " +
                        (i === 0
                          ? "bg-primary text-primary-foreground"
                          : "bg-surface-2 text-muted-foreground")
                      }
                    >
                      {i + 1}
                    </div>
                    <div className="text-[13px] font-medium text-foreground">{s}</div>
                    {i < 2 && <div className="ml-2 h-px flex-1 bg-border" />}
                  </div>
                ))}
              </div>

              <form className="grid gap-5">
                <Field label="نوع الطلب" required>
                  <select className="input-gov">
                    <option>شكوى على منتج</option>
                    <option>شكوى على خدمة</option>
                    <option>اقتراح لتحسين الخدمة</option>
                    <option>استفسار عام</option>
                  </select>
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="الاسم الكامل" required>
                    <input className="input-gov" placeholder="مثال: أحمد محمد الحسن" />
                  </Field>
                  <Field label="الرقم الوطني" required>
                    <input className="input-gov" placeholder="XX-XXXXX-XXXX" />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="رقم الهاتف" required>
                    <input className="input-gov" placeholder="+963 9XX XXX XXX" />
                  </Field>
                  <Field label="البريد الإلكتروني">
                    <input className="input-gov" placeholder="name@example.com" />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="المحافظة" required>
                    <select className="input-gov">
                      <option>دمشق</option>
                      <option>ريف دمشق</option>
                      <option>حلب</option>
                      <option>حمص</option>
                      <option>اللاذقية</option>
                    </select>
                  </Field>
                  <Field label="الفرع المعني">
                    <select className="input-gov">
                      <option>غير محدد</option>
                      <option>فرع دمشق — المزة</option>
                      <option>فرع دمشق — الميدان</option>
                    </select>
                  </Field>
                </div>

                <Field label="عنوان الطلب" required>
                  <input className="input-gov" placeholder="عنوان مختصر" />
                </Field>

                <Field label="تفاصيل الطلب" required>
                  <textarea
                    rows={6}
                    className="input-gov leading-loose"
                    placeholder="اكتب تفاصيل شكواك أو اقتراحك بوضوح…"
                  />
                </Field>

                <div className="rounded-lg border border-dashed border-border-strong bg-surface p-6 text-center">
                  <Icon name="cloud_upload" size={32} className="text-primary" />
                  <div className="mt-2 text-sm font-medium text-foreground">
                    إرفاق ملفات داعمة (اختياري)
                  </div>
                  <div className="mt-1 text-[12px] text-muted-foreground">
                    PDF, JPG, PNG — حتى 10 ميغابايت
                  </div>
                </div>

                <label className="flex items-start gap-2 text-[13px] text-muted-foreground">
                  <input type="checkbox" className="mt-0.5 accent-primary" />
                  أؤكد أن جميع المعلومات المقدّمة صحيحة، وأوافق على{" "}
                  <a href="#" className="text-primary underline">
                    سياسة الخصوصية
                  </a>
                  .
                </label>

                <div className="flex flex-wrap gap-3 border-t border-border pt-5">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep"
                  >
                    <Icon name="send" size={18} />
                    إرسال الطلب
                  </button>
                  <button
                    type="reset"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-surface"
                  >
                    مسح النموذج
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="card-gov p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-deep">
                <Icon name="verified_user" size={20} className="text-gold" filled />
                ضمانات المؤسسة
              </div>
              <ul className="space-y-3 text-[13.5px] leading-loose text-muted-foreground">
                <li className="flex gap-2">
                  <Icon name="check_circle" size={18} className="mt-0.5 text-primary" />
                  الرد الرسمي خلال 72 ساعة عمل
                </li>
                <li className="flex gap-2">
                  <Icon name="check_circle" size={18} className="mt-0.5 text-primary" />
                  سرية تامة للمعلومات المقدّمة
                </li>
                <li className="flex gap-2">
                  <Icon name="check_circle" size={18} className="mt-0.5 text-primary" />
                  رقم متابعة لتتبّع حالة الطلب
                </li>
              </ul>
            </div>

            <div className="card-gov overflow-hidden">
              <div className="bg-primary-deep p-6 text-primary-foreground">
                <div className="text-[12px] uppercase tracking-wide text-gold">تواصل مباشر</div>
                <div className="mt-2 text-2xl font-bold !text-white">137</div>
                <div className="mt-1 text-[12px] text-white/70">الخط الساخن — مجاني ومتوفر 24/7</div>
              </div>
              <div className="p-5 text-[13.5px] text-muted-foreground">
                للحالات الطارئة يُنصح بالاتصال المباشر بالخط الساخن للحصول على استجابة فورية.
              </div>
            </div>

            <div className="card-gov p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-deep">
                <Icon name="track_changes" size={20} className="text-gold" />
                تتبّع طلب سابق
              </div>
              <input className="input-gov" placeholder="أدخل رقم المتابعة" />
              <button className="mt-3 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
                عرض الحالة
              </button>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}
