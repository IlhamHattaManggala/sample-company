import { createContext, useContext, useState, useEffect } from "react";
import type { Language } from "../utils/i18n";
import { translations } from "../utils/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.id;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Initialize with default, then update from localStorage in useEffect
  const [language, setLanguageState] = useState<Language>("id");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);
    // Get from localStorage or default to Indonesian
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "id" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    // Only save to localStorage on client-side after initial load
    if (isClient) {
      localStorage.setItem("language", language);
    }
  }, [language, isClient]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Fallback to default translations if context is not available
    return {
      language: "id" as Language,
      setLanguage: () => {},
      t: translations.id,
    };
  }
  return context;
}

