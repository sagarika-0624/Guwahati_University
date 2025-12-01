'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, Phone, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const faculty = [
  { name: 'Dr. Arunabh Sarma', dept: 'Computer Science', designation: 'Professor', specialization: 'AI & Machine Learning', email: 'asarma@gauhati.ac.in' },
  { name: 'Prof. Nirmali Gogoi', dept: 'Physics', designation: 'Professor & Head', specialization: 'Nuclear Physics', email: 'ngogoi@gauhati.ac.in' },
  { name: 'Dr. Pranjal Deka', dept: 'English', designation: 'Associate Professor', specialization: 'Modern Literature', email: 'pdeka@gauhati.ac.in' },
  { name: 'Prof. Ranjit Hazarika', dept: 'Economics', designation: 'Professor', specialization: 'Development Economics', email: 'rhazarika@gauhati.ac.in' },
  { name: 'Dr. Lakshminandan Bora', dept: 'Assamese', designation: 'Professor & Head', specialization: 'Folk Literature', email: 'lbora@gauhati.ac.in' },
  { name: 'Dr. Biplab Bhuyan', dept: 'Biotechnology', designation: 'Associate Professor', specialization: 'Genetic Engineering', email: 'bbhuyan@gauhati.ac.in' },
  { name: 'Prof. Mridul Das', dept: 'Computer Science', designation: 'Professor', specialization: 'Computer Networks', email: 'mdas@gauhati.ac.in' },
  { name: 'Dr. Ritu Gogoi', dept: 'Environmental Science', designation: 'Associate Professor', specialization: 'Climate Studies', email: 'rgogoi@gauhati.ac.in' },
];

export default function Faculty() {
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('all');

  const filtered = faculty.filter(f => {
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase()) || f.specialization.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === 'all' || f.dept === dept;
    return matchSearch && matchDept;
  });

  const departments = [...new Set(faculty.map(f => f.dept))];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-red-900 to-red-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-amber-500 text-white mb-4">500+ Faculty Members</Badge>
          <h1 className="text-4xl font-bold text-white mb-4">Faculty Directory</h1>
          <p className="text-red-100 max-w-2xl mx-auto">Meet our distinguished faculty members</p>
        </div>
      </section>

      <section className="bg-white border-b sticky top-20 z-40 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
            <Input placeholder="Search faculty..." value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <Select value={dept} onValueChange={setDept}>
            <SelectTrigger className="w-48"><SelectValue placeholder="Department" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((f, i) => (
              <motion.div key={f.email} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-700 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {f.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-bold text-black mb-1">{f.name}</h3>
                    <p className="text-sm text-red-700 mb-1">{f.designation}</p>
                    <Badge variant="outline" className="mb-3">{f.dept}</Badge>
                    <p className="text-sm text-black mb-4">{f.specialization}</p>
                    <a href={`mailto:${f.email}`} className="text-sm text-blue-600 hover:underline flex items-center justify-center gap-1">
                      <Mail className="w-4 h-4" />{f.email}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
