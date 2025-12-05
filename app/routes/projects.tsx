import type { Route } from "./+types/projects";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Sample Company" },
    { name: "description", content: "Our portfolio of successful projects" },
  ];
}

export default function Projects() {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      title: t.projects.enterprisePlatform,
      category: t.projects.productDevelopment,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
      description: t.projects.projectDesc1,
    },
    {
      id: 2,
      title: t.projects.ecommerceSolution,
      category: t.projects.productDevelopment,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
      description: t.projects.projectDesc2,
    },
    {
      id: 3,
      title: t.projects.mobileApplication,
      category: t.projects.productDevelopment,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
      description: t.projects.projectDesc3,
    },
    {
      id: 4,
      title: t.projects.cloudInfrastructure,
      category: t.projects.itConsulting,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80",
      description: t.projects.projectDesc4,
    },
    {
      id: 5,
      title: t.projects.digitalMarketingCampaign,
      category: t.projects.marketing,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      description: t.projects.projectDesc5,
    },
    {
      id: 6,
      title: t.projects.dataAnalyticsPlatform,
      category: t.projects.itConsulting,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      description: t.projects.projectDesc6,
    },
    {
      id: 7,
      title: t.projects.webApplication,
      category: t.projects.productDevelopment,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=80",
      description: t.projects.projectDesc7,
    },
    {
      id: 8,
      title: t.projects.brandIdentityDesign,
      category: t.projects.marketing,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80",
      description: t.projects.projectDesc8,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{t.projects.title}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

