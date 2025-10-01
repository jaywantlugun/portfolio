import { useTheme } from "../../../hooks/useTheme";

export default function UserCard({ user }: any) {

    const { colors } = useTheme();

  return (
    <div
      className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:shadow-md"
      style={{
        background: colors.surface,
        borderColor: colors.border,
        boxShadow: `0 4px 12px ${colors.shadow}05`,
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
        style={{ background: `linear-gradient(145deg, ${colors.gradients.primary[0]}, ${colors.gradients.primary[1]})` }}
      >
        {user.name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold truncate">{user.name}</p>
        <p className="text-sm truncate" style={{ color: colors.textMuted }}>
          {user.email}
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
