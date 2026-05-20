import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  cta?: string;
  tagline?: string;
  problem?: string;
  solution?: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}
