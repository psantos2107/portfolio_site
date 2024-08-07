import IntroSection from "./_introSection/IntroSection";

export default function Home() {
  return (
    <main className="w-full">
      <section id="intro-section" className="mt-8 h-screen md:flex md:gap-4">
        <IntroSection />
      </section>
      <section id="skills-section">Skills yaaas</section>
    </main>
  );
}
