export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: '输入您的食材',
      description: '只需输入您厨房中可用的食材。',
      image: '/placeholder-image.jpg',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      id: 2,
      title: '获取食谱建议',
      description: '我们的算法生成多个结合东西方烹饪传统的食谱选项。',
      image: '/placeholder-image.jpg',
      color: 'from-orange-400 to-amber-500',
    },
    {
      id: 3,
      title: '选择您喜欢的食谱',
      description: '浏览建议并选择最吸引您的食谱。',
      image: '/placeholder-image.jpg',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      id: 4,
      title: '按照简单说明操作',
      description: '使用我们详细的分步说明和营养信息自信地烹饪。',
      image: '/placeholder-image.jpg',
      color: 'from-pink-400 to-rose-500',
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">流程</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            工作原理
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            只需几个简单步骤，即可将您的食材转变为美味佳肴。
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-16">
            {steps.map((step, stepIdx) => (
              <div
                key={step.id}
                className={`flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center ${
                  stepIdx % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`mt-6 lg:mt-0 lg:col-span-5 ${stepIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md food-card">
                    <div className={`inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r ${step.color} text-white mb-4`}>
                      <span className="text-lg font-bold">{step.id}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">{step.description}</p>
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
                        <p className="text-2xl font-bold">步骤 {step.id}</p>
                        <p className="text-lg mt-2">{step.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 