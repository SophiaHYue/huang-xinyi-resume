import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function ProfileCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="profile" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800" ref={ref}>
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-brand-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">數位名片</h2>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-brand-primary to-blue-600 p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white/30 overflow-hidden">
                <img
                  src="/images/avatar.jpg"
                  alt="黃心怡"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white">黃心怡</h3>
              <p className="text-white/80 mt-1">AI-SOLVE Academy 代表</p>
            </div>
            
            {/* Card Body */}
            <div className="p-6">
              {/* Contact Info */}
              <div className="flex items-center gap-3 mb-6 text-gray-600">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-700">contact@ai-solve.academy</p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="border-t border-gray-100 pt-6">
                <p className="text-sm text-gray-400 mb-4 text-center">社交連結</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Github className="w-6 h-6 text-gray-700" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sky-50 hover:bg-sky-100 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-6 h-6 text-sky-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
