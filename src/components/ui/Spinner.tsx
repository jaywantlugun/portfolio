import { useTheme } from "../../hooks/useTheme";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "success" | "warning" | "danger" | "accent" | "text";
  className?: string;
}

export const Spinner = ({ 
  size = "md", 
  variant = "primary", 
  className = "" 
}: SpinnerProps) => {
  const { colors } = useTheme();

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const variantColors = {
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
    accent: colors.accent,
    text: colors.text
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-current border-t-transparent`}
        style={{
          color: variantColors[variant]
        }}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export const GradientSpinner = ({ 
  size = "md", 
  variant = "primary", 
  className = "" 
}: SpinnerProps) => {
  const { colors } = useTheme();

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const gradientVariants = {
    primary: colors.gradients.primary,
    success: colors.gradients.success,
    warning: colors.gradients.warning,
    danger: colors.gradients.danger,
    accent: colors.gradients.accent,
    text: [colors.text, colors.text]
  };

  const [startColor, endColor] = gradientVariants[variant];

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-transparent`}
        style={{
          background: `conic-gradient(from 0deg, transparent, ${startColor}, ${endColor}, transparent)`,
          mask: `radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))`
        }}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export const PulseSpinner = ({ 
  size = "md", 
  variant = "primary", 
  className = "" 
}: SpinnerProps) => {
  const { colors } = useTheme();

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const variantColors = {
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
    accent: colors.accent,
    text: colors.text
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} animate-pulse rounded-full`}
        style={{
          backgroundColor: variantColors[variant],
          boxShadow: `0 0 20px ${variantColors[variant]}40`
        }}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export const BounceSpinner = ({ 
  size = "md", 
  variant = "primary", 
  className = "" 
}: SpinnerProps) => {
  const { colors } = useTheme();

  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
    xl: "w-5 h-5"
  };

  const variantColors = {
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
    accent: colors.accent,
    text: colors.text
  };

  return (
    <div className={`flex items-center justify-center space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} rounded-full animate-bounce`}
          style={{
            backgroundColor: variantColors[variant],
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const LoadingPage = () => {
  const { colors } = useTheme();

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        background: `linear-gradient(135deg, ${colors.gradients.background[0]}, ${colors.gradients.background[1]})`
      }}
    >
      <div className="text-center">
        <GradientSpinner 
          size="xl" 
          variant="primary" 
          className="mb-6"
        />
        <p 
          className="text-lg font-medium mt-4"
          style={{ color: colors.text }}
        >
          Loading...
        </p>
        <p 
          className="text-sm mt-2"
          style={{ color: colors.textMuted }}
        >
          Please wait while we prepare your content
        </p>
      </div>
    </div>
  );
};

// Usage examples:
/*
// Simple spinner
<Spinner size="md" variant="primary" />

// Gradient spinner
<GradientSpinner size="lg" variant="accent" />

// Pulse spinner
<PulseSpinner size="sm" variant="success" />

// Bounce spinner
<BounceSpinner size="md" variant="warning" />

// Full loading page
<LoadingPage />
*/