import { useTheme } from "../../../hooks/useTheme";

export default function UserSkeleton() {

    const { colors } = useTheme();

  return (
    <div className="flex flex-col space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center gap-4 p-4 rounded-xl border animate-pulse" style={{ borderColor: colors.border }}>
          <div className="w-12 h-12 rounded-full" style={{ background: colors.border }}></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 rounded-full w-3/4" style={{ background: colors.border }}></div>
            <div className="h-3 rounded-full w-1/2" style={{ background: colors.border }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
