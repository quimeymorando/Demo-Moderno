import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
  Starters: [
    { name: "Charred Octopus", price: "$24", desc: "Smoked paprika, fingerling potatoes, salsa verde" },
    { name: "Burrata & Heirloom Tomato", price: "$19", desc: "Basil oil, aged balsamic, microgreens" },
    { name: "Beef Carpaccio", price: "$22", desc: "Parmesan, arugula, truffle vinaigrette" }
  ],
  Mains: [
    { name: "Pan-Seared Scallops", price: "$36", desc: "Cauliflower purée, crispy pancetta, brown butter" },
    { name: "Dry-Aged Ribeye", price: "$65", desc: "14oz cut, roasted garlic compound butter" },
    { name: "Wild Mushroom Risotto", price: "$28", desc: "Porcini dust, parmesan crisps, truffle oil" }
  ],
  Desserts: [
    { name: "Matcha Lava Cake", price: "$15", desc: "White chocolate core, black sesame ice cream" },
    { name: "Yuzu Tart", price: "$14", desc: "Toasted meringue, graham cracker crust" }
  ]
};

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState('Mains');
  const categories = Object.keys(menuData);

  return (
    <section id="menu" className="py-32 px-6 md:px-12 bg-background relative border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] text-primary-neon uppercase mb-4"
          >
            The Menu
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Culinary Excellence.
          </motion.h3>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-white text-background' 
                  : 'bg-white/5 text-white/50 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-8"
            >
              {menuData[activeCategory].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-baseline border-b border-white/10 pb-6 group">
                  <div className="flex-grow">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-2xl font-display font-semibold text-white group-hover:text-primary-neon transition-colors">
                        {item.name}
                      </h4>
                      <div className="hidden md:block mx-4 flex-grow border-b border-dashed border-white/20"></div>
                      <span className="text-xl font-bold text-white">{item.price}</span>
                    </div>
                    <p className="text-white/50 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold hover:bg-white hover:text-background transition-all">
            Download Full Menu (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
