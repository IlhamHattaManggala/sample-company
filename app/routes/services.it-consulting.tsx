import type { Route } from "./+types/services.it-consulting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IT Consulting - Sample Company" },
    { name: "description", content: "Strategic IT consulting services" },
  ];
}

export default function ITConsulting() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">{t.services.itConsultingTitle}</h1>
            
            <div className="mb-12">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&q=80"
                alt={t.services.itConsultingTitle}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t.services.itConsultingIntro}
              </p>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.consultingServices}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.services.itConsultingServicesText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.services.itConsultingServicesText2}
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.ourExpertise}</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>{t.services.itConsultingExpertise1}</li>
                  <li>{t.services.itConsultingExpertise2}</li>
                  <li>{t.services.itConsultingExpertise3}</li>
                  <li>{t.services.itConsultingExpertise4}</li>
                  <li>{t.services.itConsultingExpertise5}</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.consultingMethodology}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.services.itConsultingMethodologyText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.services.itConsultingMethodologyText2}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.services.benefits}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.services.itConsultingBenefitsText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.services.itConsultingBenefitsText2}
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

