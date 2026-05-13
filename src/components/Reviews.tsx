import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Reviews() {
  const reviews = [
    {
      name: 'Roberto Silva',
      text: 'Melhor funilaria de Uberlândia, excelente profissional e atendimento Premium. Meu carro ficou como novo após o reparo na porta.',
      rating: 5,
      car: 'BMW 320i',
    },
    {
      name: 'Carla Mendes',
      text: 'Top, pintura perfeita! 👏🏼👏🏼👏🏼👏🏼👏🏼 Realmente superou minhas expectativas com o polimento técnico e a proteção de cerâmica.',
      rating: 5,
      car: 'Porsche Macan',
    },
    {
      name: 'João Paulo',
      text: 'Levei meu fusca para restauração e o resultado foi emocionante. Cuidado em cada detalhe, serviço de verdadeiros artesãos.',
      rating: 5,
      car: 'VW Fusca 1974',
    },
    {
      name: 'Fernanda Lima',
      text: 'Excelente atendimento desde o orçamento até a entrega. O prazo foi cumprido rigorosamente e o acabamento ficou impecável.',
      rating: 5,
      car: 'Audi A3',
    },
  ];

  return (
    <section id="avaliacoes" className="py-24 bg-dark-surface relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-red/5 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-primary-red fill-primary-red" size={20} />
            ))}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            A Voz dos Nossos <span className="text-primary-red italic underline underline-offset-8">Clientes</span>
          </motion.h2>
          <div className="flex items-center gap-4 text-gray-400">
            <span className="text-3xl font-display font-bold text-white">5.0</span>
            <div className="w-px h-10 bg-white/20"></div>
            <span className="text-sm uppercase tracking-widest text-left">Nota máxima no <br /> Google Meu Negócio</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="reviews-swiper pb-16"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="glass p-10 rounded-sm relative group h-full flex flex-col justify-between">
                  <Quote className="absolute top-6 right-6 text-primary-red opacity-10 group-hover:opacity-30 transition-opacity" size={60} />
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="text-primary-red fill-primary-red" size={14} />
                      ))}
                    </div>
                    <p className="text-xl text-gray-200 font-light italic mb-8 leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{review.name}</h4>
                    <span className="text-primary-red text-xs font-bold uppercase tracking-widest">
                      {review.car}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .reviews-swiper .swiper-pagination-bullet {
          background: #555;
          opacity: 1;
        }
        .reviews-swiper .swiper-pagination-bullet-active {
          background: #E31B23;
          width: 30px;
          border-radius: 4px;
        }
      `}} />
    </section>
  );
}
