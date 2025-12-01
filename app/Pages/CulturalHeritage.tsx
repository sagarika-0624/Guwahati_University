'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
    Sparkles, Music, Palette, BookOpen, Heart, Star,
    ArrowRight, Play, Users, Calendar, Award, MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import GamochaPattern from '@/components/ui/GamochaPattern';

const culturalHighlights = [
    {
        title: 'Rongali Bihu',
        assamese: 'ৰঙালী বিহু',
        description: 'The vibrant spring festival celebrating the Assamese New Year with traditional Bihu dance and music',
        image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop',
        icon: Music,
        details: {
            overview: "Rongali Bihu, also known as Bohag Bihu, is the most important festival of Assam celebrated in mid-April. It marks the beginning of the Assamese New Year and the spring harvest season.",
            highlights: [
                "Traditional Bihu dance performed in open fields",
                "Folk songs (Bihu Geet) accompanied by dhol, pepa, and gogona",
                "Seven days of celebration with different rituals each day",
                "Traditional Assamese attire - Mekhela Chador and Dhoti-Gamosa"
            ],
            significance: "The festival represents the spirit of joy, new beginnings, and thanksgiving for a good harvest. It brings together communities in celebration of Assamese culture and agricultural prosperity."
        }
    },
    {
        title: 'Sattriya Dance',
        assamese: 'সত্ৰীয়া নৃত্য',
        description: 'Classical dance form originated in the Vaishnavite monasteries of Assam, recognized by Sangeet Natak Akademi',
        image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=400&fit=crop',
        icon: Sparkles,
        details: {
            overview: "Sattriya is one of the eight classical dance forms of India, created by the great Vaishnavite saint Srimanta Sankardeva in the 15th century as a medium for propagating his faith.",
            highlights: [
                "Originated in Assamese monasteries (Sattras) in the 15th century",
                "Recognized as classical dance by Sangeet Natak Akademi in 2000",
                "Combines devotional themes with aesthetic dance movements",
                "Features distinctive costumes, mudras, and facial expressions"
            ],
            significance: "Sattriya dance preserves centuries-old traditions while serving as a living art form that continues to evolve. It represents the cultural and spiritual heritage of Assam."
        }
    },
    {
        title: 'Assamese Literature',
        assamese: 'অসমীয়া সাহিত্য',
        description: 'Rich literary tradition dating back to the 14th century, featuring works of Sankardeva and Madhavdeva',
        image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=400&fit=crop',
        icon: BookOpen,
        details: {
            overview: "Assamese literature is one of the oldest in India, with a rich history of poetry, novels, and plays. It has been shaped by the Vaishnavite movement and modern literary renaissance.",
            highlights: [
                "Buranjis - unique historical chronicles of the Ahom kingdom",
                "Kirtan Ghosa and Naam Ghosa by Sankardeva and Madhavdeva",
                "Jonaki era marking the beginning of modern Assamese literature",
                "Rich tradition of folk literature and oral storytelling"
            ],
            significance: "Literature serves as the backbone of Assamese identity, preserving the language, history, and social values of the region through centuries of change."
        }
    },
    {
        title: 'Traditional Crafts',
        assamese: 'পৰম্পৰাগত শিল্প',
        description: 'Exquisite craftsmanship in bamboo, cane, silk weaving (Muga & Eri), and pottery',
        image: 'https://images.unsplash.com/photo-1605347209865-6b7425d5bc5c?w=600&h=400&fit=crop',
        icon: Palette,
        details: {
            overview: "Assam is renowned for its traditional handicrafts, particularly cane and bamboo products, bell metal work, and the world-famous Assam silk.",
            highlights: [
                "Muga Silk - the golden silk unique to Assam",
                "Sarthebari Bell Metal Industry",
                "Terracotta art of Asharikandi",
                "Intricate Bamboo and Cane furniture and artifacts"
            ],
            significance: "These crafts not only preserve traditional skills but also provide livelihoods to thousands of artisans while promoting sustainable practices and cultural tourism."
        }
    }
];

const literaryFigures = [
    { name: 'Lakshminath Bezbaroa', assamese: 'লক্ষ্মীনাথ বেজবৰুৱা', title: 'Rasaraj', contribution: 'Father of Modern Assamese Literature' },
    { name: 'Jyoti Prasad Agarwala', assamese: 'জ্যোতিপ্ৰসাদ আগৰৱালা', title: 'Rupkonwar', contribution: 'Pioneer of Assamese Cinema & Culture' },
    { name: 'Bishnu Prasad Rabha', assamese: 'বিষ্ণুপ্ৰসাদ ৰাভা', title: 'Kalaguru', contribution: 'Renaissance Artist & Revolutionary' },
    { name: 'Bhupen Hazarika', assamese: 'ভূপেন হাজৰিকা', title: 'Sudhakantha', contribution: 'Legendary Singer & Filmmaker' }
];

const events = [
    { name: 'Rongali Bihu Celebration', date: 'April 14-16', type: 'Festival' },
    { name: 'Assamese Literature Week', date: 'August 15-21', type: 'Literary' },
    { name: 'Sattriya Dance Workshop', date: 'Monthly', type: 'Workshop' },
    { name: 'Folk Music Concert', date: 'Quarterly', type: 'Music' }
];

// Counter component for animated stats
const Counter = ({ value, label, delay }: { value: string, label: string, delay: number }) => {
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[0-9]/g, '');
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

    useEffect(() => {
        const controls = animate(count, numericValue, { duration: 2, delay, ease: "easeOut" });
        return controls.stop;
    }, [numericValue, delay]);

    return (
        <div className="text-center">
            <motion.div className="text-4xl font-bold text-amber-400 mb-2">{rounded}</motion.div>
            <div className="text-gray-300">{label}</div>
        </div>
    );
};

export default function CulturalHeritage() {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const [showGallery, setShowGallery] = useState(false);

    // Scroll to traditions section
    const scrollToTraditions = () => {
        const element = document.getElementById('traditions-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/gamusa_hero_bg.png"
                        alt="Traditional Assamese Gamusa Pattern"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge className="bg-amber-500 hover:bg-amber-600 text-white mb-6 px-4 py-1 text-lg">
                            Cultural Heritage
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Preserving the <span className="text-amber-400">Soul</span> of Assam
                        </h1>
                        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Celebrating the rich tapestry of traditions, arts, and literature that define our unique identity
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-amber-500 hover:bg-amber-600 text-white h-14 px-8 text-lg"
                                onClick={scrollToTraditions}
                            >
                                Explore Traditions <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg"
                                onClick={() => setShowGallery(true)}
                            >
                                View Gallery
                            </Button>
                        </div>
                    </motion.div >
                </div >

                {/* Floating Stats */}
                < div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/10" >
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <Counter value="50+" label="Cultural Programs" delay={0} />
                            <Counter value="5000+" label="Manuscripts" delay={0.2} />
                            <Counter value="25+" label="Art Exhibitions" delay={0.4} />
                            <Counter value="100+" label="Workshops" delay={0.6} />
                        </div>
                    </div>
                </div >
            </section >

            {/* Cultural Highlights */}
            <section id="traditions-section" className="py-24 px-4 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <GamochaPattern />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Cultural Highlights</h2>
                        <p className="text-xl text-gray-400">Discover the essence of Assamese heritage</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {culturalHighlights.map((item, index) => {
                            const Icon = item.icon;
                            const isExpanded = expandedItem === item.title;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${isExpanded ? 'h-auto' : 'h-80'}`}>
                                        <div className={`relative ${isExpanded ? 'h-64' : 'h-80'} transition-all duration-500`}>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <motion.div
                                                        className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center"
                                                        animate={{ rotate: 360 }}
                                                        transition={{
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            ease: "linear"
                                                        }}
                                                    >
                                                        <Icon className="w-6 h-6 text-white" />
                                                    </motion.div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                                        <p className="text-amber-300 text-sm">{item.assamese}</p>
                                                    </div>
                                                </div>
                                                <p className="text-gray-200 mb-4">{item.description}</p>
                                                <Button
                                                    variant="ghost"
                                                    className="text-white hover:text-amber-400 hover:bg-white/10 p-0 gap-2"
                                                    onClick={() => setExpandedItem(isExpanded ? null : item.title)}
                                                >
                                                    {isExpanded ? 'Show Less' : 'Learn More'} <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Expanded Details */}
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="bg-white p-8 border-t border-gray-100"
                                            >
                                                <div className="space-y-6">
                                                    {/* Overview */}
                                                    <div>
                                                        <h4 className="text-lg font-bold text-black mb-2 flex items-center gap-2">
                                                            <div className="w-1 h-6 bg-amber-500 rounded" />
                                                            Overview
                                                        </h4>
                                                        <p className="text-black leading-relaxed">{item.details.overview}</p>
                                                    </div>

                                                    {/* Highlights */}
                                                    <div>
                                                        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
                                                            <div className="w-1 h-6 bg-red-600 rounded" />
                                                            Key Highlights
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {item.details.highlights.map((highlight, i) => (
                                                                <li key={i} className="flex items-start gap-3 text-black">
                                                                    <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                                                    <span>{highlight}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Significance */}
                                                    <div>
                                                        <h4 className="text-lg font-bold text-black mb-2 flex items-center gap-2">
                                                            <div className="w-1 h-6 bg-green-600 rounded" />
                                                            Cultural Significance
                                                        </h4>
                                                        <p className="text-black leading-relaxed">{item.details.significance}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section >

            {/* Literary Legends */}
            < section className="py-24 px-4 bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative overflow-hidden" >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Literary Legends</h2>
                        <p className="text-xl text-red-100">Honoring the architects of Assamese literature</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {literaryFigures.map((figure, index) => (
                            <motion.div
                                key={figure.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                                            {figure.name[0]}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">{figure.name}</h3>
                                        <p className="text-amber-300 text-sm mb-2">{figure.assamese}</p>
                                        <Badge variant="secondary" className="bg-white/20 text-white mb-3 hover:bg-white/30">
                                            {figure.title}
                                        </Badge>
                                        <p className="text-red-100 text-sm">{figure.contribution}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Assamese Language Section */}
            < section className="py-24 px-4 bg-white" >
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-red-700 text-sm font-medium tracking-wider uppercase mb-4 block">
                                অসমীয়া ভাষা
                            </span>
                            <h2 className="text-4xl font-bold text-black mb-6">
                                The Assamese Language
                            </h2>
                            <p className="text-lg text-black mb-6 leading-relaxed">
                                Assamese (Asamiya) is an Eastern Indo-Aryan language spoken mainly in the state of Assam. It is the official language of Assam and one of the 22 scheduled languages of India.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Rich history dating back to the 7th century CE",
                                    "Written in the Assamese script",
                                    "Strong influence of Tibeto-Burman languages",
                                    "Unique phonetic characteristics"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        <span className="text-black">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover="hover"
                            viewport={{ once: true }}
                            className="relative cursor-pointer"
                            style={{ perspective: 1000 }}
                            variants={{
                                hover: {
                                    rotateY: 180,
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }
                                }
                            }}
                        >
                            <div className="aspect-square rounded-full bg-red-50 p-12 relative">
                                <motion.div
                                    className="absolute inset-0 border-2 border-dashed border-red-400 rounded-full"
                                    variants={{
                                        hover: { rotate: 360 }
                                    }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                />
                                <div className="w-full h-full bg-white rounded-full shadow-xl flex items-center justify-center p-8 text-center">
                                    <div>
                                        <div className="text-6xl font-bold text-red-600 mb-4">অ</div>
                                        <p className="text-black italic">
                                            "The soul of a culture lives in its language"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* Upcoming Events */}
            < section className="py-24 px-4 bg-gradient-to-b from-amber-50 to-white" >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4">Cultural Calendar</h2>
                        <p className="text-xl text-black">Join us in celebrating Assamese culture throughout the year</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="hover:shadow-lg transition-all duration-300 border-none shadow-md">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 bg-red-50 rounded-xl text-red-600">
                                                <Calendar className="w-6 h-6" />
                                            </div>
                                            <Badge variant="outline" className="text-red-600 border-red-200">
                                                {event.type}
                                            </Badge>
                                        </div>
                                        <h3 className="text-lg font-bold text-black mb-2">{event.name}</h3>
                                        <p className="text-black text-sm">{event.date}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < section className="bg-slate-900 py-20 px-4 text-center relative overflow-hidden" >
                <div className="absolute inset-0 opacity-20">
                    <GamochaPattern />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-6">Be Part of Our Heritage</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Join the Cultural Club or contribute to our archives. Let's preserve our legacy together.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8">
                            Join Cultural Club
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8">
                            Support Heritage
                        </Button>
                    </div>
                </div>
            </section>

            {/* Gallery Modal */}
            {showGallery && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setShowGallery(false)}>
                    <div className="relative max-w-7xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 rounded-3xl" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-6 flex items-center justify-between z-10">
                            <h2 className="text-3xl font-bold text-white">Cultural Heritage Gallery</h2>
                            <button
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                onClick={() => setShowGallery(false)}
                            >
                                <span className="text-white text-2xl">&times;</span>
                            </button>
                        </div>
                        <div className="p-8 grid md:grid-cols-2 gap-8">
                            {/* Gamusa */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
                            >
                                <div className="aspect-video bg-gradient-to-br from-red-900 to-amber-900 flex items-center justify-center">
                                    <div className="text-6xl">🧣</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Gamusa</h3>
                                    <p className="text-amber-300 mb-3">গামোচা</p>
                                    <p className="text-gray-300 mb-4">
                                        The Gamusa is a traditional white cloth with red borders and motifs, symbolizing Assamese culture and hospitality. It's used in religious ceremonies, as a gift of honor, and in daily life.
                                    </p>
                                    <div className="space-y-2 text-sm text-gray-400">
                                        <p>• Symbol of respect and honor in Assamese culture</p>
                                        <p>• Handwoven with intricate traditional patterns</p>
                                        <p>• Used in Bihu celebrations and religious ceremonies</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Kaah Pitol */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
                            >
                                <div className="aspect-video bg-gradient-to-br from-amber-900 to-yellow-900 flex items-center justify-center">
                                    <div className="text-6xl">🥘</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Kaah Pitol</h3>
                                    <p className="text-amber-300 mb-3">কাঁহ পিতল</p>
                                    <p className="text-gray-300 mb-4">
                                        Traditional bell metal and brass utensils of Assam, known for their durability and cultural significance. The Sarthebari region is famous for this ancient craft.
                                    </p>
                                    <div className="space-y-2 text-sm text-gray-400">
                                        <p>• Ancient metalwork tradition from Sarthebari</p>
                                        <p>• Handcrafted plates, bowls, and water vessels</p>
                                        <p>• Believed to have health benefits and spiritual significance</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Rongali Bihu */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
                            >
                                <div className="aspect-video bg-gradient-to-br from-green-900 to-emerald-900 flex items-center justify-center">
                                    <div className="text-6xl">🎭</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Rongali Bihu</h3>
                                    <p className="text-amber-300 mb-3">ৰঙালী বিহু</p>
                                    <p className="text-gray-300 mb-4">
                                        The spring festival marking the Assamese New Year, celebrated with traditional dance, music, and feasting. Bihu represents joy, harvest, and cultural pride.
                                    </p>
                                    <div className="space-y-2 text-sm text-gray-400">
                                        <p>• Celebrated in mid-April for seven days</p>
                                        <p>• Features traditional Bihu dance and songs</p>
                                        <p>• Includes unique musical instruments like dhol, pepa, and gogona</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Sattriya Dance */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
                            >
                                <div className="aspect-video bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                                    <div className="text-6xl">💃</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Sattriya Dance</h3>
                                    <p className="text-amber-300 mb-3">সত্ৰীয়া নৃত্য</p>
                                    <p className="text-gray-300 mb-4">
                                        One of India's eight classical dance forms, developed by Sankardeva in the 15th century as a medium of worship and storytelling in Assamese monasteries.
                                    </p>
                                    <div className="space-y-2 text-sm text-gray-400">
                                        <p>• Recognized as classical dance in 2000</p>
                                        <p>• Originated in Assamese Sattras (monasteries)</p>
                                        <p>• Features distinctive mudras, costumes, and expressions</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Assamese Literature */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 md:col-span-2"
                            >
                                <div className="aspect-[3/1] bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
                                    <div className="text-6xl">📚</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Assamese Literature</h3>
                                    <p className="text-amber-300 mb-3">অসমীয়া সাহিত্য</p>
                                    <p className="text-gray-300 mb-4">
                                        A rich literary tradition spanning over a thousand years, from ancient manuscripts to modern works. Assamese literature encompasses poetry, prose, drama, and historical chronicles.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-400">
                                        <div>
                                            <p>• Buranjis - unique historical chronicles</p>
                                            <p>• Kirtan Ghosa and Naam Ghosa by Sankardeva</p>
                                        </div>
                                        <div>
                                            <p>• Jonaki era of modern literature</p>
                                            <p>• Rich tradition of folk tales and oral storytelling</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
