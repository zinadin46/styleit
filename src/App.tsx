import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DesignStudio from './components/DesignStudio';
import FeaturedCollections from './components/FeaturedCollections';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DesignStudio />
        <FeaturedCollections />
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;