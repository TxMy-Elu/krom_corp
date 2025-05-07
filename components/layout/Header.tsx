"use client";
import Link from 'next/link';
import { motion} from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'services', label: 'Services' },
    { id: 'advantages', label: 'Pourquoi nous' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ];

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hover: { 
      scale: 1.05, 
      textShadow: "0px 0px 12px rgba(120, 0, 255, 0.5)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10,
        yoyo: Infinity,
        duration: 1
      }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i: number) => ({
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1 + 0.3,
        duration: 0.5
      }
    }),
    hover: { 
      scale: 1.1, 
      color: "#7C3AED",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
      style={{ 
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 0.7)',
        backdropFilter: `blur(${scrolled ? '8px' : '0px'})`,
        boxShadow: scrolled ? '0 4px 20px rgba(124, 58, 237, 0.3)' : 'none'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
            Krom<span className="font-light">.Corp</span>
          </Link>
        </motion.div>

        {/* Navigation pour desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.id}
                custom={index}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <Link 
                  href={`#${item.id}`} 
                  className="font-medium text-gray-200 hover:text-violet-400 transition-colors relative group"
                >
                  {item.label}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-400 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Bouton Contact pour desktop */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button 
            variant="default" 
            size="sm"
            className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-violet-500/20"
          >
            Démarrer un projet
          </Button>
        </motion.div>

        {/* Menu burger pour mobile */}
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-violet-400 hover:text-violet-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </motion.div>
      </div>

      {/* Menu mobile */}
      <motion.div 
        className="md:hidden fixed top-0 right-0 h-screen w-4/5 bg-slate-900 shadow-2xl z-50 pt-20 px-6"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <ul className="flex flex-col space-y-6">
          {menuItems.map((item, index) => (
            <motion.li 
              key={item.id}
              variants={mobileItemVariants}
              custom={index}
              className="border-b border-slate-800 pb-2"
            >
              <Link 
                href={`#${item.id}`} 
                className="text-xl font-medium text-gray-200 hover:text-violet-400 transition-colors block"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
          <motion.li variants={mobileItemVariants} className="pt-4">
            <Button 
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600"
              onClick={() => setIsOpen(false)}
            >
              Démarrer un projet
            </Button>
          </motion.li>
        </ul>
      </motion.div>

      {/* Overlay pour fermer le menu mobile */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </motion.header>
  );
}