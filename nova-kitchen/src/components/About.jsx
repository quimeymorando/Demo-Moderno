import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Decorative Neon Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-neon/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img 
                src="/images/about_chef.png" 
                alt="Chef plating food" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hidden md:block"
            >
              <p className="text-4xl font-display font-bold text-white mb-1">10<span className="text-primary-neon">+</span></p>
              <p className="text-sm text-white/50 uppercase tracking-wider">Years of<br/>Excellence</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-[0.2em] text-primary-neon uppercase mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Redefining Urban Dining.</h3>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 font-light leading-relaxed mb-6"
          >
            At Nova Kitchen, we believe that food is more than sustenance—it is an experience, an art form, and a medium for connection. Born from the vibrant energy of the city, our culinary approach blends traditional techniques with modern innovation.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/60 font-light leading-relaxed mb-10"
          >
            Every dish is crafted with precision, using the finest local ingredients to create bold, unforgettable flavors in a sleek, sophisticated atmosphere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#reservation" className="inline-flex items-center gap-2 pb-2 border-b border-primary-neon text-white font-medium hover:text-primary-neon transition-colors">
              Discover More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
