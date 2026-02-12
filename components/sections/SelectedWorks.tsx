'use client';

import { motion } from 'framer-motion';
import { MouseEvent, useRef, useState } from 'react';

interface Project {
    id: number;
    title: string;
    category: string;
    image: string; // Placeholder for now
}

const projects: Project[] = [
    { id: 5, title: "Pulse", category: "UI/UX Design", image: "/placeholder.jpg" },
    { id: 1, title: "Lumina", category: "Brand Identity", image: "/placeholder.jpg" },
    { id: 6, title: "Horizon", category: "Art Direction", image: "/placeholder.jpg" },
    { id: 3, title: "Vortex", category: "Motion Graphics", image: "/placeholder.jpg" },
    { id: 2, title: "Apex", category: "Web Design", image: "/placeholder.jpg" },
    { id: 4, title: "Echo", category: "Packaging", image: "/placeholder.jpg" },
];

function ProjectCard({ project }: { project: Project }) {
    const ref = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation (-10 to 10 degrees)
        const xPct = x / rect.width;
        const yPct = y / rect.height;

        const xRot = (yPct - 0.5) * 20; // Rotate around X axis (tilt up/down)
        const yRot = (xPct - 0.5) * -20; // Rotate around Y axis (tilt left/right)

        setRotation({ x: xRot, y: yRot });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX: rotation.x,
                rotateY: rotation.y,
            }}
            className="relative w-full aspect-[4/5] bg-neutral-900 overflow-hidden cursor-none group"
        >
            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-700">
                Placeholder Image
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 translate-z-10">
                <h3 className="text-3xl font-display font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                <p className="text-sm font-body text-gray-300 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
            </div>
        </motion.div>
    );
}

export default function SelectedWorks() {
    return (
        <section id="work" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-950 text-white relative z-10 overflow-hidden">
            {/* Floating Images - Left Side */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, y: [0, -15, 0] }}
                transition={{ duration: 1, delay: 0.2, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
                className="absolute top-20 left-[2%] w-40 h-52 bg-neutral-900/50 border border-white/5 rounded-lg hidden 2xl:block z-0 rotate-[-4deg]"
            >
                <div className="w-full h-full flex items-center justify-center text-white/10 font-mono text-xs">Work 01</div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, y: [0, 15, 0] }}
                transition={{ duration: 1, delay: 0.4, y: { repeat: Infinity, duration: 7, ease: "easeInOut" } }}
                className="absolute bottom-40 left-[5%] w-36 h-48 bg-neutral-900/50 border border-white/5 rounded-lg hidden 2xl:block z-0 rotate-[2deg]"
            >
                <div className="w-full h-full flex items-center justify-center text-white/10 font-mono text-xs">Work 02</div>
            </motion.div>

            {/* Floating Images - Right Side */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, y: [0, -20, 0] }}
                transition={{ duration: 1, delay: 0.3, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
                className="absolute top-32 right-[2%] w-44 h-60 bg-neutral-900/50 border border-white/5 rounded-lg hidden 2xl:block z-0 rotate-[5deg]"
            >
                <div className="w-full h-full flex items-center justify-center text-white/10 font-mono text-xs">Work 03</div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, y: [0, 20, 0] }}
                transition={{ duration: 1, delay: 0.5, y: { repeat: Infinity, duration: 8, ease: "easeInOut" } }}
                className="absolute bottom-20 right-[4%] w-32 h-44 bg-neutral-900/50 border border-white/5 rounded-lg hidden 2xl:block z-0 rotate-[-3deg]"
            >
                <div className="w-full h-full flex items-center justify-center text-white/10 font-mono text-xs">Work 04</div>
            </motion.div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
