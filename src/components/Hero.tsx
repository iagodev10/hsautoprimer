import { motion } from 'motion/react';
import { ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621932953986-15fcfec83275?auto=format&fit=crop&q=80&w=2670"
          alt="Premium Automotive Finish"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] uppercase bg-primary-red/10 border border-primary-red/30 text-primary-red rounded-full">
              Qualidade Excepcional
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[1.1] mb-8 text-white">
              Pintura e Funilaria <br />
              <span className="text-primary-red">Premium</span> em Uberlândia
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
              Elevando o conceito de estética automotiva. Transformamos seu veículo com precisão tecnológica e acabamento impecável. 
              <span className="text-white font-medium italic backdrop-blur-sm bg-white/5 px-2 py-1 ml-1 rounded">Seu carro merece o melhor.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#servicos"
                className="group px-8 py-4 bg-primary-red hover:bg-accent-red text-white font-bold rounded-sm glow-red flex items-center gap-3 transition-all duration-300"
              >
                SOLICITAR ORÇAMENTO
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                href="https://wa.me/5534999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 text-white font-bold rounded-sm flex items-center gap-3 backdrop-blur-md transition-all duration-300"
              >
                <MessageSquare className="text-primary-red" />
                FALAR NO WHATSAPP
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 cursor-pointer"
        onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <ChevronDown size={24} className="text-primary-red" />
      </motion.div>

      <div className="absolute right-0 bottom-1/4 w-1/3 h-px bg-gradient-to-l from-primary-red/50 to-transparent"></div>
      <div className="absolute left-0 top-1/3 w-1/4 h-px bg-gradient-to-r from-primary-red/30 to-transparent"></div>
    </section>
  );
}
