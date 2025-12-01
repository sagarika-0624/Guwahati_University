'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Users, ChevronRight, Filter, ChevronDown, X, BookOpen, IndianRupee, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { createPageUrl } from '@/lib/utils';

// Department Data Interface
interface CourseDetail {
    name: string;
    duration: string;
    seats: number;
    fees: string;
    eligibility: string;
}

interface Department {
    id: string;
    name: string;
    category: string;
    image: string;
    established: string;
    facultyCount: number;
    degrees: string[];
    highlights: string[];
    hod: string;
    description: string;
    courses: CourseDetail[];
}

// Extended Data
const departments: Department[] = [
    // Science
    {
        id: 'physics',
        name: 'Department of Physics',
        category: 'Science',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
        established: '1948',
        facultyCount: 22,
        degrees: ['B.Sc', 'M.Sc', 'Ph.D'],
        highlights: ['Nuclear Physics Lab', 'ISRO Collaboration'],
        hod: 'Prof. Nirmali Gogoi',
        description: 'The Department of Physics is one of the oldest and most prestigious departments, known for its pioneering research in Nuclear Physics, Condensed Matter Physics, and Astrophysics.',
        courses: [
            { name: 'M.Sc in Physics', duration: '2 Years', seats: 50, fees: '₹12,000/sem', eligibility: 'B.Sc with Physics (Major)' },
            { name: 'Ph.D in Physics', duration: '3-5 Years', seats: 15, fees: '₹8,000/year', eligibility: 'M.Sc in Physics with 55%' }
        ]
    },
    {
        id: 'chemistry',
        name: 'Department of Chemistry',
        category: 'Science',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
        established: '1955',
        facultyCount: 20,
        degrees: ['M.Sc', 'Ph.D'],
        highlights: ['Advanced Materials Lab', 'Green Chemistry'],
        hod: 'Prof. S. K. Das',
        description: 'Fostering innovation in chemical sciences with state-of-the-art laboratories and research facilities focusing on sustainable chemistry.',
        courses: [
            { name: 'M.Sc in Chemistry', duration: '2 Years', seats: 45, fees: '₹14,000/sem', eligibility: 'B.Sc with Chemistry' }
        ]
    },
    // Technology
    {
        id: 'cs',
        name: 'Department of Computer Science',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
        established: '1985',
        facultyCount: 18,
        degrees: ['M.Sc', 'M.Tech', 'Ph.D'],
        highlights: ['AI Research Center', 'Industry Partnerships'],
        hod: 'Dr. Arunabh Sarma',
        description: 'Leading the way in computing education with focus on Artificial Intelligence, Data Science, and Network Security.',
        courses: [
            { name: 'M.Sc IT', duration: '2 Years', seats: 40, fees: '₹25,000/sem', eligibility: 'B.Sc/BCA' },
            { name: 'M.Tech IT', duration: '2 Years', seats: 20, fees: '₹35,000/sem', eligibility: 'B.E/B.Tech/M.Sc' }
        ]
    },
    {
        id: 'electronics',
        name: 'Department of Electronics & Communication',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
        established: '2009',
        facultyCount: 12,
        degrees: ['B.Tech', 'M.Tech', 'Ph.D'],
        highlights: ['VLSI Lab', 'Signal Processing'],
        hod: 'Prof. K. Kandali',
        description: 'Focusing on cutting-edge technologies in electronics, communication systems, and signal processing.',
        courses: [
            { name: 'B.Tech ECE', duration: '4 Years', seats: 60, fees: '₹45,000/sem', eligibility: '10+2 with PCM' }
        ]
    },
    // Arts
    {
        id: 'english',
        name: 'Department of English',
        category: 'Arts',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
        established: '1948',
        facultyCount: 15,
        degrees: ['M.A', 'Ph.D'],
        highlights: ['Literary Journal', 'Creative Writing'],
        hod: 'Dr. Pranjal Deka',
        description: 'A hub for literary studies, critical thinking, and creative expression, exploring diverse literary traditions.',
        courses: [
            { name: 'M.A in English', duration: '2 Years', seats: 60, fees: '₹8,000/sem', eligibility: 'B.A with English' }
        ]
    },
    {
        id: 'assamese',
        name: 'Department of Assamese',
        category: 'Arts',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80',
        established: '1948',
        facultyCount: 14,
        degrees: ['M.A', 'Ph.D', 'Diploma'],
        highlights: ['Manuscript Conservation', 'Folk Studies'],
        hod: 'Prof. K. D. Goswami',
        description: 'Dedicated to the preservation and advancement of Assamese language, literature, and culture.',
        courses: [
            { name: 'M.A in Assamese', duration: '2 Years', seats: 70, fees: '₹6,000/sem', eligibility: 'B.A with Assamese' }
        ]
    },
    // Commerce & Management
    {
        id: 'commerce',
        name: 'Department of Commerce',
        category: 'Commerce & Management',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
        established: '1948',
        facultyCount: 16,
        degrees: ['M.Com', 'Ph.D'],
        highlights: ['Finance Lab', 'Entrepreneurship Cell'],
        hod: 'Prof. A. Bhuyan',
        description: 'Shaping future business leaders with rigorous training in finance, accounting, and business strategy.',
        courses: [
            { name: 'M.Com', duration: '2 Years', seats: 60, fees: '₹10,000/sem', eligibility: 'B.Com' }
        ]
    },
    {
        id: 'mba',
        name: 'Department of Business Administration',
        category: 'Commerce & Management',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        established: '1978',
        facultyCount: 12,
        degrees: ['MBA', 'Ph.D'],
        highlights: ['Case Study Method', 'Corporate Interface'],
        hod: 'Prof. M. Kakati',
        description: 'Offering premier management education with a focus on leadership, innovation, and global business trends.',
        courses: [
            { name: 'MBA', duration: '2 Years', seats: 40, fees: '₹75,000/sem', eligibility: 'Graduate + CAT/MAT' }
        ]
    },
    // Law
    {
        id: 'law',
        name: 'Department of Law',
        category: 'Law',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80',
        established: '1976',
        facultyCount: 10,
        degrees: ['LL.M', 'Ph.D'],
        highlights: ['Moot Court', 'Legal Aid Clinic'],
        hod: 'Prof. S. Rajkhowa',
        description: 'Promoting legal excellence and justice through comprehensive legal education and research.',
        courses: [
            { name: 'LL.M', duration: '2 Years', seats: 30, fees: '₹15,000/sem', eligibility: 'LL.B' }
        ]
    },
    // Medicine & Allied Health
    {
        id: 'biotech',
        name: 'Department of Biotechnology',
        category: 'Medicine & Allied Health',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
        established: '1995',
        facultyCount: 11,
        degrees: ['M.Sc', 'Ph.D'],
        highlights: ['Tissue Culture Lab', 'Genomics'],
        hod: 'Prof. M. C. Kalita',
        description: 'Interdisciplinary research and teaching in biotechnology, focusing on health, agriculture, and environment.',
        courses: [
            { name: 'M.Sc Biotechnology', duration: '2 Years', seats: 25, fees: '₹30,000/sem', eligibility: 'B.Sc Biotech/Life Sciences' }
        ]
    }
];

const categories = ['All Faculties', 'Science', 'Arts', 'Technology', 'Commerce & Management', 'Law', 'Medicine & Allied Health'];

export default function Departments() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Faculties');
    const [selectedDept, setSelectedDept] = useState<Department | null>(null);

    const filteredDepartments = departments.filter(dept => {
        const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dept.hod.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All Faculties' || dept.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="relative bg-[#7f1d1d] py-20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-amber-500 text-white text-sm font-bold rounded-full mb-6 shadow-lg">
                            {departments.length}+ Departments
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Academic Departments
                        </h1>
                        <p className="text-lg text-red-100 max-w-2xl mx-auto font-light">
                            Explore our diverse range of departments offering world-class education
                            and research opportunities
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                            <input
                                type="text"
                                placeholder="Search departments, faculty..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-black placeholder:text-gray-600"
                            />
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="relative w-full md:w-64">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full appearance-none pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 cursor-pointer text-black"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat} className="text-black">{cat}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                            </div>
                            <span className="text-sm text-black whitespace-nowrap hidden md:block">
                                Showing {filteredDepartments.length} departments
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Departments Grid */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDepartments.map((dept, index) => (
                        <motion.div
                            key={dept.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            {/* Card Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={dept.image}
                                    alt={dept.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-black rounded-md shadow-sm">
                                        {dept.category}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-red-700 transition-colors">
                                    {dept.name}
                                </h3>

                                {/* Metadata */}
                                <div className="flex items-center gap-6 text-sm text-black mb-6">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" />
                                        <span>Est. {dept.established}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Users className="w-4 h-4" />
                                        <span>{dept.facultyCount} Faculty</span>
                                    </div>
                                </div>

                                {/* Degrees */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {dept.degrees.map(degree => (
                                        <span
                                            key={degree}
                                            className="px-2.5 py-1 text-xs font-medium text-red-700 bg-red-50 border border-red-100 rounded-md"
                                        >
                                            {degree}
                                        </span>
                                    ))}
                                </div>

                                {/* Highlights */}
                                <div className="space-y-2 mb-8">
                                    {dept.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-black">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-black mb-0.5">Head of Department</p>
                                        <p className="text-sm font-semibold text-black">{dept.hod}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedDept(dept)}
                                        className="flex items-center gap-1 text-sm font-medium text-red-700 hover:text-red-800 transition-colors group/btn"
                                    >
                                        View Details
                                        <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Department Details Modal */}
            <AnimatePresence>
                {selectedDept && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedDept(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                        >
                            {/* Modal Header */}
                            <div className="relative h-48 md:h-64">
                                <img
                                    src={selectedDept.image}
                                    alt={selectedDept.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <button
                                    onClick={() => setSelectedDept(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-sm"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="absolute bottom-6 left-6 md:left-8 text-white">
                                    <span className="px-3 py-1 bg-amber-500 text-xs font-bold rounded-md mb-3 inline-block">
                                        {selectedDept.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedDept.name}</h2>
                                    <p className="text-white/80 flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        Head: {selectedDept.hod}
                                    </p>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 md:p-8">
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-red-700" />
                                        About the Department
                                    </h3>
                                    <p className="text-black leading-relaxed">
                                        {selectedDept.description}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                        <h4 className="font-semibold text-black mb-4 flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            Key Highlights
                                        </h4>
                                        <ul className="space-y-3">
                                            {selectedDept.highlights.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-black text-sm">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                        <h4 className="font-semibold text-black mb-4 flex items-center gap-2">
                                            <GraduationCap className="w-4 h-4 text-blue-600" />
                                            Programs Offered
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedDept.degrees.map(degree => (
                                                <span key={degree} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-black shadow-sm">
                                                    {degree}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Courses Table */}
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-red-700" />
                                        Course Structure & Details
                                    </h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-gray-50 text-black font-semibold border-b border-gray-200">
                                                <tr>
                                                    <th className="px-4 py-3 rounded-tl-lg">Course Name</th>
                                                    <th className="px-4 py-3">Duration</th>
                                                    <th className="px-4 py-3">Seats</th>
                                                    <th className="px-4 py-3">Fees</th>
                                                    <th className="px-4 py-3 rounded-tr-lg">Eligibility</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {selectedDept.courses.map((course, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="px-4 py-3 font-medium text-black">{course.name}</td>
                                                        <td className="px-4 py-3 text-black">{course.duration}</td>
                                                        <td className="px-4 py-3 text-black">{course.seats}</td>
                                                        <td className="px-4 py-3 text-black font-medium text-green-700">{course.fees}</td>
                                                        <td className="px-4 py-3 text-black">{course.eligibility}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                                <button
                                    onClick={() => setSelectedDept(null)}
                                    className="px-4 py-2 text-black hover:text-black font-medium transition-colors"
                                >
                                    Close
                                </button>
                                <a href={createPageUrl('AdmissionPortal')}>
                                    <button className="px-6 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg font-medium shadow-sm transition-colors">
                                        Apply Now
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
