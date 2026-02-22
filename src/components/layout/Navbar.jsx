"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { clsx } from 'clsx';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) setIsOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Partners', path: '/partners' },
    ];

    // Determine if the navbar should have the transparent "hero" styling
    // It should ONLY be transparent/neon if we are on the Home page AND haven't scrolled down
    const isHeroTransparent = !scrolled && pathname === '/';

    return (
        <nav className="fixed top-6 left-0 w-full z-50 px-6 md:px-10 flex items-center justify-between pointer-events-none transition-all duration-300">
            {/* Left: Logo Island */}
            <div className="flex-1 flex justify-start pointer-events-auto shrink-0 transition-transform hover:scale-105 duration-300">
                <Link href="/" className="flex items-center">
                    <div className={clsx(
                        "rounded-2xl flex items-center justify-center transition-all duration-300",
                        !isHeroTransparent ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 p-2 md:p-3" : "bg-transparent p-1 -ml-1"
                    )}>
                        <img
                            src="/logo.png"
                            alt="Al Zaitoon"
                            className={clsx(
                                "w-auto object-contain transition-all duration-500",
                                !isHeroTransparent
                                    ? "h-16 md:h-24 drop-shadow-sm"
                                    : "h-24 md:h-32 brightness-0 invert drop-shadow-md"
                            )}
                        />
                    </div>
                </Link>
            </div>

            {/* Center: Dedicated Links Pill (Matches Reference Image) */}
            <div className={clsx(
                "hidden md:flex flex-none items-center gap-10 lg:gap-14 px-10 py-3.5 rounded-2xl pointer-events-auto transition-all duration-500",
                !isHeroTransparent
                    ? "bg-white/90 backdrop-blur-2xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] border border-white/40"
                    : "bg-black/20 backdrop-blur-md shadow-sm border border-white/20"
            )}>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={clsx(
                            'text-[15px] font-sans tracking-wide transition-all duration-300 inline-block',
                            !isHeroTransparent
                                ? clsx( // Dark text for white scrolled background
                                    pathname === link.path
                                        ? 'text-[var(--color-app-text)] font-medium'
                                        : 'text-[var(--color-app-text)] opacity-70 hover:opacity-100 font-normal hover:text-primary hover:-translate-y-0.5'
                                )
                                : clsx( // Neon white text for dark hero background
                                    'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]',
                                    'hover:-translate-y-0.5 hover:scale-105 hover:text-[#dcc7b8] hover:drop-shadow-[0_0_12px_#dcc7b8]',
                                    pathname === link.path
                                        ? 'font-medium text-[#dcc7b8] drop-shadow-[0_0_10px_#dcc7b8]'
                                        : 'font-normal opacity-90'
                                )
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Right: Actions Island */}
            <div className="flex-1 flex justify-end items-center gap-4 pointer-events-auto shrink-0">
                <Link href="/contact" className="hidden md:block">
                    <Button size="lg" className="rounded-2xl shadow-lg shadow-primary/20 px-8">
                        Get in Touch
                    </Button>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className={clsx(
                        "md:hidden p-3 rounded-2xl border text-[var(--color-app-text)] transition-colors",
                        !isHeroTransparent ? "bg-white/80 backdrop-blur-xl shadow-lg border-white/20" : "bg-white/30 backdrop-blur-md border border-white/10"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={clsx(
                    'md:hidden fixed inset-0 bg-[var(--color-app-bg)] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out',
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className="text-2xl font-display font-medium text-[var(--color-app-text)] hover:text-primary"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button size="lg" className="w-full">
                        Get in Touch
                    </Button>
                </Link>
            </div>
        </nav>
    );
}
