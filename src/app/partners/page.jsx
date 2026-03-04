"use client";
import { useState } from 'react';
import { Button } from '../../components/ui/Button';

export default function Partners() {
    const [formData, setFormData] = useState({
        businessName: '',
        contactPerson: '',
        email: '',
        phone: '',
        businessType: '',
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
            const res = await fetch('/send-mail.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.contactPerson,
                    email: formData.email,
                    subject: `Wholesale Inquiry - ${formData.businessName}`,
                    message: `Business Name: ${formData.businessName}\nContact Person: ${formData.contactPerson}\nPhone: ${formData.phone}\nBusiness Type: ${formData.businessType}\n\nMessage:\n${formData.message}`,
                }),
            });
            const data = await res.json();

            if (data.success) {
                setStatus({ type: 'success', message: data.message || 'Application submitted successfully!' });
                setFormData({ businessName: '', contactPerson: '', email: '', phone: '', businessType: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
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
                    <h1 className="text-5xl font-display font-bold mb-6">Become a Partner</h1>
                    <p className="text-[var(--color-app-text)] opacity-70 max-w-2xl mx-auto text-lg">
                        Join our growing network of retailers, pharmacies, and salons across the GCC.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-6">
                <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-[var(--color-primary-50)]">
                    <h2 className="text-3xl font-display font-bold text-[var(--color-app-text)] mb-8 text-center">Wholesale Inquiry</h2>

                    {status.message && (
                        <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${status.type === 'success'
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                            }`}>
                            {status.message}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--color-app-text)] opacity-80">Business Name</label>
                                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-[var(--color-primary-100)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Company LLC" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--color-app-text)] opacity-80">Contact Person</label>
                                <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-[var(--color-primary-100)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Full Name" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--color-app-text)] opacity-80">Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-[var(--color-primary-100)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="name@company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--color-app-text)] opacity-80">Phone Number</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-[var(--color-primary-100)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+971 50 123 4567" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--color-app-text)] opacity-80">Business Type</label>
                            <select name="businessType" value={formData.businessType} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-[var(--color-primary-100)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                                <option value="">Select Business Type</option>
                                <option value="Pharmacy Chain / Independent">Pharmacy Chain / Independent</option>
                                <option value="Retail Store">Retail Store</option>
                                <option value="Salon / Spa">Salon / Spa</option>
                                <option value="Sub-Distributor">Sub-Distributor</option>
                                <option value="E-commerce">E-commerce</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--color-app-text)] opacity-80">Message / Product Interest</label>
                            <textarea rows="4" name="message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-[var(--color-primary-100)] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tell us about your business and which brands you are interested in..."></textarea>
                        </div>

                        <Button size="lg" className="w-full" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit Application'}
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
