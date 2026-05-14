import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, Users } from 'lucide-react';
import professionalImg from '../img/professional.png';

export default function About() {
  const stats = [
    { icon: <Award className="text-primary-red" />, value: '15+', label: 'Anos de Experiência' },
    { icon: <Users className="text-primary-red" />, value: '5.000+', label: 'Veículos Restaurados' },
    { icon: <ShieldCheck className="text-primary-red" />, value: '100%', label: 'Garantia de Qualidade' },
    { icon: <Clock className="text-primary-red" />, value: 'Prazos', label: 'Entrega Ágil' },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="z-10 relative">
              <img
                src={professionalImg}
                alt="Professional Workshop"
                className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary-red/30 -z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-red font-bold uppercase tracking-widest text-sm mb-4 block">Excelência Automotiva</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white leading-tight">
              Mais de uma década cuidando da <span className="italic text-primary-red">estética do seu veículo</span>.
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed font-light">
              Na HS Auto Primer, entendemos que seu carro é mais do que transporte — é um investimento e uma paixão. 
              Localizada em Uberlândia, nossa oficina é referência em funilaria e pintura de alto padrão, utilizando 
              insumos de primeira linha e tecnologia de ponta para garantir o acabamento original de fábrica.
            </p>
            <ul className="space-y-4 mb-10">
              {['Cabine de pintura moderna', 'Profissionais altamente especializados', 'Sistema de tintas de alta precisão', 'Atendimento personalizado'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <div className="w-2 h-2 bg-primary-red rotate-45"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-sm text-center group hover:border-primary-red/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
