import SectionHeader from "../_components/SectionHeader";

function ContactSection() {
  return (
    <main className="md:text-2xl">
      <SectionHeader header="Contact" />
      <section className="flex flex-col gap-3 md:!gap-5 px-3 md:!px-8">
        <p>
          Feel free to contact me either through email or through my LinkedIn! I
          respond to both. I will be building out a messaging area soon for this
          section so that you may send messages to me directly! :){" "}
        </p>
        <section>
          <p>
            <span>
              <u>Email:</u>
            </span>{" "}
            paul.santos2107@gmail.com
          </p>
          <p>
            <u>LinkedIn:</u>{" "}
            <a
              href="https://www.linkedin.com/in/paulsantos2107/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:italic hover:bg-green-200"
            >
              www.linkedin.com/in/paulsantos2107/
            </a>
          </p>
        </section>
      </section>
    </main>
  );
}

export default ContactSection;
