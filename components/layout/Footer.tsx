"use client";
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, FileText } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" /> },
    { name: "Contact", icon: <Mail className="w-5 h-5" /> },
    { name: "Mentions légales", icon: <FileText className="w-5 h-5" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <footer className="py-12 relative overflow-hidden bg-[#0B1120]">
      {/* Fond avec motif subtil */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[length:20px_20px] z-0"></div>
      
      {/* Ligne décorative supérieure */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-100 to-fuchsia-100">
              Krom.Corp
            </h3>
            <p className="text-gray-400 max-w-md">
              Nous développons des solutions d&apos;intelligence artificielle innovantes pour transformer votre entreprise et optimiser vos processus.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Restez connecté</h3>
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {links.map((link) => (
                <motion.a 
                  key={link.name}
                  href="#" 
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="p-3 bg-slate-800/70 hover:bg-violet-500/20 rounded-full text-gray-300 hover:text-violet-300 transition-colors duration-300 flex items-center justify-center"
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent mb-8"></div>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© 2025 Krom.Corp – Propulsez votre entreprise avec l&apos;IA</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {links.map((link) => (
              <a 
                key={link.name}
                href="#" 
                className="hover:text-violet-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}