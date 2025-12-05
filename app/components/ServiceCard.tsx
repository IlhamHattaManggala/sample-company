import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
}

export function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  const { t } = useLanguage();
  const cardContent = (
    <div className={`bg-white rounded-lg shadow-lg p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${link ? 'cursor-pointer' : ''}`}>
      {icon && <div className="mb-4 text-blue-900">{icon}</div>}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      {link && (
        <div className="mt-4">
          <span className="text-blue-900 font-semibold hover:underline inline-flex items-center">
            {t.common.learnMore}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

