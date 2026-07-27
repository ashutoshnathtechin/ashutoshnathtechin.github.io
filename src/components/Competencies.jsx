import React from 'react';
import Typewriter from './Typewriter';

const Competencies = () => {
  const competencies = [
    {
      title: "Problem Solving",
      desc: "Strong algorithmic thinking with active practice on LeetCode",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    },
    {
      title: "Collaboration",
      desc: "Effective team player with experience in agile, project-based, and cross-functional environments",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    },
    {
      title: "Communication",
      desc: "Clear written and verbal communication; experienced in structured documentation and reporting",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    }
  ];

  return (
    <section id="competencies" className="scroll-mt-32">
      <h2 className="text-4xl font-black mb-10 flex items-center gap-4 text-slate-900 dark:text-white">
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        <Typewriter text="Core Competencies" delay={150} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {competencies.map((comp, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-3xl border-t-8 border-t-blue-500 hover:-translate-y-2 transition-all hover:shadow-2xl">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-600/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {comp.icon}
              </svg>
            </div>
            <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-3">{comp.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium">{comp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competencies;
