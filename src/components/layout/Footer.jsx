import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-secondary text-slate-200 pt-20 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-display font-bold text-white">
                        Al Zaitoon<span className="text-primary">.</span>
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        Leading distributor of premium skincare, cosmetics, and pharmaceutical
                        beauty products in the UAE & GCC.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                        <li><Link to="/partners" className="hover:text-primary transition-colors">Brokers & Partners</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span>Dubai, United Arab Emirates</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary shrink-0" />
                            <span>+971 4 123 4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <span>info@alzaitoon.ae</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Stay Updated</h4>
                    <p className="text-sm text-slate-300 mb-4">
                        Subscribe to our newsletter for the latest beauty trends and product updates.
                    </p>
                    <form className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-secondary/50 border border-slate-700 rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary outline-none text-white placeholder:text-slate-500"
                        />
                        <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                            Go
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                <p>&copy; {new Date().getFullYear()} Al Zaitoon Beauty Supplies. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                </div>
            </div>
        </footer>
    );
}
