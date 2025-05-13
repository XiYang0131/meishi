'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // 模拟页面加载
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!loading) return null;
  
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-emerald-600 font-medium">加载中...</p>
      </div>
    </div>
  );
} 