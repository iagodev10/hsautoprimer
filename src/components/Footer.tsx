import { Instagram, MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-primary-red flex items-center justify-center rounded-sm rotate-45">
                <span className="text-white font-bold text-lg -rotate-45">HS</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">
                AUTO <span className="text-primary-red">PRIMER</span>
              </span>
            </div>
            <p className="text-gray-500 font-light leading-relaxed mb-8">
              Referência em pintura e funilaria de alto padrão em Uberlândia. 
              Compromisso com a perfeição e satisfação total de nossos clientes.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/hsautoprimerpinturaautomotiva" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-primary-red hover:border-primary-red transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:contato@hsautoprimer.com.br" 
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-primary-red hover:border-primary-red transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
              <div className="w-4 h-0.5 bg-primary-red"></div>
              Contato
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary-red shrink-0" size={20} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Av. Seme Simão, 545 - Granada,<br /> Uberlândia - MG
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary-red shrink-0" size={20} />
                <span className="text-gray-400 text-sm">(34) 99999-9999</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
              <div className="w-4 h-0.5 bg-primary-red"></div>
              Horários
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Clock className="text-primary-red shrink-0" size={20} />
                <div className="text-sm">
                  <p className="text-white font-medium">Segunda - Sexta</p>
                  <p className="text-gray-500">08:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-5 shrink-0"></div>
                <div className="text-sm">
                  <p className="text-white font-medium">Sábado</p>
                  <p className="text-gray-500">08:00 - 12:00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
              <div className="w-4 h-0.5 bg-primary-red"></div>
              Localização
            </h4>
            <div className="h-40 glass rounded-sm overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m3!1d3774.228186145322!2d-48.248386!3d-18.943960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4457e88229fbb%3A0x6a0a73d328328fbb!2sAv.%20Seme%20Sim%C3%A3o%2C%20545%20-%20Granada%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038410-000!5e0!3m2!1sen!2sbr!4v1715636111111!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs text-center md:text-left">
            © {currentYear} HS Auto Primer Funilaria e Pintura. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
