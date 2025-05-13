import Link from 'next/link';
import Container from '../ui/Container';
import AnimateOnScroll from '../ui/AnimateOnScroll';

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-emerald-500 to-teal-600">
      <Container>
        <AnimateOnScroll animation="fade-in visible">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              准备好开始您的烹饪之旅了吗？
            </h2>
            <p className="mt-4 text-lg leading-6 text-white text-opacity-90">
              立即注册，探索无限可能的美食世界。结合东西方烹饪传统，创造独特的美味佳肴。
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50 btn-hover-effect"
                >
                  免费开始使用
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-700 bg-opacity-60 hover:bg-opacity-70 btn-hover-effect"
                >
                  查看价格方案
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
} 