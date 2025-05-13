'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md dark:bg-gray-900 dark:bg-opacity-90'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">CulinaryFusion</span>
              <svg
                className="h-8 w-auto sm:h-10 text-emerald-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                CulinaryFusion
              </span>
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white' : 'text-white hover:text-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">打开菜单</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <Link
              href="#features"
              className={`text-base font-medium ${
                isScrolled ? 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-white hover:text-gray-200'
              }`}
            >
              功能
            </Link>
            <Link
              href="#how-it-works"
              className={`text-base font-medium ${
                isScrolled ? 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-white hover:text-gray-200'
              }`}
            >
              工作原理
            </Link>
            <Link
              href="#testimonials"
              className={`text-base font-medium ${
                isScrolled ? 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-white hover:text-gray-200'
              }`}
            >
              用户评价
            </Link>
            <Link
              href="#pricing"
              className={`text-base font-medium ${
                isScrolled ? 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-white hover:text-gray-200'
              }`}
            >
              价格
            </Link>
            <Link
              href="#faq"
              className={`text-base font-medium ${
                isScrolled ? 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-white hover:text-gray-200'
              }`}
            >
              常见问题
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <ThemeToggle />
            <Link
              href="/login"
              className={`ml-4 whitespace-nowrap text-base font-medium ${
                isScrolled ? 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-white hover:text-gray-200'
              }`}
            >
              登录
            </Link>
            <Link
              href="/get-started"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 btn-hover-effect"
            >
              开始使用
            </Link>
          </div>
        </div>
      </div>

      {/* 移动菜单 */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50 dark:divide-gray-700">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <svg
                    className="h-8 w-auto text-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="sr-only">关闭菜单</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="#features"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">功能</span>
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">工作原理</span>
                  </Link>
                  <Link
                    href="#testimonials"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">用户评价</span>
                  </Link>
                  <Link
                    href="#pricing"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">价格</span>
                  </Link>
                  <Link
                    href="#faq"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">常见问题</span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex items-center">
                <ThemeToggle />
              </div>
              <div>
                <Link
                  href="/get-started"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 btn-hover-effect"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  开始使用
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500 dark:text-gray-400">
                  已有账户?{' '}
                  <Link href="/login" className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">
                    登录
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 