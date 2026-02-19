import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';

export default function About() {
    const stats = [
        { label: "Years of Excellence", value: "15+", icon: <Award className="w-6 h-6" /> },
        { label: "Global Brands", value: "50+", icon: <Globe className="w-6 h-6" /> },
        { label: "Partner Network", value: "500+", icon: <Users className="w-6 h-6" /> },
        { label: "Yearly Growth", value: "40%", icon: <TrendingUp className="w-6 h-6" /> }
    ];

    const timeline = [
        {
            year: "2010",
            title: "The Beginning",
            desc: "Al Zaitoon was established in the heart of Dubai, driven by a passion to bring world-class beauty products to the region."
        },
        {
            year: "2015",
            title: "Regional Expansion",
            desc: "We expanded our operations to Saudi Arabia and Oman, securing exclusive distribution rights for key international brands."
        },
        {
            year: "2018",
            title: "Healthcare Division",
            desc: "Launched a dedicated division to serve hospitals and pharmacies, bridging the gap between beauty and wellness."
        },
        {
            year: "2023",
            title: "Digital Evolution",
            desc: "Modernized our supply chain with AI-driven logistics and launched a B2B digital ordering platform."
        }
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
        <div className="pt-20 bg-slate-50 min-h-screen font-sans selection:bg-primary/20">

            {/* Hero Section */}
            <section className="relative bg-secondary text-white py-32 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-slate-700 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-slate-800 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            Since 2010
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
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
                    className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-200/50">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center px-4 group">
                                <div className="flex justify-center mb-4 text-slate-400 group-hover:text-primary transition-colors duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl lg:text-5xl font-display font-bold text-secondary mb-2">{stat.value}</div>
                                <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Image/Visual Slide */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                                    alt="Team meeting"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-slate-50 rounded-full flex items-center justify-center z-10 hidden lg:flex shadow-lg">
                                <div className="text-center">
                                    <span className="block text-4xl font-display font-bold text-primary">100%</span>
                                    <span className="text-xs uppercase tracking-wider text-slate-600">Commitment</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Side */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
                                    <Eye size={18} /> Our Vision
                                </div>
                                <h3 className="text-3xl font-display font-bold text-secondary mb-4">Redefining Beauty Standards</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    To be the undisputed leader in beauty and wellness distribution across the MENA region, recognized not just for our portfolio, but for setting the benchmark in operational excellence and brand stewardship.
                                </p>
                            </motion.div>

                            <div className="w-full h-px bg-slate-200"></div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
                                    <Target size={18} /> Our Mission
                                </div>
                                <h3 className="text-3xl font-display font-bold text-secondary mb-4">Empowering Growth</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    We empower our partners—both brands and retailers—with exceptional products, seamless supply chain solutions, and market expertise, all while adhering to the highest standards of regulatory compliance and integrity.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-slate-50/50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Our History</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mt-3">The Journey So Far</h2>
                    </div>

                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-slate-300 ml-4 md:ml-0"></div>

                        <div className="space-y-16">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="md:w-5/12 w-full pl-12 md:pl-0"></div>

                                    {/* Bullet Point */}
                                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-9 h-9 rounded-full bg-slate-50 border-4 border-primary shadow-lg flex items-center justify-center z-10 mt-1 md:mt-0">
                                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`md:w-5/12 w-full pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 group">
                                            <span className="text-5xl font-display font-bold text-slate-200 group-hover:text-primary/20 transition-colors block -mb-4 relative z-0">
                                                {item.year}
                                            </span>
                                            <h4 className="text-xl font-bold text-secondary mb-3 relative z-10">{item.title}</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section (New) */}
            <section className="py-24 bg-secondary text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Portfolio</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Curated for Excellence</h2>
                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">From mass-market essentials to premium dermatological treatments.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Advanced Skincare",
                                items: ["Facial Care", "Sun Protection", "Dermatological Solutions"],
                                icon: <Award className="w-8 h-8 text-primary" />
                            },
                            {
                                title: "Cosmetics & Makeup",
                                items: ["Face", "Eyes & Lips", "Beauty Tools"],
                                icon: <Eye className="w-8 h-8 text-primary" />
                            },
                            {
                                title: "Pharmacy & Wellness",
                                items: ["Dermo-Cosmetics", "Personal Care"],
                                icon: <Target className="w-8 h-8 text-primary" />
                            }
                        ].map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors group"
                            >
                                <div className="mb-6 bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-4">{category.title}</h3>
                                <ul className="space-y-3">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitive Advantages */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mt-2">Competitive Advantages</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Strong Market Presence", desc: "Deep-rooted relationships with key retailers across the seven emirates." },
                            { title: "Authenticity Guaranteed", desc: "We source directly from manufacturers to ensure 100% genuine products." },
                            { title: "Regulatory Expertise", desc: "Full compliance with UAE Municipality and health authority regulations." },
                            { title: "Competitive Pricing", desc: "Strategic sourcing allows us to offer attractive margins to our retail partners." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold font-display text-secondary mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-secondary text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Partner With Us?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                        Join the extensive network that is reshaping the beauty landscape of the Middle East.
                    </p>
                    <a href="/contact" className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-white hover:text-secondary transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Connect With Us
                    </a>
                </div>
            </section>
        </div>
    );
}
