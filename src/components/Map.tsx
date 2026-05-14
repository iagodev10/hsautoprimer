import { motion } from 'motion/react';

export default function Map() {
  return (
    <section id="localizacao" className="w-full h-[500px] md:h-[600px] relative overflow-hidden bg-dark-bg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.6001393468196!2d-48.236475623909286!3d-18.949085208516237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bad198529393b1%3A0x16bf30de0cf0a0a2!2sHS%20Auto%20Primer%20Funilaria%20e%20Pintura%20Automotiva!5e0!3m2!1spt-BR!2sbr!4v1778717362882!5m2!1spt-BR!2sbr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização HS Auto Primer"
      ></iframe>
      
      {/* Floating Info Card (Optional but looks professional) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute top-10 left-6 md:left-20 bg-dark-bg/90 backdrop-blur-md p-6 border border-white/10 rounded-sm shadow-2xl max-w-xs pointer-events-none"
      >
        <h3 className="text-white font-display font-bold text-xl mb-2">Visite nossa Oficina</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Av. Seme Simão, 545 - Granada, Uberlândia - MG
        </p>
        <div className="flex items-center gap-2 text-primary-red font-bold text-xs uppercase tracking-widest">
          <div className="w-4 h-0.5 bg-primary-red"></div>
          Como chegar
        </div>
      </motion.div>
    </section>
  );
}
