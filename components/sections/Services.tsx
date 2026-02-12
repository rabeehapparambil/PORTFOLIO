'use client';

import { motion } from 'framer-motion';

const services = [
    { id: 1, title: 'Brand Identity', description: 'Distinctive visual systems that make your brand unforgettable.' },
    { id: 2, title: 'Logo Design', description: 'Iconic marks that capture the essence of your business in a glance.' },
    { id: 3, title: 'Print Design', description: 'Tangible brand experiences from business cards to large-format displays.' },
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-950 relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold mb-16 text-center"
                >
                    Expertise
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 border border-white/10 hover:border-blue-600/50 bg-neutral-900/50 hover:bg-neutral-900 transition-colors group cursor-none rounded-xl"
                        >
                            <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-blue-500 transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
