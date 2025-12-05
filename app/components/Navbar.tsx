import { Link, useLocation } from "react-router";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageToggle } from "./UI/LanguageToggle";

export function Navbar() {
  const location = useLocation();
  const { t } = useLanguage();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Sample Company</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-semibold transition-colors ${
                isActive("/") ? "text-blue-900" : "text-gray-700 hover:text-blue-900"
              }`}
            >
              {t.nav.home}
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className={`font-semibold transition-colors flex items-center space-x-1 ${
                  location.pathname.startsWith("/about")
                    ? "text-blue-900"
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                <span>{t.nav.about}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    <Link
                      to="/about/company-profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      {t.nav.companyProfile}
                    </Link>
                    <Link
                      to="/about/vision-mission"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      {t.nav.visionMission}
                    </Link>
                    <Link
                      to="/about/teams"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      {t.nav.ourTeam}
                  </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`font-semibold transition-colors flex items-center space-x-1 ${
                  location.pathname.startsWith("/services")
                    ? "text-blue-900"
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                <span>{t.nav.services}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      {t.nav.serviceOverview}
                    </Link>
                    <Link
                      to="/services/product-development"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      {t.nav.productDevelopment}
                    </Link>
                    <Link
                      to="/services/it-consulting"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      {t.nav.itConsulting}
                    </Link>
                    <Link
                      to="/services/marketing-solution"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      {t.nav.marketingSolution}
                  </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className={`font-semibold transition-colors ${
                isActive("/projects")
                  ? "text-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              {t.nav.projects}
            </Link>
            <Link
              to="/careers"
              className={`font-semibold transition-colors ${
                isActive("/careers")
                  ? "text-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              {t.nav.careers}
            </Link>
            <Link
              to="/contact"
              className={`font-semibold transition-colors ${
                isActive("/contact")
                  ? "text-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              {t.nav.contact}
            </Link>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

