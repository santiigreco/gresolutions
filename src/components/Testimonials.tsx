import React, { FC } from 'react';
import { Section, SectionTitle } from './Section';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: FC = () => {
    const { t } = useLanguage();
    
    return (
        <Section id="clientes" className="bg-brand-deep-dark/40 border-t border-brand-teal/10">
            <SectionTitle emoji="🤝">{t.testimonials.title}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {t.testimonials.list.map((testimonial, idx) => (
                    <div 
                        key={idx} 
                        className="p-[1px] bg-gradient-to-br from-brand-teal/30 via-brand-dark to-brand-navy/30 rounded-2xl shadow-lg flex flex-col justify-between hover:from-brand-teal/60 hover:to-brand-navy/60 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <div className="bg-brand-dark rounded-[15px] p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
                            {/* Decorative quotes background icon */}
                            <span className="absolute right-4 top-4 text-7xl font-serif text-brand-teal/5 select-none pointer-events-none font-black leading-none">“</span>
                            
                            <div className="flex-grow">
                                <p className="font-serif text-gray-300 italic mb-6 relative z-10 leading-relaxed text-sm md:text-base">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                            
                            <div className="border-t border-brand-teal/10 pt-4 mt-auto">
                                <h4 className="font-sans font-bold text-brand-light text-base">{testimonial.author}</h4>
                                <p className="font-sans text-xs text-brand-teal font-semibold mb-1.5">{testimonial.role}</p>
                                <span className="inline-block bg-brand-teal/10 text-brand-teal text-[10px] font-sans font-bold px-2 py-0.5 rounded">
                                    {testimonial.project}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
