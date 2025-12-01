import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Globe, Building2, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const milestones = [
  { year: '1948', event: 'Establishment of Gauhati University' },
  { year: '1962', event: 'First PhD program launched' },
  { year: '1985', event: 'Computer Science department established' },
  { year: '2000', event: 'Distance Education Center opened' },
  { year: '2015', event: 'NAAC A+ Accreditation' },
  { year: '2024', event: '76 years of academic excellence' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-red-900 to-red-800 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-amber-500 text-white mb-4">Est. 1948</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Gauhati University</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            A premier institution of higher learning in Northeast India, committed to academic excellence and cultural preservation
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Our Legacy</h2>
              <p className="text-black mb-4 leading-relaxed">
                Gauhati University, established in 1948, is the oldest and most prestigious university in Northeast India. 
                Located on a sprawling 500-acre campus in Guwahati, it has been a beacon of higher education and research 
                for over seven decades.
              </p>
              <p className="text-black mb-6 leading-relaxed">
                With over 50 departments, 350+ affiliated colleges, and 25,000+ students, we continue to shape the future 
                of the region while preserving its rich cultural heritage.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: 'NAAC A+ Accredited' },
                  { icon: Users, label: '25,000+ Students' },
                  { icon: BookOpen, label: '200+ Programs' },
                  { icon: Globe, label: '50+ Global Partners' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <item.icon className="w-5 h-5 text-red-700" />
                    <span className="text-sm font-medium text-black">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop"
                alt="Campus"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-red-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card>
                      <CardContent className="p-4">
                        <span className="text-2xl font-bold text-red-700">{m.year}</span>
                        <p className="text-black">{m.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-red-700 rounded-full border-4 border-white shadow z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
