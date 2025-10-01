import { useTheme } from "../../hooks/useTheme";
import { FeatureItem } from "../ui/FeatureItem";

interface FeatureListProps {
    featureListTitle: string;
    featuresList?: string[];
}

function FeatureList({ featureListTitle, featuresList }: FeatureListProps) {
  const { colors } = useTheme();

  return (
    <div
            className="space-y-4 p-6 rounded-2xl backdrop-blur-sm border"
            style={{ background: colors.surface, borderColor: colors.border }}
          >
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {featureListTitle}
            </h2>
            <ul className="space-y-3">
            {
                featuresList?.map((feature, index) => (
                    <FeatureItem key={index} text={feature} />
                ))
            }
            </ul>
          </div>
  );
}

export default FeatureList;
