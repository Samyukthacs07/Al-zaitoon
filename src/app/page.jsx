"use client";
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { ArrowRight, Star, Truck, Award, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[var(--color-app-bg)] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black/90">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <img
            src="/al-zaitoon-hero1.png"
            alt="Luxury Skincare"
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary"></div>
              <motion.span variants={fadeInUp} className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
                Premium Beauty Distribution
              </motion.span>
            </div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight uppercase">
              luxury beauty across the UAE & GCC
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[var(--color-app-bg)] opacity-90 mb-10 leading-relaxed font-medium">
              Curating excellence, delivering radiance.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link href="/partners">
                <Button size="lg" className="gap-2 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform">
                  Become a Partner <ArrowRight size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-[var(--color-app-text)] mb-4">Our Services</h2>
            <p className="text-[var(--color-app-text)] opacity-70 text-lg">End-to-end solutions for our partners, from global sourcing to local shelf placement.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8 text-primary" />,
                title: "Wholesale Distribution",
                description: "Bulk supply to major retailers, hypermarkets, and specialty stores across the UAE & GCC."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "Pharmacy Supply Chain",
                description: "Dedicated logistics for supplying pharmacies with medical-grade beauty products."
              },
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                title: "Brand Promotion",
                description: "In-store marketing support and brand positioning strategies to maximize visibility."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[var(--color-app-bg)] border border-[var(--color-primary-100)] hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-app-text)] mb-3">{service.title}</h3>
                <p className="text-[var(--color-app-text)] opacity-70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Categories / Highlight - Redesigned Editorial Layout */}
      <section className="py-24 md:py-32 bg-[var(--color-app-bg)] text-[var(--color-app-text)] relative overflow-hidden">
        {/* Soft decorative background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

            {/* Left: Enhanced Editorial Typography & Interactive List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-8 tracking-wide leading-[1.15]">
                Curated <br className="hidden md:block" />
                <span className="italic text-primary">Excellence</span>
              </h2>
              <p className="text-lg opacity-75 mb-14 leading-relaxed font-sans font-light">
                We adhere to the highest standards of quality, partnering only with brands that share our commitment to excellence, innovation, and ethical beauty.
              </p>

              <div className="space-y-0 border-t border-[var(--color-app-text)]/15">
                {[
                  "Advanced Skincare",
                  "Cosmetics & Makeup",
                  "Pharmacy & Wellness"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="group flex items-center justify-between py-6 border-b border-[var(--color-app-text)]/15 cursor-pointer transition-colors hover:border-primary/50"
                    whileHover={{ x: 12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <span className="text-[19px] md:text-xl font-display tracking-widest text-[var(--color-app-text)] group-hover:text-primary transition-colors duration-300">
                      {item}
                    </span>
                    <ArrowRight className="text-primary opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Creative, Smaller Image Alignment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-5/12 mx-auto lg:mx-0 relative mt-10 lg:mt-0"
            >
              {/* Creative offset frame */}
              <div className="absolute inset-0 bg-secondary/60 rounded-t-[140px] rounded-b-[40px] shadow-inner transform translate-x-3 translate-y-6 md:translate-x-6 md:translate-y-8 -z-10 max-w-[320px] md:max-w-[400px] w-full ml-auto"></div>

              <div className="relative max-w-[320px] md:max-w-[400px] w-full ml-auto">
                {/* Main Image Container */}
                <div className="aspect-[3/4] rounded-t-[140px] rounded-b-[40px] overflow-hidden shadow-2xl relative group">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src="/currated_excellance.png"
                    alt="Curated Beauty Products"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Floating Interactive Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="absolute -bottom-8 left-0 md:-left-12 bg-white/95 backdrop-blur-md px-6 py-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-w-[260px] text-[var(--color-app-text)] border border-white/60 group cursor-default hover:border-primary/30 transition-colors"
                >
                  <div className="flex gap-1 text-primary mb-3">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="font-display font-medium text-[17px] leading-snug">
                    "The gold standard in luxury distribution."
                  </p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      < section className="py-24 bg-accent/30" >
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-[var(--color-app-text)] mb-6">Ready to Expand Your Reach?</h2>
          <p className="text-[var(--color-app-text)] opacity-80 mb-10 text-lg">
            Join our network of successful partners. Whether you're a brand looking to enter the market or a pharmacy seeking premium products.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/partners">
              <Button size="lg" className="shadow-xl shadow-primary/20">Become a Partner</Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="lg">Contact Support</Button>
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
}
