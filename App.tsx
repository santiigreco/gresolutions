import React from 'react';
import { LanguageProvider } from './src/context/LanguageContext';
import { Header } from './src/components/Header';
import { Hero } from './src/components/Hero';
import { About } from './src/components/About';
import { Projects } from './src/components/Projects';
import { Services } from './src/components/Services';
import { Contact } from './src/components/Contact';
import { Footer } from './src/components/Footer';
import { FloatingCTA } from './src/components/FloatingCTA';

function App() {
  return (
    <LanguageProvider>
        <div className="bg-brand-deep-dark font-serif text-brand-gray md:bg-grid-pattern">
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Services />
                <Contact />
            </main>
            <Footer />
            <FloatingCTA />
        </div>
    </LanguageProvider>
  );
}

export default App;
