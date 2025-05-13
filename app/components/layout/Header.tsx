'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">CulinaryFusion</span>
              <div className="h-8 w-auto sm:h-10 flex items-center">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-1 px-3 rounded-md">
                  CF
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">CulinaryFusion</span>
              </div>
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              onClick={() => setIsMenuOpen(true)}
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
            <Link href="#features" className="text-base font-medium text-gray-500 hover:text-emerald-600 transition-colors">
              功能
            </Link>
            <Link href="#how-it-works" className="text-base font-medium text-gray-500 hover:text-emerald-600 transition-colors">
              工作原理
            </Link>
            <Link href="#testimonials" className="text-base font-medium text-gray-500 hover:text-emerald-600 transition-colors">
              用户评价
            </Link>
            <Link href="#pricing" className="text-base font-medium text-gray-500 hover:text-emerald-600 transition-colors">
              价格
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-emerald-600 transition-colors">
              登录
            </Link>
            <Link
              href="/register"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 btn-hover-effect"
            >
              注册
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-8 w-auto flex items-center">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-1 px-3 rounded-md">
                      CF
                    </div>
                    <span className="ml-2 text-xl font-bold text-gray-900">CulinaryFusion</span>
                  </div>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                    onClick={() => setIsMenuOpen(false)}
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
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="ml-3 text-base font-medium text-gray-900">功能</span>
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="ml-3 text-base font-medium text-gray-900">工作原理</span>
                  </Link>
                  <Link
                    href="#testimonials"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <span className="ml-3 text-base font-medium text-gray-900">用户评价</span>
                  </Link>
                  <Link
                    href="#pricing"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="ml-3 text-base font-medium text-gray-900">价格</span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link
                  href="/register"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 btn-hover-effect"
                  onClick={() => setIsMenuOpen(false)}
                >
                  注册
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  已有账户?{' '}
                  <Link
                    href="/login"
                    className="text-emerald-600 hover:text-emerald-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
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