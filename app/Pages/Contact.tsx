import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-red-900 to-red-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-red-100">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: 'Address', content: 'Gopinath Bordoloi Nagar, Jalukbari, Guwahati - 781014, Assam, India' },
                  { icon: Phone, title: 'Phone', content: '+91 361 257 0412' },
                  { icon: Mail, title: 'Email', content: 'info@gauhati.ac.in' },
                  { icon: Clock, title: 'Office Hours', content: 'Monday - Saturday: 9:00 AM - 5:00 PM' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-red-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">{item.title}</h3>
                      <p className="text-black">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={4} />
                <Button className="w-full bg-red-700 hover:bg-red-800">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
