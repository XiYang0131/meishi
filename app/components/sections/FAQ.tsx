'use client';

import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import AnimateOnScroll from '../ui/AnimateOnScroll';

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
      question: "如何查看食谱的营养信息？",
      answer: "每个食谱都附有详细的营养分析，包括卡路里、蛋白质、碳水化合物、脂肪、维生素和矿物质含量。您可以在食谱详情页面查看这些信息，帮助您做出符合健康目标的选择。",
      color: "from-orange-400 to-amber-500"
    },
    {
      question: "我可以保存喜欢的食谱吗？",
      answer: "是的，您可以将喜欢的食谱保存到个人收藏夹中，方便日后查看。您还可以为食谱添加个人笔记，记录您的修改或想法。",
      color: "from-pink-400 to-rose-500"
    },
    {
      question: "CulinaryFusion 支持哪些语言？",
      answer: "目前，我们的平台支持中文、英文、日文、韩文和法文。我们计划在未来添加更多语言支持。",
      color: "from-purple-400 to-violet-500"
    }
  ];

  return (
    <section id="faq" className="bg-white py-16 sm:py-24 dark:bg-gray-900">
      <Container>
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200 dark:divide-gray-700">
          <AnimateOnScroll animation="fade-in visible">
            <SectionTitle 
              title="常见问题" 
              subtitle="关于 CulinaryFusion 的常见问题解答" 
            />
          </AnimateOnScroll>
          
          <dl className="mt-10 space-y-6 divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="fade-in visible" 
                delay={index * 100}
              >
                <div className="pt-6">
                  <dt className="text-lg">
                    <button
                      onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                      className="text-left w-full flex justify-between items-center text-gray-900 dark:text-white focus:outline-none"
                    >
                      <span className="font-medium">{faq.question}</span>
                      <span className={`ml-6 h-7 flex items-center ${openIndex === index ? 'transform rotate-180' : ''}`}>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      <p className="text-base text-gray-500 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </dd>
                </div>
              </AnimateOnScroll>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
} 