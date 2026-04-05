import React from 'react';
import { Project, Service } from '../types';
import { DataIcon, AIIcon, WebAppIcon, LandingPageIcon } from '../assets/icons';

export const NAV_LINKS = [
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
];

export const PROJECTS: Project[] = [
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
  },
];

export const SERVICES: Service[] = [
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

export const SOCIALS = {
    email: "gresolutions.info@gmail.com",
    linkedin: "https://www.linkedin.com/in/santiago-greco-/",
    instagram: "https://www.instagram.com/gresolutions/",
};
