"use client";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Bot, ShoppingCart, Mail } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Un chatbot RH intelligent",
      client: "Grande entreprise",
      description: "Automatisation des réponses aux questions fréquentes des employés",
      icon: <Bot className="w-8 h-8" />,
      color: "from-violet-500 to-indigo-600"
    },
    {
      title: "IA de prédiction de ventes",
      client: "Secteur retail",
      description: "Optimisation des stocks et prévisions de ventes précises",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-fuchsia-500 to-purple-600"
    },
    {
      title: "Automatisation de traitement de mails",
      client: "Service client",
      description: "Tri et réponse automatique aux emails entrants",
      icon: <Mail className="w-8 h-8" />,
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
    hidden: { scale: 0, rotate: -10 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0B1120]">
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
            Nos réalisations
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-100 to-fuchsia-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Exemples de projets récents
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Découvrez comment nous avons transformé les défis de nos clients en solutions innovantes
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-violet-500/50 transition-all duration-300 overflow-hidden group">
                <CardHeader className="relative pb-0">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" style={{ background: `linear-gradient(to bottom right, var(--${project.color.split(' ')[0].substring(5)}), var(--${project.color.split(' ')[1].substring(3)}))` }} />
                  
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${project.color} text-white`}
                    variants={iconVariants}
                  >
                    {project.icon}
                  </motion.div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="mt-2 bg-slate-700/50 text-violet-300 border-violet-500/30">
                        {project.client}
                      </Badge>
                    </div>
                    <motion.div 
                      className="bg-slate-700/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ 
                        rotate: 45,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-violet-400" />
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <motion.div 
                    className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-700"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}