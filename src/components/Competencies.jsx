import React from 'react';
import Typewriter from './Typewriter';

const Competencies = () => {
  const competencies = [
    {
      title: "Problem Solving",
      desc: "Strong algorithmic thinking with active practice on LeetCode",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: "Collaboration",
      desc: "Effective team player with experience in agile, project-based, and cross-functional environments",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    {
      title: "Communication",
      desc: "Clear written and verbal communication; experienced in structured documentation and reporting",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    }
  ];

  return (
    <section id="competencies" className="w-full relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Core Competencies
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competencies.map((comp, index) => (
          <div key={index} className="group relative bg-white/50 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex items-start gap-5">
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                {comp.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{comp.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">{comp.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competencies;
