import React, { FC } from 'react';
import { FadeIn } from './FadeIn';

export const Section: FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, className, children }) => {
    return (
        <section id={id} className={`py-20 md:py-28 ${className || ''}`}>
            <div className="container mx-auto px-6">
                <FadeIn>
                    {children}
                </FadeIn>
            </div>
        </section>
    );
};

export const SectionTitle: FC<{ children: React.ReactNode; emoji: string; }> = ({ children, emoji }) => (
    <h2 className="text-3xl md:text-4xl font-sans font-bold text-center text-brand-light mb-12 flex items-center justify-center gap-3">
        <span role="img" aria-label="icon">{emoji}</span>
        {children}
    </h2>
);
