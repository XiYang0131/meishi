import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import AnimateOnScroll from '../ui/AnimateOnScroll';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: '输入您的食材',
      description: '只需输入您厨房中可用的食材。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: 'from-emerald-400 to-teal-500',
    },
    {
      id: 2,
      title: '获取食谱建议',
      description: '我们的算法生成多个结合东西方烹饪传统的食谱选项。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-orange-400 to-amber-500',
    },
    {
      id: 3,
      title: '选择您喜欢的食谱',
      description: '浏览建议并选择最吸引您的食谱。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-blue-400 to-indigo-500',
    },
    {
      id: 4,
      title: '按照简单说明操作',
      description: '使用我们详细的分步说明和营养信息自信地烹饪。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      color: 'from-pink-400 to-rose-500',
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-800">
      <Container>
        <AnimateOnScroll animation="fade-in visible">
          <SectionTitle 
            title="工作原理" 
            subtitle="只需几个简单步骤，即可将您的食材转变为美味佳肴。" 
          />
        </AnimateOnScroll>
        
        <div className="mt-16">
          <div className="space-y-16">
            {steps.map((step, stepIdx) => (
              <AnimateOnScroll 
                key={step.id} 
                animation={stepIdx % 2 === 0 ? "slide-in-left visible" : "slide-in-right visible"}
                delay={stepIdx * 100}
              >
                <div
                  className={`flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center ${
                    stepIdx % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`mt-6 lg:mt-0 lg:col-span-5 ${stepIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md food-card dark:bg-gray-700">
                      <div className={`inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r ${step.color} text-white mb-4`}>
                        <span className="text-lg font-bold">{step.id}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  <div
                    className={`flex-auto lg:col-span-6 ${
                      stepIdx % 2 === 0 ? 'lg:col-start-7' : 'lg:col-start-1'
                    }`}
                  >
                    <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden shadow-lg food-card">
                      <div className={`w-full h-64 bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <div className="text-white text-center px-4">
                          {step.icon}
                          <p className="text-2xl font-bold mt-4">步骤 {step.id}</p>
                          <p className="text-lg mt-2">{step.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
} 