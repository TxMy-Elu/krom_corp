"use client";
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Users } from "lucide-react";

export default function Advantages() {
  const advantages = [
    {
      title: "Expertise pointue en IA appliquée",
      description: "Notre équipe est composée d'experts en intelligence artificielle avec une expérience concrète dans divers secteurs.",
      icon: <CheckCircle className="w-10 h-10" />,
      color: "from-violet-500 to-indigo-600"
    },
    {
      title: "Solutions sur-mesure et évolutives",
      description: "Nous concevons des solutions qui s'adaptent parfaitement à vos besoins actuels et futurs.",
      icon: <Zap className="w-10 h-10" />,
      color: "from-fuchsia-500 to-purple-600"
    },
    {
      title: "Collaboration étroite avec vos équipes métier",
      description: "Nous travaillons main dans la main avec vos équipes pour garantir des résultats alignés avec vos objectifs.",
      icon: <Users className="w-10 h-10" />,
      color: "from-blue-500 to-cyan-600"
    }
  ];

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

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="advantages" className="py-24 relative overflow-hidden bg-[#0B1120]">
      {/* Fond avec motif subtil */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[length:20px_20px] z-0"></div>
      
      {/* Cercles lumineux animés */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-violet-500/10 text-violet-300 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nos atouts
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-100 to-fuchsia-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Pourquoi Krom.Corp ?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Découvrez ce qui fait de nous le partenaire idéal pour vos projets d&apos;intelligence artificielle
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantages.map((advantage, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-violet-500/50 rounded-xl p-8 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${advantage.color} text-white`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {advantage.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-violet-300 transition-colors duration-300">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {advantage.description}
                </p>
                
                <motion.div 
                  className="mt-6 h-1 w-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}