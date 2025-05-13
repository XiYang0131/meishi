export default function Testimonials() {
  const testimonials = [
    {
      content: "CulinaryFusion 改变了我的烹饪习惯。我过去常常浪费很多食物，但现在我可以用冰箱里的任何食材创造美味佳肴。东西方烹饪的融合为我的家人带来了我们从未尝试过的美味！",
      author: "张丽",
      role: "家庭厨师",
      color: "from-emerald-400 to-teal-500",
    },
    {
      content: "作为一名忙碌的专业人士，我没有时间计划复杂的餐点。这个平台彻底改变了我的生活 - 我只需输入我有的食材，它就会给我提供创意、健康的选择。卡路里跟踪功能帮助我在享受美食的同时保持健身目标。",
      author: "李明",
      role: "软件工程师",
      color: "from-blue-400 to-indigo-500",
    },
    {
      content: "我一直对烹饪亚洲美食感到畏惧，但CulinaryFusion通过清晰的指导和巧妙的食材替代使其变得容易上手。现在我可以自信地用当地超市的食材准备来自世界各地的美食。",
      author: "王芳",
      role: "美食爱好者",
      color: "from-orange-400 to-amber-500",
    },
  ];

  return (
    <div id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">用户评价</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            家庭厨师的挚爱
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            了解CulinaryFusion如何改变人们在家烹饪的方式。
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="food-card overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${testimonial.color}`}></div>
                <div className="bg-white p-8 shadow-md h-full flex flex-col justify-between">
                  <div>
                    <svg className={`h-8 w-8 text-gradient-to-r ${testimonial.color}`} fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-4 text-base text-gray-500">{testimonial.content}</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 