import React from 'react';
import { DataIcon, AIIcon, WebAppIcon, LandingPageIcon } from '../assets/icons';

export const translations = {
    es: {
        nav: {
            about: 'Sobre nosotros',
            projects: 'Proyectos',
            services: 'Servicios',
            contact: 'Contacto'
        },
        hero: {
            subtitle: 'Soluciones basadas en datos para los desafíos modernos.',
            cta: 'Ver Proyectos'
        },
        about: {
            title: 'Sobre nosotros',
            santiagoRole: 'Data Analyst & Engineer',
            martinaRole: 'Diseñadora UX/UI & Desarrolladora Web',
            bio: <>Mi nombre es <strong>Santiago Greco</strong>, Analista de Datos y estudiante avanzado de Ingeniería Industrial. Me especializo en transformar datos complejos en insights accionables y en construir soluciones inteligentes para impulsar el crecimiento empresarial. Mi formación me proporciona un enfoque sistémico y orientado a soluciones para cada proyecto que emprendo.</>,
            martinaBio: <>Especializada en el diseño de interfaces de alta performance y desarrollo web interactivo. Mi enfoque combina la psicología del usuario con la arquitectura frontend, asegurando que cada plataforma no solo sea estéticamente impecable y coherente con la identidad de marca, sino fluida, modular y optimizada para la conversión técnica.</>,
        },
        projects: {
            title: 'Proyectos',
            filterAll: 'Todos',
            cta: 'Visitar App',
            caseStudyBtn: 'Caso de Estudio',
            modalProblem: 'Problema Detectado',
            modalSolution: 'Solución Premium',
            list: [
                {
                    title: "ByJudite — Tienda Online",
                    description: "Desarrollo de e-commerce minimalista premium. Optimiza la experiencia de checkout y catálogo para maximizar la conversión y retención.",
                    link: "https://www.byjudite.com.ar/",
                    tags: ["Tienda Online", "Web"],
                    cta: "Visitar Web",
                    tagline: "Sistemas visuales de alta conversión.",
                    problem: "Descentralización y fragmentación de los canales de atención y venta (Instagram y WhatsApp), generando cuellos de botella operativos, pérdida de trazabilidad de los usuarios y fricciones en el embudo de compra que limitaban la escala.",
                    solution: "Desarrollo integral de una plataforma e-commerce a medida bajo una estética minimalista de alta gama. Centralizamos el ecosistema digital unificando la identidad visual y optimizando los puntos de contacto críticos (catálogo y checkout), transformando la navegación en una experiencia inmersiva de fricción cero que automatiza las ventas y eleva el valor percibido del negocio."
                },
                {
                    title: "Music Presskit",
                    description: "Diseño de EPK estratégico y branding visual. Optimizado para potenciar el booking y la comunicación profesional en la industria musical.",
                    link: "https://jansound.com/",
                    tags: ["EPK", "Web Design", "Music"],
                    cta: "Visitar Web",
                    tagline: "Interfaces dinámicas para la industria musical.",
                    problem: "Los DJs y productores musicales pierden oportunidades de contratación debido al uso de herramientas estáticas (PDFs pesados, enlaces dispersos de Drive) que no se adaptan a móviles y ralentizan la evaluación de los bookers.",
                    solution: "Diseño y maquetación de un EPK interactivo y responsive de alto impacto cinemático. Desarrollamos una interfaz single-page que integra reproductores multimedia fluidos, galerías de prensa optimizadas en alta resolución y accesos directos de contratación, reduciendo drásticamente los tiempos de respuesta de los promotores."
                },
                {
                    title: "Cesto Tracker",
                    description: "WebApp para registrar partidos en vivo de Cestoball.",
                    link: "https://cestotracker.com",
                    tags: ["Web App", "Sports Tech"],
                    tagline: "Data & Interfaces orientadas al rendimiento.",
                    problem: "La falta de software especializado para deportes alternativos como el Cestoball obligaba a entrenadores y clubes a registrar estadísticas manualmente en papel, imposibilitando el análisis táctico estructurado y en tiempo real.",
                    solution: "Construcción de una Web App táctil optimizada para dispositivos móviles centrada en la arquitectura de datos. Permite capturar puntos, faltas e interrupciones en vivo en menos de un segundo, procesando y centralizando las variables métricas al instante para la toma de decisiones estratégicas desde el banco de suplentes."
                },
                {
                    title: "Rota Pádel",
                    description: "Aplicación dinámica para gestionar y rotar jugadores en partidos de pádel, decidiendo equitativamente quién juega contra quién.",
                    link: "https://rota-padel.netlify.app",
                    tags: ["Web App", "Sports Tech"],
                    tagline: "Automatización lógica en aplicaciones progresivas.",
                    problem: "La organización de partidos de pádel con dotaciones superiores a 4 jugadores suele generar demoras, emparejamientos desbalanceados y discusiones al calcular de forma justa los cruces de parejas y los turnos de descanso.",
                    solution: "Desarrollo de una Aplicación Web Progresiva (PWA) potenciada por un algoritmo de distribución matemática. El sistema automatiza los cruces y gestiona los tiempos de juego y descanso óptimos de manera exacta, eliminando la fricción de coordinación directamente en el entorno de las canchas."
                },
                {
                    title: "Calculadora de Asado",
                    description: "Herramienta inteligente y rápida para calcular con precisión la cantidad de comida, bebida y carbón necesarios según tus invitados.",
                    link: "https://asadito-site.netlify.app",
                    tags: ["Web App", "Utilidad"],
                    tagline: "Optimización de recursos y diseño de producto.",
                    problem: "La planificación logística para eventos gastronómicos tradicionales suele calcularse de forma empírica, derivando en presupuestos deficientes o bien en sobrecostos financieros innecesarios debido al desperdicio de suministros.",
                    solution: "Creación de una herramienta digital interactiva basada en parámetros de consumo calibrados. A través de una interfaz ultra limpia y rápida, el sistema procesa la audiencia (adultos, niños) y sus preferencias específicas de menú para arrojar una lista de compras exacta, profesionalizando la organización y optimizando el presupuesto."
                },
                {
                    title: "RENO",
                    description: "Plataforma inteligente para la digitalización de procesos industriales, eliminando el uso de papel y centralizando datos técnicos en tiempo real para una gestión operativa eficiente.",
                    link: "https://i006-reno-arg-fullstack-1.onrender.com/login",
                    tags: ["Web App", "Utilidad"],
                }
            ]
        },
        services: {
            title: 'Servicios',
            list: [
                {
                    title: "Soluciones con Datos",
                    description: "Desde la limpieza y análisis de datos hasta la creación de dashboards e informes completos, ofrecemos soluciones integrales.",
                    icon: <DataIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "Herramientas con IA",
                    description: "Desarrollamos modelos personalizados de inteligencia artificial para automatizar procesos, predecir resultados y descubrir oportunidades.",
                    icon: <AIIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "Desarrollo Web",
                    description: "Creamos aplicaciones web responsivas y fáciles de usar para dar vida a sus soluciones de datos e IA.",
                    icon: <WebAppIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "Landing Pages",
                    description: "Diseñamos y desarrollamos páginas web atractivas y optimizadas para la conversión, perfectas para lanzar productos.",
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
            success: '¡Gracias! Tu mensaje ha sido enviado correctamente. Nos comunicaremos a la brevedad.',
            error: 'Hubo un error al enviar el mensaje. Intentá escribirnos directamente a nuestras redes.'
        },
        footer: {
            rights: 'Todos los derechos reservados. Gresolutions'
        }
    },
    en: {
        nav: {
            about: 'About Us',
            projects: 'Projects',
            services: 'Services',
            contact: 'Contact'
        },
        hero: {
            subtitle: 'Data-driven solutions for modern challenges.',
            cta: 'View Projects'
        },
        about: {
            title: 'About Us',
            santiagoRole: 'Data Analyst & Engineer',
            martinaRole: 'UX/UI Designer & Web Developer',
            bio: <>My name is <strong>Santiago Greco</strong>, a Data Analyst and advanced Industrial Engineering student. I specialize in transforming complex data into actionable insights and building intelligent solutions to drive business growth. My background provides me with a systemic, solution-oriented approach for every project I undertake.</>,
            martinaBio: <>Specialized in the design of high-performance interfaces and interactive web development. My approach combines user psychology with frontend architecture, ensuring that each platform is not only aesthetically flawless and consistent with the brand identity, but also fluid, modular, and optimized for technical conversion.</>,
        },
        projects: {
            title: 'Projects',
            filterAll: 'All',
            cta: 'Visit App',
            caseStudyBtn: 'Case Study',
            modalProblem: 'Detected Problem',
            modalSolution: 'Premium Solution',
            list: [
                {
                    title: "ByJudite — E-commerce Store",
                    description: "Full development of a premium minimalist e-commerce. Optimizes the checkout and catalog experience to maximize conversion and retention.",
                    link: "https://www.byjudite.com.ar/",
                    tags: ["E-commerce", "Web"],
                    cta: "Visit Website",
                    tagline: "High-converting visual systems.",
                    problem: "Decentralization and fragmentation of customer service and sales channels (Instagram and WhatsApp), generating operational bottlenecks, loss of user traceability, and friction in the sales funnel that limited scale.",
                    solution: "Comprehensive development of a custom e-commerce platform under a high-end minimalist aesthetic. We centralized the digital ecosystem, unifying the visual identity and optimizing critical touchpoints (catalog and checkout), transforming navigation into an immersive, zero-friction experience that automates sales and elevates the perceived value of the business."
                },
                {
                    title: "Music Presskit",
                    description: "Strategic EPK design and visual branding. Optimized to boost booking and professional communication in the music industry.",
                    link: "https://jansound.com/",
                    tags: ["EPK", "Web Design", "Music"],
                    cta: "Visit Website",
                    tagline: "Dynamic interfaces for the music industry.",
                    problem: "DJs and music producers lose booking opportunities due to the use of static tools (heavy PDFs, scattered Drive links) that do not adapt to mobile and slow down bookers' evaluations.",
                    solution: "Design and layout of an interactive and responsive EPK with high cinematic impact. We developed a single-page interface integrating smooth media players, optimized high-resolution press galleries, and direct booking access, drastically reducing promoter response times."
                },
                {
                    title: "Cesto Tracker",
                    description: "WebApp to track live Cestoball matches.",
                    link: "https://cestotracker.com",
                    tags: ["Web App", "Sports Tech"],
                    tagline: "Data & Interfaces geared towards performance.",
                    problem: "The lack of specialized software for alternative sports like Cestoball forced coaches and clubs to record statistics manually on paper, making structured and real-time tactical analysis impossible.",
                    solution: "Construction of a mobile-optimized touch Web App centered on data architecture. Allows live capturing of scores, fouls, and interruptions in less than a second, processing and centralizing metric variables instantly for strategic decision-making from the bench."
                },
                {
                    title: "Rota Pádel",
                    description: "Dynamic app to manage and rotate players in padel matches, fairly deciding who plays against whom.",
                    link: "https://rota-padel.netlify.app",
                    tags: ["Web App", "Sports Tech"],
                    tagline: "Logical automation in progressive applications.",
                    problem: "Organizing padel matches with rosters of more than 4 players usually generates delays, unbalanced matches, and arguments when calculating match pairings and rest shifts fairly.",
                    solution: "Development of a Progressive Web App (PWA) powered by a mathematical distribution algorithm. The system automates pairings and manages exact game and rest times, eliminating coordination friction directly at the courts."
                },
                {
                    title: "BBQ Calculator",
                    description: "Fast and smart tool to accurately calculate the amount of food, drinks, and charcoal needed based on your guests.",
                    link: "https://asadito-site.netlify.app",
                    tags: ["Web App", "Utility"],
                    tagline: "Resource optimization and product design.",
                    problem: "Logistical planning for traditional culinary events is usually calculated empirically, leading to poor budgets or unnecessary financial overcosts due to wasted supplies.",
                    solution: "Creation of an interactive digital tool based on calibrated consumption parameters. Through an ultra-clean and fast interface, the system processes the audience (adults, children) and their specific menu preferences to output an exact shopping list, professionalizing the organization and optimizing the budget."
                },
                {
                    title: "RENO",
                    description: "Smart platform for the digitalization of industrial processes, eliminating paper use and centralizing technical data in real time for efficient operational management.",
                    link: "https://i006-reno-arg-fullstack-1.onrender.com/login",
                    tags: ["Web App", "Utility"],
                }
            ]
        },
        services: {
            title: 'Services',
            list: [
                {
                    title: "Data Solutions",
                    description: "From data cleaning and analysis to creating comprehensive dashboards and reports, we offer end-to-end data solutions.",
                    icon: <DataIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "AI Tools",
                    description: "We develop custom artificial intelligence models to automate processes, predict outcomes, and uncover opportunities.",
                    icon: <AIIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "Web App Development",
                    description: "We build responsive and user-friendly web applications to bring your data and AI solutions to life.",
                    icon: <WebAppIcon className="h-10 w-10 text-brand-teal" />
                },
                {
                    title: "Landing Pages",
                    description: "We design and develop attractive, conversion-optimized landing pages perfect for product launches or lead generation.",
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
            success: 'Thank you! Your message was sent successfully. We will get back to you soon.',
            error: 'There was an error sending the message. Please try contacting us directly on our socials.'
        },
        footer: {
            rights: 'All rights reserved. Gresolutions'
        }
    }
}
