import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, BookOpen, Video, Users, Award, Calendar,
  ArrowRight, CheckCircle, MapPin, Clock, FileText, Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const programs = [
  {
    name: 'Bachelor of Arts (B.A.)',
    duration: '3 Years',
    specializations: ['English', 'Economics', 'Political Science', 'History'],
    fee: '₹15,000/year',
    seats: 5000
  },
  {
    name: 'Bachelor of Commerce (B.Com)',
    duration: '3 Years',
    specializations: ['Accountancy', 'Finance', 'Marketing'],
    fee: '₹18,000/year',
    seats: 3000
  },
  {
    name: 'Master of Arts (M.A.)',
    duration: '2 Years',
    specializations: ['English', 'Assamese', 'Political Science'],
    fee: '₹20,000/year',
    seats: 2000
  },
  {
    name: 'Master of Commerce (M.Com)',
    duration: '2 Years',
    specializations: ['Accountancy', 'Business Studies'],
    fee: '₹22,000/year',
    seats: 1500
  }
];

const features = [
  {
    icon: Video,
    title: 'Live Online Classes',
    description: 'Interactive sessions with experienced faculty'
  },
  {
    icon: BookOpen,
    title: 'Self-Paced Learning',
    description: 'Study at your own pace with recorded lectures'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 student support and mentorship'
  },
  {
    icon: Award,
    title: 'UGC Recognized',
    description: 'Degrees recognized by UGC and employers'
  }
];

const stats = [
  { value: '50,000+', label: 'Active Students' },
  { value: '25+', label: 'Programs' },
  { value: '100+', label: 'Study Centers' },
  { value: '30+', label: 'Years of Excellence' }
];

export default function GUCDOE() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <Badge className="bg-amber-500 text-white mb-4">
                Gauhati University Center for Distance & Online Education
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quality Education,
                <span className="text-amber-400"> Anywhere</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Pursue your higher education dreams without boundaries. UGC-recognized degrees through flexible distance and online learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100 gap-2">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                  <Play className="w-4 h-4" /> Watch Video
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Students learning"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-black">50,000+</p>
                      <p className="text-sm text-black">Students Enrolled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-purple-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Why Choose GUCDOE?</h2>
            <p className="text-black max-w-2xl mx-auto">
              Flexible learning options designed to fit your lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-700" />
                  </div>
                  <h3 className="font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-black text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">Our Programs</h2>
              <p className="text-black">Choose from a wide range of UGC-recognized programs</p>
            </div>
            <Button variant="outline" className="gap-2">
              View All Programs <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{program.name}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-black">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {program.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {program.seats} seats
                          </span>
                        </div>
                      </div>
                      <Badge className="bg-purple-100 text-purple-700">{program.fee}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm text-black mb-2">Specializations:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.specializations.map((spec) => (
                          <Badge key={spec} variant="outline">{spec}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Centers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-black mb-4">100+ Study Centers</h2>
          <p className="text-black mb-8 max-w-2xl mx-auto">
            Find a study center near you across Northeast India and beyond
          </p>
          <Button variant="outline" size="lg" className="gap-2">
            Find Nearest Center <MapPin className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            Applications for 2025-26 session are now open. Limited seats available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100 gap-2">
              Apply for Admission <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Prospectus
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
