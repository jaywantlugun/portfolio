import { useTheme } from "../../hooks/useTheme";

interface GradientBadgeProps {
  label: string;
}

export function GradientBadge({ label }: GradientBadgeProps) {
  const { colors } = useTheme();

  return (
    <div className="flex items-center gap-3 mb-2">
      <div
        className="w-3 h-8 rounded-full"
        style={{ background: colors.primary }}
      ></div>
      <span
        className="text-sm font-semibold uppercase tracking-wider"
        style={{ color: colors.primary }}
      >
        {label}
      </span>
    </div>
  );
}
