import TechIconImages from "../_components/_skillSectionComponents/TechIconImages";

function SkillsSection() {
  return (
    <main className="p-3">
      <h1 className="text-2xl md:text-5xl md:mb-8">
        <strong>Web Technologies & Skills</strong>
      </h1>
      {/* NOTE: I was running into a bug where the app wasn't registering the CSS margin top changes for medium size screens (aka md:mt-6 wasn't registering), and thus, I chose to do margin-bottom instead for the medium size screens.  */}
      <ul className="list-disc pl-4 mt-3 md:pl-10 md:text-2xl">
        <li className="md:mb-6">
          <strong>Programming Languages:</strong> Javascript, Python, SQL, HTML,
          CSS
        </li>
        <li className="mt-3 md:mb-6">
          <strong>Front-End Frameworks and Libraries:</strong> React, Next.js
          (app router), Tailwind CSS, Bootstrap CSS, Material UI
        </li>
        <li className="mt-3 md:mb-6">
          <strong>Back-end Frameworks and Libraries:</strong> Next.js (app
          router), Node, Express, Embedded Javascript, Django
        </li>
        <li className="mt-3 md:mb-6">
          <strong>Database and Database Management:</strong> (NoSQL)- MongoDB,
          Mongoose; (SQL/Relational Databases): Supabase PostgreSQL
        </li>
        <li className="mt-3 md:mb-6">
          <strong>Authentication/Authorization:</strong> NextAuth.js v5 (aka
          Auth.js), Google OAuth, Sessions-Based Authentication, JSON Web Tokens
        </li>
        <li className="mt-3">
          <strong>Tools and Platforms:</strong> Git, Github, Vercel, Netlify,
          Heroku, Trello, Figma, Huly, Slack
        </li>
      </ul>
      <article className="mt-4 lg:mt-8">
        <TechIconImages />
      </article>
    </main>
  );
}

export default SkillsSection;
