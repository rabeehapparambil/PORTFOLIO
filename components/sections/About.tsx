'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-900 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

                {/* Text Content */}
                <div className="w-full md:w-1/2 order-2 md:order-1 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-8"
                    >
                        Behind the Experience
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-gray-300 font-body text-lg"
                    >
                        <p>
                            I am a visual designer obsessed with the intersection of aesthetics and clarity. My philosophy is simple: design is not just what you see — it’s how a brand communicates, connects, and leaves a lasting impression.
                        </p>
                        <p>
                            With advanced expertise in Adobe Illustrator and Photoshop, I transform ideas into powerful visual identities and high-impact digital creatives. I specialize in building bold brand systems, refined compositions, and visually compelling designs that balance strategy with artistic precision.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <div className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors cursor-none">
                            Art Direction
                        </div>
                        <div className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors cursor-none">
                            Strategic Visual Communication
                        </div>
                        <div className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors cursor-none">
                            Brand Strategy
                        </div>
                    </motion.div>
                </div>

                {/* Image/Visual */}
                <div className="w-full md:w-1/2 order-1 md:order-2 relative h-[500px] md:h-[600px] w-full">
                    <motion.div
                        initial={{ clipPath: 'inset(100% 0 0 0)' }}
                        whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10" />
                        <Image
                            src="/portrait.jpg"
                            alt="Portrait of the Designer"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
