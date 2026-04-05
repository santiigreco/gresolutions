import React, { useState, useEffect, useCallback, FC } from 'react';
import { smoothScrollTo } from '../utils/scroll';
import { NAV_LINKS } from '../data/constants';

export const Header: FC = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        const offset = window.scrollY;
        setScrolled(offset > 20);
    }, []);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-deep-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" onClick={smoothScrollTo} className="font-sans font-bold text-xl text-brand-light hover:text-brand-teal transition-colors">
                    Gresolutions
                </a>
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map(link => (
                        <a key={link.name} href={link.href} onClick={smoothScrollTo} className="font-sans text-brand-gray hover:text-brand-teal transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};
