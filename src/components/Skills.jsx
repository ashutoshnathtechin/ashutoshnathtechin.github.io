import React from 'react';
import Reveal from './Reveal';

const Skills = () => {
  const getSkillIcon = (name) => {
    switch(name) {
      case 'Python': return <><path d="M14.36,3.61c-1.95,0-3.69,.22-3.69,.22,0,0-1.84,.04-2.58,1.21-.69,1.09-.59,3.31-.59,3.31h6.63v1.31H4.86s-1.84-.04-2.82,1.67c-.94,1.62-.26,4.86-.26,4.86,0,0,.3,2.47,1.86,3.59,1.52,1.09,3.59,1.06,3.59,1.06h1.23v-2.06s-.06-1.91,1.13-3.13c1.15-1.18,3.2-1.2,3.2-1.2h2.24s2.05-.04,3.13-1.13c1.06-1.06,1.06-3.04,1.06-3.04v-3.41s0-2.2-1.63-3.23Z"/><path d="M9.64,20.39c1.95,0,3.69-.22,3.69-.22,0,0,1.84-.04,2.58-1.21,.69-1.09,.59-3.31,.59-3.31h-6.63v-1.31h9.27s1.84,.04,2.82-1.67c.94-1.62,.26-4.86,.26-4.86,0,0-.3-2.47-1.86-3.59-1.52-1.09-3.59-1.06-3.59-1.06h-1.23v2.06s.06,1.91-1.13,3.13c-1.15,1.18-3.2,1.2-3.2,1.2h-2.24s-2.05,.04-3.13,1.13c-1.06,1.06-1.06,3.04-1.06,3.04v3.41s0,2.2,1.63,3.23Z"/></>;
      case 'JavaScript': return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.68 15.65c-1.06.84-2.58 1.15-4 1.15-1.5 0-3.02-.38-3.88-1.07l.95-1.48c.67.48 1.8.84 2.87.84 1.05 0 1.63-.33 1.63-.84 0-.48-.48-.67-2.06-1.1-1.92-.5-3.09-1.46-3.09-2.92 0-1.56 1.34-2.83 3.69-2.83 1.39 0 2.58.33 3.4.82l-.86 1.48c-.53-.33-1.46-.72-2.52-.72-1 0-1.53.33-1.53.81 0 .5.5.65 2.1 1.1 1.94.5 3.09 1.48 3.09 3.01 0 1.58-1.29 2.92-3.8 2.92v-1.17z"/>;
      case 'SQL': return <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="currentColor" fill="none" strokeWidth="2"/>;
      case 'HTML5': return <path d="M2.5 3l1.5 17 8 2 8-2 1.5-17h-19zm14 7l-.5 4.5-4 1-4-1-.5-3.5h2l.2 1.5 2 .5 2-.5.2-2.5h-7l-.5-5h10.5l-.5 3z"/>;
      case 'CSS3': return <path d="M3 3l1.5 17 7.5 2 7.5-2 1.5-17H3zm13.5 11l-4.5 1-4.5-1-.5-3.5h2l.2 1.5 2.8.5 2.8-.5.2-3.5H6.5l-.5-4h11l-.5 6z"/>;
      case 'MySQL': return <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm3.17 14.73l-1.42 1.42-3.54-3.54-3.54 3.54-1.42-1.42 3.54-3.54-3.54-3.54 1.42-1.42 3.54 3.54 3.54-3.54 1.42 1.42-3.54 3.54 3.54 3.54z"/>;
      case 'MongoDB': return <path d="M12 2c-1 0-3.5 3-4.5 6s-1.5 7.5-1.5 9c0 3 3 5 6 5s6-2 6-5c0-1.5-.5-6-1.5-9s-3.5-6-4.5-6zm0 16c-1.5 0-2-1.5-2-3s1-5 2-6c1 1 2 4.5 2 6s-.5 3-2 3z"/>;
      case 'Git': return <path d="M2.5 10.5l9-9c.6-.6 1.6-.6 2.2 0l9 9c.6.6.6 1.6 0 2.2l-9 9c-.6.6-1.6.6-2.2 0l-9-9c-.6-.6-.6-1.5 0-2.2zM12 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8.5 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>;
      case 'GitHub': return <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03A9.58 9.58 0 0112 6.84c.85.01 1.7.12 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0012 2z"/>;
      case 'Windows': return <path d="M2 3l8-1v8H2V3zm10-1.5l10-1.5v9h-10V1.5zM2 12h8v8l-8-1v-7zm10 0h10v9l-10-1.5v-7.5z"/>;
      default: return <circle cx="12" cy="12" r="5" stroke="currentColor" fill="none" strokeWidth="2"/>;
    }
  };

  const skills = [
    "Python", "JavaScript", "SQL", "HTML5", "CSS3",
    "MySQL", "MongoDB", "Oracle Database",
    "Git", "GitHub", "Visual Studio Code", "Jupyter Notebook", "GitHub Actions",
    "Windows", "Linux", "Responsive Web Design", "Vercel Deployment",
    "MS Word", "MS Excel", "MS PowerPoint"
  ];

  return (
    <section id="skills" className="w-full relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
        {skills.map((skill, index) => (
          <Reveal key={index} delay={(index % 5) * 50} direction="up" className="group">
            <div className="relative flex flex-col items-center justify-center p-6 bg-white/50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] cursor-pointer">
              {/* Subtle spotlight effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <svg className="w-12 h-12 mb-4 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 transform group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 24 24">
                {getSkillIcon(skill)}
              </svg>
              
              <span className="font-bold text-sm text-slate-800 dark:text-slate-200 text-center">
                {skill}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
