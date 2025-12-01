import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Sparkles, Music, Palette, BookOpen, ArrowRight } from 'lucide-react';
import { createPageUrl } from '@/lib/utils';

const culturalElements = [
  {
    title: 'Bihu Festival Celebrations',
    description: 'Experience the vibrant Rongali Bihu celebrations with traditional dance, music, and festivities',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop',
    icon: Music
  },
  {
    title: 'Traditional Arts & Crafts',
    description: 'Preserving and promoting Assamese traditional crafts, weaving, and artistic heritage',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop',
    icon: Palette
  },
  {
    title: 'Assamese Literature Center',
    description: 'Home to rare manuscripts and works of renowned Assamese poets and writers',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    icon: BookOpen
  }
];

const Counter = ({ value, delay }: { value: string, delay: number }) => {
  const cleanValue = value.replace(/,/g, '');
  const numericValue = parseInt(cleanValue.replace(/[^0-9]/g, ''));
  const suffix = cleanValue.replace(/[0-9]/g, '');

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const animation = animate(count, numericValue, {
      duration: 1.5,
      delay: delay,
      ease: "easeOut"
    });
    return animation.stop;
  }, [count, numericValue, delay, isInView]);

  return (
    <span ref={ref} className="text-amber-400 font-bold">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default function CulturalSpotlight() {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with Assamese pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Cultural Heritage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Where Tradition Meets
              <span className="block bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                Academic Excellence
              </span>
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Celebrating the rich Assamese cultural heritage while fostering modern academic growth
            </p>
          </motion.div>
        </div>

        {/* Cultural Elements Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {culturalElements.map((element, index) => {
            const Icon = element.icon;
            return (
              <motion.div
                key={element.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={element.image}
                    alt={element.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-red-700 transition-colors">
                  {element.title}
                </h3>
                <p className="text-black">{element.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bilingual Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-red-800 to-red-900 rounded-3xl overflow-hidden"
        >
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />

          <div className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-12 bg-amber-400 rounded-full" />
                  <div>
                    <p className="text-amber-300 text-sm font-medium">অসমীয়া ভাষা সংৰক্ষণ</p>
                    <p className="text-white/60 text-xs">Assamese Language Preservation</p>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Preserving Our{' '}
                  <span className="text-amber-400">Mother Tongue</span>
                </h3>

                <p className="text-red-100 mb-6 leading-relaxed">
                  Our dedicated Assamese Language Department works tirelessly to preserve,
                  promote, and advance the rich literary heritage of Assam. From ancient
                  Buranji manuscripts to contemporary literature, we bridge generations.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">
                    সাহিত্য (Literature)
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">
                    ভাষাবিজ্ঞান (Linguistics)
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">
                    লোকসংস্কৃতি (Folk Culture)
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-center mb-6">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-2xl mb-4 cursor-pointer"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsRotating(!isRotating)}
                      animate={{ rotate: isRotating ? 360 : 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <BookOpen className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white">Assamese Studies</h4>
                  </div>

                  <motion.div
                    className="space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.3
                        }
                      }
                    }}
                  >
                    {[
                      { label: 'Manuscripts Digitized', value: '5,000+' },
                      { label: 'Research Publications', value: '1,200+' },
                      { label: 'Cultural Programs/Year', value: '50+' }
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="flex justify-between items-center p-3 bg-white/5 rounded-lg"
                      >
                        <span className="text-white/80">{stat.label}</span>
                        <Counter value={stat.value} delay={i * 0.5} />
                      </motion.div>
                    ))}
                  </motion.div>

                  <a href={createPageUrl('Departments?search=assamese')}>
                    <button className="w-full mt-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
                      Explore Department
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Traditional Pattern Divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rotate-45 ${i === 2 ? 'bg-red-600 w-3 h-3' : 'bg-amber-400'}`}
              />
            ))}
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}