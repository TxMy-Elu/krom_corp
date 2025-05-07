"use client";
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, MessageSquareText, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Intelligence artificielle & Machine Learning",
      description: "Développement de modèles d'IA adaptés à vos besoins spécifiques",
      icon: <Brain className="w-12 h-12" />,
      color: "from-violet-500 to-indigo-600"
    },
    {
      title: "Analyse de données avancée",
      description: "Extraction d'insights précieux à partir de vos données",
      icon: <BarChart3 className="w-12 h-12" />,
      color: "from-fuchsia-500 to-purple-600"
    },
    {
      title: "Traitement automatique du langage (NLP)",
      description: "Compréhension et génération de texte pour vos applications",
      icon: <MessageSquareText className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Automatisation intelligente des tâches",
      description: "Optimisation de vos processus grâce à l'IA",
      icon: <Settings className="w-12 h-12" />,
      color: "from-pink-500 to-rose-600"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    show: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-16 pt-0 mt-[-150px] relative overflow-hidden bg-[#0B1120]">
      {/* Suppression de l'élément de transition supérieur qui crée une ligne visible */}
      
      {/* Fond avec motif subtil - identique au Hero pour continuité */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[length:20px_20px] z-0"></div>
      
      {/* Cercles lumineux animés avec opacité ajustée */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-violet-600/15 blur-3xl"
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
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-fuchsia-500/15 blur-3xl"
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

      <div className="container mx-auto px-4 relative z-10 pt-[120px]">
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
            Nos solutions
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-100 to-fuchsia-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Nos domaines d&apos;expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Découvrez comment notre expertise en IA peut transformer votre entreprise
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-violet-500/50 transition-all duration-300 overflow-hidden group">
                <CardHeader className="relative pb-0">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" style={{ background: `linear-gradient(to bottom right, var(--${service.color.split(' ')[0].substring(5)}), var(--${service.color.split(' ')[1].substring(3)}))` }} />
                  
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} text-white`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {service.icon}
                  </motion.div>
                  
                  <CardTitle className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                  
                  <motion.div 
                    className="mt-6 flex items-center text-violet-400 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span>En savoir plus</span>
                    <motion.span 
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "loop" 
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}