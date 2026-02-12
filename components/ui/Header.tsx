'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150 && !menuOpen) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0] as [number, number, number, number],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            },
        },
    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    const linkVars = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1] as [number, number, number, number],
            },
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1] as [number, number, number, number],
                duration: 0.7,
            },
        },
    };

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full px-6 py-6 z-50 flex justify-between items-center mix-blend-difference text-white"
            >
                <Link href="/" className="text-2xl font-display font-bold relative z-50">
                    RABEEH
                </Link>

                <nav className="hidden md:flex gap-8">
                    {['Work', 'About', 'Services', 'Contact'].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest hover:text-gray-400 transition-colors cursor-none">
                            {item}
                        </Link>
                    ))}
                </nav>

                <button onClick={toggleMenu} className="md:hidden text-sm uppercase relative z-50 focus:outline-none">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-neutral-900 z-40 origin-top flex flex-col justify-center items-center"
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col gap-6 text-center font-display text-4xl font-bold uppercase"
                        >
                            {['Work', 'About', 'Services', 'Contact'].map((item) => (
                                <div key={item} className="overflow-hidden">
                                    <motion.div variants={linkVars}>
                                        <Link href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="text-white hover:text-blue-500 transition-colors">
                                            {item}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
