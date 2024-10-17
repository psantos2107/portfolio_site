import IntroSection from "./_sections/IntroSection";
import SkillsSection from "./_sections/SkillsSection";
import ProjectsSection from "./_sections/ProjectsSection";
import AboutSection from "./_sections/AboutSection";
import ContactSection from "./_sections/ContactSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="w-full scroll-smooth">
      <section
        id="intro-section"
        className="pt-8 md:flex md:gap-4 scroll-mt-6 md:min-h-screen"
      >
        <IntroSection />
      </section>
      <section
        id="skills-section"
        className="pt-10 md:pt-28 scroll-mt-6 lg:px-14"
      >
        <SkillsSection />
      </section>
      <section
        id="about-section"
        className="pt-10 md:pt-28 scroll-mt-6 lg:px-14"
      >
        <AboutSection />
      </section>
      <section
        id="projects-section"
        className="pt-10 md:pt-28 scroll-mt-6 lg:px-14"
      >
        <ProjectsSection />
      </section>
      <section
        id="contact-section"
        className="pt-10 md:pt-28 scroll-mt-6 lg:px-14 mb-8"
      >
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
