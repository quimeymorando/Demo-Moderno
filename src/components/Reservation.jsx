import React from 'react';
import { motion } from 'framer-motion';

export default function Reservation() {
  return (
    <section id="reservation" className="relative py-32 px-6 md:px-12 overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop" 
          alt="Restaurant Ambiance" 
          className="w-full h-full object-cover filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-[2rem] backdrop-blur-md shadow-2xl">
          <div className="flex flex-col md:flex-row gap-12">
            
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-sm font-semibold tracking-[0.2em] text-primary-neon uppercase mb-4">Join Us</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Book your table now.</h3>
                <p className="text-white/60 font-light mb-8">
                  Secure your spot at Nova Kitchen. For parties larger than 8, please contact us directly.
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/50 uppercase tracking-widest text-xs">Lunch</span>
                    <span className="text-white">12:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/50 uppercase tracking-widest text-xs">Dinner</span>
                    <span className="text-white">6:00 PM - 11:30 PM</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2">
              <motion.form 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">Date</label>
                    <input type="date" className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-neon transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">Time</label>
                    <select className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-neon transition-colors appearance-none">
                      <option>19:00</option>
                      <option>19:30</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Guests</label>
                  <select className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-neon transition-colors appearance-none">
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Contact info</label>
                  <input type="email" placeholder="Your Email" className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary-neon transition-colors" />
                </div>

                <button type="button" className="w-full mt-4 bg-primary-neon text-white font-bold text-lg rounded-lg py-4 hover:bg-white hover:text-background transition-all">
                  Confirm Reservation
                </button>
              </motion.form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
