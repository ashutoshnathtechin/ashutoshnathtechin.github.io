import React from 'react';

const FloatingIcons = () => {
  // SVG Icons for skills, smaller sizes and updated animations
  const icons = [
    {
      // JS
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
      className: "top-[15%] left-[10%] animate-float-fade text-yellow-500 w-10 h-10 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
    },
    {
      // Python 
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
      className: "top-[20%] right-[15%] animate-float-fade-reverse animation-delay-1000 text-blue-500 w-14 h-14 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
    },
    {
      // Database
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />,
      className: "top-[60%] left-[8%] animate-float-fade-slow animation-delay-2000 text-orange-500 w-16 h-16 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]"
    },
    {
      // HTML/Web
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
      className: "top-[70%] right-[10%] animate-float-fade animation-delay-3000 text-red-500 w-12 h-12 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]"
    },
    {
      // Terminal
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
      className: "top-[40%] left-[25%] animate-float-fade-reverse animation-delay-1000 text-slate-800 dark:text-slate-300 w-8 h-8 drop-shadow-[0_0_8px_rgba(148,163,184,0.5)]"
    },
    {
      // Generic Code
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
      className: "top-[85%] left-[30%] animate-float-fade-slow text-green-500 w-14 h-14 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
    },
    {
      // Extra DB
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />,
      className: "top-[50%] right-[25%] animate-float-fade animation-delay-2000 text-purple-500 w-10 h-10 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
    },
    {
      // Extra Web
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
      className: "top-[10%] right-[35%] animate-float-fade-reverse animation-delay-3000 text-cyan-500 w-8 h-8 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
    }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((icon, index) => (
        <svg 
          key={index} 
          className={`absolute transition-all duration-500 ${icon.className}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {icon.svg}
        </svg>
      ))}
    </div>
  );
};

export default FloatingIcons;
