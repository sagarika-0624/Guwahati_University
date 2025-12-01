'use client';

import React from 'react';
import HeroSection from '../Components/Feature/HeroSection';
import EcosystemVisualizer from '../Components/Feature/EcosystemVisualizer';
import RoleBasedGateway from '../Components/Feature/RolebasedGateway';
import AnnouncementSection from '../Components/Feature/AnnouncementSection';
import CulturalSpotlight from '../Components/Feature/CulturalSpotlight';
import { motion } from 'framer-motion';

export default function Academics() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Ecosystem Visualizer Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4">
              Integrated Digital Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connected Academic Portals
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience seamless connectivity across all university portals with real-time status monitoring
            </p>
          </motion.div>
          <EcosystemVisualizer />
        </div>
      </section>

      {/* Role-Based Gateway */}
      <RoleBasedGateway />

      {/* Announcements & News */}
      <AnnouncementSection />

      {/* Cultural Spotlight */}
      <CulturalSpotlight />
    </div>
  );
}