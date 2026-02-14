'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-neutral-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-display font-bold mb-6"
                >
                    Let&apos;s Create.
                </motion.h2>
                <p className="text-xl text-gray-400 mb-12">
                    Have a project in mind? Let&apos;s build something extraordinary together.
                    <br />
                    <span className="block mt-4 text-lg text-blue-400 font-mono">
                        +91 9048102350
                    </span>
                </p>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-left"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-neutral-900 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-neutral-900 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors"
                        />
                    </div>
                    <textarea
                        placeholder="Tell me about your project"
                        rows={4}
                        className="w-full bg-neutral-900 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors resize-none"
                    />

                    <button className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
