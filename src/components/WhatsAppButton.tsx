import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/5534999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl glow-green"
    >
      <MessageCircle size={32} />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></span>
      
      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-dark-bg px-4 py-2 rounded-sm text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        Fale Conosco
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .glow-green {
          box-shadow: 0 0 20px rgba(37, 211, 102, 0.4);
        }
      `}} />
    </motion.a>
  );
}
