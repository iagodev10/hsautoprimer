import { motion } from 'motion/react';
import { Hammer, Palette, Sparkles, RefreshCw, CarFront, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Hammer size={32} />,
      title: 'Funilaria Automotiva',
      description: 'Recuperação precisa da lataria utilizando técnicas avançadas para manter a integridade estrutural.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Pintura Automotiva',
      description: 'Acabamento impecável com laboratório de tintas próprio e cabine de pintura de última geração.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Polimento Técnico',
      description: 'Remoção de riscos e revitalização do brilho original com proteção duradoura para a pintura.',
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'Restauração',
      description: 'Trabalho artesanal de restauração para veículos antigos e clássicos, devolvendo sua glória.',
    },
    {
      icon: <CarFront size={32} />,
      title: 'Reparos em Colisão',
      description: 'Especialistas em reparos rápidos e grandes colisões com precisão milimétrica.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Acabamento Premium',
      description: 'O nível máximo de detalhamento para entusiastas que buscam a perfeição absoluta.',
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Abstract Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-red/5 to-transparent -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-red font-bold uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Serviços Especializados
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Nossas Soluções <span className="text-primary-red">Premium</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="w-24 h-1 bg-primary-red mx-auto mb-8"
          ></motion.div>
          <p className="text-gray-400 font-light text-lg">
            Combinamos técnicas tradicionais com equipamentos digitais para entregar o melhor 
            resultado automotivo de Uberlândia e região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass p-10 rounded-sm hover-glow-red transition-all duration-500 border-l-2 border-transparent hover:border-l-primary-red"
            >
              <div className="text-primary-red mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary-red transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light mb-6">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
                Ver Detalhes <div className="w-8 h-px bg-primary-red"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
