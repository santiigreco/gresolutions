import React, { useState, FC } from 'react';
import { Section, SectionTitle } from './Section';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard: FC<{ project: Project; cta: string }> = ({ project, cta }) => (
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
            <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-auto bg-brand-teal text-white font-sans font-bold py-2 px-6 rounded-full hover:bg-brand-navy transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
            >
                {cta}
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
        </div>
    </div>
);

export const Projects: FC = () => {
    const { t } = useLanguage();
    const PROJECTS = t.projects.list;
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.title} project={project} cta={t.projects.cta}/>
                ))}
            </div>
        </Section>
    );
};
