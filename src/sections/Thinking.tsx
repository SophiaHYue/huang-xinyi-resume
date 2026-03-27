import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Link2, Sparkles, ArrowRight } from 'lucide-react';

export default function Thinking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="thinking" className="py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">我的思考</h2>
          </div>

          {/* Main Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100 overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-rose-100 to-orange-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              {/* Quote mark */}
              <div className="text-6xl text-orange-200 font-serif mb-4">"</div>
              
              <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed mb-6">
                AI 不只是技術，它是一種
                <span className="relative inline-block mx-2">
                  <span className="relative z-10 text-orange-600">文化的橋樑</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-200/50 -z-0" />
                </span>
              </p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  在香港，我看到創意與影像的力量；在台灣，我感受到技術與人才的深度。
                </p>
                <p className="font-medium text-gray-700">
                  我的目標，是讓這兩種力量結合，成為一個真正的
                  <span className="text-orange-600 mx-1">跨地區 AI 教育平台</span>。
                </p>
              </div>
              
              {/* Bridge icon */}
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm text-gray-500">連結兩地，共創未來</span>
              </div>
            </div>
          </motion.div>

          {/* Key points */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <motion.a
              href="/thinking/hk"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-orange-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="font-semibold text-gray-700">香港優勢</span>
              </div>
              <p className="text-sm text-gray-600">創意與影像的力量</p>
            </motion.a>
            
            <motion.a
              href="/thinking/tw"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-orange-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="font-semibold text-gray-700">台灣優勢</span>
              </div>
              <p className="text-sm text-gray-600">技術與人才的深度</p>
            </motion.a>
          </div>

          {/* 查看更多思考連結 - 跳轉站位 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <a 
              href="/thinking/all" 
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
            >
              閱讀更多思考
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
