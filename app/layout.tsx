import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CulinaryFusion - 将您的食材转变为美味佳肴',
  description: '结合东西方烹饪传统，根据您现有的食材创建个性化食谱。发现新口味，减少食物浪费，享受前所未有的烹饪体验。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
} 