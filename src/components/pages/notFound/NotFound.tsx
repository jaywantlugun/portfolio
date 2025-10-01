import { Link } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme'; 
import { useContent } from '../../../hooks/useContent';
import type { NotFoundpageContent } from '../../../contents/_base/notfoundpage';

export const NotFound = () => {
  const { colors } = useTheme();
  const content = useContent<NotFoundpageContent>();

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        background: `linear-gradient(135deg, ${colors.gradients.background[0]} 0%, ${colors.gradients.background[1]} 100%)`
      }}
    >
      <div className="max-w-lg w-full space-y-8 text-center">
        <div className="opacity-100 translate-y-0 transition-all duration-700">
          {/* Animated 404 text */}
          <div className="relative">
            <h1 
              className="text-9xl font-bold opacity-10"
              style={{ color: colors.primary }}
            >
              {content.errorCode}
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-48 h-48" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{ color: colors.primary }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>
          
          {/* Message */}
          <div className="mt-6">
            <h2 
              className="text-3xl font-extrabold sm:text-4xl"
              style={{ color: colors.text }}
            >
              {content.title}
            </h2>
            <p 
              className="mt-4 text-lg"
              style={{ color: colors.textMuted }}
            >
              {content.subtitle}
            </p>
          </div>
          
          {/* Action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                background: `linear-gradient(135deg, ${colors.gradients.primary[0]} 0%, ${colors.gradients.primary[1]} 100%)`,
                boxShadow: `0 4px 6px ${colors.shadow}20`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${colors.gradients.primary[1]} 0%, ${colors.gradients.primary[0]} 100%)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${colors.gradients.primary[0]} 0%, ${colors.gradients.primary[1]} 100%)`;
              }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {content.homeButtonText}
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                color: colors.text,
                borderColor: colors.border,
                backgroundColor: colors.surface,
                boxShadow: `0 4px 6px ${colors.shadow}20`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.surface;
              }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {content.backButtonText}
            </button>
          </div>
          
          {/* Additional help */}
          <div className="mt-12">
            <p 
              className="text-sm"
              style={{ color: colors.textMuted }}
            >
              {content.needHelpText} <a 
                href="#" 
                className="font-medium transition-colors duration-300"
                style={{ 
                  color: colors.primary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.gradients.primary[1];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.primary;
                }}
              >
                {content.contactSupportText}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;