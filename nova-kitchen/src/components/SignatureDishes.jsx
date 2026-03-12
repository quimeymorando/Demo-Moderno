import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const dishes = [
  {
    id: 1,
    name: "Truffle Wagyu Tartare",
    desc: "A5 Wagyu, cured egg yolk, black truffle shavings",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    price: "$45"
  },
  {
    id: 2,
    name: "Miso Glazed Black Cod",
    desc: "Sweet saikyo miso, charred scallion, baby bok choy",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800",
    price: "$38"
  },
  {
    id: 3,
    name: "Smoked Duck Breast",
    desc: "Cherry demi-glace, parsnip purée, crispy skin",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
    price: "$42"
  },
  {
    id: 4,
    name: "Nova Chocolate Sphere",
    desc: "Dark chocolate, raspberry gel, gold leaf",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    price: "$22"
  }
];

export default function SignatureDishes() {
  return (
    <section id="signature" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-[0.2em] text-primary-neon uppercase mb-4">Masterpieces</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Signature Dishes.</h3>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="#menu" 
            className="flex items-center gap-2 pb-1 border-b border-white/20 text-white/70 hover:text-white hover:border-white transition-all group"
          >
            <span>View Full Menu</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-2xl font-display font-bold text-white mb-2">{dish.name}</h4>
                    <p className="text-white/70 font-light">{dish.desc}</p>
                  </div>
                  <span className="text-xl font-bold text-primary-neon">{dish.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
