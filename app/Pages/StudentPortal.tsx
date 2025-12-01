// app/Pages/StudentPortal.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, BookOpen, Calendar, Award, FileText, Bell, Settings,
    Clock, ChevronRight, Download, CreditCard, MessageSquare,
    GraduationCap, BarChart3, CheckCircle, AlertCircle, X, MapPin, Users as UsersIcon
} from 'lucide-react';

// UI Components with TypeScript
const Button = ({
    children,
    variant = 'default',
    size = 'default',
    className = '',
    ...props
}: {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'ghost' | 'destructive';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    className?: string;
    [key: string]: any;
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variants = {
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        outline: 'border border-gray-300 bg-white text-black hover:bg-gray-50',
        ghost: 'hover:bg-gray-100 text-black',
        destructive: 'bg-red-600 text-white hover:bg-red-700'
    };
    const sizes = {
        default: 'px-4 py-2 text-sm',
        sm: 'px-3 py-1.5 text-xs',
        lg: 'px-6 py-3 text-base',
        icon: 'w-10 h-10'
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

const Badge = ({
    children,
    variant = 'default',
    className = ''
}: {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'secondary' | 'destructive';
    className?: string;
}) => {
    const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
    const variants = {
        default: 'bg-gray-100 text-black',
        outline: 'border border-gray-300 text-black',
        secondary: 'bg-purple-100 text-purple-700',
        destructive: 'bg-red-100 text-red-700'
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
        {children}
    </div>
);

const CardHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`p-6 pb-4 ${className}`}>
        {children}
    </div>
);

const CardTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <h3 className={`text-lg font-semibold leading-none tracking-tight text-black hover:text-red-700 transition-colors ${className}`}>
        {children}
    </h3>
);

const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`p-6 pt-0 ${className}`}>
        {children}
    </div>
);

const Progress = ({ value, className = '' }: { value: number; className?: string }) => (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
        <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${value}%` }}
        />
    </div>
);

// Data Types
type CourseType = {
    code: string;
    name: string;
    credits: number;
    grade: string;
    attendance: number;
    instructor: string;
    schedule: string;
    room: string;
    description: string;
    topics: string[];
    assignments: Array<{
        name: string;
        due: string;
        status: string;
        score: string;
    }>;
    gradesBreakdown: Array<{
        component: string;
        weightage: string;
        score: string;
    }>;
};

// Data
const studentData = {
    name: 'Priya Sharma',
    rollNo: 'GU2024CS001',
    program: 'B.Sc. Computer Science',
    semester: '4th Semester',
    cgpa: 8.7,
    attendance: 85,
    avatar: 'PS'
};

const upcomingClasses = [
    { subject: 'Data Structures', time: '9:00 AM', room: 'CS-101', faculty: 'Dr. A. Sarma' },
    { subject: 'Database Systems', time: '11:00 AM', room: 'CS-103', faculty: 'Prof. R. Hazarika' },
    { subject: 'Computer Networks', time: '2:00 PM', room: 'CS-102', faculty: 'Dr. M. Das' }
];

const notifications = [
    { type: 'warning', message: 'Assignment deadline: Data Structures - Tomorrow', time: '2 hours ago' },
    { type: 'info', message: 'Mid-semester exam schedule released', time: '1 day ago' },
    { type: 'success', message: 'Fee payment confirmed for Semester 4', time: '3 days ago' }
];

const courses: CourseType[] = [
    {
        code: 'CS401',
        name: 'Data Structures & Algorithms',
        credits: 4,
        grade: 'A',
        attendance: 88,
        instructor: 'Dr. A. Sarma',
        schedule: 'Mon, Wed, Fri - 9:00 AM to 10:00 AM',
        room: 'CS-101',
        description: 'This course covers fundamental data structures and algorithms including arrays, linked lists, stacks, queues, trees, graphs, sorting and searching algorithms with practical implementations.',
        topics: [
            'Arrays and Linked Lists',
            'Stacks and Queues',
            'Trees and Binary Search Trees',
            'Graphs and Graph Algorithms',
            'Sorting Algorithms (Quick, Merge, Heap)',
            'Searching Algorithms',
            'Dynamic Programming',
            'Greedy Algorithms'
        ],
        assignments: [
            { name: 'Assignment 1: Arrays & Linked Lists', due: 'Feb 15, 2025', status: 'Submitted', score: '95/100' },
            { name: 'Assignment 2: Trees Implementation', due: 'Mar 10, 2025', status: 'Pending', score: '-' },
            { name: 'Project: Graph Algorithms', due: 'Apr 20, 2025', status: 'Not Started', score: '-' }
        ],
        gradesBreakdown: [
            { component: 'Assignments (3)', weightage: '30%', score: '28/30' },
            { component: 'Mid-term Exam', weightage: '30%', score: '27/30' },
            { component: 'Final Exam', weightage: '40%', score: 'Pending' }
        ]
    },
    {
        code: 'CS402',
        name: 'Database Management Systems',
        credits: 4,
        grade: 'A-',
        attendance: 82,
        instructor: 'Prof. R. Hazarika',
        schedule: 'Tue, Thu - 11:00 AM to 12:30 PM',
        room: 'CS-103',
        description: 'Comprehensive study of database systems covering SQL, normalization, transaction management, concurrency control, and modern database technologies including NoSQL.',
        topics: [
            'Relational Database Design',
            'SQL and Query Optimization',
            'Normalization (1NF to BCNF)',
            'Transaction Management',
            'Concurrency Control',
            'Database Security',
            'NoSQL Databases',
            'Distributed Databases'
        ],
        assignments: [
            { name: 'Lab 1: SQL Queries', due: 'Feb 20, 2025', status: 'Submitted', score: '90/100' },
            { name: 'Lab 2: Database Design & Normalization', due: 'Mar 15, 2025', status: 'Submitted', score: '85/100' },
            { name: 'Project: E-commerce Database System', due: 'Apr 25, 2025', status: 'In Progress', score: '-' }
        ],
        gradesBreakdown: [
            { component: 'Labs (5)', weightage: '25%', score: '22/25' },
            { component: 'Mid-term Exam', weightage: '35%', score: '29/35' },
            { component: 'Final Project', weightage: '40%', score: 'Pending' }
        ]
    },
    {
        code: 'CS403',
        name: 'Computer Networks',
        credits: 3,
        grade: 'B+',
        attendance: 90,
        instructor: 'Dr. M. Das',
        schedule: 'Mon, Wed - 2:00 PM to 3:30 PM',
        room: 'CS-102',
        description: 'Introduction to computer networking concepts, protocols, network architecture, routing algorithms, and internet technologies with hands-on labs.',
        topics: [
            'Network Fundamentals & Topologies',
            'OSI and TCP/IP Models',
            'Network Protocols (HTTP, FTP, SMTP)',
            'Routing Algorithms (Dijkstra, Bellman-Ford)',
            'Transport Layer (TCP/UDP)',
            'Application Layer Services',
            'Network Security Basics',
            'Wireless & Mobile Networks'
        ],
        assignments: [
            { name: 'Assignment 1: Protocol Analysis', due: 'Feb 18, 2025', status: 'Submitted', score: '88/100' },
            { name: 'Lab: Network Simulation (Packet Tracer)', due: 'Mar 12, 2025', status: 'Submitted', score: '80/100' },
            { name: 'Project: Campus Network Design', due: 'Apr 15, 2025', status: 'Pending', score: '-' }
        ],
        gradesBreakdown: [
            { component: 'Assignments & Labs', weightage: '30%', score: '25/30' },
            { component: 'Mid-term Exam', weightage: '30%', score: '24/30' },
            { component: 'Final Exam', weightage: '40%', score: 'Pending' }
        ]
    },
    {
        code: 'CS404',
        name: 'Operating Systems',
        credits: 4,
        grade: 'A',
        attendance: 85,
        instructor: 'Prof. S. Bora',
        schedule: 'Tue, Thu, Fri - 10:00 AM to 11:00 AM',
        room: 'CS-201',
        description: 'Comprehensive study of operating system concepts including process management, memory management, file systems, deadlocks, and system security.',
        topics: [
            'Process Management & Synchronization',
            'CPU Scheduling Algorithms',
            'Deadlock Detection & Avoidance',
            'Memory Management Techniques',
            'Virtual Memory & Paging',
            'File Systems & Directory Structure',
            'I/O Systems & Device Management',
            'Security and Protection Mechanisms'
        ],
        assignments: [
            { name: 'Assignment 1: Process Scheduling Simulator', due: 'Feb 22, 2025', status: 'Submitted', score: '92/100' },
            { name: 'Lab: Shell Programming in Linux', due: 'Mar 18, 2025', status: 'Submitted', score: '95/100' },
            { name: 'Project: Custom CPU Scheduler', due: 'Apr 28, 2025', status: 'Not Started', score: '-' }
        ],
        gradesBreakdown: [
            { component: 'Assignments (3)', weightage: '25%', score: '24/25' },
            { component: 'Mid-term Exam', weightage: '35%', score: '32/35' },
            { component: 'Final Exam', weightage: '40%', score: 'Pending' }
        ]
    },
    {
        code: 'GE401',
        name: 'Environmental Studies',
        credits: 2,
        grade: 'A-',
        attendance: 78,
        instructor: 'Dr. P. Goswami',
        schedule: 'Wed - 3:00 PM to 5:00 PM',
        room: 'GE-105',
        description: 'Introduction to environmental science covering ecosystem dynamics, sustainability practices, climate change impacts, and environmental conservation strategies.',
        topics: [
            'Ecosystem and Biodiversity',
            'Natural Resources Management',
            'Environmental Pollution & Control',
            'Climate Change & Global Warming',
            'Sustainable Development Goals',
            'Environmental Policies & Laws',
            'Waste Management Strategies',
            'Conservation & Restoration'
        ],
        assignments: [
            { name: 'Report: Local Ecosystem Assessment', due: 'Mar 5, 2025', status: 'Submitted', score: '85/100' },
            { name: 'Presentation: Sustainability Project', due: 'Apr 10, 2025', status: 'Pending', score: '-' }
        ],
        gradesBreakdown: [
            { component: 'Assignments & Reports', weightage: '40%', score: '34/40' },
            { component: 'Mid-term Exam', weightage: '30%', score: '26/30' },
            { component: 'Final Exam', weightage: '30%', score: 'Pending' }
        ]
    }
];

const quickLinks = [
    { icon: FileText, label: 'Exam Results', href: '#' },
    { icon: CreditCard, label: 'Pay Fees', href: '#' },
    { icon: Download, label: 'Download ID Card', href: '#' },
    { icon: Calendar, label: 'Academic Calendar', href: '#' },
    { icon: BookOpen, label: 'Library', href: '#' },
    { icon: MessageSquare, label: 'Support', href: '#' }
];

export default function StudentPortal() {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openCourseDetails = (course: CourseType) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedCourse(null), 300);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-2 border border-white/20 overflow-hidden">
                                <img
                                    src="/gu-logo.png"
                                    alt="Gauhati University Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">{studentData.name}</h1>
                                <p className="text-blue-200">{studentData.rollNo}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <Badge className="bg-white/20 text-white border-0">{studentData.program}</Badge>
                                    <Badge className="bg-amber-500 text-white border-0">{studentData.semester}</Badge>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 border-0">
                                <Bell className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 border-0">
                                <Settings className="w-5 h-5" />
                            </Button>
                            <Button className="bg-white text-blue-900 hover:bg-gray-100">
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Stats */}
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-black">Academic Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>CGPA</span>
                                        <span className="font-bold text-emerald-600">{studentData.cgpa}/10</span>
                                    </div>
                                    <Progress value={studentData.cgpa * 10} className="h-2" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Attendance</span>
                                        <span className="font-bold text-blue-600">{studentData.attendance}%</span>
                                    </div>
                                    <Progress value={studentData.attendance} className="h-2" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Links */}
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-black">Quick Links</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-2">
                                {quickLinks.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-gray-50 transition-colors text-center"
                                        >
                                            <Icon className="w-5 h-5 text-blue-600" />
                                            <span className="text-xs text-black">{link.label}</span>
                                        </a>
                                    );
                                })}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Area */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Today's Schedule */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-blue-600" />
                                        Today's Schedule
                                    </CardTitle>
                                    <Badge variant="outline">January 15, 2025</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {upcomingClasses.map((cls, index) => (
                                        <motion.div
                                            key={cls.subject}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100"
                                        >
                                            <div className="flex items-center gap-2 text-blue-600 text-sm mb-2">
                                                <Clock className="w-4 h-4" />
                                                {cls.time}
                                            </div>
                                            <h4 className="font-semibold text-black hover:text-red-700 transition-colors cursor-default mb-1">{cls.subject}</h4>
                                            <p className="text-sm text-black">{cls.room} • {cls.faculty}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Notifications */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Bell className="w-5 h-5 text-amber-600" />
                                    Recent Notifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {notifications.map((notif, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-start gap-3 p-3 rounded-lg ${notif.type === 'warning' ? 'bg-amber-50 border border-amber-100' :
                                                    notif.type === 'success' ? 'bg-emerald-50 border border-emerald-100' :
                                                        'bg-blue-50 border border-blue-100'
                                                }`}
                                        >
                                            {notif.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />}
                                            {notif.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
                                            {notif.type === 'info' && <Bell className="w-5 h-5 text-blue-600 flex-shrink-0" />}
                                            <div className="flex-1">
                                                <p className="text-sm text-black">{notif.message}</p>
                                                <p className="text-xs text-black mt-1">{notif.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Courses */}
                        <Card className="group">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-black hover:text-red-700 transition-colors duration-300 cursor-default">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                        <BookOpen className="w-5 h-5 text-purple-600 group-hover:text-red-700 transition-colors duration-300" />
                                    </motion.div>
                                    Current Courses
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left py-3 px-4 text-sm font-medium text-black">Code</th>
                                                <th className="text-left py-3 px-4 text-sm font-medium text-black">Course Name</th>
                                                <th className="text-center py-3 px-4 text-sm font-medium text-black">Credits</th>
                                                <th className="text-center py-3 px-4 text-sm font-medium text-black">Attendance</th>
                                                <th className="text-center py-3 px-4 text-sm font-medium text-black">Grade</th>
                                                <th className="text-right py-3 px-4 text-sm font-medium text-black">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courses.map((course) => (
                                                <tr key={course.code} className="border-b last:border-0 hover:bg-gray-50 group/row cursor-pointer transition-all">
                                                    <td className="py-3 px-4 font-medium text-black group-hover/row:text-red-700 transition-colors duration-300">{course.code}</td>
                                                    <td className="py-3 px-4 text-black group-hover/row:text-red-700 transition-colors duration-300 font-medium">{course.name}</td>
                                                    <td className="py-3 px-4 text-center text-black group-hover/row:text-red-700 transition-colors duration-300">{course.credits}</td>
                                                    <td className="py-3 px-4 text-center">
                                                        <Badge variant={course.attendance >= 75 ? 'default' : 'destructive'} className={course.attendance >= 75 ? 'bg-emerald-100 text-emerald-700 group-hover/row:bg-red-100 group-hover/row:text-red-700 transition-colors duration-300' : 'group-hover/row:bg-red-100 group-hover/row:text-red-700 transition-colors duration-300'}>
                                                            {course.attendance}%
                                                        </Badge>
                                                    </td>
                                                    <td className="py-3 px-4 text-center">
                                                        <Badge className="bg-blue-100 text-blue-700 group-hover/row:bg-red-100 group-hover/row:text-red-700 transition-colors duration-300">{course.grade}</Badge>
                                                    </td>
                                                    <td className="py-3 px-4 text-right">
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="gap-1 text-black group-hover/row:text-red-700 transition-colors duration-300"
                                                            onClick={() => openCourseDetails(course)}
                                                        >
                                                            <span>View</span>
                                                            <motion.div className="inline-flex">
                                                                <ChevronRight className="w-4 h-4" />
                                                            </motion.div>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Course Details Modal */}
            <AnimatePresence>
                {isModalOpen && selectedCourse && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50"
                            onClick={closeModal}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="fixed inset-0 z-50 overflow-y-auto"
                        >
                            <div className="flex min-h-full items-center justify-center p-4">
                                <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                                    {/* Modal Header */}
                                    <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-t-2xl">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Badge className="bg-white/20 text-white border-0">{selectedCourse.code}</Badge>
                                                    <Badge className="bg-amber-500 text-white border-0">{selectedCourse.credits} Credits</Badge>
                                                </div>
                                                <h2 className="text-2xl font-bold mb-2">{selectedCourse.name}</h2>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100">
                                                    <div className="flex items-center gap-2">
                                                        <UsersIcon className="w-4 h-4" />
                                                        <span>{selectedCourse.instructor}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{selectedCourse.schedule}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{selectedCourse.room}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={closeModal}
                                                className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                                            >
                                                <X className="w-6 h-6" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Modal Content */}
                                    <div className="p-6 space-y-6">
                                        {/* Overview Stats */}
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                                                <p className="text-sm text-emerald-600 font-medium mb-1">Current Grade</p>
                                                <p className="text-3xl font-bold text-emerald-700">{selectedCourse.grade}</p>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                                <p className="text-sm text-blue-600 font-medium mb-1">Attendance</p>
                                                <p className="text-3xl font-bold text-blue-700">{selectedCourse.attendance}%</p>
                                            </div>
                                            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                                                <p className="text-sm text-purple-600 font-medium mb-1">Credits</p>
                                                <p className="text-3xl font-bold text-purple-700">{selectedCourse.credits}</p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div>
                                            <h3 className="text-lg font-bold text-black mb-3">Course Description</h3>
                                            <p className="text-black leading-relaxed">{selectedCourse.description}</p>
                                        </div>

                                        {/* Topics Covered */}
                                        <div>
                                            <h3 className="text-lg font-bold text-black mb-3">Topics Covered</h3>
                                            <div className="grid grid-cols-2 gap-3">
                                                {selectedCourse.topics.map((topic, index) => (
                                                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                                                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                                        <span className="text-sm text-black">{topic}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Assignments */}
                                        <div>
                                            <h3 className="text-lg font-bold text-black mb-3">Assignments & Projects</h3>
                                            <div className="space-y-3">
                                                {selectedCourse.assignments.map((assignment, index) => (
                                                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                                                        <div className="flex items-start justify-between mb-2">
                                                            <h4 className="font-semibold text-black">{assignment.name}</h4>
                                                            <Badge
                                                                variant={assignment.status === 'Submitted' ? 'default' : assignment.status === 'In Progress' ? 'secondary' : 'outline'}
                                                                className={
                                                                    assignment.status === 'Submitted' ? 'bg-green-100 text-green-700' :
                                                                        assignment.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                                                                            'bg-gray-100 text-black'
                                                                }
                                                            >
                                                                {assignment.status}
                                                            </Badge>
                                                        </div>
                                                        <div className="flex items-center justify-between text-sm text-black">
                                                            <span>Due: {assignment.due}</span>
                                                            <span className="font-medium">Score: {assignment.score}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Grades Breakdown */}
                                        <div>
                                            <h3 className="text-lg font-bold text-black mb-3">Grades Breakdown</h3>
                                            <div className="overflow-x-auto">
                                                <table className="w-full">
                                                    <thead>
                                                        <tr className="border-b">
                                                            <th className="text-left py-3 px-4 text-sm font-medium text-black">Component</th>
                                                            <th className="text-center py-3 px-4 text-sm font-medium text-black">Weightage</th>
                                                            <th className="text-right py-3 px-4 text-sm font-medium text-black">Score</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {selectedCourse.gradesBreakdown.map((item, index) => (
                                                            <tr key={index} className="border-b last:border-0">
                                                                <td className="py-3 px-4 text-black">{item.component}</td>
                                                                <td className="py-3 px-4 text-center text-black">{item.weightage}</td>
                                                                <td className="py-3 px-4 text-right font-semibold text-black">{item.score}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modal Footer */}
                                    <div className="sticky bottom-0 bg-gray-50 px-6 py-4 rounded-b-2xl border-t border-gray-200 flex justify-end gap-3">
                                        <Button variant="outline" onClick={closeModal}>
                                            Close
                                        </Button>
                                        <Button className="bg-blue-600 hover:bg-blue-700">
                                            Download Syllabus
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}