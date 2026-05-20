import React, { useState, useEffect, FC } from 'react';
import { Section, SectionTitle } from './Section';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard: FC<{ 
    project: Project; 
    cta: string; 
    caseStudyLabel: string;
    onOpenCaseStudy: (project: Project) => void;
}> = ({ project, cta, caseStudyLabel, onOpenCaseStudy }) => (
    <div className="p-1 bg-gradient-to-br from-brand-teal/50 via-brand-dark to-brand-navy/50 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-brand-teal/30 transition-all duration-300 h-full flex flex-col">
        <div className="bg-gray-900 rounded-md h-full flex flex-col items-center text-center p-8">
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
                    className="w-full border-2 border-brand-teal/40 text-brand-teal hover:border-brand-teal hover:bg-brand-teal/10 font-sans font-bold py-2.5 px-5 rounded-full transition-all duration-300 transform hover:scale-[1.02] inline-flex items-center justify-center active:scale-95 cursor-pointer text-sm"
                >
                    {caseStudyLabel}
                </button>
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-brand-teal text-white font-sans font-bold py-2.5 px-5 rounded-full hover:bg-brand-navy transition-all duration-300 transform hover:scale-[1.02] inline-flex items-center justify-center group text-sm"
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
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveCaseStudy(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const allTags = Array.from(new Set(PROJECTS.flatMap(p => p.tags)));

    const filteredProjects = selectedTag
        ? PROJECTS.filter(p => p.tags.includes(selectedTag))
        : PROJECTS;

    const baseButtonClasses = "px-4 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-300 border-2";
    const inactiveButtonClasses = "bg-transparent border-gray-700 text-gray-400 hover:bg-brand-teal/20 hover:text-brand-teal hover:border-brand-teal/50";
    const activeButtonClasses = "bg-brand-teal border-brand-teal text-white shadow-lg shadow-brand-teal/30";

    return (
        <Section id="proyectos" className="">
            <SectionTitle emoji="🚀">{t.projects.title}</SectionTitle>

            <div className="flex justify-center flex-wrap gap-3 mb-12">
                <button
                    onClick={() => setSelectedTag(null)}
                    className={`${baseButtonClasses} ${!selectedTag ? activeButtonClasses : inactiveButtonClasses}`}
                    aria-pressed={!selectedTag}
                >
                    {t.projects.filterAll}
                </button>
                {allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`${baseButtonClasses} ${selectedTag === tag ? activeButtonClasses : inactiveButtonClasses}`}
                        aria-pressed={selectedTag === tag}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {filteredProjects.map(project => (
                    <ProjectCard 
                        key={project.title} 
                        project={project} 
                        cta={t.projects.cta}
                        caseStudyLabel={(t.projects as any).caseStudyBtn || 'Caso de Estudio'}
                        onOpenCaseStudy={setActiveCaseStudy}
                    />
                ))}
            </div>

            {/* Case Study Modal */}
            {activeCaseStudy && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-deep-dark/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
                    onClick={() => setActiveCaseStudy(null)}
                >
                    <div 
                        className="relative w-full max-w-2xl bg-brand-dark border border-brand-teal/20 rounded-2xl shadow-2xl p-6 md:p-8 transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto"
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
                            {/* Problem */}
                            <div>
                                <h4 className="font-sans font-bold text-sm text-brand-teal uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    {(t.projects as any).modalProblem || 'Problema Detectado'}
                                </h4>
                                <p className="font-sans text-gray-300 leading-relaxed text-sm md:text-base bg-red-950/20 border border-red-500/10 rounded-xl p-4">
                                    {activeCaseStudy.problem}
                                </p>
                            </div>

                            {/* Solution */}
                            <div>
                                <h4 className="font-sans font-bold text-sm text-brand-teal uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    {(t.projects as any).modalSolution || 'Solución Premium'}
                                </h4>
                                <p className="font-sans text-gray-300 leading-relaxed text-sm md:text-base bg-brand-teal/5 border border-brand-teal/10 rounded-xl p-4">
                                    {activeCaseStudy.solution}
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
                </div>
            )}
        </Section>
    );
};
