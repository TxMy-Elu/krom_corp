"use client";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react";

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const floatingIconVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#0B1120] py-32 pt-40 pb-32">
      {/* Fond avec motif subtil */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[length:20px_20px] z-0"></div>
      
      {/* Cercles lumineux animés */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-fuchsia-500/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      {/* Icônes flottantes */}
      <motion.div 
        className="absolute top-1/3 right-1/6 text-violet-400 opacity-70"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        <Brain size={40} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 left-1/5 text-fuchsia-400 opacity-70"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        <Sparkles size={32} />
      </motion.div>
      
      <motion.div 
        className="absolute top-2/3 right-1/3 text-indigo-400 opacity-70"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.8 }}
      >
        <Zap size={36} />
      </motion.div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div 
            className="mb-6 inline-block"
            variants={itemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-400 text-lg font-medium px-4 py-1 rounded-full border border-violet-500/30 mb-4 inline-block">
              Intelligence Artificielle & Innovation
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-100 to-fuchsia-100"
            variants={itemVariants}
          >
            Krom.Corp – L&apos;intelligence <br className="hidden md:block" />
            <span className="relative">
              artificielle
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span> au service de vos idées
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-10 max-w-3xl mx-auto text-gray-300"
            variants={itemVariants}
          >
            Nous développons des solutions basées sur l&apos;intelligence artificielle pour automatiser, 
            analyser et améliorer vos processus métier avec une approche innovante et sur mesure.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 transition-all duration-300 shadow-lg hover:shadow-violet-500/25 group"
            >
              Découvrir nos services
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
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-violet-500/50 text-violet-500 hover:bg-violet-500/10 hover:text-white transition-all duration-300"
            >
              Nos réalisations
            </Button>
          </motion.div>
          
          {/* Statistiques */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {[
              { number: "50+", label: "Projets réalisés" },
              { number: "98%", label: "Clients satisfaits" },
              { number: "24/7", label: "Support technique" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
                  borderColor: "rgba(124, 58, 237, 0.5)"
                }}
              >
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-300">
                  {stat.number}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}