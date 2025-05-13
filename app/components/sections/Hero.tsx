import Link from 'next/link';
import ScrollIndicator from '../ui/ScrollIndicator';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">将您的食材转变为</span>{' '}
                <span className="block text-yellow-300 xl:inline">美味佳肴</span>
              </h1>
              <p className="mt-3 text-base text-white text-opacity-90 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                CulinaryFusion 结合东西方烹饪传统，根据您现有的食材创建个性化食谱。发现新口味，减少食物浪费，享受前所未有的烹饪体验。
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/get-started"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 btn-hover-effect"
                  >
                    开始使用
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="#how-it-works"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 btn-hover-effect"
                  >
                    了解更多
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 flex items-center justify-center">
          <div className="food-card bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-white text-center px-4">
              <p className="text-3xl font-bold">融合美食</p>
              <p className="text-lg mt-2">东西方烹饪的完美结合</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
} 