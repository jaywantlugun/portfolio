import { useTheme } from "../../hooks/useTheme";
import { GradientBadge } from "../ui/GradientBadge";
import FeatureList from "./FeatureList";

interface InfoProps {
  featureTitle: string;
  title: string;
  subtitle: string;
  featureListTitle: string;
  featuresList: string[];
  buttonText: string;
  buttonOnClick?: () => void;
}

function InfoSection(infoProp: InfoProps) {
  const { colors } = useTheme();
  const { featureTitle, title, subtitle, featureListTitle, featuresList, buttonText, buttonOnClick } = infoProp;

  return (
    <div className="flex-1 space-y-8">
        {/* Info Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <GradientBadge label={featureTitle}/>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">{title}</h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-lg">{subtitle}</p>
          </div>
    
    {/* Feature List */}
          <FeatureList featureListTitle={featureListTitle} featuresList={featuresList} />
    
    {/* Button */}
          <div className="flex gap-4">
            <button
            onClick={buttonOnClick}
              className="px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              style={{ 
                    background: `linear-gradient(145deg, ${colors.gradients.primary[0]}, ${colors.gradients.primary[1]})`,
                    color: "white",
               }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {buttonText}
            </button>
          </div>
        </div>
  );
}

export default InfoSection;
