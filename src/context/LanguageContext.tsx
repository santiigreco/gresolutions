import React, { createContext, useContext, useState, FC, ReactNode } from 'react';
import { translations } from '../data/translations';

type Language = 'es' | 'en';
type TranslationsType = typeof translations.es;

interface LanguageContextProps {
    language: Language;
    toggleLanguage: () => void;
    t: TranslationsType;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('es');

    const toggleLanguage = () => setLanguage(prev => prev === 'es' ? 'en' : 'es');

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within LanguageProvider");
    return context;
};
