import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Icon } from "./Icon";

const NAV = [
  { label: "الرئيسية", to: "/" },
  { label: "المنتجات", to: "/products" },
  { label: "الفروع", to: "/branches" },
  { label: "الأخبار", to: "/news" },
  { label: "الشكاوى", to: "/complaints" },
  { label: "اتصل بنا", to: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background">
      {/* Government ribbon */}
      <div className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-[12px] sm:px-6">
          <div className="flex items-center gap-2 opacity-90">
            <Icon name="verified" size={16} />
            <span>موقع رسمي للجمهورية العربية السورية</span>
          </div>
          <div className="hidden items-center gap-5 sm:flex">
            <a href="#" className="inline-flex items-center gap-1 opacity-85 hover:opacity-100">
              <Icon name="support_agent" size={16} />
              الخط الساخن 137
            </a>
            <span className="h-3 w-px bg-white/25" />
            <button className="inline-flex items-center gap-1 opacity-85 hover:opacity-100">
              <Icon name="translate" size={16} />
              English
            </button>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/emblem-syria.webp"
              alt="شعار الجمهورية العربية السورية"
              className="h-11 w-11 object-contain"
            />
            <div className="leading-tight">
              <div className="text-[11px] font-medium tracking-wide text-muted-foreground">
                الجمهورية العربية السورية
              </div>
              <div className="text-[17px] font-bold text-primary-deep">
                المؤسسة السورية للتجارة
              </div>
            </div>
          </Link>

          <nav className="mx-4 hidden flex-1 items-center justify-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{
                  className:
                    "text-primary-deep bg-surface-2 after:absolute after:inset-x-3 after:-bottom-[21px] after:h-[3px] after:bg-gold",
                }}
                inactiveProps={{ className: "text-foreground/80 hover:text-primary-deep hover:bg-surface" }}
                className="relative rounded-md px-3.5 py-2 text-[14.5px] font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link
              to="/search"
              className="hidden items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:bg-surface-2 sm:inline-flex"
            >
              <Icon name="search" size={18} />
              <span className="pl-8">ابحث في البوابة…</span>
              <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
                ⌘K
              </kbd>
            </Link>
            <Link
              to="/search"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface p-2 sm:hidden"
              aria-label="بحث"
            >
              <Icon name="search" size={20} />
            </Link>
            <a
              href="#services"
              className="hidden items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep md:inline-flex"
            >
              الخدمات
              <Icon name="arrow_back" size={18} />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface p-2 lg:hidden"
              aria-label="القائمة"
            >
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>
        {/* mobile nav */}
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col p-3">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-[15px] font-medium text-foreground hover:bg-surface"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
