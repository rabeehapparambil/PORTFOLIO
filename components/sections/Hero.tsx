'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
            <motion.div
                style={{ y, opacity }}
                className="z-10 text-center px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-6"
                >
                    <span className="py-2 px-4 rounded-full border border-white/10 bg-white/5 text-sm md:text-base text-blue-400 font-mono">
                        Hi, I am Rabeeh
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-5xl md:text-8xl lg:text-9xl font-bold font-display tracking-tight leading-none"
                >
                    I Don’t Design.
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        I Create Experiences.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-body"
                >
                    Transforming concepts into bold visual identities.
                    <br className="hidden md:block" />
                    Specializing in Logo Design, Branding, and Print Media.
                </motion.p>
            </motion.div>

            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-blue-600 rounded-full blur-[150px] animate-pulse" />
            </div>

            {/* Floating Images - Left Side */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, y: [0, -20, 0] }}
                transition={{ duration: 1, delay: 0.5, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
                className="absolute top-1/4 left-[5%] md:left-[10%] w-32 h-40 md:w-48 md:h-64 bg-neutral-800/50 backdrop-blur-sm border border-white/10 rounded-lg hidden lg:block z-0 rotate-[-6deg]"
            >
                <div className="w-full h-full flex items-center justify-center text-white/20 font-mono text-sm">Image 01</div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, y: [0, 20, 0] }}
                transition={{ duration: 1, delay: 0.7, y: { repeat: Infinity, duration: 7, ease: "easeInOut" } }}
                className="absolute bottom-1/4 left-[8%] md:left-[15%] w-28 h-36 md:w-40 md:h-56 bg-neutral-800/50 backdrop-blur-sm border border-white/10 rounded-lg hidden lg:block z-0 rotate-[3deg]"
            >
                <div className="w-full h-full flex items-center justify-center text-white/20 font-mono text-sm">Image 02</div>
            </motion.div>

            {/* Floating Images - Right Side */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
                transition={{ duration: 1, delay: 0.6, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
                className="absolute top-[20%] right-[5%] md:right-[10%] w-36 h-48 md:w-56 md:h-72 bg-neutral-800/50 backdrop-blur-sm border border-white/10 rounded-lg hidden lg:block z-0 rotate-[6deg]"
            >
                <div className="w-full h-full flex items-center justify-center text-white/20 font-mono text-sm">Image 03</div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, y: [0, 25, 0] }}
                transition={{ duration: 1, delay: 0.8, y: { repeat: Infinity, duration: 8, ease: "easeInOut" } }}
                className="absolute bottom-[20%] right-[8%] md:right-[12%] w-32 h-40 md:w-44 md:h-60 bg-neutral-800/50 backdrop-blur-sm border border-white/10 rounded-lg hidden lg:block z-0 rotate-[-4deg]"
            >
                <div className="w-full h-full flex items-center justify-center text-white/20 font-mono text-sm">Image 04</div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
}
