import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bell, Calendar, AlertTriangle, Info, ChevronRight,
    ChevronLeft, X, Clock, Tag, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/ui/LanguageContext';
import { createPageUrl } from '@/lib/utils';

type AnnouncementType = 'urgent' | 'maintenance' | 'info';

interface Announcement {
    id: number;
    type: AnnouncementType;
    title: string;
    description: string;
    date: string;
    category: string;
    link: string;
}

interface NewsItem {
    id: number;
    title: string;
    excerpt: string;
    fullContent: string;
    image: string;
    date: string;
    category: string;
}

const announcements: Announcement[] = [
    {
        id: 1,
        type: 'urgent',
        title: 'Semester Examination Schedule Released',
        description: 'The examination schedule for odd semester 2024-25 has been published. Check the portal for detailed timetable.',
        date: '2024-01-15',
        category: 'Examination',
        link: '#'
    },
    {
        id: 2,
        type: 'maintenance',
        title: 'MMTC Portal Scheduled Maintenance',
        description: 'MMTC Portal will undergo maintenance on November 25, 2025 from 2:00 AM to 6:00 AM IST.',
        date: '2024-01-14',
        category: 'System',
        link: '#'
    },
    {
        id: 3,
        type: 'info',
        title: 'International Conference on AI & ML',
        description: 'The Department of Computer Science is organizing an international conference. Registration now open.',
        date: '2024-01-13',
        category: 'Events',
        link: '#'
    },
    {
        id: 4,
        type: 'info',
        title: 'PhD Admission Applications Open',
        description: 'Applications for PhD programs across all departments are now being accepted for the 2025 session.',
        date: '2024-01-12',
        category: 'Admissions',
        link: '#'
    }
];

const allNews: NewsItem[] = [
    {
        id: 1,
        title: 'GU Researchers Publish Groundbreaking Study on Climate Change Impact',
        excerpt: 'A team of researchers from the Environmental Science department has published their findings in Nature Journal...',
        fullContent: 'A team of researchers from the Environmental Science department has published their groundbreaking findings in the prestigious Nature Journal. The study, led by Dr. Rajesh Kumar and his team, examines the impact of climate change on the biodiversity of the Eastern Himalayan region. The research, conducted over a period of five years, reveals critical insights into how rising temperatures are affecting local ecosystems and species migration patterns. The findings have significant implications for conservation efforts and policy-making in the region. The study has been widely acclaimed by the international scientific community and has been featured in several leading publications.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop',
        date: '2024-01-15',
        category: 'Research'
    },
    {
        id: 2,
        title: 'University Ranks Among Top 50 in NIRF Rankings 2024',
        excerpt: 'Gauhati University has achieved a significant milestone by ranking in the top 50 universities nationally...',
        fullContent: 'Gauhati University has achieved a significant milestone by securing a position among the top 50 universities in the National Institutional Ranking Framework (NIRF) 2024. This remarkable achievement reflects the university\'s commitment to academic excellence, research innovation, and quality education. The ranking takes into account various parameters including teaching, learning resources, research productivity, graduation outcomes, outreach, and perception. Vice-Chancellor Prof. Pratap Jyoti Handique expressed his gratitude to the faculty, staff, and students for their dedication and hard work. The university has shown consistent improvement in its rankings over the past few years, demonstrating its growing reputation as a leading institution of higher education in India.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
        date: '2024-01-14',
        category: 'Achievement'
    },
    {
        id: 3,
        title: 'New State-of-the-Art Research Center Inaugurated',
        excerpt: 'The Hon\'ble Chief Minister inaugurated the new Center for Advanced Research in Biotechnology...',
        fullContent: 'The Hon\'ble Chief Minister of Assam inaugurated the new Center for Advanced Research in Biotechnology at Gauhati University campus. The state-of-the-art facility, built with an investment of ₹50 crores, is equipped with cutting-edge research equipment and laboratories. The center will focus on research in areas such as genetic engineering, molecular biology, and pharmaceutical biotechnology. It is expected to become a hub for innovation and will collaborate with leading research institutions worldwide. The facility includes specialized laboratories for genomics, proteomics, and bioinformatics, along with a dedicated space for incubation of biotech startups. The center aims to contribute significantly to the biotechnology sector in the Northeast region and provide world-class research opportunities for students and faculty.',
        image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop',
        date: '2024-01-13',
        category: 'Campus'
    },
    {
        id: 4,
        title: 'International Student Exchange Program Launched',
        excerpt: 'GU signs MoU with 10 international universities for student exchange programs...',
        fullContent: 'Gauhati University has launched an ambitious International Student Exchange Program by signing Memorandums of Understanding (MoUs) with 10 prestigious universities across Europe, Asia, and North America. The program will enable students to spend a semester or academic year at partner institutions, gaining international exposure and cross-cultural experience. Selected students will have the opportunity to study at universities in countries including Germany, Japan, Australia, Canada, and the United States. The program covers various disciplines and offers scholarships for meritorious students. This initiative is part of the university\'s vision to internationalize its curriculum and provide students with global learning opportunities.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
        date: '2024-01-12',
        category: 'International'
    },
    {
        id: 5,
        title: 'Annual Cultural Festival "Abhivyakti" Concludes Successfully',
        excerpt: 'Three-day cultural extravaganza showcases talent from across the region...',
        fullContent: 'The annual cultural festival "Abhivyakti 2024" concluded successfully with enthusiastic participation from students across the Northeast region. The three-day event featured a diverse range of competitions including music, dance, drama, literary events, and art exhibitions. Over 2,000 students from 50+ colleges participated in various events. The festival was inaugurated by renowned filmmaker Jahnu Barua and concluded with a spectacular musical night featuring popular Assamese bands. The event also included workshops on traditional Assamese arts and crafts, photography, and filmmaking. Winners were awarded prizes worth ₹5 lakhs along with certificates and trophies.',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
        date: '2024-01-11',
        category: 'Events'
    },
    {
        id: 6,
        title: 'Department of Physics Receives Major Research Grant',
        excerpt: 'DST approves ₹2 crore grant for quantum computing research...',
        fullContent: 'The Department of Physics at Gauhati University has received a major research grant of ₹2 crores from the Department of Science and Technology (DST), Government of India, for cutting-edge research in quantum computing and quantum information science. The project, led by Prof. Anindita Sharma, will focus on developing quantum algorithms and exploring their applications in cryptography and optimization problems. The grant will be utilized over a period of three years to establish a quantum computing laboratory, procure advanced equipment, and support doctoral research. This is one of the largest research grants received by the university and demonstrates the growing recognition of GU\'s research capabilities in emerging technologies.',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
        date: '2024-01-10',
        category: 'Research'
    }
];

const typeConfig: Record<AnnouncementType, { icon: any; color: string; bg: string; border: string }> = {
    urgent: { icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
    maintenance: { icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    info: { icon: Info, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' }
};

export default function AnnouncementSection() {
    const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
    const [dismissedAlert, setDismissedAlert] = useState(false);
    const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
    const [showAllNews, setShowAllNews] = useState(false);
    const { t } = useLanguage();

    const nextAnnouncement = () => {
        setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    };

    const prevAnnouncement = () => {
        setCurrentAnnouncement((prev) => (prev - 1 + announcements.length) % announcements.length);
    };

    const currentAlert = announcements[currentAnnouncement];
    const alertConfig = typeConfig[currentAlert.type];
    const AlertIcon = alertConfig.icon;

    const displayedNews = showAllNews ? allNews : allNews.slice(0, 3);

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Alert Banner */}
                <AnimatePresence>
                    {!dismissedAlert && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={`mb-12 rounded-2xl ${alertConfig.bg} border ${alertConfig.border} overflow-hidden`}
                        >
                            <div className="p-4 md:p-6 flex items-start gap-4">
                                <div className={`p-2 rounded-lg ${alertConfig.bg} ${alertConfig.color}`}>
                                    <AlertIcon className="w-6 h-6" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Badge variant="outline" className={alertConfig.color}>
                                            {currentAlert.category}
                                        </Badge>
                                        <span className="text-sm text-black">
                                            {new Date(currentAlert.date).toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-black mb-1">{currentAlert.title}</h3>
                                    <p className="text-black text-sm">{currentAlert.description}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="hidden md:flex items-center gap-1 mr-4">
                                        <button
                                            onClick={prevAnnouncement}
                                            className="p-1.5 rounded-lg hover:bg-white/50 transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-black" />
                                        </button>
                                        <span className="text-sm text-black min-w-[40px] text-center">
                                            {currentAnnouncement + 1}/{announcements.length}
                                        </span>
                                        <button
                                            onClick={nextAnnouncement}
                                            className="p-1.5 rounded-lg hover:bg-white/50 transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5 text-black" />
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => setDismissedAlert(true)}
                                        className="p-1.5 rounded-lg hover:bg-white/50 transition-colors"
                                    >
                                        <X className="w-5 h-5 text-gray-400" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                    <div>
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-3">
                            {t('stayUpdated')}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            {t('newsAnnouncements')}
                        </h2>
                    </div>
                    <Button
                        variant="outline"
                        className="gap-2 self-start md:self-auto"
                        onClick={() => setShowAllNews(!showAllNews)}
                    >
                        {showAllNews ? 'Show Less' : t('viewAllNews')}
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedNews.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-white/90 text-black hover:bg-white">
                                            {item.category}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-black mb-3">
                                        <Calendar className="w-4 h-4" />
                                        <span>
                                            {new Date(item.date).toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-black mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-black text-sm line-clamp-2 mb-4">
                                        {item.excerpt}
                                    </p>

                                    <button
                                        onClick={() => setSelectedNews(item)}
                                        className="inline-flex items-center gap-1 text-red-700 font-medium text-sm hover:gap-2 transition-all"
                                    >
                                        {t('readMore')}
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* News Detail Modal */}
                <AnimatePresence>
                    {selectedNews && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedNews(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={selectedNews.image}
                                        alt={selectedNews.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        onClick={() => setSelectedNews(null)}
                                        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <X className="w-5 h-5 text-black" />
                                    </button>
                                    <div className="absolute bottom-4 left-4">
                                        <Badge className="bg-white/90 text-black">
                                            {selectedNews.category}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Modal Content */}
                                <div className="p-8">
                                    <div className="flex items-center gap-2 text-sm text-black mb-4">
                                        <Calendar className="w-4 h-4" />
                                        <span>
                                            {new Date(selectedNews.date).toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl font-bold text-black mb-6">
                                        {selectedNews.title}
                                    </h2>

                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-black leading-relaxed whitespace-pre-line">
                                            {selectedNews.fullContent}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Quick Links Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl"
                >
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {[
                            { key: 'circulars', en: 'Circulars', route: 'Circulars' },
                            { key: 'tenders', en: 'Tenders', route: 'Tenders' },
                            { key: 'recruitment', en: 'Recruitment', route: 'Recruitment' },
                            { key: 'results', en: 'Results', route: 'Results' },
                            { key: 'downloads', en: 'Downloads', route: 'Downloads' }
                        ].map((item) => (
                            <a
                                key={item.key}
                                href={createPageUrl(item.route)}
                                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-md transition-all group"
                            >
                                <span className="font-medium text-black group-hover:text-red-700">{t(item.key)}</span>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
