import React from 'react';
import Typewriter from './Typewriter';

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

  const skillCategories = [
    {
      title: "Languages",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
      skills: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"]
    },
    {
      title: "Databases",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />,
      skills: ["MySQL", "MongoDB", "Oracle Database"]
    },
    {
      title: "Dev Tools",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />,
      skills: ["Git", "GitHub", "Visual Studio Code", "Jupyter Notebook", "GitHub Actions"]
    },
    {
      title: "OS / Others",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      skills: ["Windows", "Linux", "Responsive Web Design", "Vercel Deployment"]
    },
    {
      title: "Productivity",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
      skills: ["MS Word", "MS Excel", "MS PowerPoint"]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-32">
      <h2 className="text-4xl font-black mb-10 flex items-center gap-4 text-slate-900 dark:text-white">
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        <Typewriter text="Technical Skills" delay={150} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-panel p-8 rounded-3xl group hover:border-blue-500/50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-3">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {category.icon}
              </svg>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 transition-colors shadow-sm">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    {getSkillIcon(skill)}
                  </svg>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
