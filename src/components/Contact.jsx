import React from 'react';
import Reveal from './Reveal';

const Contact = () => {
  return (
    <section id="contact" className="w-full relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Contact
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Reveal direction="left">
          <div className="flex flex-col gap-6 h-full justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
              Ready to get started on your project?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-4">
              Contact me now for a free consultation.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:ashutoshnath.tech.in@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="text-lg font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors">
                  ashutoshnath.tech.in@gmail.com
                </span>
              </a>
              
              <a href="tel:+917416031432" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="text-lg font-bold text-slate-700 dark:text-slate-300 group-hover:text-teal-500 transition-colors">
                  +91-7416031432
                </span>
              </a>
            </div>
          </div>
        </Reveal>
        
        <Reveal direction="right">
          <div className="bg-white/50 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 p-8 md:p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Get in touch using the form
            </h3>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-600 dark:text-slate-400">Name</label>
                  <input type="text" placeholder="Your Name" className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-600 dark:text-slate-400">Email</label>
                  <input type="email" placeholder="Your Email" className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-600 dark:text-slate-400">Subject</label>
                <input type="text" placeholder="Subject" className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-600 dark:text-slate-400">Send a message to get started</label>
                <textarea rows="4" placeholder="Your message..." className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"></textarea>
              </div>
              <button type="submit" onClick={(e) => e.preventDefault()} className="mt-2 w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Submit
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
