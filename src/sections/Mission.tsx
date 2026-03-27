import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Briefcase, GraduationCap, Handshake, ArrowRight } from 'lucide-react';

const missions = [
  {
    icon: Briefcase,
    title: '企業培訓',
    description: '協助台灣企業進行 AI 化，推動數位轉型。',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: GraduationCap,
    title: '教育合作',
    description: '與台灣的學校、研究機構合作，普及 AI 教育。',
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Handshake,
    title: '跨界平台',
    description: '連結香港的創意背景與台灣的技術人才，打造跨地區合作模式。',
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
  },
];

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="py-24 px-6 bg-gradient-to-b from-white to-orange-50/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">我的使命</h2>
          </div>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            現在，我正在台灣培訓學習，探索 AI 在教育與企業中的落地應用。
          </p>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {missions.map((mission, index) => (
              <motion.a
                key={mission.title}
                href={`/mission/${mission.title}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group block"
              >
                <div className="h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                  <div className={`w-14 h-14 ${mission.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <mission.icon className={`w-7 h-7 ${mission.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    {mission.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{mission.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
