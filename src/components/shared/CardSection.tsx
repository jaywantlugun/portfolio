import type { ReactNode } from "react";
import { useTheme } from "../../hooks/useTheme";

interface CardSectionProps {
  children: ReactNode;
}

export default function CardSection({ children }: CardSectionProps) {
  const { colors } = useTheme();

  return (
    <div className="flex-1 flex justify-center">
      <div
        className="w-full max-w-2xl h-[600px] flex flex-col bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 border"
        style={{
          background: `linear-gradient(145deg, ${colors.gradients.surface[0]}, ${colors.gradients.surface[1]})`,
          borderColor: colors.border,
          boxShadow: `0 20px 40px ${colors.shadow}20`,
        }}
      >
        {/* Inner scrollable area */}
        <div className="flex-1 overflow-y-auto pr-2 content-center">{children}</div>
      </div>
    </div>
  );
}
