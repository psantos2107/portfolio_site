import IntroSection from "./_sections/IntroSection";
import SkillsSection from "./_sections/SkillsSection";

export default function Home() {
  return (
    <main className="w-full">
      <section id="intro-section" className="pt-8 md:flex md:gap-4 md:h-screen">
        <IntroSection />
      </section>
      <section id="skills-section" className="h-screen pt-10 md:pt-28 lg:px-14">
        <SkillsSection />
      </section>
    </main>
  );
}
