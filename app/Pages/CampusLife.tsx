'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Home, UtensilsCrossed, Book, Dumbbell, Music,
  Camera, Users, Calendar, ArrowRight, Play, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const campusFeatures = [
  {
    title: 'Hostels & Accommodation',
    description: '20+ hostels with modern amenities for boys and girls',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop',
    stats: '5000+ beds'
  },
  {
    title: 'Libraries & Study Spaces',
    description: 'State-of-the-art central library with 5 lakh+ books',
    icon: Book,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    stats: '24/7 Access'
  },
  {
    title: 'Sports Complex',
    description: 'Olympic-size pool, stadium, and indoor sports facilities',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1461896836934- voices-of-the-bay?w=600&h=400&fit=crop',
    stats: '50+ Acres'
  },
  {
    title: 'Dining & Cafeterias',
    description: 'Multiple canteens serving diverse cuisines',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop',
    stats: '10+ Outlets'
  }
];

const events = [
  {
    title: 'Rongali Bihu Celebration',
    date: 'April 14-16, 2025',
    type: 'Cultural',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop'
  },
  {
    title: 'Annual Sports Meet',
    date: 'March 1-5, 2025',
    type: 'Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-eca-bay?w=400&h=300&fit=crop'
  },
  {
    title: 'TechFest 2025',
    date: 'February 20-22, 2025',
    type: 'Technical',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'
  },
  {
    title: 'Literary Week',
    date: 'January 15-20, 2025',
    type: 'Literary',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  }
];

const clubs = [
  { name: 'Dramatic Society', members: '200+', icon: Music },
  { name: 'Photography Club', members: '150+', icon: Camera },
  { name: 'NSS Unit', members: '500+', icon: Users },
  { name: 'Debate Society', members: '100+', icon: Users }
];

const testimonials = [
  {
    quote: "The four years I spent at Gauhati University shaped who I am today. The cultural diversity and academic rigor prepared me for a global career.",
    author: "Priyanka Sharma",
    role: "Alumni, Batch of 2020",
    company: "Google"
  },
  {
    quote: "The research facilities and faculty support at GU are exceptional. My PhD journey here has been truly transformative.",
    author: "Dr. Rahul Das",
    role: "Research Scholar",
    department: "Physics"
  }
];

export default function CampusLife() {
  const mapRef = useRef<HTMLElement>(null);

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop"
            alt="Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-amber-500 text-white mb-4">Experience GU</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Life at
              <span className="text-amber-400"> Gauhati University</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mb-8">
              A vibrant campus where academic excellence meets cultural richness
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 gap-2">
                <Play className="w-5 h-5" />
                Virtual Campus Tour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={scrollToMap}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Campus Map
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campus Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Campus Facilities
            </h2>
            <p className="text-black max-w-2xl mx-auto">
              World-class infrastructure spread across 500+ acres of lush green campus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {campusFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-red-700 transition-transform duration-500 group-hover:rotate-[360deg]" />
                        </div>
                      </div>
                      <Badge className="absolute top-4 right-4 bg-amber-500 text-white">
                        {feature.stats}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-black mb-1 group-hover:text-red-700 transition-colors">{feature.title}</h3>
                      <p className="text-sm text-black">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <Badge className="bg-red-100 text-red-700 mb-3">Events</Badge>
              <h2 className="text-3xl font-bold text-black">Upcoming Events</h2>
            </div>
            <Button variant="outline" className="gap-2">
              View Calendar <Calendar className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-black">
                    {event.type}
                  </Badge>
                </div>
                <h3 className="font-bold text-black mb-1 group-hover:text-red-700 transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-black flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Student Clubs & Societies</h2>
            <p className="text-red-100">Join 50+ active clubs and explore your passions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clubs.map((club, index) => {
              const Icon = club.icon;
              return (
                <motion.div
                  key={club.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <Icon className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-1">{club.name}</h3>
                  <p className="text-sm text-red-200">{club.members} members</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-white text-red-800 hover:bg-gray-100">
              Explore All Clubs
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-red-100 text-red-700 mb-3">Location</Badge>
            <h2 className="text-3xl font-bold text-black mb-4">Find Us on Map</h2>
            <p className="text-black max-w-2xl mx-auto">
              Located in the scenic Jalukbari area, our campus is easily accessible from all parts of the city
            </p>
          </div>
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=Gauhati%20University&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gauhati University Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Voices of GU</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-black text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-black">{testimonial.author}</p>
                  <p className="text-sm text-black">{testimonial.role}</p>
                  <p className="text-sm text-red-700">{testimonial.company || testimonial.department}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience GU?
          </h2>
          <p className="text-amber-100 mb-8 text-lg">
            Schedule a campus visit or take our virtual tour
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100">
              Schedule Visit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Campus Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
