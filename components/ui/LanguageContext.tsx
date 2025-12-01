import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
    en: {
        // Header & Navigation
        home: 'Home',
        academics: 'Academics',
        research: 'Research',
        admissions: 'Admissions',
        portals: 'Portals',
        campusLife: 'Campus Life',
        culturalHeritage: 'Cultural Heritage',
        login: 'Login',
        search: 'Search',
        departments: 'Departments',
        programs: 'Programs',
        facultyDirectory: 'Faculty Directory',
        academicCalendar: 'Academic Calendar',
        syllabus: 'Syllabus',
        researchCenters: 'Research Centers',
        publications: 'Publications',
        journalsPortal: 'Journals Portal',
        projects: 'Projects',
        ugPrograms: 'UG Programs',
        pgPrograms: 'PG Programs',
        phdAdmissions: 'PhD Admissions',
        internationalStudents: 'International Students',
        feeStructure: 'Fee Structure',
        mmtcPortal: 'MMTC Portal',
        gucdoe: 'GUCDOE',
        admissionPortal: 'Admission Portal',
        studentPortal: 'Student Portal',

        // Hero Section
        excellenceWithHeritage: 'Excellence with Heritage',
        heroSubtitle: 'Where Academic Innovation Meets Assamese Cultural Pride',
        researchThatMatters: 'Research That Matters',
        researchSubtitle: 'Leading groundbreaking research in Northeast India since 1948',
        shapeYourFuture: 'Shape Your Future',
        futureSubtitle: 'Join 25,000+ students in their journey to excellence',
        explorePrograms: 'Explore Programs',
        viewResearch: 'View Research',
        applyNow: 'Apply Now',
        virtualTour: 'Virtual Tour',

        // Stats
        naacAccredited: 'NAAC A+',
        accredited: 'Accredited',
        students: 'Students',
        globalPartners: 'Global Partners',
        yearsOfExcellence: 'Years of Excellence',
        facultyMembers: 'Faculty Members',
        researchPublications: 'Research Publications',

        // Role Based Gateway
        personalizedExperience: 'Personalized Experience',
        yourGateway: 'Your Gateway to',
        excellence: 'Excellence',
        selectRoleDesc: 'Select your role to access personalized portals and resources tailored to your needs',
        student: 'Student',
        faculty: 'Faculty',
        staff: 'Staff',
        prospectiveStudent: 'Prospective Student',
        studentDesc: 'Access courses, grades, schedules, and campus resources',
        facultyDesc: 'Manage courses, research, and academic administration',
        staffDesc: 'Administrative tools and operational management',
        prospectiveDesc: 'Explore programs, admissions, and campus life',
        courseMaterials: 'Course Materials',
        examSchedule: 'Exam Schedule',
        gradePortal: 'Grade Portal',
        assignments: 'Assignments',
        researchPortalFeature: 'Research Portal',
        studentManagement: 'Student Management',
        publicationHub: 'Publication Hub',
        courseAdmin: 'Course Admin',
        hrPortal: 'HR Portal',
        announcements: 'Announcements',
        reports: 'Reports',
        records: 'Records',
        scholarships: 'Scholarships',
        selectRole: 'Select Role',
        viewActions: 'View Actions',
        quickActions: 'Quick Actions',
        viewTimetable: 'View Timetable',
        checkResults: 'Check Results',
        libraryAccess: 'Library Access',
        uploadMaterials: 'Upload Materials',
        markAttendance: 'Mark Attendance',
        submitGrades: 'Submit Grades',
        staffDirectory: 'Staff Directory',
        leavePortal: 'Leave Portal',
        itSupport: 'IT Support',
        ssoEnabled: 'Single Sign-On enabled across all portals',

        // Announcements
        stayUpdated: 'Stay Updated',
        newsAnnouncements: 'News & Announcements',
        viewAllNews: 'View All News',
        readMore: 'Read More',
        examination: 'Examination',
        system: 'System',
        events: 'Events',
        achievement: 'Achievement',
        campus: 'Campus',
        circulars: 'Circulars',
        tenders: 'Tenders',
        recruitment: 'Recruitment',
        results: 'Results',
        downloads: 'Downloads',

        // Footer
        contactUs: 'Contact Us',
        quickLinks: 'Quick Links',
        followUs: 'Follow Us',
        allRightsReserved: 'All rights reserved',
        privacyPolicy: 'Privacy Policy',
        termsOfUse: 'Terms of Use',
        sitemap: 'Sitemap',
        established: 'Established 1948',
        footerDesc: 'A premier institution of higher learning in Northeast India, committed to academic excellence, research innovation, and preserving the rich cultural heritage of Assam.',

        // Quick Access Cards
        accessCoursesGrades: 'Access courses & grades',
        admissions2025: 'Admissions 2025',
        applyNewSession: 'Apply for new session',
        researchHub: 'Research Hub',
        publicationsJournals: 'Publications & journals',
        scroll: 'Scroll',

        // Common
        learnMore: 'Learn More',
        viewAll: 'View All',
        viewDetails: 'View Details',
        aboutUs: 'About Us',
        placements: 'Placements',
        alumni: 'Alumni',
        contact: 'Contact',
        howToApply: 'How to Apply',
        library: 'Library',
    },
    as: {
        // Header & Navigation
        home: 'গৃহ',
        academics: 'শিক্ষায়তনিক',
        research: 'গৱেষণা',
        admissions: 'নামভৰ্তি',
        portals: 'পৰ্টেল',
        campusLife: 'কেম্পাছ জীৱন',
        culturalHeritage: 'সাংস্কৃতিক ঐতিহ্য',
        login: 'লগইন',
        search: 'সন্ধান',
        departments: 'বিভাগসমূহ',
        programs: 'পাঠ্যক্ৰম',
        facultyDirectory: 'শিক্ষক তালিকা',
        academicCalendar: 'শৈক্ষিক কেলেণ্ডাৰ',
        syllabus: 'পাঠ্যক্ৰম',
        researchCenters: 'গৱেষণা কেন্দ্ৰ',
        publications: 'প্ৰকাশন',
        journalsPortal: 'জাৰ্ণাল পৰ্টেল',
        projects: 'প্ৰকল্প',
        ugPrograms: 'স্নাতক পাঠ্যক্ৰম',
        pgPrograms: 'স্নাতকোত্তৰ পাঠ্যক্ৰম',
        phdAdmissions: 'পিএইচডি নামভৰ্তি',
        internationalStudents: 'আন্তৰ্জাতিক ছাত্ৰ',
        feeStructure: 'মাচুল সংৰচনা',
        mmtcPortal: 'MMTC পৰ্টেল',
        gucdoe: 'GUCDOE',
        admissionPortal: 'নামভৰ্তি পৰ্টেল',
        studentPortal: 'ছাত্ৰ পৰ্টেল',

        // Hero Section
        excellenceWithHeritage: 'ঐতিহ্যৰ সৈতে উৎকৰ্ষতা',
        heroSubtitle: 'য\'ত শৈক্ষিক উদ্ভাৱনে অসমীয়া সাংস্কৃতিক গৌৰৱক লগ পায়',
        researchThatMatters: 'গুৰুত্বপূৰ্ণ গৱেষণা',
        researchSubtitle: '১৯৪৮ চনৰ পৰা উত্তৰ-পূব ভাৰতত অগ্ৰণী গৱেষণা',
        shapeYourFuture: 'আপোনাৰ ভৱিষ্যত গঢ়ক',
        futureSubtitle: '২৫,০০০+ ছাত্ৰ-ছাত্ৰীৰ সৈতে উৎকৰ্ষতাৰ যাত্ৰাত যোগদান কৰক',
        explorePrograms: 'পাঠ্যক্ৰম চাওক',
        viewResearch: 'গৱেষণা চাওক',
        applyNow: 'এতিয়া আবেদন কৰক',
        virtualTour: 'ভাৰ্চুৱেল ভ্ৰমণ',

        // Stats
        naacAccredited: 'NAAC A+',
        accredited: 'স্বীকৃতিপ্ৰাপ্ত',
        students: 'ছাত্ৰ-ছাত্ৰী',
        globalPartners: 'বিশ্বব্যাপী অংশীদাৰ',
        yearsOfExcellence: 'উৎকৰ্ষতাৰ বছৰ',
        facultyMembers: 'অধ্যাপক সদস্য',
        researchPublications: 'গৱেষণা প্ৰকাশন',

        // Role Based Gateway
        personalizedExperience: 'ব্যক্তিগত অভিজ্ঞতা',
        yourGateway: 'আপোনাৰ দুৱাৰমুখ',
        excellence: 'উৎকৰ্ষতালৈ',
        selectRoleDesc: 'আপোনাৰ প্ৰয়োজন অনুসৰি ব্যক্তিগত পৰ্টেল আৰু সম্পদ লাভ কৰিবলৈ ভূমিকা বাছনি কৰক',
        student: 'ছাত্ৰ',
        faculty: 'শিক্ষক',
        staff: 'কৰ্মচাৰী',
        prospectiveStudent: 'সম্ভাব্য ছাত্ৰ',
        studentDesc: 'পাঠ্যক্ৰম, গ্ৰেড, সময়সূচী, আৰু কেম্পাছ সম্পদ লাভ কৰক',
        facultyDesc: 'পাঠ্যক্ৰম, গৱেষণা, আৰু শৈক্ষিক প্ৰশাসন পৰিচালনা কৰক',
        staffDesc: 'প্ৰশাসনিক সঁজুলি আৰু কাৰ্যকৰী ব্যৱস্থাপনা',
        prospectiveDesc: 'পাঠ্যক্ৰম, নামভৰ্তি, আৰু কেম্পাছ জীৱন অন্বেষণ কৰক',
        courseMaterials: 'পাঠ্যক্ৰম সামগ্ৰী',
        examSchedule: 'পৰীক্ষাৰ সময়সূচী',
        gradePortal: 'গ্ৰেড পৰ্টেল',
        assignments: 'নিযুক্তকৰণ',
        researchPortalFeature: 'গৱেষণা পৰ্টেল',
        studentManagement: 'ছাত্ৰ ব্যৱস্থাপনা',
        publicationHub: 'প্ৰকাশন হাব',
        courseAdmin: 'পাঠ্যক্ৰম প্ৰশাসন',
        hrPortal: 'HR পৰ্টেল',
        announcements: 'ঘোষণা',
        reports: 'প্ৰতিবেদন',
        records: 'ৰেকৰ্ড',
        scholarships: 'জলপানি',
        selectRole: 'ভূমিকা বাছনি কৰক',
        viewActions: 'কাৰ্য চাওক',
        quickActions: 'দ্ৰুত কাৰ্য',
        viewTimetable: 'সময়সূচী চাওক',
        checkResults: 'ফলাফল পৰীক্ষা কৰক',
        libraryAccess: 'পুথিভঁৰাল প্ৰৱেশ',
        uploadMaterials: 'সামগ্ৰী আপলোড কৰক',
        markAttendance: 'উপস্থিতি চিহ্নিত কৰক',
        submitGrades: 'গ্ৰেড জমা দিয়ক',
        staffDirectory: 'কৰ্মচাৰী তালিকা',
        leavePortal: 'ছুটী পৰ্টেল',
        itSupport: 'IT সহায়',
        ssoEnabled: 'সকলো পৰ্টেলত একক চাইন-অন সক্ৰিয়',

        // Announcements
        stayUpdated: 'আপডেট থাকক',
        newsAnnouncements: 'সংবাদ আৰু ঘোষণা',
        viewAllNews: 'সকলো সংবাদ চাওক',
        readMore: 'অধিক পঢ়ক',
        examination: 'পৰীক্ষা',
        system: 'ব্যৱস্থা',
        events: 'অনুষ্ঠান',
        achievement: 'কৃতিত্ব',
        campus: 'কেম্পাছ',
        circulars: 'চাৰ্কুলাৰ',
        tenders: 'নিবিদা',
        recruitment: 'নিযুক্তি',
        results: 'ফলাফল',
        downloads: 'ডাউনলোড',

        // Footer
        contactUs: 'যোগাযোগ কৰক',
        quickLinks: 'দ্ৰুত লিংক',
        followUs: 'আমাক অনুসৰণ কৰক',
        allRightsReserved: 'সৰ্বস্বত্ব সংৰক্ষিত',
        privacyPolicy: 'গোপনীয়তা নীতি',
        termsOfUse: 'ব্যৱহাৰৰ চৰ্তাৱলী',
        sitemap: 'চাইটমেপ',
        established: 'প্ৰতিষ্ঠিত ১৯৪৮',
        footerDesc: 'উত্তৰ-পূব ভাৰতৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, শৈক্ষিক উৎকৰ্ষতা, গৱেষণা উদ্ভাৱন, আৰু অসমৰ সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য সংৰক্ষণত প্ৰতিশ্ৰুতিবদ্ধ।',

        // Quick Access Cards
        accessCoursesGrades: 'পাঠ্যক্ৰম আৰু গ্ৰেড লাভ কৰক',
        admissions2025: 'নামভৰ্তি ২০২৫',
        applyNewSession: 'নতুন অধিবেশনৰ বাবে আবেদন কৰক',
        researchHub: 'গৱেষণা হাব',
        publicationsJournals: 'প্ৰকাশন আৰু জাৰ্ণাল',
        scroll: 'স্ক্ৰল',

        // Common
        learnMore: 'অধিক জানক',
        viewAll: 'সকলো চাওক',
        viewDetails: 'বিৱৰণ চাওক',
        aboutUs: 'আমাৰ বিষয়ে',
        placements: 'নিয়োগ',
        alumni: 'প্ৰাক্তন ছাত্ৰ',
        contact: 'যোগাযোগ',
        howToApply: 'কেনেকৈ আবেদন কৰিব',
        library: 'পুথিভঁৰাল',
    }
};

type LanguageContextType = {
    t: (key: string) => string;
    language: string;
    setLanguage: (lang: string) => void;
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('gu_language') || 'en';
        }
        return 'en';
    });

    useEffect(() => {
        localStorage.setItem('gu_language', language);
    }, [language]);

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || translations['en'][key] || key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'as' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        return {
            language: 'en',
            setLanguage: () => { },
            toggleLanguage: () => { },
            t: (key: string) => {
                // @ts-ignore
                return translations['en'][key] || key
            }
        };
    }
    return context;
}

export default LanguageContext;
