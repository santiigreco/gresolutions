import React, { useState, useEffect, useCallback, FC } from 'react';

// --- UTILITY FUNCTION for smooth scroll ---
const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
};

// --- TYPES ---
interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description:string;
}

// --- SVG ICONS ---
const DataIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m4-10v10m4-10v10m4-10v10M4 7h16" />
  </svg>
);

const AIIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const WebAppIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 0l-2.25 6.375-6.375 2.25 6.375 2.25L9.75 17.25l2.25-6.375L18.375 8.625l-6.375-2.25L9.75 0zM18.375 14.25l-1.5 4.5-4.5 1.5 4.5 1.5 1.5 4.5 1.5-4.5 4.5-1.5-4.5-1.5-1.5-4.5z" />
  </svg>
);

const LandingPageIcon: FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 0v6h12V2M6 12h12" />
    </svg>
);

const EmailIcon: FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LinkedInIcon: FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const InstagramIcon: FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.116 0-3.478.012-4.694.068-2.618.12-3.876 1.378-3.994 3.994-.056 1.217-.067 1.578-.067 4.694s.011 3.477.067 4.694c.118 2.616 1.376 3.874 3.994 3.994 1.216.056 1.578.068 4.694.068s3.478-.012 4.694-.068c2.618-.12 3.875-1.378 3.994-3.994.056-1.217.067-1.578-.067-4.694s-.011-3.477-.067-4.694c-.119-2.616-1.377-3.874-3.994-3.994C15.478 3.615 15.116 3.604 12 3.604zm0 2.882c-2.42 0-4.381 1.96-4.381 4.38s1.96 4.38 4.381 4.38 4.38-1.96 4.38-4.38-1.96-4.38-4.38-4.38zm0 7.218c-1.564 0-2.836-1.272-2.836-2.838s1.272-2.838 2.836-2.838 2.836 1.272 2.836 2.838-1.272 2.838-2.836 2.838zm5.438-7.55c-.618 0-1.118.5-1.118 1.118s.5 1.118 1.118 1.118 1.118-.5 1.118-1.118-.5-1.118-1.118-1.118z"/>
    </svg>
);

// --- DATA CONSTANTS ---
const NAV_LINKS = [
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
];

const PROJECTS: Project[] = [
  {
    title: "Cesto Tracker",
    description: "WebApp para registrar partidos en vivo de Cestoball.",
    link: "https://cestotracker.com",
    tags: ["Web App", "Sports Tech"],
  },
];

const SERVICES: Service[] = [
  {
    icon: <DataIcon className="h-10 w-10 text-brand-teal" />,
    title: "Soluciones con Datos",
    description: "Desde la limpieza y análisis de datos hasta la creación de dashboards e informes completos, ofrezco soluciones de datos integrales para informar su estrategia de negocio.",
  },
  {
    icon: <AIIcon className="h-10 w-10 text-brand-teal" />,
    title: "Herramientas con IA",
    description: "Desarrollo modelos personalizados de inteligencia artificial para automatizar procesos, predecir resultados y descubrir oportunidades.",
  },
  {
    icon: <WebAppIcon className="h-10 w-10 text-brand-teal" />,
    title: "Desarrollo de Web Apps",
    description: "Creo aplicaciones web responsivas y fáciles de usar para dar vida a sus soluciones de datos e IA.",
  },
  {
    icon: <LandingPageIcon className="h-10 w-10 text-brand-teal" />,
    title: "Creación de Landing Pages",
    description: "Diseño y desarrollo landing pages atractivas y optimizadas para la conversión, perfectas para lanzar productos o captar leads.",
  },
];

const SOCIALS = {
    email: "gresolutions.info@gmail.com",
    linkedin: "https://www.linkedin.com/in/santiago-greco-/",
    instagram: "https://www.instagram.com/gresolutions/",
};

// --- COMPONENTS ---

const Header: FC = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        const offset = window.scrollY;
        setScrolled(offset > 20);
    }, []);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-deep-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" onClick={smoothScrollTo} className="font-sans font-bold text-xl text-brand-light hover:text-brand-teal transition-colors">
                    Gresolutions
                </a>
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map(link => (
                        <a key={link.name} href={link.href} onClick={smoothScrollTo} className="font-sans text-brand-gray hover:text-brand-teal transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

const Section: FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, className, children }) => {
    return (
        <section id={id} className={`py-20 md:py-28 ${className || ''}`}>
            <div className="container mx-auto px-6">
                {children}
            </div>
        </section>
    );
};

const SectionTitle: FC<{ children: React.ReactNode; emoji: string; }> = ({ children, emoji }) => (
    <h2 className="text-3xl md:text-4xl font-sans font-bold text-center text-brand-light mb-12 flex items-center justify-center gap-3">
        <span role="img" aria-label="icon">{emoji}</span>
        {children}
    </h2>
);

const Hero: FC = () => (
    <section id="hero" className="h-screen w-full flex items-center justify-center relative">
        <div className="text-center z-10">
            <h1 className="font-sans font-black text-5xl md:text-7xl bg-gradient-to-r from-brand-light via-brand-teal to-brand-light bg-clip-text text-transparent mb-4">
                Gresolutions
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gray-300 mb-8">
                Soluciones basadas en datos para los desafíos modernos.
            </p>
            <a href="#proyectos" onClick={smoothScrollTo} className="bg-brand-teal text-white font-sans font-bold py-3 px-8 rounded-full hover:bg-brand-navy transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/60">
                Ver Mis Proyectos
            </a>
        </div>
        <div className="absolute bottom-10 animate-subtle-bob">
            <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
    </section>
);

const About: FC = () => (
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

const ProjectCard: FC<{ project: Project }> = ({ project }) => (
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
                Visitar App
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
        </div>
    </div>
);


const Projects: FC = () => {
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
            <SectionTitle emoji="🚀">Proyectos</SectionTitle>

            <div className="flex justify-center flex-wrap gap-3 mb-12">
                <button
                    onClick={() => setSelectedTag(null)}
                    className={`${baseButtonClasses} ${!selectedTag ? activeButtonClasses : inactiveButtonClasses}`}
                    aria-pressed={!selectedTag}
                >
                    Todos
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
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </Section>
    );
};

const ServiceCard: FC<{ service: Service }> = ({ service }) => (
    <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-brand-teal transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-teal/20">
        <div className="flex justify-center items-center mb-4 h-16 w-16 rounded-full bg-brand-dark mx-auto border-2 border-brand-teal/50">
            {service.icon}
        </div>
        <h3 className="font-sans font-bold text-xl text-brand-light mb-2">{service.title}</h3>
        <p className="font-serif text-gray-400">{service.description}</p>
    </div>
);

const Services: FC = () => (
    <Section id="servicios" className="">
        <SectionTitle emoji="🛠️">Servicios</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {SERVICES.map(service => (
                <ServiceCard key={service.title} service={service} />
            ))}
        </div>
    </Section>
);

const Contact: FC = () => {
    return (
        <Section id="contacto" className="">
            <SectionTitle emoji="✉️">Ponte en Contacto</SectionTitle>
            <div className="max-w-2xl mx-auto">
                <form action={`mailto:${SOCIALS.email}`} method="POST" encType="text/plain" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="font-sans text-gray-400">Nombre</label>
                        <input type="text" name="name" id="name" required className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 rounded-lg text-brand-light font-sans placeholder:text-gray-500 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-sans text-gray-400">Email</label>
                        <input type="email" name="email" id="email" required className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 rounded-lg text-brand-light font-sans placeholder:text-gray-500 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="message" className="font-sans text-gray-400">Mensaje</label>
                        <textarea name="message" id="message" rows={5} required className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 rounded-lg text-brand-light font-sans placeholder:text-gray-500 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-brand-teal text-white font-sans font-bold py-3 px-8 rounded-full hover:bg-brand-navy transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/60">
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
                <div className="flex justify-center space-x-6 mt-12">
                    <a href={`mailto:${SOCIALS.email}`} aria-label="Email" className="text-gray-400 hover:text-brand-teal transition-colors transform hover:scale-110"><EmailIcon className="h-8 w-8" /></a>
                    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-brand-teal transition-colors transform hover:scale-110"><LinkedInIcon className="h-8 w-8" /></a>
                    <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-brand-teal transition-colors transform hover:scale-110"><InstagramIcon className="h-8 w-8" /></a>
                </div>
            </div>
        </Section>
    );
};

const Footer: FC = () => {
    return (
        <footer className="bg-brand-deep-dark text-gray-500 py-8 border-t border-brand-teal/20">
            <div className="container mx-auto px-6 text-center font-serif">
                <p>Santiago Greco - All rights reserved. Gresolutions &copy; 2025</p>
            </div>
        </footer>
    );
};


function App() {
  return (
    <div className="bg-brand-deep-dark font-serif text-brand-gray" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}>
        <Header />
        <main>
            <Hero />
            <About />
            <Projects />
            <Services />
            <Contact />
        </main>
        <Footer />
    </div>
  );
}

export default App;
