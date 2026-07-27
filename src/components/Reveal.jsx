import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, delay = 0, direction = 'up', threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  // Determine starting translation based on direction
  let translateClass = '';
  switch (direction) {
    case 'up':
      translateClass = 'translate-y-12';
      break;
    case 'down':
      translateClass = '-translate-y-12';
      break;
    case 'left':
      translateClass = '-translate-x-16'; // slide in from left to right
      break;
    case 'right':
      translateClass = 'translate-x-16'; // slide in from right to left
      break;
    default:
      translateClass = 'translate-y-12';
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${translateClass}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
