import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function SampleNoticeModal() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the notice (only on client-side)
    if (typeof window !== "undefined") {
      const hasSeenNotice = localStorage.getItem("sample-notice-seen");
      if (!hasSeenNotice) {
        setIsOpen(true);
      }
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("sample-notice-seen", "true");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 p-4 animate-in">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
          {t.common.sampleNoticeTitle}
        </h2>
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          {t.common.sampleNoticeText}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleClose}
            className="flex-1 bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
          >
            {t.common.iUnderstand}
          </button>
        </div>
      </div>
    </div>
  );
}

