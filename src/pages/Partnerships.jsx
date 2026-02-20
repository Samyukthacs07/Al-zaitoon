import { Button } from '../components/ui/Button';

export default function Partners() {
    return (
        <div className="pt-20 bg-[var(--color-app-bg)] min-h-screen">
            <section className="bg-secondary text-[var(--color-app-text)] py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-display font-bold mb-6">Become a Partner</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        Join our growing network of retailers, pharmacies, and salons across the GCC.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-6">
                <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                    <h2 className="text-3xl font-display font-bold text-[var(--color-app-text)] mb-8 text-center">Wholesale Inquiry</h2>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Business Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Company LLC" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Contact Person</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Full Name" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="name@company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+971 50 123 4567" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Business Type</label>
                            <select className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                                <option value="">Select Business Type</option>
                                <option value="pharmacy">Pharmacy Chain / Independent</option>
                                <option value="retail">Retail Store</option>
                                <option value="salon">Salon / Spa</option>
                                <option value="distributor">Sub-Distributor</option>
                                <option value="online">E-commerce</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Message / Product Interest</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-[var(--color-app-bg)] border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tell us about your business and which brands you are interested in..."></textarea>
                        </div>

                        <Button size="lg" className="w-full">Submit Application</Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
