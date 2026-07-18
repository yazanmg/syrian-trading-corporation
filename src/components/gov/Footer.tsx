import { Link } from "@tanstack/react-router";
import { publicAsset } from "@/lib/assets";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={publicAsset("emblem-syria.webp")}
                alt="شعار المؤسسة"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="text-[11px] opacity-70">الجمهورية العربية السورية</div>
                <div className="text-base font-bold">المؤسسة السورية للتجارة</div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-75">
              مؤسسة عامة تعنى بتأمين احتياجات المواطن السوري من السلع الأساسية بجودة موثوقة
              وأسعار عادلة عبر شبكة فروع منتشرة في المحافظات كافة.
            </p>
          </div>

          <FooterCol
            title="روابط سريعة"
            items={[
              ["الرئيسية", "/"],
              ["المنتجات", "/products"],
              ["الفروع", "/branches"],
              ["الأخبار", "/news"],
            ]}
          />
          <FooterCol
            title="خدمات المواطن"
            items={[
              ["الشكاوى والمقترحات", "/complaints"],
              ["البحث", "/search"],
              ["اتصل بنا", "/contact"],
              ["الأسئلة الشائعة", "#faq"],
            ]}
          />

          <div>
            <div className="mb-4 text-sm font-semibold tracking-wide text-gold">تواصل معنا</div>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Icon name="call" size={18} />
                الخط الساخن: 137
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" size={18} />
                info@syrian-trade.gov.sy
              </li>
              <li className="flex items-start gap-2">
                <Icon name="location_on" size={18} />
                <span>دمشق — شارع بغداد، الإدارة العامة</span>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              {["facebook", "public", "smartphone"].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-md border border-white/15 transition-colors hover:border-gold hover:text-gold"
                  aria-label={i}
                >
                  <Icon name={i} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs opacity-70 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} المؤسسة السورية للتجارة — جميع الحقوق محفوظة.</div>
          <div className="flex items-center gap-4">
            <a href="#">سياسة الخصوصية</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#">شروط الاستخدام</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#">إمكانية الوصول</a>
          </div>
        </div>
      </div>
      <div className="gov-ribbon-pattern h-2" />
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: Array<[string, string]> }) {
  return (
    <div>
      <div className="mb-4 text-sm font-semibold tracking-wide text-gold">{title}</div>
      <ul className="space-y-2.5 text-sm opacity-90">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link to={href} className="inline-flex items-center gap-1.5 hover:text-gold">
              <Icon name="chevron_left" size={16} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
