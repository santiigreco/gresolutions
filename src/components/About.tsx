import React, { FC } from 'react';
import { Section, SectionTitle } from './Section';

export const About: FC = () => (
    <Section id="sobre-mi" className="">
        <SectionTitle emoji="🧠">Sobre mí</SectionTitle>
        <div className="max-w-4xl mx-auto p-1 bg-gradient-to-br from-brand-teal/50 to-brand-navy/50 rounded-2xl">
          <div className="bg-brand-dark rounded-[15px] p-8 md:p-12 flex flex-col md:flex-row items-center text-center md:text-left gap-8">
            <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative p-1 rounded-full bg-gradient-to-tr from-brand-teal to-brand-navy shadow-lg shadow-brand-teal/30">
                <img 
                    src="/profile.jpg" 
                    alt="Santiago Greco" 
                    className="w-full h-full object-cover rounded-full border-4 border-brand-dark"
                />
            </div>
            <div className="flex-1">
                <p className="font-serif text-lg text-gray-300 leading-relaxed">
                    Mi nombre es <strong>Santiago Greco</strong>, Analista de Datos y estudiante avanzado de Ingeniería Industrial. Me especializo en transformar datos complejos en insights accionables y en construir soluciones inteligentes para impulsar el crecimiento empresarial. Mi formación me proporciona un enfoque sistémico y orientado a soluciones para cada proyecto que emprendo.
                </p>
            </div>
          </div>
        </div>
    </Section>
);
