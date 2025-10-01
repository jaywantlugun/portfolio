import type { ReactNode } from "react";
import { useTheme } from "../../hooks/useTheme";

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  const { colors } = useTheme();

  return (
    <main
      className="min-h-screen flex items-center justify-center p-6 transition-colors duration-300 md:mt-[-50px] mt-0"
      style={{
        background: `linear-gradient(135deg, ${colors.gradients.background[0]} 0%, ${colors.gradients.background[1]} 100%)`,
        color: colors.text,
      }}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-10">
        {children}
      </div>
    </main>
  );
}

export default Main;
