import React from 'react';
import { DataIcon, AIIcon, WebAppIcon, LandingPageIcon } from '../assets/icons';

export const translations = {
    es: {
        nav: {
            about: 'Nosotros',
            projects: 'Proyectos',
            services: 'Servicios',
            contact: 'Contacto'
        },
        hero: {
            title: 'Gresolutions',
            tagline: 'Digital Studio & Portfolio',
            subtitle: 'Llevamos ideas de datos, diseño y desarrollo a producción.',
            ctaProjects: 'Ver proyectos',
            ctaContact: 'Contactarnos'
        },
        about: {
            title: 'Nosotros',
            duoBio: 'Somos un equipo enfocado en llevar ideas a producción. Combinamos investigación de usuarios, arquitectura de información y diseño de interfaces con maquetación frontend, automatizaciones e integraciones técnicas.',
            designTitle: 'Diseño & Producto',
            designSkills: 'UX/UI Design, Figma, Design Systems, Prototipado, Identidad Digital',
            devTitle: 'Desarrollo & Tech',
            devSkills: 'HTML5, CSS3, JavaScript, Webflow/Framer, Integraciones (n8n, APIs), Optimización de Performance',
            santiagoRole: 'Data Analyst & Engineer',
            martinaRole: 'UX/UI DESIGNER & WEB DEVELOPER',
            bio: <>Mi nombre es <strong>Santiago Greco</strong>, Analista de Datos y estudiante avanzado de Ingeniería Industrial. Me especializo en transformar datos complejos en insights accionables y en construir soluciones inteligentes para impulsar el crecimiento empresarial. Mi formación me proporciona un enfoque sistémico y orientado a soluciones para cada proyecto que emprendo.</>,
            martinaBio: <>Mi nombre es <strong>Martina Greco</strong>, Diseñadora UX/UI y Desarrolladora Web. Me especializo en crear ecosistemas digitales escalables, diseñando interfaces de alta performance y estructurando entornos web interactivos. Mi enfoque combina la psicología del usuario con arquitecturas fluidas, asegurando plataformas modulares y optimizadas para la conversión.</>
        },
        projects: {
            title: 'Proyectos',
            filterAll: 'Todos',
            filterWebEcommerce: 'Web & E-Commerce',
            filterBrandingDigital: 'Branding & Digital',
            filterAppsTools: 'Apps & Herramientas',
            cta: 'Visitar Proyecto',
            caseStudyBtn: 'Caso de Estudio',
            modalRole: 'Equipo / Rol',
            modalStack: 'Stack & Herramientas',
            modalChallenge: 'El Desafío',
            modalDelivery: 'Solución & Entrega',
            list: [
                {
                    title: "ByJudite",
                    description: "Diseño y configuración de tienda online focalizada en la experiencia de usuario, catálogo visual y conversión.",
                    link: "https://www.byjudite.com.ar/",
                    category: "web-ecommerce" as const,
                    tags: ["E-Commerce & Web Design"],
                    cta: "Visitar Web",
                    tagline: "Sistemas visuales de alta conversión.",
                    role: "UX/UI + Frontend Development por Gresolutions",
                    stack: ["Figma", "Tienda Nube", "CSS3 Custom"],
                    challenge: "Descentralización y fragmentación de los canales de atención y venta (Instagram y WhatsApp), generando cuellos de botella operativos, pérdida de trazabilidad de los usuarios y fricciones en el embudo de compra que limitaban la escala.",
                    delivery: "Desarrollo integral de una plataforma e-commerce a medida bajo una estética minimalista de alta gama. Centralizamos el ecosistema digital unificando la identidad visual y optimizando los puntos de contacto críticos (catálogo y checkout), transformando la navegación en una experiencia inmersiva de fricción cero que automatiza las ventas y eleva el valor percibido del negocio.",
                    image: "/ByJudite.png"
                },
                {
                    title: "MicrosParty",
                    description: "Diseño Web Premium y Optimización de Performance.",
                    link: "https://microsparty.com/",
                    category: "web-ecommerce" as const,
                    tags: ["Landing Page & Frontend Development"],
                    cta: "Visitar Web",
                    tagline: "Diseño Web Premium y Optimización de Performance",
                    role: "UX/UI + Frontend Development por Gresolutions",
                    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "Lighthouse Optimization"],
                    challenge: "Rediseñar la presencia digital de MicrosParty para reflejar una estética moderna y profesional sin comprometer los tiempos de carga.",
                    delivery: "Dirección de arte, reestructuración de la jerarquía visual y maquetación Pixel-Perfect adaptada a dispositivos móviles. Maquetación frontend limpia en HTML5 y CSS3, optimización integral de imágenes (conversión a WebP) y maximización del rendimiento de carga (Lighthouse score 95+).",
                    image: "/MicrosPArty.png"
                },
                {
                    title: "Nizza",
                    description: "Tienda Online de sublimados con presencia digital enfocada en composición tipográfica, jerarquía visual y maquetación de marca.",
                    link: "https://nizzasublimados.mitiendanube.com/",
                    category: "web-ecommerce" as const,
                    tags: ["Web Design & Visual Layout"],
                    cta: "Visitar Tienda",
                    tagline: "Composición tipográfica y jerarquía visual de marca.",
                    role: "UX/UI Design + Brand Layout por Gresolutions",
                    stack: ["Figma", "Tienda Nube", "CSS3"],
                    challenge: "Crear una tienda online que capture la esencia de Nizza Sublimados, organizando un catálogo diverso y destacando la identidad de la marca de forma clara.",
                    delivery: "Configuración y personalización del e-commerce enfocado en la composición tipográfica, jerarquía visual y diseño responsive para facilitar la compra y el reconocimiento de marca.",
                    image: "/Nizza.png"
                },
                {
                    title: "11.04_DIGITAL",
                    description: "Dirección de arte, identidad visual y estrategia de producción digital integral para proyectos creativos.",
                    link: "https://1104digital.com/",
                    category: "branding-digital" as const,
                    tags: ["Digital Studio & Identity"],
                    cta: "Visitar Web",
                    tagline: "Identidad visual y estrategia de producción digital.",
                    role: "Dirección de Arte & Identidad Digital por Gresolutions",
                    stack: ["Figma", "Adobe Suite", "Producción Digital", "Webflow"],
                    challenge: "Establecer una presencia de marca digital cohesiva y atractiva para el estudio creativo, comunicando el alcance de sus servicios y su visión artística.",
                    delivery: "Diseño de identidad de marca, dirección de arte digital y optimización del flujo de trabajo de producción de contenido para canales digitales, garantizando consistencia estética.",
                    image: "/11.04Digital.png"
                },
                {
                    title: "EPK Jansound",
                    description: "Presskit digital interactivo con integración multimedia y maquetación de alto impacto.",
                    link: "https://jansound.com/",
                    category: "branding-digital" as const,
                    tags: ["Interactive Web & EPK"],
                    cta: "Visitar Web",
                    tagline: "Interfaces dinámicas para la industria musical.",
                    role: "UX/UI Design + Frontend Development por Gresolutions",
                    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "Audio Integrations"],
                    challenge: "Los DJs y productores musicales pierden oportunidades de contratación debido al uso de herramientas estáticas (PDFs pesados, enlaces dispersos de Drive) que no se adaptan a móviles y ralentizan la evaluación de los bookers.",
                    delivery: "Diseño y maquetación de un EPK interactivo y responsive de alto impacto cinemático. Desarrollamos una interfaz single-page que integra reproductores multimedia fluidos, galerías de prensa optimizadas en alta resolución y accesos directos de contratación, reduciendo drásticamente los tiempos de respuesta de los promotores.",
                    image: "/JansoundEPK.png"
                },
                {
                    title: "EPK Alejo V",
                    description: "Presskit digital para proyecto musical, enfocado en reproducción multimedia fluida, navegación interactiva y descarga de assets de prensa.",
                    link: "https://alejo-v.com/",
                    category: "branding-digital" as const,
                    tags: ["Interactive Web & EPK"],
                    cta: "Visitar Web",
                    tagline: "Reproducción multimedia fluida y descarga de assets.",
                    role: "UX/UI Design + Web Development por Gresolutions",
                    stack: ["HTML5", "CSS3", "JavaScript", "Audio Integrations", "Cloud Storage APIs"],
                    challenge: "Diseñar un presskit digital para el artista Alejo V que centralice su material de prensa, permitiendo escuchar su música de forma fluida y descargar material promocional en alta calidad sin redirecciones complejas.",
                    delivery: "Creación de una interfaz interactiva oscura con reproductores de audio integrados, galería de fotos optimizada y un módulo de descarga directa para la prensa, optimizando las campañas de lanzamiento.",
                    image: "/AlejoV.png"
                },
                {
                    title: "Cesto Tracker",
                    description: "WebApp para registrar partidos en vivo de Cestoball.",
                    link: "https://cestotracker.com",
                    category: "apps-tools" as const,
                    tags: ["Web App & Tracking"],
                    cta: "Visitar App",
                    tagline: "Data & Interfaces orientadas al rendimiento.",
                    role: "Data & Systems Engineering + Frontend Development por Gresolutions",
                    stack: ["React", "TypeScript", "Tailwind CSS", "Data Structures"],
                    challenge: "La falta de software especializado para deportes alternativos como el Cestoball obligaba a entrenadores y clubes a registrar estadísticas manualmente en papel, imposibilitando el análisis táctico estructurado y en tiempo real.",
                    delivery: "Construcción de una Web App táctil optimizada para dispositivos móviles centrada en la arquitectura de datos. Permite capturar puntos, faltas e interrupciones en vivo en menos de un segundo, procesando y centralizando las variables métricas al instante para la toma de decisiones estratégicas desde el banco de suplentes.",
                    image: "/Mockup-CestoTracker.png"
                },
                {
                    title: "Rota Pádel",
                    description: "Aplicación dinámica para gestionar y rotar jugadores en partidos de pádel, decidiendo equitativamente quién juega contra quién.",
                    link: "https://rota-padel.netlify.app",
                    category: "apps-tools" as const,
                    tags: ["App & Sport Management"],
                    cta: "Visitar App",
                    tagline: "Automatización lógica en aplicaciones progresivas.",
                    role: "Algorithmic Logic + UX/UI + PWA Development por Gresolutions",
                    stack: ["React", "PWA", "Tailwind CSS", "Algoritmos de Distribución"],
                    challenge: "La organización de partidos de pádel con dotaciones superiores a 4 jugadores suele generar demoras, emparejamientos desbalanceados y discusiones al calcular de forma justa los cruces de parejas y los turnos de descanso.",
                    delivery: "Desarrollo de una Aplicación Web Progresiva (PWA) potenciada por un algoritmo de distribución matemática. El sistema automatiza los cruces y gestiona los tiempos de juego y descanso óptimos de manera exacta, eliminando la fricción de coordinación directamente en el entorno de las canchas.",
                    image: "/RotaPadel.png"
                },
                {
                    title: "Asadito",
                    description: "Herramienta inteligente y rápida para calcular con precisión la cantidad de comida, bebida y carbón necesarios según tus invitados.",
                    link: "https://asadito.site/",
                    category: "apps-tools" as const,
                    tags: ["Web Utility / Tool"],
                    cta: "Visitar Web",
                    tagline: "Optimización de recursos y diseño de producto.",
                    role: "Product Design & Frontend Development por Gresolutions",
                    stack: ["HTML5", "CSS3", "JavaScript", "UX/UI Design"],
                    challenge: "La planificación logística para eventos gastronómicos tradicionales suele calcularse de forma empírica, derivando en presupuestos deficientes o bien en sobrecostos financieros innecesarios debido al desperdicio de suministros.",
                    delivery: "Creación de una herramienta digital interactiva basada en parámetros de consumo calibrados. A través de una interfaz ultra limpia y rápida, el sistema procesa la audiencia (adultos, niños) y sus preferencias específicas de menú para arrojar una lista de compras exacta, profesionalizando la organización y optimizando el presupuesto.",
                    image: "/asaditosite.png"
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
        },
        stats: [
            { value: "+15", label: "Proyectos Entregados" },
            { value: "95%", label: "Promedio Lighthouse" },
            { value: "100%", label: "Clientes Satisfechos" },
            { value: "+8", label: "Soluciones de Datos e IA" }
        ],
        testimonials: {
            title: "Lo que dicen nuestros clientes",
            list: [
                {
                    quote: "Gresolutions transformó por completo nuestro canal de ventas. Pasamos de un desorden operativo por WhatsApp a una tienda automatizada impecable que elevó el valor de nuestra marca. La atención al detalle y el diseño son de otro nivel.",
                    author: "Judith",
                    role: "Fundadora de ByJudite",
                    project: "ByJudite (E-Commerce)"
                },
                {
                    quote: "El EPK interactivo superó todas nuestras expectativas. Los bookers y promotores ahora responden mucho más rápido gracias a la fluidez de los reproductores y la facilidad de descarga. Es nuestra mejor carta de presentación.",
                    author: "Jansound",
                    role: "DJ & Productor",
                    project: "EPK Jansound (Web Interactiva)"
                },
                {
                    quote: "Trabajar con Santiago y Martina fue excelente. No solo crearon una web con un diseño impactante y moderno, sino que la velocidad de carga es increíble (Lighthouse 95+). Se nota el profesionalismo técnico.",
                    author: "Gastón",
                    role: "Fundador de MicrosParty",
                    project: "MicrosParty (Landing Page)"
                }
            ]
        },
        floatingCTA: "¡Hablemos!"
    },
    en: {
        nav: {
            about: 'About Us',
            projects: 'Projects',
            services: 'Services',
            contact: 'Contact'
        },
        hero: {
            title: 'Gresolutions',
            tagline: 'Digital Studio & Portfolio',
            subtitle: 'We bring data, design, and development ideas to production.',
            ctaProjects: 'View projects',
            ctaContact: 'Contact us'
        },
        about: {
            title: 'About Us',
            duoBio: 'We are a team focused on bringing ideas to production. We combine user research, information architecture, and interface design with frontend layout, automations, and technical integrations.',
            designTitle: 'Design & Product',
            designSkills: 'UX/UI Design, Figma, Design Systems, Prototyping, Digital Identity',
            devTitle: 'Development & Tech',
            devSkills: 'HTML5, CSS3, JavaScript, Webflow/Framer, Integrations (n8n, APIs), Performance Optimization',
            santiagoRole: 'Data Analyst & Engineer',
            martinaRole: 'UX/UI DESIGNER & WEB DEVELOPER',
            bio: <>My name is <strong>Santiago Greco</strong>, a Data Analyst and advanced Industrial Engineering student. I specialize in transforming complex data into actionable insights and building intelligent solutions to drive business growth. My background provides me with a systemic, solution-oriented approach for every project I undertake.</>,
            martinaBio: <>My name is <strong>Martina Greco</strong>, UX/UI Designer and Web Developer. I specialize in creating scalable digital ecosystems, designing high-performance interfaces, and structuring interactive web environments. My approach combines user psychology with fluid architectures, ensuring modular and conversion-optimized platforms.</>
        },
        projects: {
            title: 'Projects',
            filterAll: 'All',
            filterWebEcommerce: 'Web & E-Commerce',
            filterBrandingDigital: 'Branding & Digital',
            filterAppsTools: 'Apps & Tools',
            cta: 'Visit Project',
            caseStudyBtn: 'Case Study',
            modalRole: 'Team / Role',
            modalStack: 'Stack & Tools',
            modalChallenge: 'The Challenge',
            modalDelivery: 'Solution & Delivery',
            list: [
                {
                    title: "ByJudite",
                    description: "Design and configuration of an online store focused on user experience, visual catalog, and conversion.",
                    link: "https://www.byjudite.com.ar/",
                    category: "web-ecommerce" as const,
                    tags: ["E-Commerce & Web Design"],
                    cta: "Visit Web",
                    tagline: "High-converting visual systems.",
                    role: "UX/UI + Frontend Development by Gresolutions",
                    stack: ["Figma", "Tienda Nube", "Custom CSS3"],
                    challenge: "Decentralization and fragmentation of customer service and sales channels (Instagram and WhatsApp), generating operational bottlenecks, loss of user traceability, and friction in the sales funnel that limited scale.",
                    delivery: "Comprehensive development of a custom e-commerce platform under a high-end minimalist aesthetic. We centralized the digital ecosystem, unifying the visual identity and optimizing critical touchpoints (catalog and checkout), transforming navigation into an immersive, zero-friction experience that automates sales and elevates the perceived value of the business.",
                    image: "/ByJudite.png"
                },
                {
                    title: "MicrosParty",
                    description: "Premium Web Design and Performance Optimization.",
                    link: "https://microsparty.com/",
                    category: "web-ecommerce" as const,
                    tags: ["Landing Page & Frontend Development"],
                    cta: "Visit Web",
                    tagline: "Premium Web Design and Performance Optimization",
                    role: "UX/UI + Frontend Development by Gresolutions",
                    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "Lighthouse Optimization"],
                    challenge: "Redesign the digital presence of MicrosParty to reflect a modern and professional aesthetic without compromising load times.",
                    delivery: "Art direction, restructuring of visual hierarchy, and pixel-perfect responsive layout for mobile devices. Clean frontend development in HTML5/CSS3, complete image optimization (WebP conversion), and maximum performance (Lighthouse score 95+).",
                    image: "/MicrosPArty.png"
                },
                {
                    title: "Nizza",
                    description: "Sublimation online store with a digital presence focused on typography, visual hierarchy, and brand layout.",
                    link: "https://nizzasublimados.mitiendanube.com/",
                    category: "web-ecommerce" as const,
                    tags: ["Web Design & Visual Layout"],
                    cta: "Visit Store",
                    tagline: "Brand typography and visual hierarchy layout.",
                    role: "UX/UI Design + Brand Layout by Gresolutions",
                    stack: ["Figma", "Tienda Nube", "CSS3"],
                    challenge: "Create an online store that captures the essence of Nizza Sublimados, organizing a diverse catalog and highlighting the brand identity clearly.",
                    delivery: "Configuration and customization of the e-commerce focused on typography layout, visual hierarchy, and responsive design to facilitate purchases and brand recognition.",
                    image: "/Nizza.png"
                },
                {
                    title: "11.04_DIGITAL",
                    description: "Art direction, visual identity, and comprehensive digital production strategy for creative projects.",
                    link: "https://1104digital.com/",
                    category: "branding-digital" as const,
                    tags: ["Digital Studio & Identity"],
                    cta: "Visit Web",
                    tagline: "Visual identity and digital production strategy.",
                    role: "Visual identity and digital production strategy.",
                    stack: ["Figma", "Adobe Suite", "Digital Production", "Webflow"],
                    challenge: "Establish a cohesive and attractive digital brand presence for the creative studio, communicating the scope of their services and artistic vision.",
                    delivery: "Brand identity design, digital art direction, and content production workflow optimization for digital channels, guaranteeing aesthetic consistency.",
                    image: "/11.04Digital.png"
                },
                {
                    title: "EPK Jansound",
                    description: "Interactive digital presskit with multimedia integration and high-impact layout.",
                    link: "https://jansound.com/",
                    category: "branding-digital" as const,
                    tags: ["Interactive Web & EPK"],
                    cta: "Visit Web",
                    tagline: "Dynamic interfaces for the music industry.",
                    role: "UX/UI Design + Frontend Development by Gresolutions",
                    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "Audio Integrations"],
                    challenge: "DJs and music producers lose booking opportunities due to the use of static tools (heavy PDFs, scattered Drive links) that do not adapt to mobile and slow down bookers' evaluations.",
                    delivery: "Design and layout of an interactive and responsive EPK with high cinematic impact. We developed a single-page interface integrating smooth media players, optimized high-resolution press galleries, and direct booking access, drastically reducing promoter response times.",
                    image: "/JansoundEPK.png"
                },
                {
                    title: "EPK Alejo V",
                    description: "Digital presskit for a musical project, focused on smooth media playing, interactive navigation, and download of press assets.",
                    link: "https://alejo-v.com/",
                    category: "branding-digital" as const,
                    tags: ["Interactive Web & EPK"],
                    cta: "Visit Web",
                    tagline: "Smooth media playback and press assets download.",
                    role: "UX/UI Design + Web Development by Gresolutions",
                    stack: ["HTML5", "CSS3", "JavaScript", "Audio Integrations", "Cloud Storage APIs"],
                    challenge: "Design a digital presskit for the artist Alejo V that centralizes his press material, allowing smooth music playback and high-quality promotional downloads without complex redirects.",
                    delivery: "Creation of a dark interactive interface with integrated audio players, optimized photo gallery, and a direct download module for the press, optimizing release campaigns.",
                    image: "/AlejoV.png"
                },
                {
                    title: "Cesto Tracker",
                    description: "WebApp to track live Cestoball matches.",
                    link: "https://cestotracker.com",
                    category: "apps-tools" as const,
                    tags: ["Web App & Tracking"],
                    cta: "Visit App",
                    tagline: "Data & Interfaces geared towards performance.",
                    role: "Data & Systems Engineering + Frontend Development by Gresolutions",
                    stack: ["React", "TypeScript", "Tailwind CSS", "Data Structures"],
                    challenge: "The lack of specialized software for alternative sports like Cestoball forced coaches and clubs to record statistics manually on paper, making structured and real-time tactical analysis impossible.",
                    delivery: "Construction of a mobile-optimized touch Web App centered on data architecture. Allows live capturing of scores, fouls, and interruptions in less than a second, processing and centralizing metric variables instantly for strategic decision-making from the bench.",
                    image: "/Mockup-CestoTracker.png"
                },
                {
                    title: "Rota Pádel",
                    description: "Dynamic app to manage and rotate players in padel matches, fairly deciding who plays against whom.",
                    link: "https://rota-padel.netlify.app",
                    category: "apps-tools" as const,
                    tags: ["App & Sport Management"],
                    cta: "Visit App",
                    tagline: "Logical automation in progressive applications.",
                    role: "Algorithmic Logic + UX/UI + PWA Development by Gresolutions",
                    stack: ["React", "PWA", "Tailwind CSS", "Distribution Algorithms"],
                    challenge: "Organizing padel matches with rosters of more than 4 players usually generates delays, unbalanced matches, and arguments when calculating match pairings and rest shifts fairly.",
                    delivery: "Development of a Progressive Web App (PWA) powered by a mathematical distribution algorithm. The system automates pairings and manages exact game and rest times, eliminating coordination friction directly at the courts.",
                    image: "/RotaPadel.png"
                },
                {
                    title: "Asadito",
                    description: "Fast and smart tool to accurately calculate the amount of food, drinks, and charcoal needed based on your guests.",
                    link: "https://asadito.site/",
                    category: "apps-tools" as const,
                    tags: ["Web Utility / Tool"],
                    cta: "Visit Website",
                    tagline: "Resource optimization and product design.",
                    role: "Product Design & Frontend Development by Gresolutions",
                    stack: ["HTML5", "CSS3", "JavaScript", "UX/UI Design"],
                    challenge: "Logistical planning for traditional culinary events is usually calculated empirically, leading to poor budgets or unnecessary financial overcosts due to wasted supplies.",
                    delivery: "Creation of an interactive digital tool based on calibrated consumption parameters. Through an ultra-clean and fast interface, the system processes the audience (adults, children) and their specific menu preferences to output an exact shopping list, professionalizing the organization and optimizing the budget.",
                    image: "/asaditosite.png"
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
        },
        stats: [
            { value: "+15", label: "Projects Delivered" },
            { value: "95%", label: "Average Lighthouse Score" },
            { value: "100%", label: "Satisfied Clients" },
            { value: "+8", label: "Data & AI Solutions" }
        ],
        testimonials: {
            title: "What our clients say",
            list: [
                {
                    quote: "Gresolutions completely transformed our sales channel. We went from operational chaos on WhatsApp to an impeccable automated store that elevated our brand value. The attention to detail and design are on another level.",
                    author: "Judith",
                    role: "Founder of ByJudite",
                    project: "ByJudite (E-Commerce)"
                },
                {
                    quote: "The interactive EPK exceeded all our expectations. Bookers and promoters now respond much faster thanks to the fluid players and easy downloads. It's our best calling card.",
                    author: "Jansound",
                    role: "DJ & Producer",
                    project: "EPK Jansound (Interactive Web)"
                },
                {
                    quote: "Working with Santiago and Martina was excellent. Not only did they create a website with an impactful and modern design, but the loading speed is incredible (Lighthouse 95+). Their technical professionalism is evident.",
                    author: "Gastón",
                    role: "Founder of MicrosParty",
                    project: "MicrosParty (Landing Page)"
                }
            ]
        },
        floatingCTA: "Let's talk!"
    }
}
