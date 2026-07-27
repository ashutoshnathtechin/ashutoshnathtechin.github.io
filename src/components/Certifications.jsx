import React from 'react';
import Typewriter from './Typewriter';
import Reveal from './Reveal';

const Certifications = () => {
  const certs = [
    { title: "HackerRank Javascript (Basic) Certificate", org: "HackerRank", link: "https://www.hackerrank.com/certificates/939ffbcf587a" },
    { title: "HackerRank SQL (Basic) Certificate", org: "HackerRank", link: "https://www.hackerrank.com/certificates/e3c10b46d4e0" },
    { title: "HackerRank Python (Basic) Certificate", org: "HackerRank", link: "https://www.hackerrank.com/certificates/ff76b4671556" }
  ];

  return (
    <section id="certifications" className="w-full relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Certifications
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-pink-500/50 to-transparent"></div>
      </div>
      
      <div className="flex flex-col gap-6">
        {certs.map((cert, index) => (
          <Reveal key={index} direction="left" delay={index * 100}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="group relative block bg-white/50 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 p-6 md:p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.15)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center gap-5">
                <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-slate-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">{cert.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{cert.org}</p>
                </div>
              </div>
              <div className="relative z-10 w-full sm:w-auto text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl group-hover:bg-pink-600 group-hover:text-white transition-colors shadow-sm">
                View Credential &rarr;
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
