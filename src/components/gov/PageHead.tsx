import { Link } from "@tanstack/react-router";
import { Icon } from "./Icon";

export function PageHead({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: Array<{ label: string; to?: string }>;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary-deep text-primary-foreground">
      <img
        src="/emblem-syria.webp"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 object-contain opacity-[0.05]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        {/* Breadcrumb */}
        <nav aria-label="مسار التنقل" className="mb-4 flex flex-wrap items-center gap-1.5 text-[12.5px] text-white/70">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {c.to ? (
                <Link to={c.to} className="hover:text-gold">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gold">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <Icon name="chevron_left" size={14} />}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide text-gold">
            <span className="h-px w-6 bg-gold" />
            {eyebrow}
          </div>
        )}
        <h1 className="text-[32px] font-bold leading-tight !text-white sm:text-[42px]">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-[15px] leading-loose text-white/75">{subtitle}</p>
        )}
      </div>
      <div className="h-[3px] bg-gold" />
    </section>
  );
}
