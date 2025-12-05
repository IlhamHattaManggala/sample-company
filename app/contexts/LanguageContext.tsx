import { createContext, useContext, useState, useEffect } from "react";
import type { Language } from "../utils/i18n";
import { translations } from "../utils/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.id;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to safely access localStorage (only on client-side)
function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "id"; // Default for server-side
  }
  try {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "id" || saved === "en")) {
      return saved;
    }
  } catch (e) {
    // localStorage might not be available
  }
  return "id";
}

// Helper function to safely set localStorage (only on client-side)
function setStoredLanguage(lang: Language) {
  if (typeof window === "undefined") {
    return; // Do nothing on server-side
  }
  try {
    localStorage.setItem("language", lang);
  } catch (e) {
    // localStorage might not be available
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Initialize with stored language or default
  const [language, setLanguageState] = useState<Language>(() => getStoredLanguage());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);
    // Get from localStorage on client-side mount
    const saved = getStoredLanguage();
    if (saved !== language) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    // Only save to localStorage on client-side after initial load
    if (isClient) {
      setStoredLanguage(language);
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

