import React, { FC, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingCTA: FC = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a
            href="#contacto"
            onClick={handleClick}
            className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-brand-teal to-brand-navy border border-brand-teal/30 text-white font-sans font-bold shadow-lg shadow-brand-teal/20 hover:shadow-brand-teal/50 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 md:bottom-8 md:right-8 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-label={t.floatingCTA}
        >
            <svg 
                className="w-5 h-5 animate-pulse" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
            </svg>
            <span className="text-xs md:text-sm uppercase tracking-wider">{t.floatingCTA}</span>
        </a>
    );
};
