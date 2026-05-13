import { motion } from 'motion/react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-red">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-red via-transparent to-primary-red opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tight">
            SEU CARRO MERECE <br />
            <span className="text-dark-bg bg-white px-4 py-1 inline-block -rotate-1 mt-2">ACABAMENTO PREMIUM</span>
          </h2>
          <p className="text-white/80 text-xl md:text-2xl mb-12 font-light">
            Não comprometa a estética do seu patrimônio. Entre em contato agora e receba um orçamento exclusivo feito por especialistas.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5534999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-dark-bg text-white font-bold rounded-sm flex items-center justify-center gap-3 shadow-2xl transition-all duration-300"
              >
                <MessageSquare size={20} className="text-primary-red" />
                WHATSAPP AGORA
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.05, x: 5 }}
                href="#servicos"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-bold uppercase tracking-widest text-sm"
              >
                Veja nossos serviços
                <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-dark-bg/20"></div>
    </section>
  );
}
