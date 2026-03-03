"use client";
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (res.ok) {
                setStatus({ type: 'success', message: data.message || 'Message sent successfully!' });
                setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
            }
        } catch {
            setStatus({ type: 'error', message: 'Network error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-20 bg-[var(--color-app-bg)] min-h-screen">
            <section className="bg-secondary text-[var(--color-app-text)] py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-display font-bold mb-6">Get in Touch</h1>
                    <p className="text-[var(--color-app-text)] opacity-70 max-w-2xl mx-auto text-lg">
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
                            <p className="text-[var(--color-app-text)] opacity-70 leading-relaxed mb-8">
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
                                    <p className="text-slate-600">Dubai, United Arab Emirates</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--color-app-text)] text-lg">Email Us</h3>
                                    <a href="mailto:info@alzaitoonbeauty.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary hover:underline transition-colors block">info@alzaitoonbeauty.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--color-app-text)] text-lg">Call Us</h3>
                                    <a href="tel:+97140000000" className="text-slate-600 hover:text-primary transition-colors">+971 4 000 0000</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--color-app-text)] text-lg">WhatsApp</h3>
                                    <a href="https://wa.me/971528593945" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors">+971 52 859 3945</a>
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
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-[var(--color-primary-50)]">
                        <h3 className="text-2xl font-bold font-display text-[var(--color-app-text)] mb-6">Send a Message</h3>

                        {status.message && (
                            <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${status.type === 'success'
                                ? 'bg-green-50 text-green-700 border border-green-200'
                                : 'bg-red-50 text-red-700 border border-red-200'
                                }`}>
                                {status.message}
                            </div>
                        )}

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">First Name</label>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Subject</label>
                                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Message</label>
                                <textarea rows="5" name="message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
                            </div>

                            <Button size="lg" className="w-full" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-96 bg-[var(--color-secondary)] w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-[var(--color-app-text)] opacity-60 font-medium">
                    <div className="text-center">
                        <MapPin size={48} className="mx-auto mb-2 text-slate-400" />
                        <p>Google Maps Embed Area</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
