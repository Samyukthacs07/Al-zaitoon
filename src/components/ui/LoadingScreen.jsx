"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Enforce the strict cinematic loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000); // Extended slightly to 4s to allow the world-class sequence fully breathe

        return () => clearTimeout(timer);
    }, []);

    // Animation Variants for typography (Remotion-style sequencing)
    const titleContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delayChildren: 1.4, staggerChildren: 0.08 }
        }
    };

    const sloganContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delayChildren: 2.2, staggerChildren: 0.04 }
        }
    };

    const textRevealVariant = {
        hidden: { opacity: 0, y: 30, filter: "blur(8px)", rotateX: 20 },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            rotateX: 0,
            transition: { type: "spring", damping: 20, stiffness: 100 } // Remotion physical mapping
        }
    };

    const titleLetters = "AL-ZAITOON".split("");
    const sloganLetters = "Curating Excellence".split("");

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loading-screen"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: "-100%",
                        filter: "blur(20px)",
                        borderBottomLeftRadius: "50%",
                        borderBottomRightRadius: "50%",
                        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } // Custom easing curve for liquid feel
                    }}
                    className="fixed inset-0 z-[9999] bg-[#faf8f5] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Abstract Cinematic Lighting Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-multiply opacity-50">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
                            animate={{ scale: 1.5, opacity: 1, rotate: 180 }}
                            transition={{ duration: 4, ease: "easeOut" }}
                            className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-radial from-[#9c6e5a]/30 to-transparent blur-[100px]"
                        />
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
                            animate={{ scale: 1.5, opacity: 1, rotate: -180 }}
                            transition={{ duration: 4, delay: 0.2, ease: "easeOut" }}
                            className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-radial from-[var(--color-primary-900)]/20 to-transparent blur-[100px]"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo Container with Advanced Glassmorphism & Light Sweep */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 40, filter: "blur(24px) drop-shadow(0px 0px 0px rgba(0,0,0,0))" }}
                            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px) drop-shadow(0px 20px 30px rgba(0,0,0,0.15))" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // Remotion-style spring easing mapping
                            className="relative"
                        >
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="relative w-72 md:w-96 h-auto flex justify-center items-center overflow-hidden rounded-[2rem] p-4 group">
                                    {/* The Logo Image */}
                                    <img
                                        src="/loadinglogo.png"
                                        alt="Al-Zaitoon Logo"
                                        className="w-full h-auto object-contain relative z-10"
                                    />

                                    {/* Warm Copper Sweep over Logo (Liquid Highlight) */}
                                    <motion.div
                                        initial={{ x: "-100%", skewX: -20, opacity: 0 }}
                                        animate={{ x: "200%", opacity: 0.8 }}
                                        transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
                                        className="absolute inset-0 z-30 bg-gradient-to-r from-transparent via-[#dcc7b8]/60 to-transparent w-full pointer-events-none mix-blend-overlay"
                                        style={{ mixBlendMode: 'plus-lighter' }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Staggered Mathematical Typography Engine */}
                        <div className="mt-12 text-center space-y-5" style={{ perspective: 1000 }}>
                            {/* Brand Name Letter Reveal */}
                            <motion.h2
                                variants={titleContainer}
                                initial="hidden"
                                animate="visible"
                                className="text-3xl md:text-4xl font-display font-medium text-[var(--color-primary-900)] tracking-[0.2em] flex justify-center overflow-hidden py-2"
                            >
                                {titleLetters.map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={textRevealVariant}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.h2>

                            {/* Center Growing Line */}
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "140%", opacity: 1 }}
                                transition={{ duration: 1.5, delay: 2.0, ease: [0.76, 0, 0.24, 1] }}
                                className="h-[1px] bg-gradient-to-r from-transparent via-[#9c6e5a]/80 to-transparent mx-auto relative overflow-hidden -ml-[20%]"
                            >
                                {/* Active core line pulse */}
                                <motion.div
                                    className="absolute inset-0 bg-[#dcc7b8] blur-[2px]"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 2, delay: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                                />
                            </motion.div>

                            {/* Slogan Letter Reveal */}
                            <motion.p
                                variants={sloganContainer}
                                initial="hidden"
                                animate="visible"
                                className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-primary/70 flex justify-center"
                            >
                                {sloganLetters.map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={textRevealVariant}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
