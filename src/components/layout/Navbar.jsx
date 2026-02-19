import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { clsx } from 'clsx';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        if (isOpen) setIsOpen(false);
    }, [location, isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Partners', path: '/partners' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                scrolled
                    ? 'bg-slate-50/90 backdrop-blur-md shadow-sm border-slate-200 py-3'
                    : 'bg-transparent border-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src="/logo.png" alt="Al Zaitoon" className="h-12 w-auto object-contain" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                'text-sm font-medium transition-colors hover:text-primary',
                                location.pathname === link.path
                                    ? 'text-primary'
                                    : 'text-slate-800'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact">
                        <Button size="sm" variant="primary">
                            Get in Touch
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={clsx(
                    'md:hidden fixed inset-0 bg-slate-50 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out',
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className="text-2xl font-display font-medium text-slate-800 hover:text-primary"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button size="lg" className="w-full">
                        Get in Touch
                    </Button>
                </Link>
            </div>
        </nav>
    );
}
