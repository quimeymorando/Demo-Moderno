import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        <div>
          <a href="#" className="font-display font-bold text-3xl tracking-tighter text-white inline-block mb-4">
            NOVA<span className="text-primary-neon">.</span>
          </a>
          <p className="text-white/50 text-sm max-w-xs">
            A modern dining experience where urban aesthetics meet culinary mastery.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold mb-2">Explore</h4>
            <a href="#about" className="text-white/50 hover:text-primary-neon transition-colors text-sm">About Us</a>
            <a href="#menu" className="text-white/50 hover:text-primary-neon transition-colors text-sm">Our Menu</a>
            <a href="#gallery" className="text-white/50 hover:text-primary-neon transition-colors text-sm">Gallery</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold mb-2">Legal</h4>
            <a href="#" className="text-white/50 hover:text-primary-neon transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-primary-neon transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs text-center md:text-left">
          © {new Date().getFullYear()} Nova Kitchen. All rights reserved.
        </p>
        <p className="text-white/30 text-xs">
          Designed with precision.
        </p>
      </div>
    </footer>
  );
}
