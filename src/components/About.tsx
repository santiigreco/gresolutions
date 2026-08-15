import React, { FC } from 'react';
import { Section, SectionTitle } from './Section';
import { useLanguage } from '../context/LanguageContext';

export const About: FC = () => {
    const { t } = useLanguage();

    return (
    <Section id="sobre-mi" className="" translate="yes">
        <SectionTitle emoji="🧠">{t.about.title}</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-12">
            {/* --- Duo Intro Bio --- */}
            <div className="p-1 bg-gradient-to-br from-brand-teal/50 to-brand-navy/50 rounded-2xl shadow-xl">
                <div className="bg-brand-dark rounded-[15px] p-8 md:p-10 text-center">
                    <p className="font-serif text-xl md:text-2xl text-brand-light leading-relaxed max-w-3xl mx-auto">
                        {t.about.duoBio}
                    </p>
                </div>
            </div>

            {/* --- Quantitative Stats --- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {t.stats.map((stat, idx) => (
                    <div 
                        key={idx} 
                        className="p-0.5 bg-gradient-to-br from-brand-teal/30 via-brand-dark to-brand-navy/30 rounded-xl shadow-md hover:shadow-brand-teal/15 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="bg-brand-dark/95 rounded-[10px] p-5 text-center flex flex-col justify-center h-full">
                            <span className="font-sans font-black text-3xl md:text-4xl bg-gradient-to-r from-brand-light via-brand-teal to-brand-light bg-clip-text text-transparent mb-1">
                                {stat.value}
                            </span>
                            <span className="font-sans text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Capabilities / Stack --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dev Column */}
                <div className="p-1 bg-gradient-to-br from-brand-teal/20 via-brand-dark to-brand-navy/40 rounded-xl shadow-lg">
                    <div className="bg-brand-dark/90 rounded-[10px] p-6 h-full">
                        <h4 className="font-sans font-bold text-lg text-brand-teal uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-brand-teal rounded-full animate-pulse"></span>
                            {t.about.devTitle}
                        </h4>
                        <p className="font-serif text-gray-300 leading-relaxed">
                            {t.about.devSkills}
                        </p>
                    </div>
                </div>

                {/* Design Column */}
                <div className="p-1 bg-gradient-to-br from-brand-teal/40 via-brand-dark to-brand-navy/20 rounded-xl shadow-lg">
                    <div className="bg-brand-dark/90 rounded-[10px] p-6 h-full">
                        <h4 className="font-sans font-bold text-lg text-brand-teal uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-brand-teal rounded-full animate-pulse"></span>
                            {t.about.designTitle}
                        </h4>
                        <p className="font-serif text-gray-300 leading-relaxed">
                            {t.about.designSkills}
                        </p>
                    </div>
                </div>
            </div>

            {/* --- Individual Sibling Profiles --- */}
            <div className="p-1 bg-gradient-to-br from-brand-teal/40 to-brand-navy/40 rounded-2xl shadow-xl">
                <div className="bg-brand-dark rounded-[15px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Santiago Greco */}
                    <div className="flex flex-col items-center text-center gap-6">
                        <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative p-1 rounded-full bg-gradient-to-tr from-brand-teal to-brand-navy shadow-lg shadow-brand-teal/30">
                            <img
                                src="/profile.jpg"
                                alt="Santiago Greco"
                                className="w-full h-full object-cover rounded-full border-4 border-brand-dark"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-2xl font-bold text-white mb-1">Santiago Greco</h3>
                            <p className="text-brand-teal text-sm font-semibold uppercase tracking-wider mb-4">{t.about.santiagoRole}</p>
                            <div className="h-px w-12 bg-brand-teal/30 mx-auto mb-4"></div>
                            <p className="font-serif text-base text-gray-300 leading-relaxed italic">
                                {t.about.bio}
                            </p>
                        </div>
                    </div>

                    {/* Martina Greco */}
                    <div className="flex flex-col items-center text-center gap-6">
                        <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative p-1 rounded-full bg-gradient-to-tr from-brand-teal to-brand-navy shadow-lg shadow-brand-teal/30">
                            <img
                                src="/Profile2.jpeg"
                                alt="Martina Greco"
                                className="w-full h-full object-cover rounded-full border-4 border-brand-dark"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-2xl font-bold text-white mb-1">Martina Greco</h3>
                            <p className="text-brand-teal text-sm font-semibold uppercase tracking-wider mb-4">{t.about.martinaRole}</p>
                            <div className="h-px w-12 bg-brand-teal/30 mx-auto mb-4"></div>
                            <p className="font-serif text-base text-gray-300 leading-relaxed italic">
                                {t.about.martinaBio}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
)};
