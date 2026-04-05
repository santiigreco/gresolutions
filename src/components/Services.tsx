import React, { FC } from 'react';
import { Section, SectionTitle } from './Section';
import { Service } from '../types';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard: FC<{ service: Service }> = ({ service }) => (
    <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-brand-teal transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-teal/20">
        <div className="flex justify-center items-center mb-4 h-16 w-16 rounded-full bg-brand-dark mx-auto border-2 border-brand-teal/50">
            {service.icon}
        </div>
        <h3 className="font-sans font-bold text-xl text-brand-light mb-2">{service.title}</h3>
        <p className="font-serif text-gray-400">{service.description}</p>
    </div>
);

export const Services: FC = () => {
    const { t } = useLanguage();
    return (
    <Section id="servicios" className="">
        <SectionTitle emoji="🛠️">{t.services.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {t.services.list.map((service: Service) => (
                <ServiceCard key={service.title} service={service} />
            ))}
        </div>
    </Section>
)};
