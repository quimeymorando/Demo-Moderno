import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2" },
  { id: 5, src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 6, src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold tracking-[0.2em] text-primary-neon uppercase mb-4">Atmosphere</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">The Nova Experience.</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-auto gap-4 md:grid-rows-3 min-h-[800px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.span} min-h-[250px]`}
            >
              <img 
                src={img.src} 
                alt="Gallery Visual" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-neon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
