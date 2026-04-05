import React, { FC, useState } from 'react';
import { Section, SectionTitle } from './Section';
import { SOCIALS } from '../data/constants';
import { LinkedInIcon, InstagramIcon } from '../assets/icons';
import { useLanguage } from '../context/LanguageContext';

export const Contact: FC = () => {
    const { t } = useLanguage();
    const [status, setStatus] = useState<'' | 'loading' | 'success' | 'error'>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        
        const form = e.currentTarget;
        const data = new FormData(form);
        
        try {
            const response = await fetch('https://formspree.io/f/xnjooykg', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <Section id="contacto" className="">
            <SectionTitle emoji="✉️">{t.contact.title}</SectionTitle>
            <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="font-sans text-gray-400">{t.contact.name}</label>
                        <input type="text" name="name" id="name" required className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 rounded-lg text-brand-light font-sans placeholder:text-gray-500 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-sans text-gray-400">{t.contact.email}</label>
                        <input type="email" name="email" id="email" required className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 rounded-lg text-brand-light font-sans placeholder:text-gray-500 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="message" className="font-sans text-gray-400">{t.contact.message}</label>
                        <textarea name="message" id="message" rows={5} required className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 rounded-lg text-brand-light font-sans placeholder:text-gray-500 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition"></textarea>
                    </div>
                    
                    {status === 'success' && (
                        <div className="p-4 bg-brand-teal/20 border border-brand-teal rounded-lg text-brand-teal text-center font-sans font-semibold">
                            {t.contact.success}
                        </div>
                    )}
                    
                    {status === 'error' && (
                        <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-center font-sans font-semibold">
                            {t.contact.error}
                        </div>
                    )}

                    <div className="text-center">
                        <button 
                            type="submit" 
                            disabled={status === 'loading'}
                            className={`text-white font-sans font-bold py-3 px-8 rounded-full transition-all duration-300 transform shadow-lg ${status === 'loading' ? 'bg-gray-600 cursor-not-allowed' : 'bg-brand-teal hover:bg-brand-navy hover:scale-105 shadow-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/60'}`}
                        >
                            {status === 'loading' ? t.contact.sending : t.contact.send}
                        </button>
                    </div>
                </form>
                <div className="flex justify-center space-x-6 mt-12">
                    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-brand-teal transition-colors transform hover:scale-110"><LinkedInIcon className="h-8 w-8" /></a>
                    <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-brand-teal transition-colors transform hover:scale-110"><InstagramIcon className="h-8 w-8" /></a>
                </div>
            </div>
        </Section>
    );
};
