import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-32 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold tracking-[0.2em] text-primary-neon uppercase mb-4">Visit Us</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-white mb-10">Find Nova.</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary-neon mt-1" size={24} />
                <div>
                  <h4 className="text-white font-medium mb-1">Address</h4>
                  <p className="text-white/60 font-light">450 Urban Avenue, Suite 210<br/>Metropolis, NY 10012</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-primary-neon mt-1" size={24} />
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-white/60 font-light">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-primary-neon mt-1" size={24} />
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-white/60 font-light">reservations@novakitchen.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-background transition-colors">
                <Instagram size={18} />
                <span>Follow @novakitchen</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-2/3 h-[500px] rounded-2xl overflow-hidden grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.966309534299!2d-73.99617252399656!3d40.74075193584877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cce7aece!2sFlatiron%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
        
      </div>
    </section>
  );
}
