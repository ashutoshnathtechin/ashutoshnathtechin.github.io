import React from 'react';
import Typewriter from './Typewriter';
import Reveal from './Reveal';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 relative z-10">
        
        {/* Text Content */}
        <Reveal direction="left" className="flex-1">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 backdrop-blur-sm mb-6">
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Hello
              </span>
              <span className="inline-block animate-wave text-xl">👋</span>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                , I'm
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 animate-gradient-x">Ashutosh Nath</span>
            </h1>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-800 dark:from-slate-300 dark:to-slate-500 mb-8 min-h-[60px]">
              <Typewriter text="Software Developer" delay={100} />
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-medium">
              Motivated and detail-oriented B.Sc. Physics graduate with a strong analytical mindset and a passion for software development. Proficient in HTML, CSS, JavaScript, Python, Flask, SQL, and Git/GitHub, with hands-on experience building responsive web applications and full-stack projects.
            </p>
            
            {/* Social & Contact */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <a
                href="tel:+917416031432"
                className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.3)] dark:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Me</span>
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/ashutoshnathtechin" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/ashutoshnathtechin/" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-slate-200 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shadow-md">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Image Content */}
        <Reveal direction="up" delay={200} className="flex-1 flex justify-center lg:justify-end relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <img
              src="https://avatars.githubusercontent.com/u/133329182?v=4"
              alt="Ashutosh Nath"
              className="w-64 md:w-80 lg:w-[450px] h-auto object-cover filter brightness-105 contrast-105 mix-blend-multiply dark:mix-blend-screen transition-transform duration-300 hover:scale-105"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
              }}
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Hero;
