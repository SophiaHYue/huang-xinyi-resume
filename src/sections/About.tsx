import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Building2, Award, ArrowRight } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">關於我</h2>
          </div>

          {/* Content Card */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-10 shadow-sm border border-orange-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              大家好，我是 <span className="font-semibold text-orange-600">黃心怡</span>，來自香港，目前隸屬於 
              <span className="font-semibold text-orange-600"> AI-SOLVE Academy</span>。
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-1">
                  <Building2 className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">學院背景</h3>
                  <p className="text-gray-600 leading-relaxed">
                    我們的學院由廣告導演文恩澄創辦，定位在 AI 應用教育，強調「實用、創新、落地」。
                    2025 年，我們在香港正式註冊為「香港人工智能培訓學院有限公司」。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">我的角色</h3>
                  <p className="text-gray-600 leading-relaxed">
                    我是其中一位代表，負責推動跨地區合作，連結香港與台灣的 AI 教育資源。
                  </p>
                </div>
              </div>
            </div>

            {/* 查看更多連結 - 跳轉站位 */}
            <div className="mt-6 pt-6 border-t border-orange-200">
              <a 
                href="/about/detail" 
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                了解更多關於我
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
