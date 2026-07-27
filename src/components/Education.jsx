import React from 'react';

const Education = () => {
  return (
    <section id="education" className="w-full relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Academic Background
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
      </div>
      
      <div className="group relative bg-white/50 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 p-8 md:p-10 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">B.Sc. in Physics</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">Berhampur University, Ganjam, Odisha</p>
            </div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold border border-slate-200 dark:border-slate-700 shadow-sm shrink-0">
            2019 &ndash; 2023
          </div>
        </div>

        <ul className="relative z-10 list-disc list-outside ml-[88px] text-slate-600 dark:text-slate-400 space-y-3 mt-4 marker:text-blue-500 text-lg">
          <li className="leading-relaxed">Graduated with <strong className="text-slate-900 dark:text-white font-bold">7.1 CGPA</strong>, gained experience in data interpretation, scientific analysis, and technical report writing.</li>
          <li className="leading-relaxed">Built a strong foundation in <strong className="text-slate-900 dark:text-white font-bold">analytical problem-solving, quantitative reasoning</strong>, and scientific research aptitude.</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
