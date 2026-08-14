import React, { FC } from 'react';

export const DataIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m4-10v10m4-10v10m4-10v10M4 7h16" />
  </svg>
);

export const AIIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const WebAppIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 0l-2.25 6.375-6.375 2.25 6.375 2.25L9.75 17.25l2.25-6.375L18.375 8.625l-6.375-2.25L9.75 0zM18.375 14.25l-1.5 4.5-4.5 1.5 4.5 1.5 1.5 4.5 1.5-4.5 4.5-1.5-4.5-1.5-1.5-4.5z" />
  </svg>
);

export const LandingPageIcon: FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 0v6h12V2M6 12h12" />
    </svg>
);

export const EmailIcon: FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const LinkedInIcon: FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const InstagramIcon: FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583 0.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.116 0-3.478.012-4.694.068-2.618.12-3.876 1.378-3.994 3.994-.056 1.217-.067 1.578-.067 4.694s.011 3.477.067 4.694c.118 2.616 1.376 3.874 3.994 3.994 1.216.056 1.578.068 4.694.068s3.478-.012 4.694-.068c2.618-.12 3.875-1.378 3.994-3.994.056-1.217.067-1.578-.067-4.694s-.011-3.477-.067-4.694c-.119-2.616-1.377-3.874-3.994-3.994C15.478 3.615 15.116 3.604 12 3.604zm0 2.882c-2.42 0-4.381 1.96-4.381 4.38s1.96 4.38 4.381 4.38 4.38-1.96 4.38-4.38-1.96-4.38-4.38-4.38zm0 7.218c-1.564 0-2.836-1.272-2.836-2.838s1.272-2.838 2.836-2.838 2.836 1.272 2.836 2.838-1.272 2.838-2.836 2.838zm5.438-7.55c-.618 0-1.118.5-1.118 1.118s.5 1.118 1.118 1.118 1.118-.5 1.118-1.118-.5-1.118-1.118-1.118z"/>
    </svg>
);

export const GitHubIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
);

export const BehanceIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12h-4c0-.77.58-1.5 1.75-1.5S21.5 11.23 22 12zm-3.75-3.5c-2.3 0-4.25 1.8-4.25 4.5s1.95 4.5 4.25 4.5c2.1 0 3.8-1.4 4.15-3.3H20c-.35.9-1.15 1.45-2.05 1.45-1.3 0-2.15-.95-2.15-2.25H24v-.7c0-2.55-1.8-4.7-4.75-4.7zm.75-1.8h-4.5v-1h4.5v1zM9 13.5H5.5v2.8H9c1 0 2.2-.4 2.2-1.4 0-1.1-1.2-1.4-2.2-1.4zM9 7.7H5.5v2.8H9c.9 0 2-.4 2-1.4S10 7.7 9 7.7zM11.9 11.2c.8-.7 1.4-1.7 1.4-2.7C13.3 5.9 11.4 5 8.7 5H1.5v14h7.5c2.8 0 4.8-1.2 4.8-3.7 0-1.8-1.1-3.1-1.9-4.1z" />
  </svg>
);
