'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, FileText } from 'lucide-react';

export default function Recruitment() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Users className="w-8 h-8 text-green-700" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold text-black hover:text-red-700 transition-colors duration-300 mb-4 cursor-default">
                        Recruitment & Careers
                    </h1>
                    <p className="text-xl text-black max-w-2xl mx-auto">
                        Current job openings and recruitment notifications at Gauhati University
                    </p>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="text-center py-12">
                        <motion.div
                            className="inline-block"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-black mb-2">Coming Soon</h3>
                        <p className="text-black">Recruitment information will be available here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
