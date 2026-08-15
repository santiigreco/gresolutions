import React, { FC, useEffect, useRef } from 'react';
import { smoothScrollTo } from '../utils/scroll';
import { useLanguage } from '../context/LanguageContext';

export const Hero: FC = () => {
    const { t } = useLanguage();
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        interface Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
        }

        const particles: Particle[] = [];

        // Adjust particle density based on screen size (Mobile First)
        const isMobile = width < 768;
        const particleCount = isMobile ? 32 : 80;

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.45, // Slow elegant movement
                vy: (Math.random() - 0.5) * 0.45,
                radius: Math.random() * 1.5 + 1,
            });
        }

        // Mouse interaction state
        const mouse = {
            x: -1000,
            y: -1000,
            radius: isMobile ? 100 : 160, // interaction radius
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            if (window.innerWidth < 768) {
                draw();
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', handleResize);

        // Render loop
        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw plexus background gradient
            const bgGrad = ctx.createRadialGradient(
                width / 2,
                height / 3,
                0,
                width / 2,
                height / 2,
                Math.max(width, height)
            );
            bgGrad.addColorStop(0, '#0a1118');
            bgGrad.addColorStop(1, '#04070a');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, width, height);

            if (isMobile) {
                return;
            }

            // Draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Bounce on boundaries
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Subtle attraction to mouse
                if (mouse.x > -500) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        p.x += (dx / dist) * force * 0.35;
                        p.y += (dy / dist) * force * 0.35;
                    }
                }

                // Draw node
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(30, 126, 137, 0.4)'; // Cyan accent
                ctx.fill();
            }

            // Draw lines connecting particles
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.hypot(dx, dy);
                    const maxDist = isMobile ? 85 : 125;

                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.15; // Low opacity connection
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(30, 126, 137, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            // Draw lines to mouse
            if (mouse.x > -500) {
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < mouse.radius) {
                        const alpha = (1 - dist / mouse.radius) * 0.22;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(30, 126, 137, ${alpha})`;
                        ctx.lineWidth = 0.9;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Animated Canvas Plexus Background */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

            {/* Subtle overlay grid for tech visual depth */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40 z-10" />

            {/* Glowing background ambiance for depth of layers */}
            <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-[#1e7e89] rounded-full filter blur-[150px] opacity-[0.05] pointer-events-none z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-[#0a1118] rounded-full filter blur-[180px] opacity-[0.12] pointer-events-none z-10" />

            <div className="text-center z-20 px-6 max-w-4xl animate-fadeIn">
                <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl bg-gradient-to-r from-brand-light via-brand-teal to-brand-light bg-clip-text text-transparent mb-4 tracking-tight">
                    {t.hero.title}
                </h1>
                <h2 className="font-sans text-xs sm:text-sm md:text-base font-bold text-brand-teal uppercase tracking-[0.25em] mb-6">
                    {t.hero.tagline}
                </h2>
                <p className="font-serif text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                    {t.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
                    <a 
                        href="#proyectos" 
                        onClick={smoothScrollTo} 
                        className="w-full sm:w-auto text-white font-sans font-bold py-3.5 px-8 rounded-lg text-center cursor-pointer btn-primary-glow text-sm uppercase tracking-wider block"
                    >
                        {t.hero.ctaProjects}
                    </a>
                    <a 
                        href="#contacto" 
                        onClick={smoothScrollTo} 
                        className="w-full sm:w-auto text-gray-200 font-sans font-semibold py-3.5 px-8 rounded-lg text-center cursor-pointer btn-secondary-ghost text-sm uppercase tracking-wider block"
                    >
                        {t.hero.ctaContact}
                    </a>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-subtle-bob z-20">
                <svg className="w-6 h-6 text-brand-teal/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};
