"use client";
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Truck, ShieldCheck, BarChart3, Package } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Truck className="w-12 h-12 text-primary" />,
            title: "Wholesale Distribution",
            description: "We orchestrate a comprehensive distribution network covering pharmacies, salons, and retail outlets across the UAE & GCC. Our bulk supply capabilities ensure major retailers and hypermarkets are always stocked with premium products.",
            benefits: ["Wide network coverage", "Volume scalability", "Retail partnership support"]
        },
        {
            icon: <ShieldCheck className="w-12 h-12 text-primary" />,
            title: "Pharmacy Supply Chain",
            description: "Our dedicated healthcare division specializes in the logistics of medical-grade beauty and wellness products. We bridge the gap between clinical requirements and consumer accessibility.",
            benefits: ["Medical-grade handling", "Temperature control", "Compliance assured"]
        },
        {
            icon: <Package className="w-12 h-12 text-primary" />,
            title: "Logistics & Delivery",
            description: "Fast, temperature-controlled delivery systems ensuring product integrity from our warehouses to your shelf across the UAE.",
            benefits: ["Cold chain logistics", "Real-time tracking", "Timely delivery"]
        },
        {
            icon: <BarChart3 className="w-12 h-12 text-primary" />,
            title: "Brand Promotion",
            description: "We go beyond distribution by offering in-store marketing support and brand positioning strategies. Our team works to maximize visibility and drive sell-through at the point of purchase.",
            benefits: ["Visual merchandising", "Brand activations", "Market analysis"]
        }
    ];

    return (
        <div className="pt-20 bg-[var(--color-app-bg)] min-h-screen font-sans selection:bg-primary/20">
            {/* Hero Section */}
            <section className="bg-secondary text-[var(--color-app-text)] py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-display font-bold mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[var(--color-app-text)] opacity-80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                    >
                        Delivering excellence in every step of the beauty supply chain, from global sourcing to local shelf placement.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 container mx-auto px-6">
                <div className="space-y-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Side */}
                            <div className="w-full md:w-1/2">
                                <div className="bg-white p-12 rounded-3xl shadow-xl border border-[var(--color-primary-50)] relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-app-bg)] rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                                    <div className="relative z-10 mb-6 bg-[var(--color-app-bg)] w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-[var(--color-primary-900)] text-primary transition-colors duration-300">
                                        <div className="group-hover:text-white transition-colors duration-300">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-[var(--color-app-text)] mb-4">{service.title}</h3>
                                    <div className="h-1 w-20 bg-primary mb-6"></div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <h3 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-app-text)] block md:hidden">{service.title}</h3>
                                <p className="text-[var(--color-app-text)] opacity-70 text-lg leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--color-app-text)] opacity-80 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                                                ✓
                                            </div>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
