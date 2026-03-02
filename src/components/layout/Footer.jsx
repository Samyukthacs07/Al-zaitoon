"use client";
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-secondary text-[var(--color-app-text)] pt-20 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                {/* Brand */}
                <div className="space-y-4 md:col-span-5">
                    <Link href="/" className="inline-block relative">
                        <img
                            src="/logo.png"
                            alt="Al Zaitoon"
                            className="h-28 md:h-36 w-auto object-contain scale-[1.3] origin-left"
                        />
                    </Link>
                    <h3 className="text-2xl font-display font-bold text-[var(--color-app-text)]">
                        Al Zaitoon<span className="text-primary">.</span>
                    </h3>
                    <p className="text-[var(--color-app-text)] text-sm leading-relaxed max-w-sm">
                        Leading distributor of premium skincare, cosmetics, and pharmaceutical
                        beauty products in the UAE & GCC.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-3">
                    <h4 className="text-lg font-bold text-[var(--color-app-text)] mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                        <li><Link href="/partners" className="hover:text-primary transition-colors">Brokers & Partners</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="md:col-span-4">
                    <h4 className="text-lg font-bold text-[var(--color-app-text)] mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span>Dubai, United Arab Emirates</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary shrink-0" />
                            <span>+971 4 000 0000</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <span>info@alzaitoonbeauty.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                <p>&copy; {new Date().getFullYear()} Al Zaitoon Beauty Supplies Trading LLC. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                </div>
            </div>
        </footer>
    );
}

