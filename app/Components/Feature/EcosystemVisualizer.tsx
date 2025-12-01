'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Database, GraduationCap, FileText,
  BookOpen, Users, Activity
} from 'lucide-react';

const portals = [
  {
    id: 'main',
    name: 'Main Website',
    icon: Globe,
    color: 'bg-red-600',
    uptime: '99.8%',
    position: { x: '50%', y: '20%' },
    route: '/'
  },
  {
    id: 'mmtc',
    name: 'MMTC Portal',
    icon: Database,
    color: 'bg-blue-600',
    uptime: '99.5%',
    position: { x: '15%', y: '50%' },
    route: '/mmtc'
  },
  {
    id: 'student',
    name: 'Student Portal',
    icon: GraduationCap,
    color: 'bg-amber-600',
    uptime: '99.6%',
    position: { x: '15%', y: '85%' },
    route: '/studentportal'
  },
  {
    id: 'journals',
    name: 'Journals Portal',
    icon: FileText,
    color: 'bg-purple-600',
    uptime: '99.9%',
    position: { x: '50%', y: '70%' },
    route: '/journals'
  },
  {
    id: 'gucdoe',
    name: 'GUCDOE',
    icon: BookOpen,
    color: 'bg-green-600',
    uptime: '99.7%',
    position: { x: '85%', y: '50%' },
    route: '/gucdoe'
  },
  {
    id: 'admission',
    name: 'Admission Portal',
    icon: Users,
    color: 'bg-cyan-600',
    uptime: '99.5%',
    position: { x: '85%', y: '85%' },
    route: '/admissionportal'
  }
];

const connections = [
  { from: 'main', to: 'mmtc' },
  { from: 'mmtc', to: 'student' },
  { from: 'main', to: 'journals' },
  { from: 'main', to: 'gucdoe' },
  { from: 'gucdoe', to: 'admission' }
];

export default function EcosystemVisualizer() {
  return (
    <div className="relative w-full h-[500px] bg-gray-900/50 rounded-xl border border-gray-800 backdrop-blur-sm overflow-hidden p-8">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <defs>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {connections.map((conn, i) => {
          const fromNode = portals.find(p => p.id === conn.from);
          const toNode = portals.find(p => p.id === conn.to);
          if (!fromNode || !toNode) return null;

          return (
            <g key={`${conn.from}-${conn.to}`}>
              {/* Outer glow line */}
              <motion.line
                x1={fromNode.position.x}
                y1={fromNode.position.y}
                x2={toNode.position.x}
                y2={toNode.position.y}
                stroke="rgba(96, 165, 250, 0.2)"
                strokeWidth="3"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />

              {/* Main connection line */}
              <motion.line
                x1={fromNode.position.x}
                y1={fromNode.position.y}
                x2={toNode.position.x}
                y2={toNode.position.y}
                stroke="rgba(147, 197, 253, 0.6)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="8"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </motion.line>
            </g>
          );
        })}
      </svg>

      {/* Portal Nodes */}
      <div className="relative w-full h-full">
        {portals.map((portal, index) => (
          <motion.div
            key={portal.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: portal.position.x, top: portal.position.y }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
          >
            <a href={portal.route} className="relative group cursor-pointer block">
              {/* Pulse Effect */}
              <div className={`absolute inset-0 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity ${portal.color}`} />

              {/* Node Content */}
              <div className={`relative w-16 h-16 ${portal.color} rounded-2xl flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                <portal.icon className="w-8 h-8 text-white" />

                {/* Status Dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900" />
              </div>

              {/* Label */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-center w-32">
                <h3 className="text-white font-medium text-sm mb-0.5">{portal.name}</h3>
                <span className="text-xs text-green-400 font-mono">{portal.uptime} uptime</span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* System Status Badge */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-md"
      >
        <Activity className="w-4 h-4 text-green-400 animate-pulse" />
        <span className="text-sm font-medium text-green-400">All Systems Operational</span>
        <span className="text-xs text-green-500/60 ml-2">Average Uptime: 99.5%</span>
      </motion.div>
    </div>
  );
}