import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, GraduationCap, Briefcase, Wrench, Download, Award, ArrowRight } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    title: '學歷背景',
    items: ['香港大學 — 傳播與媒體學系'],
  },
];

const experience = [
  {
    icon: Briefcase,
    title: '工作經歷',
    items: [
      'AI-SOLVE Academy 代表',
      '香港人工智能培訓學院有限公司 創始成員',
      '跨地區 AI 教育平台推動者',
    ],
  },
];

const skills = [
  {
    icon: Wrench,
    title: '專業技能',
    items: [
      'AI 應用教育與培訓',
      '跨界平台設計與整合',
      '企業數位轉型顧問',
      '教育機構合作規劃',
    ],
  },
];

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-brand-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">個人簡歷</h2>
            </div>
            
            {/* Download Button */}
            <button className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
              <Download className="w-4 h-4" />
              下載 PDF
            </button>
          </div>

          {/* Resume Content */}
          <div className="space-y-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">學歷</h3>
              </div>
              <ul className="space-y-2">
                {education[0].items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">經歷</h3>
              </div>
              <ul className="space-y-2">
                {experience[0].items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">技能</h3>
              </div>
              <ul className="space-y-2">
                {skills[0].items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-6 border border-brand-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">認證與成就</h3>
              </div>
              <p className="text-gray-600">
                香港人工智能培訓學院有限公司註冊成員，致力於推動 AI 教育普及與跨地區合作。
              </p>
            </motion.div>
          </div>

          {/* Mobile Download Button */}
          <div className="mt-8 text-center md:hidden">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow-md transition-all duration-300">
              <Download className="w-5 h-5" />
              下載 PDF 簡歷
            </button>
          </div>

          {/* 查看完整簡歷連結 - 跳轉站位 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <a 
              href="/resume/full" 
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-medium transition-colors"
            >
              查看完整簡歷
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
