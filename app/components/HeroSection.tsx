import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  showCTA?: boolean;
}

export function HeroSection({ title, subtitle, showCTA = true }: HeroSectionProps) {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                {t.home.getStarted}
              </Link>
              <Link
                to="/about/company-profile"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
              >
                {t.home.learnMore}
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

