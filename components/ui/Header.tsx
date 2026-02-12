'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full px-6 py-6 z-50 flex justify-between items-center mix-blend-difference text-white"
        >
            <Link href="/" className="text-2xl font-display font-bold">
                RABEEH
            </Link>

            <nav className="hidden md:flex gap-8">
                {['Work', 'About', 'Services', 'Contact'].map((item) => (
                    <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest hover:text-gray-400 transition-colors cursor-none">
                        {item}
                    </Link>
                ))}
            </nav>

            <button className="md:hidden text-sm uppercase">Menu</button>
        </motion.header>
    );
}
