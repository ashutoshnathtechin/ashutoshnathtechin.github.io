import React from 'react';
import Typewriter from './Typewriter';
import Reveal from './Reveal';

const Projects = () => {
  const projects = [
    {
      title: "Eduverse \u2013 E-Learning Platform",
      link: "https://eduverse-sepia-nu.vercel.app/",
      source: "https://github.com/ashutoshnathtechin/eduverse",
      tags: ["HTML5", "CSS3", "JavaScript", "Git", "Vercel"],
      bullets: [
        "Designed and deployed a fully responsive e-learning web application using HTML5, CSS3, and vanilla JavaScript, hosted on Vercel with CI/CD via GitHub Actions.",
        "Implemented mobile-first responsive design ensuring seamless compatibility across all screen sizes and devices.",
        "Developed interactive UI/UX components including smooth navigation, dynamic content sections, and accessible page layouts."
      ]
    },
    {
      title: "ShopZone \u2013 E-Commerce Demo",
      link: "https://amazon-x-gamma.vercel.app/",
      source: "https://github.com/ashutoshnathtechin/AmazonX",
      tags: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "REST API"],
      bullets: [
        "Built a full-stack e-commerce web application inspired by Amazon, with a Python Flask backend and HTML/CSS/JavaScript frontend.",
        "Implemented key features: product catalog API, Add-to-Cart drawer with live subtotal, Buy Now order simulation, Quick View modal, and personalized product recommendations.",
        "Integrated RESTful API endpoints for backend-frontend communication and deployed live on Vercel."
      ]
    }
  ];

  return (
    <section id="projects" className="scroll-mt-32">
      <Reveal direction="up">
        <h2 className="text-4xl font-black mb-10 flex items-center gap-4 text-slate-900 dark:text-white">
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          <Typewriter text="Projects" delay={150} />
        </h2>
      </Reveal>
      <div className="flex flex-col gap-10">
        {projects.map((project, idx) => (
          <Reveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 150}>
            <div className="glass-panel p-10 rounded-3xl flex flex-col lg:flex-row gap-10 items-start group hover:-translate-y-4 hover:rotate-1 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(59,130,246,0.3)]">
              <div className="w-full lg:w-1/3 flex flex-col gap-5">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-700/50 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-500/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    Live Demo
                  </a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 px-5 py-2.5 rounded-xl transition-all shadow-md">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    Source Code
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <ul className="list-disc list-outside ml-6 text-slate-600 dark:text-slate-300 space-y-4 marker:text-blue-500 text-lg">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed">
                      {bullet.split(/(\*\*.*?\*\*)/).map((part, index) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={index} className="text-slate-900 dark:text-white font-bold">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
