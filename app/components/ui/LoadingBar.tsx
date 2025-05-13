'use client';

import { useEffect, useState } from 'react';

export default function LoadingBar() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          const newProgress = Math.min(oldProgress + Math.random() * 10, 100);
          if (newProgress === 100) {
            clearInterval(timer);
            setTimeout(() => setLoading(false), 500);
          }
          return newProgress;
        });
      }, 200);
      
      return () => {
        clearInterval(timer);
      };
    }
  }, [loading]);
  
  if (!loading) return null;
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
} 