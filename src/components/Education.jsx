import React from 'react';
import Typewriter from './Typewriter';

const Education = () => {
  return (
    <section id="education" className="scroll-mt-32">
      <h2 className="text-4xl font-black mb-10 flex items-center gap-4 text-slate-900 dark:text-white">
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
        <Typewriter text="Education" delay={150} />
      </h2>
      <div className="glass-panel p-8 rounded-3xl border-l-8 border-l-blue-500 shadow-xl hover:shadow-2xl transition-shadow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Bachelor of Science (B.Sc.) &ndash; Physics & Physical Science</h3>
            <p className="text-blue-600 dark:text-blue-400 font-bold text-lg md:text-xl">Berhampur University &bull; Berhampur, Odisha, India</p>
          </div>
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-5 py-2 rounded-full text-sm font-black whitespace-nowrap shadow-sm">
            Jul 2019 &ndash; Jul 2023
          </span>
        </div>
        <ul className="list-disc list-outside ml-6 text-slate-700 dark:text-slate-300 space-y-3 mt-4 marker:text-blue-500 text-lg">
          <li>Graduated with <strong className="text-slate-900 dark:text-white">7.1 CGPA</strong>, gained experience in data interpretation, scientific analysis, and technical report writing.</li>
          <li>Built a strong foundation in <strong className="text-slate-900 dark:text-white">analytical problem-solving, quantitative reasoning</strong>, and scientific research aptitude.</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
