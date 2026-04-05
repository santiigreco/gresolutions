import React, { useState, useEffect, useCallback, FC } from 'react';
import { smoothScrollTo } from '../utils/scroll';
import { useActiveSection } from '../utils/scrollspy';
import { useLanguage } from '../context/LanguageContext';

export const Header: FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();
    
    const NAV_LINKS = [
        { name: t.nav.about, href: '#sobre-mi' },
        { name: t.nav.projects, href: '#proyectos' },
        { name: t.nav.services, href: '#servicios' },
        { name: t.nav.contact, href: '#contacto' },
    ];
    
    const sectionIds = ['sobre-mi', 'proyectos', 'servicios', 'contacto'];
    const activeSection = useActiveSection(['hero', ...sectionIds]);

    const handleScroll = useCallback(() => {
        const offset = window.scrollY;
        setScrolled(offset > 20);
    }, []);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-deep-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" onClick={smoothScrollTo} className="font-sans font-bold text-xl text-brand-light hover:text-brand-teal transition-colors">
                    Gresolutions
                </a>
                <div className="flex items-center space-x-6 md:space-x-8">
                    <div className="hidden md:flex items-center space-x-8 mr-4">
                        {NAV_LINKS.map(link => {
                            const id = link.href.substring(1);
                            const isActive = activeSection === id;
                            return (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={smoothScrollTo} 
                                    className={`font-sans transition-colors relative pb-1 ${isActive ? 'text-brand-teal font-semibold' : 'text-brand-gray hover:text-brand-teal'}`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-teal rounded-full" />
                                    )}
                                </a>
                            );
                        })}
                    </div>
                    <button 
                        onClick={toggleLanguage}
                        className="px-3 py-1 font-sans text-sm font-bold bg-gray-800 border border-brand-teal text-brand-light rounded hover:bg-brand-teal transition-all active:scale-95 shadow-sm"
                    >
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                </div>
            </nav>
        </header>
    );
};
