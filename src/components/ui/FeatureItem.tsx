import { useTheme } from "../../hooks/useTheme";

export function FeatureItem({ text }: { text: string }) {

    const colors = useTheme();

  return (
    <li className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full" style={{ background: colors.colors.primary }}></div>
      <span>{text}</span>
    </li>
  );
}
