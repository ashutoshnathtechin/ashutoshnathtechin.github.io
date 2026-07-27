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
    <section id="certifications" className="scroll-mt-32">
      <Reveal direction="up">
        <h2 className="text-4xl font-black mb-10 flex items-center gap-4 text-slate-900 dark:text-white">
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
          <Typewriter text="Certifications" delay={150} />
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert, index) => (
          <Reveal key={index} direction="left" delay={index * 150}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-8 rounded-3xl group hover:-translate-y-3 hover:scale-105 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] flex flex-col items-center text-center gap-5 h-full"
            >
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-600/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-semibold">{cert.org}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
