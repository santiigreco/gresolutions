import React from 'react';
import { DataIcon, AIIcon, WebAppIcon, LandingPageIcon } from '../assets/icons';

export const translations = {
    es: {
        nav: {
            about: 'Sobre mí',
            projects: 'Proyectos',
            services: 'Servicios',
            contact: 'Contacto'
        },
        hero: {
            subtitle: 'Soluciones basadas en datos para los desafíos modernos.',
            cta: 'Ver Mis Proyectos'
        },
        about: {
            title: 'Sobre mí',
            bio: <>Mi nombre es <strong>Santiago Greco</strong>, Analista de Datos y estudiante avanzado de Ingeniería Industrial. Me especializo en transformar datos complejos en insights accionables y en construir soluciones inteligentes para impulsar el crecimiento empresarial. Mi formación me proporciona un enfoque sistémico y orientado a soluciones para cada proyecto que emprendo.</>,
            martinaBio: <>Mi nombre es <strong>Martina Greco</strong>, Diseñadora UX/UI especialista en jerarquía visual, modularidad y sistemas de diseño para productos digitales. Tengo experiencia en sistemas modulares y optimización de flujos de identidad en apps, y actualmente acompaño la transición de proyectos freelance hacia estructuras de negocio escalables y sostenibles.</>,
        },
        projects: {
            title: 'Proyectos',
            filterAll: 'Todos',
            cta: 'Visitar App',
            list: [
                {
                    title: "Music Presskit",
                    description: "Diseño de EPK estratégico y branding visual. Optimizado para potenciar el booking y la comunicación profesional en la industria musical.",
                    link: "https://jansound.com/",
                    tags: ["EPK", "Web Design", "Music"],
                    cta: "Visitar Web",
                },
                {
                    title: "Cesto Tracker",
                    description: "WebApp para registrar partidos en vivo de Cestoball.",
                    link: "https://cestotracker.com",
                    tags: ["Web App", "Sports Tech"],
                },
                {
                    title: "Rota Pádel",
                    description: "Aplicación dinámica para gestionar y rotar jugadores en partidos de pádel, decidiendo equitativamente quién juega contra quién.",
                    link: "https://rota-padel.netlify.app",
                    tags: ["Web App", "Sports Tech"],
                },
                {
                    title: "Calculadora de Asado",
                    description: "Herramienta inteligente y rápida para calcular con precisión la cantidad de comida, bebida y carbón necesarios según tus invitados.",
                    link: "https://asadito-site.netlify.app",
                    tags: ["Web App", "Utilidad"],
                }
            ]
        },
        services: {
            title: 'Servicios',
            list: [
                {
                    title: "Soluciones con Datos",
                    description: "Desde la limpieza y análisis de datos hasta la creación de dashboards e informes completos, ofrezco soluciones integrales.",
                    icon: <DataIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "Herramientas con IA",
                    description: "Desarrollo modelos personalizados de inteligencia artificial para automatizar procesos, predecir resultados y descubrir oportunidades.",
                    icon: <AIIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "Desarrollo Web",
                    description: "Creo aplicaciones web responsivas y fáciles de usar para dar vida a sus soluciones de datos e IA.",
                    icon: <WebAppIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "Landing Pages",
                    description: "Diseño y desarrollo páginas web atractivas y optimizadas para la conversión, perfectas para lanzar productos.",
                    icon: <LandingPageIcon className="h-10 w-10 text-brand-teal" />
                }
            ]
        },
        contact: {
            title: 'Ponte en Contacto',
            name: 'Nombre',
            email: 'Correo',
            message: 'Mensaje',
            send: 'Enviar Mensaje',
            sending: 'Enviando...',
            success: '¡Gracias! Tu mensaje ha sido enviado correctamente. Te responderé a la brevedad.',
            error: 'Hubo un error al enviar el mensaje. Intenta escribirme directamente a mis redes.'
        },
        footer: {
            rights: 'Todos los derechos reservados. Gresolutions'
        }
    },
    en: {
        nav: {
            about: 'About Me',
            projects: 'Projects',
            services: 'Services',
            contact: 'Contact'
        },
        hero: {
            subtitle: 'Data-driven solutions for modern challenges.',
            cta: 'View My Projects'
        },
        about: {
            title: 'About me',
            bio: <>My name is <strong>Santiago Greco</strong>, a Data Analyst and advanced Industrial Engineering student. I specialize in transforming complex data into actionable insights and building intelligent solutions to drive business growth. My background provides me with a systemic, solution-oriented approach for every project I undertake.</>,
            martinaBio: <>My name is <strong>Martina Greco</strong>, a UX/UI Designer specialized in visual hierarchy, modularity, and design systems for digital products. I have experience in modular systems and identity flow optimization in apps, and I currently help projects transition from freelance structures into scalable, sustainable business models.</>,
        },
        projects: {
            title: 'Projects',
            filterAll: 'All',
            cta: 'Visit App',
            list: [
                {
                    title: "Music Presskit",
                    description: "Strategic EPK design and visual branding. Optimized to boost booking and professional communication in the music industry.",
                    link: "https://jansound.com/",
                    tags: ["EPK", "Web Design", "Music"],
                    cta: "Visit Website",
                },
                {
                    title: "Cesto Tracker",
                    description: "WebApp to track live Cestoball matches.",
                    link: "https://cestotracker.com",
                    tags: ["Web App", "Sports Tech"],
                },
                {
                    title: "Rota Pádel",
                    description: "Dynamic app to manage and rotate players in padel matches, fairly deciding who plays against whom.",
                    link: "https://rota-padel.netlify.app",
                    tags: ["Web App", "Sports Tech"],
                },
                {
                    title: "BBQ Calculator",
                    description: "Fast and smart tool to accurately calculate the amount of food, drinks, and charcoal needed based on your guests.",
                    link: "https://asadito-site.netlify.app",
                    tags: ["Web App", "Utility"],
                }
            ]
        },
        services: {
            title: 'Services',
            list: [
                {
                    title: "Data Solutions",
                    description: "From data cleaning and analysis to creating comprehensive dashboards and reports, I offer end-to-end data solutions.",
                    icon: <DataIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "AI Tools",
                    description: "I develop custom artificial intelligence models to automate processes, predict outcomes, and uncover opportunities.",
                    icon: <AIIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "Web App Development",
                    description: "I build responsive and user-friendly web applications to bring your data and AI solutions to life.",
                    icon: <WebAppIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "Landing Pages",
                    description: "I design and develop attractive, conversion-optimized landing pages perfect for product launches or lead generation.",
                    icon: <LandingPageIcon className="h-10 w-10 text-brand-teal" />
                }
            ]
        },
        contact: {
            title: 'Get In Touch',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
            sending: 'Sending...',
            success: 'Thank you! Your message was sent successfully. I will reach back soon.',
            error: 'There was an error sending the message. Please try contacting me directly on my socials.'
        },
        footer: {
            rights: 'All rights reserved. Gresolutions'
        }
    }
}
