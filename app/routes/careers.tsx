import type { Route } from "./+types/careers";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Careers - Sample Company" },
    { name: "description", content: "Join our team and build your career" },
  ];
}

export default function Careers() {
  const { t } = useLanguage();
  const jobOpenings = [
    {
      id: 1,
      title: t.careers.seniorSoftwareEngineer,
      department: t.careers.engineering,
      location: t.careers.remoteOnsite,
      type: t.careers.fulltime,
      description: t.careers.jobDesc1,
    },
    {
      id: 2,
      title: t.careers.productManager,
      department: t.careers.product,
      location: t.careers.remoteOnsite,
      type: t.careers.fulltime,
      description: t.careers.jobDesc2,
    },
    {
      id: 3,
      title: t.careers.uxuiDesigner,
      department: t.careers.design,
      location: t.careers.remoteOnsite,
      type: t.careers.fulltime,
      description: t.careers.jobDesc3,
    },
    {
      id: 4,
      title: t.careers.marketingSpecialist,
      department: t.careers.marketing,
      location: t.careers.remoteOnsite,
      type: t.careers.fulltime,
      description: t.careers.jobDesc4,
    },
    {
      id: 5,
      title: t.careers.itConsultant,
      department: t.careers.consulting,
      location: t.careers.remoteOnsite,
      type: t.careers.fulltime,
      description: t.careers.jobDesc5,
    },
    {
      id: 6,
      title: t.careers.businessAnalyst,
      department: t.careers.business,
      location: t.careers.remoteOnsite,
      type: t.careers.fulltime,
      description: t.careers.jobDesc6,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{t.careers.title}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.careers.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{job.description}</p>
                <Link
                  to={`/careers/apply?position=${encodeURIComponent(job.title)}`}
                  className="inline-block px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                >
                  {t.careers.applyNow}
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.careers.dontSeePosition}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.careers.generalApplicationText}
            </p>
            <Link
              to={`/careers/apply?position=${encodeURIComponent(t.careers.generalApplication)}`}
              className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              {t.careers.sendResume}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

