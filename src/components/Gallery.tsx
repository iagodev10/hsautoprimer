import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1635352723068-ffb493630f5c?auto=format&fit=crop&q=80&w=1200',
      title: 'Pintura Esportiva',
      category: 'Pintura'
    },
    {
      src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200',
      title: 'Polimento Técnico',
      category: 'Estética'
    },
    {
      src: 'https://images.unsplash.com/photo-1621932953986-15fcfec83275?auto=format&fit=crop&q=80&w=1200',
      title: 'Funilaria Especializada',
      category: 'Funilaria'
    },
    {
      src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200',
      title: 'Restauração Completa',
      category: 'Restauração'
    },
    {
      src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1200',
      title: 'Acabamento Premium',
      category: 'Pintura'
    },
    {
      src: 'https://images.unsplash.com/photo-1542362567-b055002b91f4?auto=format&fit=crop&q=80&w=1200',
      title: 'Reparo de Colisão',
      category: 'Funilaria'
    },
  ];

  return (
    <section id="galeria" className="py-24 bg-dark-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary-red font-bold uppercase tracking-[0.4em] text-xs mb-4 block"
            >
              Nossos Trabalhos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-white"
            >
              Resultados <span className="text-primary-red italic">Impecáveis</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-4"
          >
            {['Tudo', 'Pintura', 'Funilaria', 'Estética'].map((filter, i) => (
              <button
                key={i}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-wider border rounded-full transition-all duration-300 ${
                  i === 0 ? 'bg-primary-red border-primary-red text-white' : 'border-white/20 text-gray-400 hover:border-primary-red hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary-red font-bold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {image.title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-4 h-4 border-2 border-t-primary-red border-r-primary-red border-transparent rotate-45"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm font-light uppercase tracking-[0.2em] mb-4">Veja mais do nosso cotidiano</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-bold group"
          >
            Siga-nos no Instagram
            <div className="w-12 h-px bg-primary-red group-hover:w-20 transition-all duration-500"></div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
