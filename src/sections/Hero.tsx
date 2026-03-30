import { motion } from 'framer-motion';
import { MapPin, Sparkles, FileText } from 'lucide-react';

export default function Hero() {
  const bgImageUrl = `${import.meta.env.BASE_URL}images/taipei-hk-bg.jpg`;
  const avatarUrl = `${import.meta.env.BASE_URL}images/avatar.jpg`;

  const scrollToResume = () => {
    const element = document.getElementById('resume');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Avatar */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full blur-lg opacity-60" />
            <img
              src={avatarUrl}
              alt="黃心怡"
              className="relative w-full h-full object-cover rounded-full border-4 border-white/80 shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-2 rounded-full shadow-lg">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            黃心怡
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-4 drop-shadow-md">
            AI 應用教育推動者
          </p>
          
          {/* Subtitle */}
          <p className="text-lg text-white/70 mb-6">
            AI-SOLVE Academy 代表
          </p>
          
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/30 mb-8">
            <MapPin className="w-5 h-5 text-orange-300" />
            <span className="text-white/90 text-sm">來自香港 · 現居台北</span>
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button 
              onClick={scrollToResume}
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              查看簡歷
            </button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/80 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
