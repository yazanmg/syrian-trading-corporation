import type { CSSProperties } from "react";

type IconProps = {
  name: string;
  className?: string;
  size?: number;
  style?: CSSProperties;
  filled?: boolean;
  "aria-hidden"?: boolean;
};

/**
 * Material Symbols Rounded — outline style, government-grade.
 * The font is loaded globally in __root head.
 */
export function Icon({
  name,
  className,
  size = 22,
  style,
  filled = false,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <span
      className={`material-symbols-rounded ${className ?? ""}`}
      aria-hidden={ariaHidden}
      style={{
        fontSize: size,
        lineHeight: 1,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
        ...style,
      }}
    >
      {name}
    </span>
  );
}
