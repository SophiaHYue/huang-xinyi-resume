import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, School, Rocket, Building2, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: School,
    title: '教育機構',
    description: '推動 AI 教育普及，與學校及研究機構建立合作關係。',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Rocket,
    title: '新創公司',
    description: '打造跨界案例，結合創意與技術開發創新應用。',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Building2,
    title: '大型企業',
    description: '提供在職培訓，成為數位轉型的夥伴。',
    color: 'from-orange-400 to-amber-500',
  },
];

export default function NextSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="next-steps" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-rose-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">下一步</h2>
          </div>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            我正在挑選合作公司，可能的方向包括：
          </p>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.a
                key={step.title}
                href={`/cooperation/${step.title}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group relative block"
              >
                <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                  {/* Number badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    {step.title}
                    <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="font-semibold">有興趣合作？歡迎聯繫我</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
