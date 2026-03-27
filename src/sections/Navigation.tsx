import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, FileText, BookOpen, Link2 } from 'lucide-react';

// 導航項目 - 可點擊跳轉到對應頁面
const navItems = [
  { id: 'hero', label: '首頁', icon: Home, href: '/' },
  { id: 'resume', label: '簡歷', icon: FileText, href: '/resume' },
  { id: 'blog', label: '博客', icon: BookOpen, href: '/blog' },
  { id: 'social', label: '社群', icon: Link2, href: '/social' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // 處理導航點擊 - 目前先滾動到對應區塊，之後可改為路由跳轉
  const handleNavClick = (item: typeof navItems[0]) => {
    // TODO: 之後改為 React Router 跳轉
    // window.location.href = item.href;
    
    // 目前先滾動到對應區塊
    scrollToSection(item.id);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        <div className="mx-4 mt-4">
          <nav className="max-w-xl mx-auto bg-white/90 backdrop-blur-lg rounded-full shadow-lg border border-gray-100 px-6 py-3">
            <ul className="flex items-center justify-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-brand-primary hover:bg-brand-primary/10 transition-all duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="mx-4 mt-4">
          <nav className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 px-4 py-3 flex items-center justify-between">
            <span className="font-bold text-gray-800">黃心怡</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4"
            >
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:text-brand-primary hover:bg-brand-primary/10 transition-all duration-200"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      <span className="ml-auto text-xs text-gray-400">{item.href}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
