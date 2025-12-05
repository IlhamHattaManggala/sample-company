import type { Route } from "./+types/services.product-development";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Product Development - Sample Company" },
    { name: "description", content: "Expert product development services" },
  ];
}

export default function ProductDevelopment() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">{t.services.productDevTitle}</h1>
            
            <div className="mb-12">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop&q=80"
                alt={t.services.productDevTitle}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t.services.productDevIntro}
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.approach}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.services.productDevApproachText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.services.productDevApproachText2}
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.keyFeatures}</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>{t.services.productDevFeatures1}</li>
                  <li>{t.services.productDevFeatures2}</li>
                  <li>{t.services.productDevFeatures3}</li>
                  <li>{t.services.productDevFeatures4}</li>
                  <li>{t.services.productDevFeatures5}</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.developmentProcess}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.services.productDevProcessText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.services.productDevProcessText2}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.whyChooseUs}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.services.productDevWhyText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.services.productDevWhyText2}
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

