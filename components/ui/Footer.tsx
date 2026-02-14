'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 px-6 text-center text-sm text-gray-600 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Social Links */}
                <div className="flex gap-6 order-1 md:order-2">
                    <motion.a
                        href="https://www.instagram.com/rrabiiiiii/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, color: '#E1306C' }}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram size={20} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/rrabiiiiii"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, color: '#0077b5' }}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=rabeehapparambil@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, color: '#EA4335' }}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Gmail"
                    >
                        <Mail size={20} />
                    </motion.a>
                    <motion.a
                        href="https://wa.me/919048102350" // Replace if different number
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, color: '#25D366' }}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="WhatsApp"
                    >
                        <MessageCircle size={20} />
                    </motion.a>
                </div>

                {/* Copyright */}
                <div className="order-2 md:order-1">
                    <p>&copy; {new Date().getFullYear()} Muhammed Rabeeh A. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
