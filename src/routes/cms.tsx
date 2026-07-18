import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@/components/gov/Icon";
import { publicAsset } from "@/lib/assets";

export const Route = createFileRoute("/cms")({
  head: () => ({
    meta: [{ title: "لوحة الإدارة — المؤسسة السورية للتجارة" }],
  }),
  component: CMSPage,
});

const NAV = [
  { icon: "dashboard", label: "لوحة القيادة", active: true },
  { icon: "inventory_2", label: "المنتجات", badge: "386" },
  { icon: "category", label: "التصنيفات" },
  { icon: "local_offer", label: "العروض" },
  { icon: "storefront", label: "الفروع" },
  { icon: "newspaper", label: "الأخبار" },
  { icon: "forum", label: "الشكاوى", badge: "24" },
  { icon: "groups", label: "المستخدمون" },
  { icon: "bar_chart", label: "التقارير" },
  { icon: "settings", label: "الإعدادات" },
];

function CMSPage() {
  return (
    <div className="min-h-dvh bg-surface" dir="rtl">
      <div className="flex min-h-dvh">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 flex-col border-l border-border bg-primary-deep text-primary-foreground lg:flex">
          <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
            <img src={publicAsset("emblem-syria.webp")} alt="" className="h-8 w-8" />
            <div className="leading-tight">
              <div className="text-[10.5px] uppercase tracking-wide text-white/60">CMS</div>
              <div className="text-[13.5px] font-bold !text-white">لوحة الإدارة</div>
            </div>
          </div>
          <nav className="flex-1 space-y-0.5 p-3">
            {NAV.map((n) => (
              <button
                key={n.label}
                className={
                  "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-[13.5px] transition-colors " +
                  (n.active
                    ? "bg-white/10 text-gold"
                    : "text-white/75 hover:bg-white/5 hover:text-white")
                }
              >
                <span className="flex items-center gap-3">
                  <Icon name={n.icon} size={20} />
                  {n.label}
                </span>
                {n.badge && (
                  <span className="rounded-md bg-gold px-1.5 py-0.5 text-[10.5px] font-semibold text-primary-deep">
                    {n.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gold text-primary-deep font-bold">
                س.م
              </div>
              <div className="min-w-0 leading-tight">
                <div className="truncate text-[12.5px] font-semibold !text-white">سامر مصطفى</div>
                <div className="truncate text-[11px] text-white/60">مدير المحتوى</div>
              </div>
              <button className="ml-auto text-white/60 hover:text-gold" aria-label="تسجيل الخروج">
                <Icon name="logout" size={18} />
              </button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex flex-1 flex-col">
          {/* Topbar */}
          <header className="flex h-16 items-center gap-3 border-b border-border bg-background px-6">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
              <Icon name="search" size={18} className="text-muted-foreground" />
              <input
                placeholder="بحث سريع في اللوحة…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
                ⌘K
              </kbd>
            </div>
            <button className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background hover:bg-surface">
              <Icon name="notifications" size={20} />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background hover:bg-surface">
              <Icon name="settings" size={20} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
              <Icon name="add" size={18} />
              إضافة منتج
            </button>
          </header>

          <main className="flex-1 space-y-6 p-6">
            {/* Title */}
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-wide text-gold">
                  نظرة عامة
                </div>
                <h1 className="mt-1 text-2xl font-bold text-primary-deep">لوحة القيادة</h1>
                <p className="mt-1 text-[13.5px] text-muted-foreground">
                  ملخص أداء البوابة والخدمات لهذا الأسبوع.
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-1 text-[12.5px]">
                {["اليوم", "الأسبوع", "الشهر", "السنة"].map((t, i) => (
                  <button
                    key={t}
                    className={
                      "rounded-md px-3 py-1.5 " +
                      (i === 1 ? "bg-primary text-primary-foreground" : "text-muted-foreground")
                    }
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* KPIs */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { i: "shopping_bag", l: "الطلبات", v: "4,892", d: "+12.4%", up: true },
                { i: "payments", l: "المبيعات (ل.س)", v: "1.28B", d: "+8.1%", up: true },
                { i: "groups", l: "زوار البوابة", v: "128,540", d: "+22.6%", up: true },
                { i: "forum", l: "شكاوى مفتوحة", v: "24", d: "-3", up: false, warn: true },
              ].map((k) => (
                <div key={k.l} className="card-gov p-5">
                  <div className="flex items-start justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-gold-soft text-primary-deep">
                      <Icon name={k.i} size={20} />
                    </div>
                    <span
                      className={
                        "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11.5px] font-medium " +
                        (k.warn
                          ? "bg-destructive/10 text-destructive"
                          : "bg-emerald-50 text-emerald-700")
                      }
                    >
                      <Icon name={k.up ? "trending_up" : "trending_down"} size={14} />
                      {k.d}
                    </span>
                  </div>
                  <div className="mt-4 text-[12px] text-muted-foreground">{k.l}</div>
                  <div className="mt-1 text-2xl font-bold text-primary-deep">{k.v}</div>
                </div>
              ))}
            </div>

            {/* Chart + Activity */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="card-gov p-6 lg:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-primary-deep">حركة المبيعات</div>
                    <div className="text-[12px] text-muted-foreground">آخر 7 أيام</div>
                  </div>
                  <div className="flex items-center gap-4 text-[12px]">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-4 rounded bg-primary" />
                      المبيعات
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-4 rounded bg-gold" />
                      الطلبات
                    </span>
                  </div>
                </div>
                <BarChart />
              </div>

              <div className="card-gov p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm font-semibold text-primary-deep">أحدث النشاطات</div>
                  <button className="text-[12px] text-primary hover:underline">عرض الكل</button>
                </div>
                <ol className="relative space-y-4 border-r border-border pr-5">
                  {[
                    { i: "add_shopping_cart", t: "طلب جديد #48291", d: "منذ 3 دقائق" },
                    { i: "edit_note", t: "تحديث سعر السكر المدعوم", d: "منذ 24 دقيقة" },
                    { i: "storefront", t: "افتتاح فرع حلب — العزيزية", d: "منذ ساعتين" },
                    { i: "forum", t: "شكوى جديدة من مواطن — دمشق", d: "منذ 3 ساعات" },
                    { i: "newspaper", t: "نشر خبر: تحديث قائمة الأسعار", d: "أمس" },
                  ].map((a, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -right-[26px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-gold" />
                      <div className="flex items-start gap-2">
                        <Icon name={a.i} size={18} className="mt-0.5 text-primary" />
                        <div className="min-w-0">
                          <div className="text-[13.5px] font-medium text-foreground">{a.t}</div>
                          <div className="text-[11.5px] text-muted-foreground">{a.d}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Table */}
            <div className="card-gov overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
                <div>
                  <div className="text-sm font-semibold text-primary-deep">أحدث المنتجات المضافة</div>
                  <div className="text-[12px] text-muted-foreground">إجمالي 386 منتجًا</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-[12.5px] text-foreground hover:bg-surface">
                    <Icon name="filter_alt" size={16} />
                    تصفية
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-[12.5px] text-foreground hover:bg-surface">
                    <Icon name="download" size={16} />
                    تصدير
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right text-sm">
                  <thead className="bg-surface text-[12px] uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-6 py-3 font-semibold">المنتج</th>
                      <th className="px-6 py-3 font-semibold">التصنيف</th>
                      <th className="px-6 py-3 font-semibold">السعر</th>
                      <th className="px-6 py-3 font-semibold">المخزون</th>
                      <th className="px-6 py-3 font-semibold">الحالة</th>
                      <th className="px-6 py-3 font-semibold">إجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { n: "سكر أبيض ناعم", c: "مواد غذائية", p: "3,500", s: "متوفر", stock: "1,240", active: true },
                      { n: "أرز مصري ممتاز", c: "حبوب", p: "26,000", s: "متوفر", stock: "580", active: true },
                      { n: "زيت دوار الشمس", c: "زيوت", p: "12,900", s: "متوفر", stock: "312", active: true },
                      { n: "شاي أسود سيلاني", c: "مشروبات", p: "8,750", s: "نافد", stock: "0", active: false },
                      { n: "معكرونة سباغيتي", c: "مواد غذائية", p: "2,400", s: "متوفر", stock: "2,100", active: true },
                    ].map((r) => (
                      <tr key={r.n} className="hover:bg-surface/60">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="grid h-9 w-9 place-items-center rounded-md bg-surface-2 text-primary-deep">
                              <Icon name="package_2" size={18} />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">{r.n}</div>
                              <div className="text-[11.5px] text-muted-foreground">SKU-{Math.floor(Math.random() * 90000) + 10000}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{r.c}</td>
                        <td className="px-6 py-4 font-semibold text-primary-deep">{r.p} ل.س</td>
                        <td className="px-6 py-4 text-muted-foreground">{r.stock}</td>
                        <td className="px-6 py-4">
                          <span
                            className={
                              "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11.5px] font-medium " +
                              (r.active
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-destructive/10 text-destructive")
                            }
                          >
                            <span className={"h-1.5 w-1.5 rounded-full " + (r.active ? "bg-emerald-500" : "bg-destructive")} />
                            {r.s}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1">
                            <button className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-surface hover:text-primary" aria-label="عرض">
                              <Icon name="visibility" size={16} />
                            </button>
                            <button className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-surface hover:text-primary" aria-label="تعديل">
                              <Icon name="edit" size={16} />
                            </button>
                            <button className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-surface hover:text-destructive" aria-label="حذف">
                              <Icon name="delete" size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function BarChart() {
  const data = [
    { d: "الأحد", a: 55, b: 30 },
    { d: "الاثنين", a: 68, b: 42 },
    { d: "الثلاثاء", a: 62, b: 38 },
    { d: "الأربعاء", a: 78, b: 50 },
    { d: "الخميس", a: 84, b: 58 },
    { d: "الجمعة", a: 46, b: 28 },
    { d: "السبت", a: 72, b: 44 },
  ];
  return (
    <div className="flex h-64 items-end justify-between gap-4 px-2">
      {data.map((d) => (
        <div key={d.d} className="flex flex-1 flex-col items-center gap-2">
          <div className="relative flex h-52 w-full items-end justify-center gap-1.5">
            <div className="w-3 rounded-t bg-primary" style={{ height: `${d.a}%` }} />
            <div className="w-3 rounded-t bg-gold" style={{ height: `${d.b}%` }} />
          </div>
          <div className="text-[11.5px] text-muted-foreground">{d.d}</div>
        </div>
      ))}
    </div>
  );
}
