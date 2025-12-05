import type { Route } from "./+types/services.marketing-solution";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marketing Solutions - Sample Company" },
    { name: "description", content: "Comprehensive marketing solutions" },
  ];
}

export default function MarketingSolution() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">{t.services.marketingTitle}</h1>
            
            <div className="mb-12">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80"
                alt={t.services.marketingTitle}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t.services.marketingIntro}
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.marketingServices}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.services.marketingServicesText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.services.marketingServicesText2}
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.ourSolutions}</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>{t.services.marketingSolutions1}</li>
                  <li>{t.services.marketingSolutions2}</li>
                  <li>{t.services.marketingSolutions3}</li>
                  <li>{t.services.marketingSolutions4}</li>
                  <li>{t.services.marketingSolutions5}</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.strategyPlanning}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.services.marketingStrategyText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.services.marketingStrategyText2}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.resultsROI}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.services.marketingResultsText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.services.marketingResultsText2}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

