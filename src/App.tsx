import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative font-sans text-white bg-dark-bg selection:bg-primary-red selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-dark-bg flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 border-t-2 border-r-2 border-primary-red rounded-sm animate-spin mb-8"></div>
              <motion.div 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <span className="text-2xl font-display font-bold tracking-widest text-white">
                  HS AUTO <span className="text-primary-red">PRIMER</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mt-2">
                  Carregando Perfeição...
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <SmoothScroll />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Reviews />
            <CTA />
            <Footer />
            <WhatsAppButton />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
