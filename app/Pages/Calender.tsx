'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, MapPin, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type EventType = 'Holiday' | 'Exam' | 'Academic';

interface AcademicEvent {
  date: string;
  event: string;
  type: EventType;
}

const academicEvents: AcademicEvent[] = [
  { date: '2025-01-01', event: 'New Year Holiday', type: 'Holiday' },
  { date: '2025-01-14', event: 'Magh Bihu', type: 'Holiday' },
  { date: '2025-01-26', event: 'Republic Day', type: 'Holiday' },
  { date: '2025-02-01', event: 'Odd Semester Exams Begin', type: 'Exam' },
  { date: '2025-02-15', event: 'Odd Semester Exams End', type: 'Exam' },
  { date: '2025-03-01', event: 'Even Semester Classes Begin', type: 'Academic' },
  { date: '2025-04-14', event: 'Rongali Bihu', type: 'Holiday' },
  { date: '2025-05-15', event: 'Mid-Semester Exams', type: 'Exam' },
  { date: '2025-06-01', event: 'Summer Vacation Begins', type: 'Holiday' },
  { date: '2025-07-01', event: 'New Academic Session', type: 'Academic' },
  { date: '2025-08-15', event: 'Independence Day', type: 'Holiday' },
  { date: '2025-10-02', event: 'Gandhi Jayanti', type: 'Holiday' },
];

const typeColors: Record<EventType, string> = {
  Holiday: 'bg-green-100 text-green-700',
  Exam: 'bg-red-100 text-red-700',
  Academic: 'bg-blue-100 text-blue-700'
};

export default function Calendar() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-red-900 to-red-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-amber-500 text-white mb-4">2024-25</Badge>
          <h1 className="text-4xl font-bold text-white mb-4">Academic Calendar</h1>
          <p className="text-red-100">Important dates and events for the academic year</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {academicEvents.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-red-50 rounded-xl flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-red-700">
                          {new Date(item.date).getDate()}
                        </span>
                        <span className="text-xs text-black">
                          {new Date(item.date).toLocaleString('default', { month: 'short' })}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">{item.event}</h3>
                        <p className="text-sm text-black">
                          {new Date(item.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      </div>
                    </div>
                    <Badge className={typeColors[item.type]}>{item.type}</Badge>
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
