import React from 'react';

const Header = () => {
  return (
    <header className="glass-panel flex flex-col items-center lg:items-start gap-6 p-8 rounded-2xl w-full h-full relative overflow-hidden flex-shrink-0 lg:overflow-y-auto custom-scrollbar">
      
      {/* Decorative gradient orb */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full flex flex-col items-center lg:items-start gap-6 relative z-10">
        
        {/* Profile Avatar */}
        <img
          src="https://avatars.githubusercontent.com/u/133329182?v=4"
          alt="Ashutosh Nath"
          className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] object-cover"
        />
        
        {/* Profile Info */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Ashutosh Nath</h1>
          
          <h2 className="text-blue-400 font-semibold uppercase tracking-wider text-sm mb-4">Software Developer</h2>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Motivated and detail-oriented B.Sc. Physics graduate with a strong analytical mindset and a passion for software development. Proficient in HTML, CSS, JavaScript, Python, Flask, SQL, and Git/GitHub, with hands-on experience building responsive web applications and full-stack projects.
          </p>

          <div className="flex flex-col gap-3 w-full text-sm text-slate-300 mb-8">
            <a href="mailto:ashutoshnath.tech.in@gmail.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors w-full p-2 hover:bg-white/5 rounded-lg">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span className="truncate">ashutoshnath.tech.in@gmail.com</span>
            </a>
            <a href="tel:+917416031432" className="flex items-center gap-3 hover:text-blue-400 transition-colors w-full p-2 hover:bg-white/5 rounded-lg">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +91-7416031432
            </a>
            <span className="flex items-center gap-3 w-full p-2">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span className="truncate">Berhampur, Odisha, India</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 lg:w-full lg:justify-start justify-center">
            <a
              href="https://www.linkedin.com/in/ashutoshnathtechin/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 text-blue-100 rounded-full transition-all hover:scale-110 shadow-lg shadow-blue-500/20"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a
              href="https://github.com/ashutoshnathtechin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-500/50 text-slate-100 rounded-full transition-all hover:scale-110 shadow-lg shadow-slate-900/50"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
            </a>
            <a
              href="https://leetcode.com/u/Ashutoshnathtechin/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-orange-600/20 hover:bg-orange-600 border border-orange-500/50 text-orange-100 rounded-full transition-all hover:scale-110 shadow-lg shadow-orange-500/20"
              aria-label="LeetCode"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.099l2.396-2.415c.326-.327.328-.857.005-1.185-.322-.328-.853-.328-1.177 0l-2.396 2.415c-1.565 1.577-4.103 1.599-5.694.048l-4.279-4.195a3.953 3.953 0 0 1-.848-1.213 3.784 3.784 0 0 1-.233-.68 3.655 3.655 0 0 1-.041-1.572 3.824 3.824 0 0 1 .082-.338 3.513 3.513 0 0 1 .805-1.403l3.854-4.127 5.405-5.787c.324-.347.311-.888-.03-1.222A1.378 1.378 0 0 0 13.483 0zm10.158 11.238c-.28-.28-1.185-.28-1.185-.28l-8.527-.008c-.4-.002-.727.322-.729.722-.002.4.322.727.722.729l8.528.008c.502.001 1.488.001 1.488.001s.001-.986 0-1.488a.728.728 0 0 0-.297-.564z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
