'use client';

import { useState, useEffect } from 'react';

export default function NavIndicator() {
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      rootMargin: '-100px 0px -100px 0px',
      threshold: 0.2,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {['features', 'how-it-works', 'testimonials', 'pricing', 'faq'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 w-4 h-4'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`导航到${section}部分`}
          />
        ))}
      </div>
    </div>
  );
} 