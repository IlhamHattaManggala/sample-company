import { useLanguage } from "../../contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setLanguage("id")}
        className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${
          language === "id"
            ? "bg-blue-900 text-white"
            : "text-gray-700 hover:text-blue-900"
        }`}
      >
        ID
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${
          language === "en"
            ? "bg-blue-900 text-white"
            : "text-gray-700 hover:text-blue-900"
        }`}
      >
        EN
      </button>
    </div>
  );
}

