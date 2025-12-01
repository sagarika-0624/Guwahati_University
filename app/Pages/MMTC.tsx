import React from 'react';
import { motion } from 'framer-motion';
import {
  Play, BookOpen, FileText, Video, Headphones, Download,
  Search, Filter, Clock, Users, Star, ArrowRight, Monitor
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const resources = [
  {
    title: 'Introduction to Machine Learning',
    type: 'Video Lecture',
    duration: '45 mins',
    instructor: 'Dr. A. Sarma',
    department: 'Computer Science',
    views: '2.3K',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop'
  },
  {
    title: 'Quantum Physics Fundamentals',
    type: 'E-Book',
    pages: '320',
    author: 'Prof. N. Gogoi',
    department: 'Physics',
    downloads: '1.5K',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=250&fit=crop'
  },
  {
    title: 'Research Methodology Workshop',
    type: 'Recorded Session',
    duration: '2 hrs',
    instructor: 'Dr. R. Hazarika',
    department: 'General',
    views: '4.1K',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop'
  },
  {
    title: 'Advanced Data Analytics',
    type: 'Course Module',
    lessons: '12',
    instructor: 'Prof. M. Das',
    department: 'Statistics',
    enrolled: '890',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
  }
];

const categories = [
  { name: 'Video Lectures', count: 1250, icon: Video },
  { name: 'E-Books', count: 850, icon: BookOpen },
  { name: 'Research Papers', count: 3200, icon: FileText },
  { name: 'Audio Resources', count: 420, icon: Headphones }
];

const stats = [
  { label: 'Digital Resources', value: '10,000+' },
  { label: 'Active Users', value: '15,000+' },
  { label: 'Video Hours', value: '5,000+' },
  { label: 'Departments', value: '50+' }
];

export default function MMTC() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Monitor className="w-5 h-5 text-emerald-300" />
              <span className="text-emerald-100">Multimedia & Technology Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              MMTC Portal
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
              Access digital learning resources, e-content, and multimedia materials
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                <Input
                  placeholder="Search videos, e-books, papers..."
                  className="pl-12 pr-4 py-6 text-lg bg-white rounded-xl"
                />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700">
                  Search
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-emerald-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors border hover:border-emerald-200">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">{cat.name}</h3>
                      <p className="text-sm text-black">{cat.count} items</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black">Featured Resources</h2>
            <Button variant="outline" className="gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-white/90 text-black">
                      {resource.type}
                    </Badge>
                    {resource.type === 'Video Lecture' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-emerald-700 ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-black mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-black mb-3">
                      {resource.instructor || resource.author} • {resource.department}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{resource.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-black">
                        {resource.duration && (
                          <>
                            <Clock className="w-4 h-4" />
                            <span>{resource.duration}</span>
                          </>
                        )}
                        {resource.pages && (
                          <>
                            <FileText className="w-4 h-4" />
                            <span>{resource.pages} pages</span>
                          </>
                        )}
                        {resource.lessons && (
                          <>
                            <BookOpen className="w-4 h-4" />
                            <span>{resource.lessons} lessons</span>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-700 to-emerald-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Learning Today
          </h2>
          <p className="text-emerald-100 mb-8">
            Access thousands of digital resources with your university credentials
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100">
              Login to Access
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
