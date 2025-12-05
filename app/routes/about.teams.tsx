import type { Route } from "./+types/about.teams";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TeamCard } from "../components/TeamCard";
import { useLanguage } from "../contexts/LanguageContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Team - Sample Company" },
    { name: "description", content: "Meet our talented team members" },
  ];
}

export default function Teams() {
  const { t } = useLanguage();
  const teamMembers = [
    {
      name: "John Smith",
      position: t.about.ceo,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&q=80",
      bio: t.about.teamBio1,
    },
    {
      name: "Sarah Johnson",
      position: t.about.cto,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&q=80",
      bio: t.about.teamBio2,
    },
    {
      name: "Michael Chen",
      position: t.about.headProduct,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&q=80",
      bio: t.about.teamBio3,
    },
    {
      name: "Emily Davis",
      position: t.about.directorMarketing,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&q=80",
      bio: t.about.teamBio4,
    },
    {
      name: "David Wilson",
      position: t.about.seniorITConsultant,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&q=80",
      bio: t.about.teamBio5,
    },
    {
      name: "Lisa Anderson",
      position: t.about.leadSoftwareEngineer,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop&q=80",
      bio: t.about.teamBio6,
    },
    {
      name: "Robert Taylor",
      position: t.about.businessDevManager,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&q=80",
      bio: t.about.teamBio7,
    },
    {
      name: "Jennifer Martinez",
      position: t.about.uxuiDesigner,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&q=80",
      bio: t.about.teamBio8,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{t.about.teamTitle}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.about.teamSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

