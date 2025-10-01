import { useGetUsersQuery } from "../../../api/userApi";
import { useTheme } from "../../../hooks/useTheme";

export default function ErrorState() {

    const { colors } = useTheme();
    const { refetch: onRetry } = useGetUsersQuery();

  return (
    <div
      className="p-4 rounded-xl text-center"
      style={{ background: colors.gradients.danger[0] + "20", border: `1px solid ${colors.danger}` }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke={colors.danger}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className="font-semibold" style={{ color: colors.danger }}>Error loading users</p>
      <p className="text-sm mt-1">Please check your connection and try again</p>
      <button
        onClick={onRetry}
        className="mt-4 px-4 py-2 rounded-lg text-sm font-medium"
        style={{ background: colors.danger, color: "white" }}
      >
        Retry
      </button>
    </div>
  );
}
