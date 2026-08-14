import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  link: string;
  category: 'web-ecommerce' | 'branding-digital' | 'apps-tools';
  tags: string[];
  cta?: string;
  tagline?: string;
  role: string;
  stack: string[];
  challenge: string;
  delivery: string;
  image?: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}
