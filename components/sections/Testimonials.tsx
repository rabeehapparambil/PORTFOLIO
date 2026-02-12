'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
    { id: 1, text: "The attention to detail is unparalleled. A true master of digital craftsmanship.", author: "Sarah Jenkins, Art Director" },
    { id: 2, text: "Transformed our brand into a living, breathing digital experience.", author: "Marcus Thorne, CEO TechFlow" },
    { id: 3, text: "Not just a designer, but a visionary storyteller.", author: "Elena Rodriguez, creative Lead" },
    { id: 4, text: "Delivering high-impact design solutions that merge aesthetics with strategy", author: "David Chen, Founder" },
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-neutral-900 overflow-hidden">
            <div className="mb-16 px-6 md:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Client Voices</h2>
            </div>

            <div className="relative w-full">
                <motion.div
                    style={{ x }}
                    className="flex gap-8 px-6 w-max"
                >
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="w-[85vw] md:w-[600px] p-8 md:p-12 bg-neutral-800 rounded-2xl flex flex-col justify-between"
                        >
                            <p className="text-xl md:text-3xl font-display leading-tight text-gray-200 mb-8">&quot;{item.text}&quot;</p>
                            <p className="text-blue-500 font-body tracking-widest uppercase text-sm">{item.author}</p>
                        </div>
                    ))}
                    {/* Duplicate for infinite feel if needed, or just let it scroll */}
                </motion.div>
            </div>
        </section>
    );
}
