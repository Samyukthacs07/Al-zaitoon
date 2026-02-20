import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { ArrowRight, Star, Truck, Award, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2574&auto=format&fit=crop"
            alt="Luxury Skincare"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.span variants={fadeInUp} className="text-[var(--color-app-text)] font-bold tracking-widest uppercase text-sm mb-4 block">
              Premium Beauty Distribution
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold text-[var(--color-app-text)] mb-6 leading-tight">
              Elevating Beauty Standards in the <span className="text-primary italic">GCC</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-700 mb-8 leading-relaxed max-w-lg">
              Al Zaitoon is your trusted partner for premium skincare, cosmetics, and pharmaceutical beauty distribution across the UAE and Gulf region.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/partners">
                <Button size="lg" className="gap-2">
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
            <h2 className="text-4xl font-display font-bold text-[var(--color-app-text)] mb-4">Our Expertise</h2>
            <p className="text-slate-600 text-lg">Comprehensive distribution solutions tailored for the beauty and wellness industry.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8 text-primary" />,
                title: "Logistics & Distribution",
                description: "Seamless supply chain management ensuring your products reach every corner of the market efficiently."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "Regulatory Compliance",
                description: "Expert navigation of UAE & GCC health regulations to ensure full compliance for all products."
              },
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                title: "Brand Development",
                description: "Strategic marketing and brand positioning to establish your presence in the luxury beauty sector."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[var(--color-app-bg)] border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-app-text)] mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Parallax / Highlight */}
      <section className="py-20 bg-secondary text-[var(--color-app-text)]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">Curated Excellence</h2>
              <p className="text-[var(--color-app-text)] mb-8 leading-relaxed">
                We adhere to the highest standards of quality, partnering only with brands that share our commitment to excellence, innovation, and ethical beauty.
              </p>

              <div className="space-y-6">
                {[
                  "Advanced Skincare Solutions",
                  "Luxury Cosmetics & Makeup",
                  "Pharmaceutical Wellness Products",
                  "Professional Salon Supplies"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-primary"></div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2574&auto=format&fit=crop"
                  alt="Beauty Products"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs text-[var(--color-app-text)] hidden md:block">
                <div className="flex gap-1 text-primary mb-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-display font-bold text-lg">"The gold standard in beauty distribution."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-[var(--color-app-text)] mb-6">Ready to Expand Your Reach?</h2>
          <p className="text-slate-700 mb-10 text-lg">
            Join our network of successful partners. Whether you're a brand looking to enter the market or a pharmacy seeking premium products.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/partners">
              <Button size="lg" className="shadow-xl shadow-primary/20">Become a Partner</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="lg">Contact Support</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
