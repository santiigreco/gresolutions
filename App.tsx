
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
    link: "https://cesto-tracker.netlify.app",
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
];

const SOCIALS = {
    email: "gresolutions.info@gmail.com",
    linkedin: "https://www.linkedin.com/in/santiago-greco-/",
    instagram: "https://www.instagram.com/santiigreco/",
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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
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

const SectionTitle: FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-sans font-bold text-center text-brand-light mb-12">
        {children}
    </h2>
);

const Hero: FC = () => (
    <section id="hero" className="h-screen w-full flex items-center justify-center">
        <div className="text-center">
            <h1 className="font-sans font-black text-5xl md:text-7xl text-brand-light mb-4">
                Gresolutions
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gray-300 mb-8">
                Soluciones basadas en datos para los desafíos modernos.
            </p>
            <a href="#proyectos" onClick={smoothScrollTo} className="bg-brand-teal text-white font-sans font-bold py-3 px-8 rounded-full hover:bg-brand-navy transition-all duration-300 transform hover:scale-105">
                Ver Mis Proyectos
            </a>
        </div>
    </section>
);

const About: FC = () => (
    <Section id="sobre-mi" className="bg-brand-dark">
        <SectionTitle>Sobre mí</SectionTitle>
        <div className="max-w-4xl mx-auto border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="flex justify-center">
                    <img 
                        src="/nt1WTHPF.jpg"
                        alt="Foto de Santiago Greco" 
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
                    />
                </div>
                <div className="text-center md:text-left">
                    <p className="font-serif text-lg text-gray-300 leading-relaxed">
                        Mi nombre es Santiago Greco, Analista de Datos y estudiante avanzado de Ingeniería Industrial. Me especializo en transformar datos complejos en insights accionables y en construir soluciones inteligentes para impulsar el crecimiento empresarial. Mi formación me proporciona un enfoque sistético y orientado a soluciones para cada proyecto que emprendo.
                    </p>
                </div>
            </div>
        </div>
    </Section>
);

const ProjectCard: FC<{ project: Project }> = ({ project }) => (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border border-gray-800 hover:border-brand-teal">
        <div className="p-8 w-full flex-grow flex flex-col items-center justify-center">
            <h3 className="font-sans font-bold text-2xl text-brand-light mb-3">{project.title}</h3>
            <p className="font-serif text-gray-300 mb-6">{project.description}</p>
            <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-teal text-white font-sans font-bold py-2 px-6 rounded-full hover:bg-brand-navy transition-all duration-300 transform hover:scale-105 inline-block"
            >
                Visitar App
            </a>
        </div>
    </div>
);

const Projects: FC = () => (
    <Section id="proyectos" className="bg-brand-dark">
        <SectionTitle>Proyectos</SectionTitle>
        <div className="flex justify-center">
            <div className="max-w-md w-full">
                {PROJECTS.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    </Section>
);

const ServiceCard: FC<{ service: Service }> = ({ service }) => (
    <div className="text-center p-6 border border-gray-800 rounded-2xl hover:border-brand-teal transition-colors duration-300">
        <div className="flex justify-center mb-4">{service.icon}</div>
        <h3 className="font-sans font-bold text-xl text-brand-light mb-2">{service.title}</h3>
        <p className="font-serif text-gray-400">{service.description}</p>
    </div>
);

const Services: FC = () => (
    <Section id="servicios" className="">
        <SectionTitle>Servicios</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICES.map(service => (
                <ServiceCard key={service.title} service={service} />
            ))}
        </div>
    </Section>
);

const Contact: FC = () => {
    return (
        <Section id="contacto" className="bg-brand-dark">
            <SectionTitle>Ponte en Contacto</SectionTitle>
            <div className="max-w-2xl mx-auto">
                <form action={`mailto:${SOCIALS.email}`} method="POST" encType="text/plain" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="font-sans text-gray-400">Nombre</label>
                        <input type="text" name="name" id="name" required className="w-full mt-2 p-3 bg-gray-700 border-gray-600 rounded-lg text-brand-light font-sans placeholder:text-gray-400 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-sans text-gray-400">Email</label>
                        <input type="email" name="email" id="email" required className="w-full mt-2 p-3 bg-gray-700 border-gray-600 rounded-lg text-brand-light font-sans placeholder:text-gray-400 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="message" className="font-sans text-gray-400">Mensaje</label>
                        <textarea name="message" id="message" rows={5} required className="w-full mt-2 p-3 bg-gray-700 border-gray-600 rounded-lg text-brand-light font-sans placeholder:text-gray-400 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal focus:outline-none transition"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-brand-teal text-white font-sans font-bold py-3 px-8 rounded-full hover:bg-brand-navy transition-all duration-300 transform hover:scale-105">
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
                <div className="flex justify-center space-x-6 mt-12">
                    <a href={`mailto:${SOCIALS.email}`} aria-label="Email" className="text-gray-400 hover:text-brand-teal transition-colors"><EmailIcon className="h-8 w-8" /></a>
                    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-brand-teal transition-colors"><LinkedInIcon className="h-8 w-8" /></a>
                    <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-brand-teal transition-colors"><InstagramIcon className="h-8 w-8" /></a>
                </div>
            </div>
        </Section>
    );
};

const Footer: FC = () => (
    <footer className="bg-black text-gray-500 py-8">
        <div className="container mx-auto px-6 text-center font-serif">
            <p>Santiago Greco - All rights reserved. Gresolutions &copy; 2025</p>
        </div>
    </footer>
);


function App() {
  return (
    <div className="bg-gray-950 font-serif text-brand-gray">
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
