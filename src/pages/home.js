import React from "react";

const experiences = [
  {
    company: "Bidcom",
    position: "Full-stack Developer",
    period: "April 2025 - Present",
    responsibilities: [
      "Designed and implemented AI-driven agents (RAG architecture) powered by vector databases, improving automation and customer interaction efficiency",
      "Developed and shipped new web features across React, Next.js, and Angular applications, enhancing performance and usability",
      "Migrated and modernized legacy systems to scalable, maintainable architectures using Node.js, TypeScript, and modern frontend frameworks"
    ],
    techStack: "React, Angular, Next.js, Node.js, TypeScript, Jira, Scrum, Slack, Git, GitLab, MySQL, PostgreSQL, Jest"
  },
  {
    company: "Baufest",
    position: "Software Engineer",
    period: "Jul 2022 - April 2025",
    responsibilities: [
      "Designed and established the technical architecture of projects",
      "Led and guided team members in fulfilling technical requirements",
      "Made crucial technical decisions such as technology selection and frameworks",
      "Participated in project planning and estimating resources and effort required"
    ],
    techStack: "React, Angular, .NET, Node.js, Ionic, TypeScript, Jira, Scrum, Microsoft Teams, Git, GitLab, MySQL, MongoDB, IIS"
  },
  {
    company: "Legal Surf",
    position: "Full-stack Developer",
    period: "Jul 2021 - Jun 2022",
    responsibilities: [
      "Developed and maintained a clean, secure, and user-friendly UI/UX, ensuring optimal performance across web and mobile applications",
      "Planned and implemented strategic technology decisions, aligning with business goals and driving forward scalable, maintainable codebases",
      "Played a key role in shaping the technical architecture and optimizing backend services to ensure high availability and performance"
    ],
    techStack: "React, React Native, Angular, TypeScript, Node.js, GraphQL, Apollo, MongoDB, PostgreSQL, Prisma, Yup, Slack, Trello, Git, GitHub/GitLab"
  },
  {
    company: "Osprera",
    position: "Full-stack Developer",
    period: "Dec 2019 - Jul 2021",
    responsibilities: [
      "Worked with customers to collect, clarify and capture requirements",
      "Responsible for core components implementation and architecture",
      "Developed modules both in the back and front-end side. Consumed government's API"
    ],
    techStack: "React, Angular, TypeScript, .NET, Node.js, NHibernate, MySQL, Jira, Scrum, Git"
  },
  {
    company: "NEPS",
    position: "Full-stack Developer",
    period: "Nov 2018 - Nov 2019",
    responsibilities: [
      "Maintained and developed the core client of the company",
      "Decision making of core functionalities of the product"
    ],
    techStack: "Angular, TypeScript, .NET, NHibernate, Trello, MySQL, Scrum, Git"
  }
];

export const Home = () => (
  <div className="flex flex-col font-mono justify-center w-full max-w-4xl px-4 pt-8">
    <div className="text-gray-600 text-sm mb-2">
      Hello, I'm
    </div>
    <h1 className="text-black text-2xl md:text-3xl font-bold mb-2">
      Miguelangel Rojas
    </h1>
    <h2 className="text-gray-600 text-xl md:text-2xl mb-6">
      Full Stack Developer
    </h2>

    <p className="text-gray-600 max-w-full lg:max-w-2xl text-sm leading-relaxed mb-8">
      Full-Stack Developer with 5+ years of experience building scalable, secure, and maintainable web and mobile applications. Skilled in JavaScript, TypeScript, React, Angular, Node.js, and .NET. Strong background in software architecture, REST APIs, CI/CD, and Agile/Scrum. Passionate about solving complex problems and delivering high-quality digital solutions.
    </p>

    <a
      href="mailto:miguelangel.rojastech@gmail.com"
      className="w-auto px-4 py-2 text-black border border-gray-300 rounded hover:bg-gray-100 text-sm inline-block text-center mb-12"
    >
      Get in touch
    </a>

    {/* Experience Section */}
    <div className="mt-8 mb-12">
      <h2 className="text-black text-lg font-semibold mb-6">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="mb-2">
              <h3 className="text-black font-semibold text-base">{exp.position}</h3>
              <p className="text-gray-600 text-sm">{exp.company} • {exp.period}</p>
            </div>

            <ul className="space-y-1 mb-3">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start text-xs text-gray-600">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <div className="text-xs">
              <span className="text-gray-500">Tech Stack: </span>
              <span className="text-gray-600">{exp.techStack}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Projects Section */}
    <div className="mt-8 mb-12">
      <h2 className="text-black text-lg font-semibold mb-6">Projects</h2>

      <div className="space-y-6">
        <div className="border-l-2 border-gray-200 pl-4">
          <h3 className="text-black font-semibold text-sm">LetBookly</h3>
          <p className="text-gray-600 text-xs mb-1">Booking platform for vacation rentals and accommodations</p>
          <a href="https://letbookly.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
            https://letbookly.com
          </a>
        </div>

        <div className="border-l-2 border-gray-200 pl-4">
          <h3 className="text-black font-semibold text-sm">Innova Hipotecaria</h3>
          <p className="text-gray-600 text-xs mb-1">Mortgage and real estate services platform</p>
          <a href="https://innovahipotecaria.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
            https://innovahipotecaria.com
          </a>
        </div>

        <div className="border-l-2 border-gray-200 pl-4">
          <h3 className="text-black font-semibold text-sm">QueWallet</h3>
          <p className="text-gray-600 text-xs mb-1">Digital wallet and payment platform</p>
          <a href="https://quewallet.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
            https://quewallet.com
          </a>
        </div>
      </div>
    </div>

    {/* Skills Section */}
    <div className="mt-8 mb-12">
      <h2 className="text-black text-lg font-semibold mb-6">Skills</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-black text-sm font-semibold mb-3">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">JavaScript (ES6+)</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">HTML</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">CSS</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">C#</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">SQL</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">GraphQL</span>
          </div>
        </div>

        <div>
          <h3 className="text-black text-sm font-semibold mb-3">Frameworks & Tools</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">React</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">React Native</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Angular</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Next.js</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Node.js</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">NestJS</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Express</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">.NET</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Ionic</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">tRPC</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Prisma</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Material UI</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Bootstrap</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Styled Components</span>
          </div>
        </div>

        <div>
          <h3 className="text-black text-sm font-semibold mb-3">Databases & Cloud</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">PostgreSQL</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">MongoDB</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">MySQL</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">AWS</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Azure</span>
          </div>
        </div>

        <div>
          <h3 className="text-black text-sm font-semibold mb-3">Agile & Tools</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Scrum</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Jira</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Trello</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">ClickUp</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Git</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">GitHub/GitLab</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Slack</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Microsoft Teams</span>
          </div>
        </div>

        <div>
          <h3 className="text-black text-sm font-semibold mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">Spanish (Native)</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">English (Intermediate)</span>
          </div>
        </div>
      </div>
    </div>

    {/* Education Section */}
    <div className="mt-8 mb-12">
      <h2 className="text-black text-lg font-semibold mb-4">Education</h2>
      <div className="border-l-2 border-gray-200 pl-4">
        <h3 className="text-black font-semibold text-sm">Computer Science</h3>
        <p className="text-gray-600 text-xs">Instituto Universitario de Tecnología del Estado Bolívar – Venezuela</p>
        <p className="text-gray-500 text-xs">Graduated: October 2018</p>
      </div>
    </div>

    {/* Contact Section */}
    <div className="mt-8 mb-16">
      <h2 className="text-black text-lg font-semibold mb-4">Contact</h2>
      <p className="text-gray-600 mb-4 text-sm">
        Ready to work together? Let's discuss your next project and bring your ideas to life.
      </p>

      <div className="space-y-3">
        <div className="border-l-2 border-gray-200 pl-4">
          <span className="text-black text-sm font-semibold">WhatsApp</span>
          <br />
          <a
            href="https://wa.me/541123797550"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-xs"
          >
            +54 11 2379 7550
          </a>
        </div>

        <div className="border-l-2 border-gray-200 pl-4">
          <span className="text-black text-sm font-semibold">Email</span>
          <br />
          <a
            href="mailto:miguelangel.rojastech@gmail.com"
            className="text-blue-600 hover:underline text-xs"
          >
            miguelangel.rojastech@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
);
