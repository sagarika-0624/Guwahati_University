import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, FileText, Calendar, CreditCard, CheckCircle,
  ArrowRight, Download, Clock, Users, Award, HelpCircle,
  ChevronDown, ChevronUp, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const admissionTypes = [
  {
    id: 'ug',
    title: 'Undergraduate Programs',
    icon: GraduationCap,
    color: 'from-blue-500 to-blue-700',
    description: 'B.A., B.Sc., B.Com., BBA, and more',
    deadline: 'June 30, 2025',
    status: 'Open',
    eligibility: ['10+2 or equivalent', 'Minimum 50% aggregate', 'Valid entrance test score'],
    seats: '5000+'
  },
  {
    id: 'pg',
    title: 'Postgraduate Programs',
    icon: Award,
    color: 'from-emerald-500 to-emerald-700',
    description: 'M.A., M.Sc., M.Com., MBA, and more',
    deadline: 'July 15, 2025',
    status: 'Open',
    eligibility: ['Bachelor\'s degree in relevant field', 'Minimum 55% aggregate', 'GUPGET qualified'],
    seats: '3000+'
  },
  {
    id: 'phd',
    title: 'Ph.D. Programs',
    icon: FileText,
    color: 'from-purple-500 to-purple-700',
    description: 'Research programs across all departments',
    deadline: 'August 31, 2025',
    status: 'Open',
    eligibility: ['Master\'s degree with 55%', 'NET/SLET qualified preferred', 'Research proposal'],
    seats: '500+'
  }
];

const applicationSteps = [
  {
    step: 1,
    title: 'Register Online',
    description: 'Create your account on the admission portal with valid email and phone number',
    icon: Users
  },
  {
    step: 2,
    title: 'Fill Application',
    description: 'Complete the application form with personal, academic, and program details',
    icon: FileText
  },
  {
    step: 3,
    title: 'Upload Documents',
    description: 'Upload scanned copies of required documents and photograph',
    icon: Download
  },
  {
    step: 4,
    title: 'Pay Application Fee',
    description: 'Complete payment through secure payment gateway',
    icon: CreditCard
  },
  {
    step: 5,
    title: 'Submit & Track',
    description: 'Submit application and track status through your dashboard',
    icon: CheckCircle
  }
];

const faqs = [
  {
    question: 'What is the application fee for UG programs?',
    answer: 'The application fee for UG programs is ₹500 for General category and ₹300 for SC/ST/OBC/PWD candidates. The fee is non-refundable.'
  },
  {
    question: 'Can I apply for multiple programs?',
    answer: 'Yes, you can apply for multiple programs. Each application will require a separate application form and fee payment.'
  },
  {
    question: 'What documents are required for admission?',
    answer: 'Required documents include: 10th & 12th marksheets, Transfer Certificate, Migration Certificate, Character Certificate, Caste Certificate (if applicable), Passport size photographs, and valid ID proof.'
  },
  {
    question: 'Is there any entrance test for PG admissions?',
    answer: 'Yes, admission to most PG programs requires qualifying the GUPGET (Gauhati University Post Graduate Entrance Test). Some programs may have department-specific tests.'
  },
  {
    question: 'Are there any scholarships available?',
    answer: 'Yes, the university offers various scholarships including merit-based scholarships, need-based financial aid, SC/ST scholarships, and scholarships for single girl child.'
  }
];

export default function Admissions() {
  const [expandedType, setExpandedType] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="bg-amber-500 text-white mb-4">Admissions 2025-26</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Begin Your Journey
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto mb-8">
              Join one of Northeast India's premier institutions. Applications are now open for all programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-red-800 hover:bg-gray-100 gap-2">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                <Download className="w-4 h-4" /> Download Prospectus
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Dates Banner */}
      <section className="bg-amber-50 border-y border-amber-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span className="font-medium text-black">Application Start:</span>
              <span className="text-amber-700">May 1, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-600" />
              <span className="font-medium text-black">Last Date (UG):</span>
              <span className="text-red-700">June 30, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="font-medium text-black">Results:</span>
              <span className="text-green-700">July 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Choose Your Program</h2>
            <p className="text-black max-w-2xl mx-auto">
              Select from our diverse range of undergraduate, postgraduate, and research programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {admissionTypes.map((type, index) => {
              const Icon = type.icon;
              const isExpanded = expandedType === type.id;

              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full transition-all duration-300 group ${isExpanded ? 'ring-2 ring-red-500' : 'hover:shadow-lg'}`}>
                    <CardHeader>
                      <div className="flex items-start gap-4 mb-2">
                        <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <CardTitle className="text-lg font-bold text-black group-hover:text-red-700 transition-colors duration-300">
                              {type.title}
                            </CardTitle>
                            <Badge className="bg-green-100 text-green-700 ml-2 whitespace-nowrap">{type.status}</Badge>
                          </div>
                          <p className="text-sm text-black">{type.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-black">Deadline</span>
                          <span className="font-medium text-red-700">{type.deadline}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-black">Available Seats</span>
                          <span className="font-medium">{type.seats}</span>
                        </div>

                        <button
                          onClick={() => setExpandedType(isExpanded ? null : type.id)}
                          className="w-full flex items-center justify-between py-2 text-sm text-black hover:text-black"
                        >
                          <span>View Eligibility</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>

                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="space-y-2 pt-2 border-t"
                          >
                            {type.eligibility.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}

                        <Button className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900">
                          Apply for {type.id.toUpperCase()}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Application Process</h2>
            <p className="text-black">Follow these simple steps to complete your application</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200" />

            <div className="grid md:grid-cols-5 gap-8">
              {applicationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="relative z-10 w-24 h-24 mx-auto bg-gradient-to-br from-red-700 to-red-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="font-bold text-black mb-2">{step.title}</h3>
                    <p className="text-sm text-black">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-red-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border px-6"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline text-black">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-black">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-black mb-4">Still have questions?</p>
            <Button variant="outline" className="gap-2">
              Contact Admission Office
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-800 to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-red-100 mb-8 text-lg">
            Don't miss the deadline. Start your application today and take the first step towards your future.
          </p>
          <Button size="lg" className="bg-white text-red-800 hover:bg-gray-100 gap-2 h-14 px-8 text-lg">
            Start Application <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
