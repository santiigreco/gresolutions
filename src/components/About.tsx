import React, { FC } from 'react';
import { Section, SectionTitle } from './Section';
import { useLanguage } from '../context/LanguageContext';

export const About: FC = () => {
    const { t } = useLanguage();

    return (
    <Section id="sobre-mi" className="">
        <SectionTitle emoji="🧠">{t.about.title}</SectionTitle>
        <div className="max-w-4xl mx-auto p-1 bg-gradient-to-br from-brand-teal/50 to-brand-navy/50 rounded-2xl">
          <div className="bg-brand-dark rounded-[15px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* --- Santiago Greco --- */}
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative p-1 rounded-full bg-gradient-to-tr from-brand-teal to-brand-navy shadow-lg shadow-brand-teal/30">
                <img
                  src="/profile.jpg"
                  alt="Santiago Greco"
                  className="w-full h-full object-cover rounded-full border-4 border-brand-dark"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Santiago Greco</h3>
                <p className="text-brand-teal text-sm font-medium mb-3">Full Stack Developer</p>
                <p className="font-serif text-lg text-gray-300 leading-relaxed">
                  {t.about.bio}
                </p>
              </div>
            </div>

            {/* --- Martina Greco --- */}
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative p-1 rounded-full bg-gradient-to-tr from-brand-teal to-brand-navy shadow-lg shadow-brand-teal/30">
                <img
                  src="/Profile2.jpeg"
                  alt="Martina Greco"
                  className="w-full h-full object-cover rounded-full border-4 border-brand-dark"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Martina Greco</h3>
                <p className="text-brand-teal text-sm font-medium mb-3">UX/UI Designer</p>
                <p className="font-serif text-lg text-gray-300 leading-relaxed">
                  Especialista en jerarquía visual, modularidad y sistemas de diseño para productos digitales. Con experiencia en sistemas modulares y optimización de flujos de identidad en apps, actualmente enfoca su trabajo en acompañar la transición de proyectos freelance hacia estructuras de negocio escalables y sostenibles.
                </p>
              </div>
            </div>

          </div>
        </div>
    </Section>
)};
