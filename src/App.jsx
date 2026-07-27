import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Competencies from './components/Competencies';
import BackgroundBlobs from './components/BackgroundBlobs';
import Reveal from './components/Reveal';
import FloatingIcons from './components/FloatingIcons';

const USERNAME = 'Ashutosh Nath';

function App() {
  return (
    <>
      <FloatingIcons />
      <BackgroundBlobs />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden">
        <Hero />
        
        <main className="flex flex-col gap-32 my-32">
          
          <Reveal delay={200}>
            <Skills />
          </Reveal>
          
          <Reveal delay={100}>
            <Education />
          </Reveal>
          
          <Projects />
          
          <Certifications />

          <Reveal delay={400}>
            <Competencies />
          </Reveal>
          
        </main>
        
        <footer className="py-8 text-center text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
          <p>&copy; {new Date().getFullYear()} {USERNAME}. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
