import React, { FC } from 'react';
import { Section, SectionTitle } from './Section';

export const About: FC = () => (
    <Section id="sobre-mi" className="">
        <SectionTitle emoji="🧠">Sobre mí</SectionTitle>
        <div className="max-w-4xl mx-auto p-1 bg-gradient-to-br from-brand-teal/50 to-brand-navy/50 rounded-2xl">
          <div className="bg-brand-dark rounded-[15px] p-8 md:p-12 text-center">
            <p className="font-serif text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Mi nombre es Santiago Greco, Analista de Datos y estudiante avanzado de Ingeniería Industrial. Me especializo en transformar datos complejos en insights accionables y en construir soluciones inteligentes para impulsar el crecimiento empresarial. Mi formación me proporciona un enfoque sistético y orientado a soluciones para cada proyecto que emprendo.
            </p>
          </div>
        </div>
    </Section>
);
