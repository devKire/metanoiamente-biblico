import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import { CoursePromotion } from "./components/CoursePromotion";
import Footer from "./components/Footer";
import SectionAbout from "./components/SectionAbout";
import SectionCTA from "./components/SectionCTA";
import SectionDesire from "./components/SectionDesire";
import SectionHero from "./components/SectionHero";
import SectionInterest from "./components/SectionInterest";

interface LandingPageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: LandingPageProps) => {
  const { slug } = await params;

  const landingpage = await db.landingPage.findUnique({
    where: { slug },
    include: {
      contactInfo: true,
    },
  });

  if (!landingpage) {
    notFound();
  }

  if (!landingpage.contactInfo) {
    notFound();
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#F5EBDD] to-[#E8DCC8]">
      {/* Conteúdo principal */}
      <div className="relative z-10">
        {/* 🔥 FASE 1: ATENÇÃO (Attention) */}
        <section id="hero">
          <SectionHero
            contact={landingpage.contactInfo}
            landingpage={landingpage}
          />
        </section>

        {/* 💡 FASE 2: INTERESSE (Interest) */}
        <section id="interest">
          <SectionInterest
            contact={landingpage.contactInfo}
            landingpage={landingpage}
          />
        </section>

        <section id="promotion">
          <CoursePromotion contact={landingpage.contactInfo} />
        </section>

        {/* ❤️ FASE 3: DESEJO (Desire) */}
        <section id="desire">
          <SectionDesire
            contact={landingpage.contactInfo}
            landingpage={landingpage}
          />
        </section>

        {/* 🎯 FASE 4: AÇÃO (Action) */}
        <section id="cta">
          <SectionCTA
            contact={landingpage.contactInfo}
            landingpage={landingpage}
          />
        </section>
        <section id="about">
          <SectionAbout
            contact={landingpage.contactInfo}
            landingpage={landingpage}
          />
        </section>

        <Footer contact={landingpage.contactInfo} landingpage={landingpage} />
      </div>
    </div>
  );
};

export default Page;
