import type { Route } from "./+types/home";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { ServiceCard } from "../components/ServiceCard";
import { FadeInOnScroll } from "../components/UI/FadeInOnScroll";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - Sample Company" },
    { name: "description", content: "Empowering Business With Intelligent Solutions" },
  ];
}

export default function Home() {
  const { t } = useLanguage();
  const services = [
    {
      title: t.nav.productDevelopment,
      description: t.home.serviceProductDev,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "/services/product-development",
    },
    {
      title: t.nav.itConsulting,
      description: t.home.serviceITConsulting,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      link: "/services/it-consulting",
    },
    {
      title: t.nav.marketingSolution,
      description: t.home.serviceMarketing,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
      link: "/services/marketing-solution",
    },
    {
      title: t.nav.cloudSolutions,
      description: t.home.serviceCloud,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      link: "/services",
    },
    {
      title: t.nav.dataAnalytics,
      description: t.home.serviceDataAnalytics,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      link: "/services",
    },
    {
      title: t.nav.cybersecurity,
      description: t.home.serviceCybersecurity,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      link: "/services",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Enterprise Platform",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
    },
    {
      id: 2,
      title: "E-Commerce Solution",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Mobile Application",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection
        title={t.home.heroTitle}
        subtitle={t.home.heroSubtitle}
      />
      
      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80"
                    alt="Modern Office"
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.home.aboutCompany}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              {t.home.aboutText1}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              {t.home.aboutText2}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.home.aboutText3}
            </p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.home.ourServices}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.home.servicesSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.home.featuredProjects}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.home.projectsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <h3 className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              {t.home.viewAllProjects}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
