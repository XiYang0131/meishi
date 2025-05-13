import Link from 'next/link';

export default function Pricing() {
  const tiers = [
    {
      name: '免费版',
      href: '/register',
      priceMonthly: '¥0',
      description: '适合初次尝试的用户',
      includedFeatures: [
        '每日10个食谱推荐',
        '基本食材匹配',
        '标准食谱说明',
        '基本营养信息',
      ],
      color: 'from-emerald-400 to-teal-500',
      textColor: 'text-emerald-600',
      buttonColor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    },
    {
      name: '高级版',
      href: '/register?plan=pro',
      priceMonthly: '¥39',
      description: '适合热爱烹饪的家庭厨师',
      includedFeatures: [
        '无限食谱推荐',
        '高级食材匹配算法',
        '详细分步食谱说明',
        '完整营养分析',
        '个性化口味偏好设置',
        '食谱收藏与分享',
        '每周膳食计划',
      ],
      color: 'from-blue-400 to-indigo-500',
      textColor: 'text-blue-600',
      buttonColor: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      featured: true,
    },
    {
      name: '大厨版',
      href: '/register?plan=chef',
      priceMonthly: '¥79',
      description: '适合专业厨师和美食爱好者',
      includedFeatures: [
        '所有高级版功能',
        'AI辅助食谱创作',
        '专业烹饪技巧视频',
        '食材替代建议',
        '批量食谱缩放',
        '优先客户支持',
        '专业厨师社区访问',
      ],
      color: 'from-orange-400 to-amber-500',
      textColor: 'text-orange-600',
      buttonColor: 'bg-gradient-to-r from-orange-500 to-amber-600',
    },
  ];

  return (
    <div id="pricing" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">价格</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            为每位厨师提供合适的方案
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            无论您是初学者还是专业厨师，我们都有适合您需求的计划
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative food-card overflow-hidden ${
                tier.featured ? 'lg:scale-105 z-10' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              )}
              <div className="bg-white p-8 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold ${tier.textColor}`}>{tier.name}</h3>
                  <div className={`mt-4 flex items-baseline text-gray-900`}>
                    <span className="text-5xl font-extrabold tracking-tight">{tier.priceMonthly}</span>
                    <span className="ml-1 text-xl font-semibold">/月</span>
                  </div>
                  <p className="mt-6 text-gray-500">{tier.description}</p>

                  <ul role="list" className="mt-6 space-y-6">
                    {tier.includedFeatures.map((feature) => (
                      <li key={feature} className="flex">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                          <svg
                            className="w-4 h-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={tier.href}
                  className={`mt-8 block w-full text-center py-3 px-6 border border-transparent rounded-md text-white font-medium ${tier.buttonColor} hover:opacity-90 transition-all btn-hover-effect`}
                >
                  开始使用{tier.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 