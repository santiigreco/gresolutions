import React, { FC } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: FC = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-brand-deep-dark text-gray-500 py-8 border-t border-brand-teal/20">
            <div className="container mx-auto px-6 text-center font-serif">
                <p>Santiago Greco - {t.footer.rights} {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};
