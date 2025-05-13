import Link from 'next/link';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import AnimateOnScroll from '../ui/AnimateOnScroll';

export default function Pricing() {
  const tiers = [
    {
      name: '免费版',
      price: '¥0',
      description: '适合初次尝试的用户',
      features: [
        '每日最多5个食谱推荐',
        '基本食材匹配',
        '有限的食谱库访问',
        '基本营养信息',
      ],
      cta: '开始使用',
      color: 'from-emerald-500 to-teal-500',
      mostPopular: false,
    },
    {
      name: '高级版',
      price: '¥39',
      period: '/月',
      description: '适合热爱烹饪的家庭',
      features: [
        '无限食谱推荐',
        '高级食材匹配算法',
        '完整食谱库访问',
        '详细营养分析',
        '个性化饮食计划',
        '无广告体验',
      ],
      cta: '免费试用14天',
      color: 'from-blue-500 to-indigo-500',
      mostPopular: true,
    },
    {
      name: '专业版',
      price: '¥99',
      period: '/月',
      description: '适合专业厨师和餐厅',
      features: [
        '所有高级版功能',
        '批量食谱生成',
        '专业营养分析',
        '成本计算工具',
        '菜单规划助手',
        '优先客户支持',
      ],
      cta: '联系销售',
      color: 'from-purple-500 to-violet-500',
      mostPopular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-800">
      <Container>
        <AnimateOnScroll animation="fade-in visible">
          <SectionTitle 
            title="价格方案" 
            subtitle="选择最适合您需求的方案，开始您的烹饪之旅。" 
          />
        </AnimateOnScroll>
        
        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="zoom-in visible" 
              delay={index * 100}
            >
              <div className={`relative flex flex-col rounded-2xl shadow-lg overflow-hidden food-card ${
                tier.mostPopular ? 'border-2 border-emerald-500 dark:border-emerald-400' : 'border border-gray-200 dark:border-gray-700'
              }`}>
                {tier.mostPopular && (
                  <div className="absolute top-0 right-0 pt-2 pr-4">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      最受欢迎
                    </span>
                  </div>
                )}
                <div className={`p-8 bg-white dark:bg-gray-800 ${tier.mostPopular ? 'bg-opacity-90' : ''}`}>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tier.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{tier.price}</span>
                      {tier.period && <span className="ml-1 text-xl font-semibold text-gray-500 dark:text-gray-400">{tier.period}</span>}
                    </div>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{tier.description}</p>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between p-8 bg-white dark:bg-gray-800 space-y-6">
                  <ul className="space-y-4">
                    {tier.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-emerald-500 dark:text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-500 dark:text-gray-400">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link
                      href="/get-started"
                      className={`w-full flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r ${tier.color} hover:opacity-90 btn-hover-effect`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
} 