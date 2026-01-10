"use client";
import React, { useState, useEffect } from 'react';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'; // Animações
import { Menu, X } from 'lucide-react'; // Ícones mais modernos

import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/lib/utils'; // Função auxiliar padrão do shadcn (ou use clsx)
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language } = useLanguage();

    // Efeito para detectar scroll e mudar o estilo da navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { href: "/", label: getTranslation(language, 'home') },
        { href: "/about", label: getTranslation(language, 'aboutNav') },
        { href: "/projects", label: getTranslation(language, 'projectsNav') },
        { href: "/Certifications", label: getTranslation(language, 'certificationsNav') },
        { href: "/contact", label: getTranslation(language, 'contactNav') },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled 
                    ? "bg-background/80 backdrop-blur-md border-border/40 shadow-sm" 
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                
                {/* Logo Area */}
                <Link href="/" className="relative z-50 flex items-center gap-2 group">
                    <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                         <Image
                            src="/LogoMM.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                         />
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden sm:block">
                        Marcelo<span className="text-primary">.dev</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-1 bg-secondary/30 p-1.5 rounded-full border border-border/40 backdrop-blur-sm">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                                    isActive 
                                        ? "text-primary-foreground" 
                                        : "text-muted-foreground hover:text-primary hover:bg-background/50"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary rounded-full"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Actions Area (Desktop) */}
                <div className="hidden md:flex items-center gap-3">
                    <LanguageSwitcher />
                    <div className="pl-3 border-l border-border/50">
                        <ModeToggle />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors z-50"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-0 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-xl md:hidden pt-24 pb-8 px-6 flex flex-col gap-6"
                    >
                        <nav className="flex flex-col gap-2">
                            {menuItems.map((item, idx) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "block text-lg font-medium py-3 border-b border-border/30",
                                            pathname === item.href ? "text-primary border-primary/50" : "text-muted-foreground"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center justify-between pt-4"
                        >
                            <LanguageSwitcher />
                            <ModeToggle />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;