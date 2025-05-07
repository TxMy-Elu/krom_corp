"use client";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B1120]">
      {/* Fond avec motif subtil */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[length:20px_20px] z-0"></div>
      
      {/* Cercles lumineux animés */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-violet-600/15 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-fuchsia-500/15 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700 p-10 shadow-xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div 
              className="mb-6 inline-block"
              variants={itemVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-400 text-lg font-medium px-4 py-1 rounded-full border border-violet-500/30 mb-4 inline-block">
                Contactez-nous
              </span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-100 to-fuchsia-100"
              variants={itemVariants}
            >
              Discutons de votre projet
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto text-gray-300"
              variants={itemVariants}
            >
              Vous avez une idée, un besoin, une question ? Notre équipe d&apos;experts est prête à vous accompagner dans votre démarche d&apos;innovation.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 transition-all duration-300 shadow-lg hover:shadow-violet-500/25 group px-8 py-6 text-lg"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Prenez contact avec notre équipe
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center justify-center gap-2 text-gray-400"
              variants={itemVariants}
            >
              <Sparkles className="h-5 w-5 text-violet-400" />
              <p className="text-lg">
                Nous concevons avec vous l&apos;IA qui fera la différence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}