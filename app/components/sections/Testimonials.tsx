import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import AnimateOnScroll from '../ui/AnimateOnScroll';

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
    <section id="testimonials" className="bg-white py-16 sm:py-24 dark:bg-gray-900">
      <Container>
        <AnimateOnScroll animation="fade-in visible">
          <SectionTitle 
            title="用户评价" 
            subtitle="了解CulinaryFusion如何改变人们在家烹饪的方式。" 
          />
        </AnimateOnScroll>
        
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="zoom-in visible" 
                delay={index * 100}
              >
                <div className="food-card overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${testimonial.color}`}></div>
                  <div className="bg-white p-8 shadow-md h-full flex flex-col justify-between dark:bg-gray-800">
                    <div>
                      <svg className="h-8 w-8 text-emerald-500 dark:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="mt-4 text-base text-gray-500 dark:text-gray-300">{testimonial.content}</p>
                    </div>
                    <div className="mt-6">
                      <p className="text-base font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
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