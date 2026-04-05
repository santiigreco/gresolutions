import React from 'react';
import { LanguageProvider } from './src/context/LanguageContext';
import { Header } from './src/components/Header';
import { Hero } from './src/components/Hero';
import { About } from './src/components/About';
import { Projects } from './src/components/Projects';
import { Services } from './src/components/Services';
import { Contact } from './src/components/Contact';
import { Footer } from './src/components/Footer';

function App() {
  return (
    <LanguageProvider>
        <div className="bg-brand-deep-dark font-serif text-brand-gray" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    </LanguageProvider>
  );
}

export default App;
