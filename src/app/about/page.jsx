"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

function AnimatedCounter({ value, suffix }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

    useEffect(() => {
        if (isInView) {
            animate(count, value, { duration: 2.5, ease: "easeOut" });
        }
    }, [isInView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function About() {
    const stats = [
        { label: "Years of Excellence", num: 2, suffix: "+", icon: <Award className="w-6 h-6" /> },
        { label: "Global Brands", num: 5, suffix: "+", icon: <Globe className="w-6 h-6" /> },
        { label: "Partner Network", num: 20, suffix: "+", icon: <Users className="w-6 h-6" /> },
        { label: "Yearly Growth", num: 15, suffix: "%", icon: <TrendingUp className="w-6 h-6" /> }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="pt-20 bg-[var(--color-app-bg)] min-h-screen font-sans selection:bg-primary/20">

            {/* Hero Section */}
            <section className="relative bg-secondary text-[var(--color-app-text)] py-32 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-[var(--color-primary-900)] text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            About Us
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight">
                            Crafting Beauty <br /> <span className="text-primary italic">Distribution</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            We are the bridge between premium global brands and the discerning consumers of the Middle East, built on a foundation of trust and elegance.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Floating Stats Section */}
            <section className="container mx-auto px-6 -mt-16 relative z-20 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 md:p-10"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 divide-x divide-slate-200/50">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center px-4 group">
                                <div className="flex justify-center mb-4 text-slate-400 group-hover:text-primary transition-colors duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[var(--color-app-text)] mb-2">
                                    <AnimatedCounter value={stat.num} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Vision & Mission */}
            <section className="py-32 overflow-hidden bg-white relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#faf8f5] to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Image/Visual Slide */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative lg:pr-10"
                        >
                            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                                <motion.div
                                    className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                ></motion.div>
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                                    alt="Team meeting"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                                />
                            </div>

                            {/* Floating Stats Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute -bottom-10 -right-5 md:-right-10 w-40 h-40 md:w-56 md:h-56 bg-white/90 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center z-20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(156,110,90,0.2)] hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="text-center">
                                    <span className="block text-4xl md:text-5xl font-display font-bold bg-gradient-to-br from-[var(--color-primary-900)] to-primary text-transparent bg-clip-text">100%</span>
                                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mt-2 block">Commitment</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Content Side - Editorial Layout */}
                        <div className="space-y-16 lg:pl-10 mt-16 lg:mt-0">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative group"
                            >
                                <div className="absolute -left-6 top-2 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-out hidden md:block rounded-full"></div>
                                <div className="inline-flex items-center gap-3 text-[var(--color-primary-900)] font-bold tracking-[0.2em] uppercase text-xs mb-6 border border-primary/20 px-4 py-2 rounded-full bg-primary/5">
                                    <Eye size={16} /> Our Vision
                                </div>
                                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                                    <span className="bg-gradient-to-r from-[var(--color-primary-900)] to-[#9c6e5a] text-transparent bg-clip-text">Leading Beauty</span><br /> Distribution
                                </h3>
                                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light">
                                    To become the leading beauty and skincare distribution powerhouse in the UAE and the wider GCC region, recognized for bringing world-class brands to local consumers.
                                </p>
                            </motion.div>

                            <div className="w-full h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent"></div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="relative group"
                            >
                                <div className="absolute -left-6 top-2 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-out hidden md:block rounded-full"></div>
                                <div className="inline-flex items-center gap-3 text-[var(--color-primary-900)] font-bold tracking-[0.2em] uppercase text-xs mb-6 border border-primary/20 px-4 py-2 rounded-full bg-primary/5">
                                    <Target size={16} /> Our Mission
                                </div>
                                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                                    <span className="bg-gradient-to-r from-[var(--color-primary-900)] to-[#9c6e5a] text-transparent bg-clip-text">Delivering</span> Quality
                                </h3>
                                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light">
                                    To deliver high-quality, authentic cosmetic and skincare solutions through a reliable supply chain, fostering strong, lasting partnerships with global manufacturers and local retailers alike.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section (New) */}
            <section className="py-24 bg-secondary text-[var(--color-app-text)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Portfolio</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Curated for Excellence</h2>
                        <p className="text-[var(--color-app-text)] opacity-80 mt-4 max-w-2xl mx-auto">From mass-market essentials to premium dermatological treatments.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Advanced Skincare",
                                items: ["Facial Care", "Sun Protection", "Dermatological Solutions"],
                                icon: <Award className="w-8 h-8" />
                            },
                            {
                                title: "Cosmetics & Makeup",
                                items: ["Face", "Eyes & Lips", "Beauty Tools"],
                                icon: <Eye className="w-8 h-8" />
                            },
                            {
                                title: "Pharmacy & Wellness",
                                items: ["Dermo-Cosmetics", "Personal Care"],
                                icon: <Target className="w-8 h-8" />
                            }
                        ].map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] border border-white hover:border-primary/30 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(156,110,90,0.15)] hover:-translate-y-2 transition-all duration-500 group"
                            >
                                <div className="mb-8 w-16 h-16 rounded-2xl bg-[var(--color-primary-50)] text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-4 text-[var(--color-primary-900)]">{category.title}</h3>
                                <ul className="space-y-4">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-500"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitive Advantages - Bento Grid */}
            <section className="py-24 bg-[var(--color-app-bg)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-app-text)]">Competitive <span className="text-primary italic">Advantages</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {[
                            { title: "Strong Market Presence", desc: "Deep-rooted relationships with key retailers across the seven emirates.", colSpan: "md:col-span-1" },
                            { title: "Authenticity Guaranteed", desc: "We source directly from manufacturers to ensure 100% genuine products.", colSpan: "md:col-span-1" },
                            { title: "Regulatory Expertise", desc: "Full compliance with UAE Municipality and health authority regulations.", colSpan: "md:col-span-2 lg:col-span-1" },
                            { title: "Competitive Pricing", desc: "Strategic sourcing allows us to offer attractive margins to our retail partners.", colSpan: "md:col-span-2 lg:col-span-1" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`group p-10 bg-white/60 backdrop-blur-md rounded-[2rem] border border-white hover:border-primary/30 hover:bg-white cursor-pointer shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(156,110,90,0.1)] transition-all duration-500 relative overflow-hidden ${item.colSpan}`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] -mr-10 -mt-10 group-hover:scale-150 group-hover:bg-primary/10 transition-transform duration-700"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold font-display text-[var(--color-primary-900)] mb-4">{item.title}</h3>
                                    <p className="text-slate-600 text-base leading-relaxed group-hover:text-[var(--color-app-text)] transition-colors duration-300">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-secondary text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-app-text)] mb-6">Ready to Partner With Us?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                        Join the extensive network that is reshaping the beauty landscape of the Middle East.
                    </p>
                    <Link href="/contact" className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-white hover:text-[var(--color-app-text)] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Connect With Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
