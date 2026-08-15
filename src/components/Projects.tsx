import React, { useState, useEffect, FC } from 'react';
import { createPortal } from 'react-dom';
import { Section, SectionTitle } from './Section';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

const getGradientForCategory = (category: string) => {
    switch (category) {
        case 'web-ecommerce':
            return 'from-purple-900/40 via-brand-dark to-brand-teal/30';
        case 'branding-digital':
            return 'from-pink-900/40 via-brand-dark to-brand-navy/50';
        case 'apps-tools':
            return 'from-teal-900/40 via-brand-dark to-emerald-900/30';
        default:
            return 'from-brand-teal/30 via-brand-dark to-brand-navy/30';
    }
};

const ProjectCard: FC<{ 
    project: Project; 
    cta: string; 
    caseStudyLabel: string;
    onOpenCaseStudy: (project: Project) => void;
}> = ({ project, cta, caseStudyLabel, onOpenCaseStudy }) => (
    <div className="p-1 bg-gradient-to-br from-brand-teal/50 via-brand-dark to-brand-navy/50 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-brand-teal/30 transition-all duration-300 h-full flex flex-col group/card">
        {/* Mockup Window Header (Visual Showcase) */}
        <div className="w-full bg-gray-950 rounded-t-md p-3 border-b border-gray-800/80 flex items-center justify-center relative overflow-hidden h-48 sm:h-56 shrink-0">
            
            {/* Project Image or Dynamic Gradient Placeholder */}
            {project.image ? (
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />
                    {/* Shadow overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent z-10" />
                </div>
            ) : (
                <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${getGradientForCategory(project.category)} flex items-center justify-center`}>
                    <span className="font-sans font-black text-3xl text-brand-teal/15 uppercase tracking-widest select-none">
                        {project.title}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent z-10" />
                </div>
            )}
        </div>

        {/* Card Body */}
        <div className="bg-gray-900 rounded-b-md flex-grow flex flex-col items-center text-center p-8">
            <h3 className="font-sans font-bold text-2xl text-brand-light mb-3">{project.title}</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-brand-teal/20 text-brand-teal text-xs font-sans font-bold px-3 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="font-serif text-gray-300 mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-col gap-3 w-full mt-auto">
                <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="w-full border-2 border-brand-teal/40 text-brand-teal hover:border-brand-teal hover:bg-brand-teal/10 font-sans font-bold py-2.5 px-5 rounded-full transition-all duration-300 transform hover:scale-[1.02] inline-flex items-center justify-center active:scale-95 cursor-pointer text-sm font-semibold"
                >
                    {caseStudyLabel}
                </button>
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-brand-teal text-white font-sans font-bold py-2.5 px-5 rounded-full hover:bg-brand-navy transition-all duration-300 transform hover:scale-[1.02] inline-flex items-center justify-center group text-sm font-semibold"
                >
                    {project.cta || cta}
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            </div>
        </div>
    </div>
);

export const Projects: FC = () => {
    const { t } = useLanguage();
    const PROJECTS = t.projects.list;
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [visibleProjects, setVisibleProjects] = useState<Project[]>(PROJECTS);
    const [isFading, setIsFading] = useState<boolean>(false);
    const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

    useEffect(() => {
        if (activeFilter === 'all') {
            setVisibleProjects(PROJECTS);
        } else {
            setVisibleProjects(PROJECTS.filter(p => p.category === activeFilter));
        }
    }, [PROJECTS]);

    const handleFilterChange = (filterId: string) => {
        if (filterId === activeFilter) return;
        setIsFading(true);
        setTimeout(() => {
            setActiveFilter(filterId);
            if (filterId === 'all') {
                setVisibleProjects(PROJECTS);
            } else {
                setVisibleProjects(PROJECTS.filter(p => p.category === filterId));
            }
            setIsFading(false);
        }, 150);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveCaseStudy(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const categories = [
        { id: 'all', label: t.projects.filterAll },
        { id: 'web-ecommerce', label: t.projects.filterWebEcommerce },
        { id: 'branding-digital', label: t.projects.filterBrandingDigital },
        { id: 'apps-tools', label: t.projects.filterAppsTools },
    ];

    const baseButtonClasses = "px-5 py-2.5 rounded-full font-sans text-sm font-bold transition-all duration-300 border-2 cursor-pointer";
    const inactiveButtonClasses = "bg-transparent border-gray-800 text-gray-400 hover:bg-brand-teal/20 hover:text-brand-teal hover:border-brand-teal/50";
    const activeButtonClasses = "bg-brand-teal border-brand-teal text-white shadow-lg shadow-brand-teal/30";

    return (
        <Section id="proyectos" className="">
            <SectionTitle emoji="🚀">{t.projects.title}</SectionTitle>

            <div className="flex justify-center flex-wrap gap-3 mb-12">
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => handleFilterChange(category.id)}
                        className={`${baseButtonClasses} ${activeFilter === category.id ? activeButtonClasses : inactiveButtonClasses}`}
                        aria-pressed={activeFilter === category.id}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-300 ease-in-out ${isFading ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
                {visibleProjects.map(project => (
                    <ProjectCard 
                        key={project.title} 
                        project={project} 
                        cta={t.projects.cta}
                        caseStudyLabel={t.projects.caseStudyBtn}
                        onOpenCaseStudy={setActiveCaseStudy}
                    />
                ))}
            </div>

            {/* Case Study Modal */}
            {activeCaseStudy && createPortal(
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-deep-dark/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
                    onClick={() => setActiveCaseStudy(null)}
                >
                    <div 
                        className="relative w-full max-w-2xl bg-brand-dark border border-brand-teal/20 rounded-2xl shadow-2xl p-6 md:p-8 transform transition-all duration-300 scale-100 max-h-[85vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button 
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
                            onClick={() => setActiveCaseStudy(null)}
                            aria-label="Cerrar"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Title and Tagline */}
                        <div className="mb-6 pr-8">
                            <span className="bg-brand-teal/20 text-brand-teal text-xs font-sans font-bold px-3 py-1 rounded-full inline-block mb-3">
                                {activeCaseStudy.tags.join(" • ")}
                            </span>
                            <h3 className="font-sans font-black text-3xl text-brand-light mb-1">{activeCaseStudy.title}</h3>
                            {activeCaseStudy.tagline && (
                                <p className="font-serif text-brand-teal/80 text-lg italic mt-1">{activeCaseStudy.tagline}</p>
                            )}
                        </div>

                        <div className="h-px bg-brand-teal/10 w-full mb-6"></div>

                        {/* Content */}
                        <div className="space-y-6">
                            {/* Role */}
                            <div>
                                <h4 className="font-sans font-bold text-sm text-brand-teal uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                    {t.projects.modalRole}
                                </h4>
                                <p className="font-sans text-gray-300 leading-relaxed text-sm md:text-base bg-brand-teal/5 border border-brand-teal/10 rounded-xl p-4">
                                    {activeCaseStudy.role}
                                </p>
                            </div>

                            {/* Stack */}
                            <div>
                                <h4 className="font-sans font-bold text-sm text-brand-teal uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                    {t.projects.modalStack}
                                </h4>
                                <div className="bg-brand-teal/5 border border-brand-teal/10 rounded-xl p-4 flex flex-wrap gap-2">
                                    {activeCaseStudy.stack.map(tech => (
                                        <span key={tech} className="bg-brand-dark border border-brand-teal/20 text-brand-teal text-xs font-sans font-bold px-3 py-1.5 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Challenge */}
                            <div>
                                <h4 className="font-sans font-bold text-sm text-brand-teal uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    {t.projects.modalChallenge}
                                </h4>
                                <p className="font-sans text-gray-300 leading-relaxed text-sm md:text-base bg-red-950/20 border border-red-500/10 rounded-xl p-4">
                                    {activeCaseStudy.challenge}
                                </p>
                            </div>

                            {/* Delivery */}
                            <div>
                                <h4 className="font-sans font-bold text-sm text-brand-teal uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    {t.projects.modalDelivery}
                                </h4>
                                <p className="font-sans text-gray-300 leading-relaxed text-sm md:text-base bg-brand-teal/5 border border-brand-teal/10 rounded-xl p-4">
                                    {activeCaseStudy.delivery}
                                </p>
                            </div>
                        </div>

                        <div className="h-px bg-brand-teal/10 w-full my-6"></div>

                        {/* Footer Action */}
                        <div className="flex justify-end">
                            <a 
                                href={activeCaseStudy.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-brand-teal text-white font-sans font-bold py-2.5 px-6 rounded-full hover:bg-brand-navy transition-all duration-300 transform hover:scale-105 inline-flex items-center group shadow-lg shadow-brand-teal/20 text-sm"
                            >
                                {activeCaseStudy.cta || t.projects.cta}
                                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </Section>
    );
};
