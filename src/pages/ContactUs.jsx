import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Contact() {
    return (
        <div className="pt-20 bg-[var(--color-app-bg)] min-h-screen">
            <section className="bg-secondary text-[var(--color-app-text)] py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-display font-bold mb-6">Get in Touch</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        We're here to help. Reach out to our team for any inquiries.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-[var(--color-app-text)] mb-6">Contact Information</h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Whether you have a question about our products, implementation, or distribution, our team is ready to answer all your questions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--color-app-text)] text-lg">Visit Us</h3>
                                    <p className="text-slate-600">Al Zaitoon HQ, Business Bay<br />Dubai, United Arab Emirates</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--color-app-text)] text-lg">Email Us</h3>
                                    <p className="text-slate-600">info@alzaitoon.ae<br />support@alzaitoon.ae</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--color-app-text)] text-lg">Call Us</h3>
                                    <p className="text-slate-600">+971 4 123 4567<br />+971 50 987 6543</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--color-app-text)] text-lg">Working Hours</h3>
                                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                        <h3 className="text-2xl font-bold font-display text-[var(--color-app-text)] mb-6">Send a Message</h3>
                        <form className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Subject</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Message</label>
                                <textarea rows="5" className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
                            </div>

                            <Button size="lg" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-96 bg-slate-200 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                    <div className="text-center">
                        <MapPin size={48} className="mx-auto mb-2 text-slate-400" />
                        <p>Google Maps Embed Area</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
