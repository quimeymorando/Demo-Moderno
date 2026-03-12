import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import MenuPreview from './components/MenuPreview';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans selection:bg-primary-neon selection:text-white">
      <Navbar />
      <main className="w-full h-full">
        <Hero />
        <About />
        <SignatureDishes />
        <MenuPreview />
        <Gallery />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
