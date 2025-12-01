'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Download, BookOpen, ChevronRight, Filter } from 'lucide-react';

// Syllabus Data Interface
interface SyllabusItem {
    id: string;
    courseName: string;
    department: string;
    level: 'Undergraduate' | 'Postgraduate' | 'PhD' | 'Diploma';
    semester: string;
    year: string;
    fileSize: string;
}

const syllabusData: SyllabusItem[] = [
    { id: '1', courseName: 'B.Sc Physics (Honours)', department: 'Physics', level: 'Undergraduate', semester: '1st & 2nd', year: '2024', fileSize: '2.4 MB' },
    { id: '2', courseName: 'M.Sc Chemistry', department: 'Chemistry', level: 'Postgraduate', semester: 'All Semesters', year: '2023', fileSize: '3.1 MB' },
    { id: '3', courseName: 'B.A English', department: 'English', level: 'Undergraduate', semester: '3rd & 4th', year: '2024', fileSize: '1.8 MB' },
    { id: '4', courseName: 'M.Tech Computer Science', department: 'Computer Science', level: 'Postgraduate', semester: '1st', year: '2025', fileSize: '2.2 MB' },
    { id: '5', courseName: 'PhD Coursework - Research Methodology', department: 'All Departments', level: 'PhD', semester: 'N/A', year: '2023', fileSize: '1.5 MB' },
    { id: '6', courseName: 'MBA Core Syllabus', department: 'Business Administration', level: 'Postgraduate', semester: '1st Year', year: '2024', fileSize: '4.5 MB' },
    { id: '7', courseName: 'B.Tech ECE', department: 'Electronics & Communication', level: 'Undergraduate', semester: '5th & 6th', year: '2024', fileSize: '3.0 MB' },
    { id: '8', courseName: 'M.A Assamese', department: 'Assamese', level: 'Postgraduate', semester: 'All Semesters', year: '2022', fileSize: '2.1 MB' },
];

const levels = ['All Levels', 'Undergraduate', 'Postgraduate', 'PhD', 'Diploma'];

export default function Syllabus() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('All Levels');

    const filteredSyllabus = syllabusData.filter(item => {
        const matchesSearch = item.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.department.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel = selectedLevel === 'All Levels' || item.level === selectedLevel;
        return matchesSearch && matchesLevel;
    });

    const handleDownload = (item: SyllabusItem) => {
        // Simulate file download
        const content = `Syllabus for ${item.courseName}\nDepartment: ${item.department}\nLevel: ${item.level}\nSemester: ${item.semester}\nYear: ${item.year}\n\nThis is a dummy syllabus file for demonstration purposes.`;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${item.courseName.replace(/\s+/g, '_')}_Syllabus.txt`); // Downloading as .txt for demo, normally .pdf
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="relative bg-[#7f1d1d] py-20 overflow-hidden">
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
                            Academic Resources
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Syllabus & Curriculum
                        </h1>
                        <p className="text-lg text-red-100 max-w-2xl mx-auto font-light">
                            Access detailed course structures, reading lists, and examination patterns for all programs
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
                                placeholder="Search by course or department..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                            />
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                                {levels.map(level => (
                                    <button
                                        key={level}
                                        onClick={() => setSelectedLevel(level)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedLevel === level
                                            ? 'bg-red-700 text-white shadow-md'
                                            : 'bg-white border border-gray-200 text-black hover:bg-gray-50'
                                            }`}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Syllabus List */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid gap-4">
                    {filteredSyllabus.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all group flex flex-col md:flex-row md:items-center justify-between gap-4"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-6 h-6 text-red-700" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black group-hover:text-red-700 transition-colors">
                                        {item.courseName}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-black mt-1">
                                        <span className="flex items-center gap-1">
                                            <BookOpen className="w-3.5 h-3.5" />
                                            {item.department}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                                        <span>{item.level}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                                        <span>Sem: {item.semester}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                                        <span className="text-amber-600 font-medium">Updated: {item.year}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pl-16 md:pl-0">
                                <div className="text-right hidden md:block">
                                    <p className="text-xs text-black">PDF • {item.fileSize}</p>
                                </div>
                                <button
                                    onClick={() => handleDownload(item)}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-red-50 text-black hover:text-red-700 rounded-lg font-medium transition-colors border border-gray-200 hover:border-red-200"
                                >
                                    <Download className="w-4 h-4" />
                                    Download
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredSyllabus.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-lg font-medium text-black">No syllabus found</h3>
                        <p className="text-black">Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
        </div>
    );
}
