import Link from 'next/link';

export default function Footer() {
  const navigation = {
    main: [
      { name: '关于我们', href: '/about' },
      { name: '博客', href: '/blog' },
      { name: '合作伙伴', href: '/partners' },
      { name: '职业机会', href: '/careers' },
      { name: '隐私政策', href: '/privacy' },
      { name: '使用条款', href: '/terms' },
    ],
    social: [
      {
        name: '微信',
        href: '#',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M9.5,4C5.36,4,2,6.69,2,10c0,1.89,1.08,3.56,2.78,4.66l-0.8,2.32l2.96-1.5c0.84,0.28,1.66,0.51,2.55,0.51c0.24,0,0.44-0.03,0.67-0.06c-0.32-0.93-0.51-1.93-0.51-2.93c0-2.93,2.55-5.3,5.77-5.3c0.23,0,0.44,0.03,0.67,0.06C15.56,5.38,12.85,4,9.5,4z M7,8.5C6.17,8.5,5.5,7.83,5.5,7S6.17,5.5,7,5.5S8.5,6.17,8.5,7S7.83,8.5,7,8.5z M12,8.5c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S12.83,8.5,12,8.5z M22,14.5c0-2.76-2.91-5-6.5-5S9,11.74,9,14.5c0,2.76,2.91,5,6.5,5c0.77,0,1.5-0.13,2.17-0.33l2.5,1.33l-0.83-2c1.61-0.96,2.67-2.33,2.67-4z M14.5,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.05,13,14.5,13z M18.5,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S19.05,13,18.5,13z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: '微博',
        href: '#',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M10.82 18.376c-3.868 0-7.007-1.85-7.007-4.13 0-1.2.745-2.582 2.007-3.895 1.697-1.753 3.674-2.676 4.316-1.91.288.344.157 1.2-.38 2.05-.142.207.478.06.478.06 2.006-.752 3.76-.8 4.4.02.33.425.168 1.008-.013 1.69-.09.315.408.094.408.094 1.39-.464 2.6-.196 2.6 1.143 0 2.28-3.158 4.966-6.82 4.966zm5.314-4.873c.164.47.057.885-.25 1.02-.308.134-.747-.068-.912-.537-.164-.47-.053-.886.25-1.02.31-.136.75.068.912.537zm1.428-1.616c.557 1.006.19 2.144-.82 2.533-1.01.39-2.278-.12-2.836-1.126-.557-1.007-.19-2.144.82-2.534 1.01-.39 2.28.12 2.836 1.126zm-9.955.238c-3.113.82-5.33 2.97-4.96 4.8.37 1.83 3.28 2.594 6.394 1.774 3.113-.82 5.33-2.97 4.96-4.8-.37-1.83-3.28-2.594-6.394-1.774z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-gradient-to-r from-gray-800 to-gray-900 text-lg font-medium text-white">CulinaryFusion</span>
          </div>
        </div>
        
        <nav className="mt-8 -mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href} className="text-base text-gray-400 hover:text-emerald-400 transition-colors">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 p-px rounded-lg">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg px-6 py-4">
            <p className="text-center text-base text-gray-300">
              &copy; {new Date().getFullYear()} CulinaryFusion, 版权所有。
            </p>
            <p className="mt-2 text-center text-sm text-gray-400">
              融合东西方烹饪传统，创造美味佳肴
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 