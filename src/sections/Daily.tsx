import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Home, Mountain, Palette, Sprout, BookOpen, Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'AI 教育的未來：從香港到台灣的跨界思考',
    date: '2026-03-25',
    excerpt: '在推動 AI 教育的過程中，我深刻體會到不同地區的優勢互補。香港擁有豐富的創意產業經驗，而台灣則具備深厚的技術人才基礎...',
  },
  {
    title: '企業數位轉型的三大關鍵要素',
    date: '2026-03-20',
    excerpt: '協助多家企業進行 AI 化轉型後，我總結出成功轉型的核心要素：明確的目標設定、漸進式的導入策略，以及持續的人才培訓...',
  },
  {
    title: '在台北生活的 AI 靈感筆記',
    date: '2026-03-15',
    excerpt: '住在中山區的日子裡，咖啡館成為我備課和思考的最佳場所。這座城市既有現代化的便利，又保留著人文氣息...',
  },
];

const dailyItems = [
  {
    icon: Home,
    title: '居住',
    content: '暫時住在台北市中山區，方便接觸教育與企業資源。',
    gradient: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Coffee,
    title: '日常',
    content: '喜歡在咖啡館備課，假日會去陽明山散步或參加藝術展覽。',
    gradient: 'from-amber-400 to-orange-400',
  },
  {
    icon: Mountain,
    title: '心情',
    content: '在城市與自然之間找到平衡，這讓我更有靈感去思考 AI 的未來。',
    gradient: 'from-green-400 to-emerald-400',
  },
];

export default function Daily() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="daily" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Sprout className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">我的生活日常</h2>
          </div>

          {/* Daily Items */}
          <div className="space-y-6">
            {dailyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-2 text-gray-400">
              <Palette className="w-5 h-5" />
              <span className="text-sm italic">生活即是靈感的來源</span>
            </div>
          </motion.div>

          {/* Blog Posts Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-brand-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">博客文章</h2>
            </div>

            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <motion.a
                  key={post.title}
                  href={`/blog/post/${index + 1}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.7 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-brand-primary transition-colors mb-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Calendar className="w-5 h-5" />
                        {post.date}
                      </div>
                      <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-50 group-hover:bg-brand-primary/10 rounded-lg flex items-center justify-center transition-colors">
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary transition-colors" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* 查看更多文章連結 - 跳轉站位 */}
            <div className="mt-8 text-center">
              <a 
                href="/blog/all" 
                className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-medium transition-colors"
              >
                查看全部文章
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
