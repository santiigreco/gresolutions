import React, { FC } from 'react';
import { Section, SectionTitle } from './Section';
import { SOCIALS } from '../data/constants';
import { EmailIcon, LinkedInIcon, InstagramIcon } from '../assets/icons';

export const Contact: FC = () => {
    return (
        <Section id="contacto" className="">
            <SectionTitle emoji="✉️">Ponte en Contacto</SectionTitle>
            <div className="max-w-2xl mx-auto">
                <form action={`mailto:${SOCIALS.email}`} method="POST" encType="text/plain" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="font-sans text-gray-400">Nombre</label>
                        <input type="text" name="name" id="name" required className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 rounded-lg text-brand-light font-sans placeholder:text-gray-500 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-sans text-gray-400">Email</label>
                        <input type="email" name="email" id="email" required className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 rounded-lg text-brand-light font-sans placeholder:text-gray-500 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="message" className="font-sans text-gray-400">Mensaje</label>
                        <textarea name="message" id="message" rows={5} required className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 rounded-lg text-brand-light font-sans placeholder:text-gray-500 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-brand-teal text-white font-sans font-bold py-3 px-8 rounded-full hover:bg-brand-navy transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/60">
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
                <div className="flex justify-center space-x-6 mt-12">
                    <a href={`mailto:${SOCIALS.email}`} aria-label="Email" className="text-gray-400 hover:text-brand-teal transition-colors transform hover:scale-110"><EmailIcon className="h-8 w-8" /></a>
                    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-brand-teal transition-colors transform hover:scale-110"><LinkedInIcon className="h-8 w-8" /></a>
                    <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-brand-teal transition-colors transform hover:scale-110"><InstagramIcon className="h-8 w-8" /></a>
                </div>
            </div>
        </Section>
    );
};
