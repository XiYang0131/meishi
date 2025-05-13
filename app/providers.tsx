'use client';

import { createContext, useEffect } from 'react';

// 创建主题上下文
export const ThemeContext = createContext({
  setTheme: (theme: string) => {},
});

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 检查用户偏好或系统设置
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleSetTheme = (newTheme: string) => {
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
} 