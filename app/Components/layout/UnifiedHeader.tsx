'use client';

import React, { useState } from 'react';
import { createPageUrl } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Menu, X, ChevronDown, Bell, User, Globe,
  GraduationCap, BookOpen, Users, Building2, FileText,
  Newspaper, Award, Calendar, Phone, Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/components/ui/LanguageContext';
import ColorfulBorder from './ColorfulBorder';

const navigation = {
  main: [
    { name: 'Home', nameAs: 'গৃহ', href: 'Home' },
    {
      name: 'Academics',
      nameAs: 'শিক্ষায়তনিক',
      href: 'Academics',
      icon: GraduationCap,
      dropdown: [
        { name: 'Departments', nameAs: 'বিভাগসমূহ', href: 'Departments', icon: Building2 },
        { name: 'Programs', nameAs: 'পাঠ্যক্ৰম', href: 'Programs', icon: BookOpen },
        { name: 'Faculty Directory', nameAs: 'শিক্ষক তালিকা', href: 'Faculty', icon: Users },
        { name: 'Academic Calendar', nameAs: 'শৈক্ষিক কেলেণ্ডাৰ', href: 'Calendar', icon: Calendar },
        { name: 'Syllabus', nameAs: 'পাঠ্যক্ৰম', href: 'Syllabus', icon: FileText }
      ]
    },
    {
      name: 'Research',
      nameAs: 'গৱেষণা',
      href: 'Research',
      icon: BookOpen,
      dropdown: [
        { name: 'Research Centers', nameAs: 'গৱেষণা কেন্দ্ৰ', href: 'Research', icon: Building2 },
        { name: 'Publications', nameAs: 'প্ৰকাশন', href: 'Research?tab=publications', icon: FileText },
        { name: 'Journals Portal', nameAs: 'জাৰ্ণাল পৰ্টেল', href: 'Journals', icon: Newspaper },
        { name: 'Projects', nameAs: 'প্ৰকল্প', href: 'Research', icon: Award }
      ]
    },
    {
      name: 'Admissions',
      nameAs: 'নামভৰ্তি',
      href: 'Admissions',
      icon: Users,
      dropdown: [
        { name: 'UG Programs', nameAs: 'স্নাত্ৰক পাঠ্যক্ৰম', href: 'Admissions', icon: GraduationCap },
        { name: 'PG Programs', nameAs: 'স্নাতকোত্তৰ পাঠ্যক্ৰম', href: 'Admissions', icon: GraduationCap },
        { name: 'PhD Admissions', nameAs: 'পিএইচডি নামভৰ্তি', href: 'Admissions', icon: Award },
        { name: 'International Students', nameAs: 'আন্তৰ্জাতিক ছাত্ৰ', href: 'Admissions', icon: Globe },
        { name: 'Fee Structure', nameAs: 'মাচুল সংৰচনা', href: 'Admissions', icon: FileText }
      ]
    },
    {
      name: 'Portals',
      nameAs: 'পৰ্টেল',
      href: 'Portals',
      icon: Globe,
      dropdown: [
        { name: 'MMTC Portal', nameAs: 'MMTC পৰ্টেল', href: 'MMTC', icon: Globe },
        { name: 'GUCDOE', nameAs: 'GUCDOE', href: 'GUCDOE', icon: Building2 },
        { name: 'Journals Portal', nameAs: 'জাৰ্ণাল পৰ্টেল', href: 'Journals', icon: Newspaper },
        { name: 'Admission Portal', nameAs: 'নামভৰ্তি পৰ্টেল', href: 'AdmissionPortal', icon: Users },
        { name: 'Student Portal', nameAs: 'ছাত্ৰ পৰ্টেল', href: 'StudentPortal', icon: GraduationCap }
      ]
    },
    { name: 'Cultural Heritage', nameAs: 'সাংস্কৃতিক ঐতিহ্য', href: 'CulturalHeritage' },
    { name: 'Campus Life', nameAs: 'কেম্পাছ জীৱন', href: 'CampusLife' }
  ]
};

export default function UnifiedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { language, toggleLanguage, t } = useLanguage();

  const getLabel = (item: any) => language === 'as' && item.nameAs ? item.nameAs : item.name;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+913612570412" className="flex items-center gap-1 hover:text-amber-300 transition-colors">
              <Phone className="w-3 h-3" />
              <span>+91 361 257 0412</span>
            </a>
            <a href="mailto:info@gauhati.ac.in" className="flex items-center gap-1 hover:text-amber-300 transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@gauhati.ac.in</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 px-2 py-1 rounded border border-white/20 hover:border-amber-300"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'en' ? 'অসমীয়া' : 'English'}</span>
            </button>
            <span className="text-white/40">|</span>
            <span className="text-amber-300 font-medium">NAAC A+ Accredited</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden p-1">
              <img
                src="/gu-logo.png"
                alt="Gauhati University Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-black tracking-tight">Gauhati University</h1>
              <p className="text-xs text-black">Digital Ecosystem • Est. 1948</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.main.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1 px-3 py-2 text-black hover:text-red-800 font-medium transition-colors rounded-lg hover:bg-red-50 text-sm">
                        {getLabel(item)}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64 p-2 bg-white rounded-xl shadow-xl border border-gray-100 mt-2 animate-in fade-in-0 zoom-in-95">
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild className="focus:bg-transparent">
                          <a
                            href={createPageUrl(subItem.href)}
                            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 transition-all group cursor-pointer"
                          >
                            <div className="p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                              <subItem.icon className="w-5 h-5 text-red-700" />
                            </div>
                            <span className="text-black font-medium group-hover:text-black">{getLabel(subItem)}</span>
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={item.href === 'Home' ? '/' : createPageUrl(item.href)}
                    className="px-3 py-2 text-black hover:text-red-800 font-medium transition-colors rounded-lg hover:bg-red-50 text-sm"
                  >
                    {getLabel(item)}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-black hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 text-black hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 p-2 bg-white rounded-xl shadow-xl border border-gray-100 mt-2 animate-in fade-in-0 zoom-in-95">
                <div className="px-4 py-3 border-b border-gray-100">
                  <h3 className="font-semibold text-black">Notifications</h3>
                </div>
                <div className="p-2 space-y-1">
                  <DropdownMenuItem asChild className="focus:bg-transparent">
                    <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all cursor-pointer group">
                      <div className="mt-1 p-2 h-fit bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors">
                        <Award className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black group-hover:text-red-700 transition-colors">Admission Open</p>
                        <p className="text-xs text-black mt-0.5">Applications for 2024-25 session started</p>
                        <p className="text-[10px] text-black mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="focus:bg-transparent">
                    <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all cursor-pointer group">
                      <div className="mt-1 p-2 h-fit bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black group-hover:text-red-700 transition-colors">Exam Schedule</p>
                        <p className="text-xs text-black mt-0.5">Semester exams begin from Dec 15</p>
                        <p className="text-[10px] text-black mt-1">1 day ago</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </div>
                <div className="p-2 border-t border-gray-100">
                  <button className="w-full py-2 text-xs font-medium text-center text-black hover:text-red-700 transition-colors">
                    View All Notifications
                  </button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/login">
              <Button className="hidden sm:flex bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-950 text-white gap-2">
                <User className="w-4 h-4" />
                Login
              </Button>
            </a>

            <button
              className="lg:hidden p-2 text-black hover:text-red-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Colorful Border */}
      <ColorfulBorder />

      {/* Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t bg-gray-50 overflow-hidden"
          >
            <div className="max-w-3xl mx-auto px-4 py-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                <input
                  type="text"
                  placeholder="Search programs, faculty, research, portals..."
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t bg-white overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href === 'Home' ? '/' : createPageUrl(item.href)}
                    className="block px-4 py-3 text-black hover:text-red-800 hover:bg-red-50 rounded-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {getLabel(item)}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={createPageUrl(subItem.href)}
                          className="block px-4 py-2 text-sm text-black hover:text-red-800 hover:bg-red-50 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {getLabel(subItem)}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-4 bg-gradient-to-r from-red-800 to-red-900 text-white">
                  <User className="w-4 h-4 mr-2" />
                  Login to Portal
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}