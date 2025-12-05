import type { Route } from "./+types/careers.apply";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { Link, useSearchParams } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Apply - Sample Company" },
    { name: "description", content: "Apply for a position at Sample Company" },
  ];
}

export default function Apply() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const jobTitle = searchParams.get("position") || t.careers.generalApplication;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.careers.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.careers.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.careers.emailInvalid;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.careers.phoneRequired;
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = t.careers.phoneInvalid;
    }

    if (!formData.address.trim()) {
      newErrors.address = t.careers.addressRequired;
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = t.careers.coverLetterRequired;
    }

    if (!formData.resume) {
      newErrors.resume = t.careers.resumeRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-28 pb-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.careers.applicationSuccess}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t.careers.applicationSuccessMessage}
              </p>
              <Link
                to="/careers"
                className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                {t.careers.backToCareers}
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t.careers.applicationTitle}: {jobTitle}
              </h1>
              <p className="text-lg text-gray-600">
                {t.careers.applicationSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.careers.personalInfo}
                </h2>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t.careers.fullName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.careers.namePlaceholder}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t.careers.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.careers.emailPlaceholder}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t.careers.phone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.careers.phonePlaceholder}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t.careers.address} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder={t.careers.addressPlaceholder}
                      rows={3}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                        errors.address ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.careers.coverLetter}
                </h2>
                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    {t.careers.coverLetter} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder={t.careers.coverLetterPlaceholder}
                    rows={8}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                      errors.coverLetter ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.coverLetter && (
                    <p className="mt-1 text-sm text-red-500">{errors.coverLetter}</p>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.careers.uploadResume}
                </h2>
                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    {t.careers.resumeFile} <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="resume"
                      className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
                    >
                      {t.careers.chooseFile}
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <span className="text-gray-600">
                      {formData.resume ? formData.resume.name : t.careers.noFileChosen}
                    </span>
                  </div>
                  {errors.resume && (
                    <p className="mt-1 text-sm text-red-500">{errors.resume}</p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    {t.careers.fileFormatHint}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <Link
                  to="/careers"
                  className="text-blue-900 font-semibold hover:underline"
                >
                  ← {t.careers.backToCareers}
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.careers.submitting : t.careers.submitApplication}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

