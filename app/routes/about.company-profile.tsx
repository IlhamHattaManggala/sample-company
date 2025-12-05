import type { Route } from "./+types/about.company-profile";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Company Profile - Sample Company" },
    { name: "description", content: "Learn about Sample Company's history and mission" },
  ];
}

export default function CompanyProfile() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">{t.about.companyProfile}</h1>
            
            <div className="mb-12">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop&q=80"
                alt="Sample Company Office"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.ourHistory}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.about.historyText1}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.about.historyText2}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.historyText3}
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.ourMission}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.about.missionText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.missionText2}
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.ourValues}</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>{t.about.valuesList1}</li>
                  <li>{t.about.valuesList2}</li>
                  <li>{t.about.valuesList3}</li>
                  <li>{t.about.valuesList4}</li>
                  <li>{t.about.valuesList5}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.ourAchievements}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.about.achievementsText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.achievementsText2}
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

