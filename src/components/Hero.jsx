import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_bg.png" 
          alt="Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-primary-neon">
            Est. 2026 • Urban Dining
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-white mb-6 uppercase leading-none"
        >
          Nova <br className="md:hidden" /> Kitchen
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/70 max-w-2xl font-light mb-10"
        >
          Modern flavors. Urban atmosphere. <br className="hidden md:block"/> 
          A culinary journey where tradition meets neon vitality.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a href="#reservation" className="group relative px-8 py-4 bg-primary-neon text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            <span className="relative z-10">Reserve Table</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
          </a>
          <a href="#menu" className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary-neon to-transparent"
        />
      </motion.div>
    </section>
  );
}
