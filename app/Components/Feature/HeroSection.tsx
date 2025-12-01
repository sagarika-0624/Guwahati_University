import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { createPageUrl } from '@/lib/utils';
import {
  ArrowRight, Play, ChevronLeft, ChevronRight,
  Award, Users, BookOpen, Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PortalStatusBadge from '@/components/ui/PortalStatusBadge';
import { useLanguage } from '@/components/ui/LanguageContext';

const heroSlidesData = [
  {
    id: 1,
    titleKey: 'excellenceWithHeritage',
    subtitleKey: 'heroSubtitle',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop',
    ctaKey: 'explorePrograms',
    ctaLink: 'Programs'
  },
  {
    id: 2,
    titleKey: 'researchThatMatters',
    subtitleKey: 'researchSubtitle',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&h=1080&fit=crop',
    ctaKey: 'viewResearch',
    ctaLink: 'Research'
  },
  {
    id: 3,
    titleKey: 'shapeYourFuture',
    subtitleKey: 'futureSubtitle',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop',
    ctaKey: 'applyNow',
    ctaLink: 'Admissions'
  }
];

const quickStatsData = [
  { icon: Award, labelKey: 'naacAccredited', valueKey: 'accredited' },
  { icon: Users, labelKey: 'students', value: '25,000+' },
  { icon: BookOpen, labelKey: 'programs', value: '200+' },
  { icon: Globe, labelKey: 'globalPartners', value: '50+' }
];

// Counter component for sequential animation
const Counter = ({ value, label, icon: Icon, delay }: { value: string, label: string, icon: any, delay: number }) => {
  const cleanValue = value.replace(/,/g, '');
  const numericValue = parseInt(cleanValue.replace(/[^0-9]/g, ''));
  const suffix = cleanValue.replace(/[0-9]/g, '');

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    // Each counter takes 1.5 seconds to animate, so we delay each one by 1.5 seconds after the previous
    const animation = animate(count, numericValue, {
      duration: 1.5,
      delay: delay * 1.5, // Sequential delay: 0s, 1.5s, 3s, 4.5s
      ease: "easeOut"
    });
    return animation.stop;
  }, [count, numericValue, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 1.5 }} // Match the animation delay
      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
    >
      <Icon className="w-5 h-5 text-amber-400 mb-2" />
      <div className="text-2xl font-bold text-white flex justify-center items-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + heroSlidesData.length) % heroSlidesData.length);
  };

  const slideData = heroSlidesData[currentSlide];
  const slide = {
    ...slideData,
    title: t(slideData.titleKey),
    subtitle: t(slideData.subtitleKey),
    cta: t(slideData.ctaKey)
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Portal Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              <PortalStatusBadge name="Main Portal" status="online" uptime="99.8%" />
              <PortalStatusBadge name="MMTC" status="online" uptime="99.5%" />
              <PortalStatusBadge name="Journals" status="online" uptime="99.9%" />
            </motion.div>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  {(slide.title || '').split(' ').map((word: string, i: number, arr: string[]) => (
                    <span key={i} className={i === arr.length - 1 ? 'text-amber-400' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href={createPageUrl(slide.ctaLink)}>
                <Button size="lg" className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white gap-2 h-14 px-8 text-lg">
                  {slide.cta}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2 h-14 px-8 text-lg">
                <Play className="w-5 h-5" />
                {t('virtualTour')}
              </Button>
            </div>

            {/* Quick Stats with Sequential Counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStatsData.map((stat, index) => {
                const Icon = stat.icon;
                const displayValue = stat.value || (stat.valueKey ? t(stat.valueKey) : '');
                const label = t(stat.labelKey);

                // Only animate if there's a numeric value
                if (stat.value) {
                  return (
                    <Counter
                      key={stat.labelKey}
                      value={displayValue}
                      label={label}
                      icon={Icon}
                      delay={index}
                    />
                  );
                }

                // For non-numeric values (like "A++ Accredited"), show without animation
                return (
                  <motion.div
                    key={stat.labelKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <Icon className="w-5 h-5 text-amber-400 mb-2" />
                    <div className="text-2xl font-bold text-white">{displayValue}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right side - can add ecosystem preview or other content */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              {/* Quick Access Cards */}
              <div className="space-y-4">
                {[
                  { titleKey: 'studentPortal', descKey: 'accessCoursesGrades', color: 'from-blue-500 to-blue-700', link: 'StudentPortal' },
                  { titleKey: 'admissions2025', descKey: 'applyNewSession', color: 'from-emerald-500 to-emerald-700', link: 'AdmissionPortal' },
                  { titleKey: 'researchHub', descKey: 'publicationsJournals', color: 'from-purple-500 to-purple-700', link: 'Research' }
                ].map((card, i) => (
                  <motion.a
                    key={card.titleKey}
                    href={createPageUrl(card.link)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all cursor-pointer block"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center`}>
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{t(card.titleKey)}</h3>
                          <p className="text-sm text-gray-400">{t(card.descKey)}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-2">
          {heroSlidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all ${index === currentSlide
                ? 'w-8 bg-amber-400'
                : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 right-8 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-wider">{t('scroll')}</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}