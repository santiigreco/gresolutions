import React, { FC } from 'react';
import { Section, SectionTitle } from './Section';
import { useLanguage } from '../context/LanguageContext';

export const About: FC = () => {
    const { t } = useLanguage();
    
    return (
    <Section id="sobre-mi" className="">
        <SectionTitle emoji="🧠">{t.about.title}</SectionTitle>
        <div className="max-w-5xl mx-auto p-1 bg-gradient-to-br from-brand-teal/30 via-brand-navy/30 to-brand-teal/30 rounded-2xl shadow-xl">
          <div className="bg-brand-dark rounded-[15px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

            {/* --- Santiago Greco --- */}
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative p-1 rounded-full bg-gradient-to-tr from-brand-teal to-brand-navy shadow-lg shadow-brand-teal/20">
                <img
                  src="/profile.jpg"
                  alt="Santiago Greco"
                  className="w-full h-full object-cover rounded-full border-4 border-brand-dark"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-white mb-1">Santiago Greco</h3>
                <p className="text-brand-teal text-sm font-semibold uppercase tracking-wider mb-4">Data Analyst & Engineeer</p>
                <div className="h-px w-12 bg-brand-teal/30 mx-auto mb-4"></div>
                <p className="font-serif text-lg text-gray-300 leading-relaxed italic">
                  {t.about.bio}
                </p>
              </div>
            </div>

            {/* --- Martina Greco --- */}
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative p-1 rounded-full bg-gradient-to-tr from-brand-teal to-brand-navy shadow-lg shadow-brand-teal/20">
                <img
                  src="/Profile2.jpeg"
                  alt="Martina Greco"
                  className="w-full h-full object-cover rounded-full border-4 border-brand-dark"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-white mb-1">Martina Greco</h3>
                <p className="text-brand-teal text-sm font-semibold uppercase tracking-wider mb-4">UX/UI Designer</p>
                <div className="h-px w-12 bg-brand-teal/30 mx-auto mb-4"></div>
                <p className="font-serif text-lg text-gray-300 leading-relaxed italic">
                  {t.about.martinaBio}
                </p>
              </div>
            </div>

          </div>
        </div>
    </Section>
)};
