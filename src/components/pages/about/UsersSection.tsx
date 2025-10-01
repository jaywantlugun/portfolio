import UserSkeleton from "./UserSkeleton";
import UserCard from "./UserCard";
import ErrorState from "./ErrorState";
import { useTheme } from "../../../hooks/useTheme";
import { useGetUsersQuery } from "../../../api/userApi";
import CardSection from "../../shared/CardSection";
import { useContent } from "../../../hooks/useContent";
import type { AboutpageContent } from "../../../contents/_base/aboutpage";

export default function UsersSection() {
  const { colors } = useTheme();
  const { data, error, isLoading } = useGetUsersQuery();
  const content = useContent<AboutpageContent>().users;

  return (
    <CardSection>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">{content?.title}</h2>
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ 
                    background: `linear-gradient(145deg, ${colors.gradients.primary[0]}, ${colors.gradients.primary[1]})`,
                    color: "white",
             }}
          >
            {data ? data.length : 0} {content?.title.toLowerCase()}
          </span>
        </div>
        <p className="opacity-80">
          {content?.subtitle}
        </p>

        <div className="space-y-4">
          {isLoading && <UserSkeleton />}
          {error && <ErrorState />}
          {data && (
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {data.slice(0, 8).map((user: any) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>

        {data && data.length > 8 && (
          <div
            className="pt-4 border-t text-center"
            style={{ borderColor: colors.border }}
          >
            <button
              className="text-sm font-medium hover:underline"
              style={{ color: colors.primary }}
            >
              {content?.viewAllButtonText}
            </button>
          </div>
        )}
      </div>
    </CardSection>
  );
}
