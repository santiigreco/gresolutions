import React, { FC } from 'react';
import { smoothScrollTo } from '../utils/scroll';
import { useLanguage } from '../context/LanguageContext';

export const Hero: FC = () => {
    const { t } = useLanguage();
    
    return (
    <section id="hero" className="h-screen w-full flex items-center justify-center relative">
        <div className="text-center z-10">
            <h1 className="font-sans font-black text-5xl md:text-7xl bg-gradient-to-r from-brand-light via-brand-teal to-brand-light bg-clip-text text-transparent mb-4">
                Gresolutions
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gray-300 mb-8">
                {t.hero.subtitle}
            </p>
            <a href="#proyectos" onClick={smoothScrollTo} className="bg-brand-teal text-white font-sans font-bold py-3 px-8 rounded-full hover:bg-brand-navy transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/60">
                {t.hero.cta}
            </a>
        </div>
        <div className="absolute bottom-10 animate-subtle-bob">
            <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
    </section>
)};
