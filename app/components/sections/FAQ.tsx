'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "如何进行食材匹配？",
      answer: "我们的算法会分析您可用的食材，并将其与我们广泛的食谱数据库进行比较。它考虑了东西方烹饪传统中的风味特点、烹饪方法和传统搭配，为您的食材推荐最合适的食谱。",
      color: "from-emerald-400 to-teal-500"
    },
    {
      question: "我可以指定饮食限制吗？",
      answer: "当然可以！您可以设置素食、纯素、无麸质、无乳制品等多种饮食需求的偏好。我们的系统只会推荐符合您要求的食谱。",
      color: "from-blue-400 to-indigo-500"
    },
    {
      question: "卡路里信息有多准确？",
      answer: "我们的营养计算基于标准的食品成分数据，通常在10%的误差范围内。如需精确的饮食跟踪，我们建议咨询营养师。",
      color: "from-orange-400 to-amber-500"
    },
    {
      question: "我可以保存我喜欢的食谱吗？",
      answer: "是的！创建账户后，您可以保存喜欢的食谱，创建膳食计划，甚至与社区分享您自己改编的食谱。",
      color: "from-pink-400 to-rose-500"
    },
    {
      question: "涵盖哪些烹饪风格？",
      answer: "我们专注于结合东西方烹饪传统，特别强调中国、日本、韩国、意大利、法国和美国烹饪。我们的目标是创造真正的全球融合美食体验。",
      color: "from-purple-400 to-violet-500"
    },
    {
      question: "如何提供反馈？",
      answer: "我们非常重视用户反馈！您可以通过应用内的反馈表单、电子邮件或社交媒体渠道与我们联系。我们的团队会认真考虑每一条建议，不断改进平台。",
      color: "from-red-400 to-rose-500"
    },
  ];

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            常见问题
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg">
                  <button
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    className="text-left w-full flex justify-between items-center focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className={`mr-4 h-8 w-8 rounded-full bg-gradient-to-r ${faq.color} flex items-center justify-center text-white font-medium`}>
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-900">{faq.question}</span>
                    </div>
                    <span className="ml-6 flex-shrink-0">
                      <svg
                        className={`h-6 w-6 transform ${
                          openIndex === index ? 'rotate-180' : 'rotate-0'
                        } transition-transform duration-200 ease-in-out text-emerald-500`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={`mt-4 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-12 pr-6 pb-2">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
} 