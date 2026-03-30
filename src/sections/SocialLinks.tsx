import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link2, Instagram, Youtube } from 'lucide-react';

// TikTok icon component since lucide doesn't have it
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/yues.ophia/',
    color: 'from-purple-500 via-pink-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    hoverColor: 'hover:from-purple-500 hover:via-pink-500 hover:to-orange-500',
  },
  {
    name: 'TikTok',
    icon: TikTokIcon,
    url: 'https://www.tiktok.com/@yuesphia',
    color: 'from-gray-800 to-black',
    bgColor: 'bg-gray-50',
    hoverColor: 'hover:bg-gray-800',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://www.youtube.com/@YueSophia',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    hoverColor: 'hover:bg-red-500',
  },
];

export default function SocialLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="social" className="py-24 px-6 bg-gradient-to-b from-white to-orange-50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Link2 className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">社群連結</h2>
            <p className="text-gray-600">追蹤我的社群媒體，了解更多 AI 教育資訊</p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group"
              >
                <div className={`h-full ${social.bgColor} rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 group-hover:${social.hoverColor}`}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors">
                    點擊前往
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent mx-auto mb-6" />
            <p className="text-gray-500 text-sm">
              © 2025 黃心怡 · AI-SOLVE Academy
            </p>
            <p className="text-gray-400 text-xs mt-2">
              連結香港創意 · 台灣技術
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
