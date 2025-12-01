'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  BookOpen, Search, Filter, Download, ExternalLink,
  Calendar, Users, Award, TrendingUp, FileText, Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const journals = [
  {
    title: 'Gauhati University Journal of Science',
    issn: '0254-8011',
    frequency: 'Bi-annual',
    impact: '2.3',
    indexed: ['Scopus', 'Web of Science'],
    articles: 450,
    category: 'Science'
  },
  {
    title: 'Journal of Assamese Literature & Culture',
    issn: '0976-5298',
    frequency: 'Annual',
    impact: '1.8',
    indexed: ['UGC-CARE', 'DOAJ'],
    articles: 280,
    category: 'Arts'
  },
  {
    title: 'Northeast Economic Review',
    issn: '0975-4962',
    frequency: 'Quarterly',
    impact: '1.5',
    indexed: ['EBSCO', 'ProQuest'],
    articles: 320,
    category: 'Commerce'
  },
  {
    title: 'Gauhati Law Review',
    issn: '0974-5912',
    frequency: 'Annual',
    impact: '1.2',
    indexed: ['HeinOnline', 'LexisNexis'],
    articles: 180,
    category: 'Law'
  }
];

const recentArticles = [
  {
    title: 'Climate Change Impact on Brahmaputra Basin: A Comprehensive Study',
    authors: ['Dr. R. Gogoi', 'Prof. A. Das'],
    journal: 'GU Journal of Science',
    year: 2024,
    doi: '10.xxxxx/gujs.2024.001',
    downloads: 234
  },
  {
    title: 'Digital Transformation in Northeast Indian SMEs',
    authors: ['Dr. M. Sharma', 'Dr. P. Kalita'],
    journal: 'Northeast Economic Review',
    year: 2024,
    doi: '10.xxxxx/ner.2024.015',
    downloads: 156
  },
  {
    title: 'Preservation of Assamese Folk Music: Challenges and Opportunities',
    authors: ['Prof. L. Bora'],
    journal: 'Journal of Assamese Literature',
    year: 2024,
    doi: '10.xxxxx/jalc.2024.008',
    downloads: 189
  }
];

const stats = [
  { icon: BookOpen, label: 'Active Journals', value: '15+' },
  { icon: FileText, label: 'Published Articles', value: '12,000+' },
  { icon: Users, label: 'Registered Authors', value: '5,000+' },
  { icon: Globe, label: 'Countries Reached', value: '50+' }
];

const Counter = ({ value, label, icon: Icon, delay }: { value: string, label: string, icon: any, delay: number }) => {
  const cleanValue = value.replace(/,/g, '');
  const numericValue = parseInt(cleanValue.replace(/[^0-9]/g, ''));
  const suffix = cleanValue.replace(/[0-9]/g, '');

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const animation = animate(count, numericValue, {
      duration: 1.5,
      delay: delay * 1.5,
      ease: "easeOut"
    });
    return animation.stop;
  }, [count, numericValue, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 1.5 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
    >
      <Icon className="w-6 h-6 text-amber-300 mx-auto mb-2" />
      <div className="text-2xl font-bold text-white flex justify-center items-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm text-amber-200">{label}</div>
    </motion.div>
  );
};

export default function Journals() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  // Function to handle PDF download
  const handleDownloadPDF = (article: typeof recentArticles[0]) => {
    const pdfContent = `
RESEARCH ARTICLE

Title: ${article.title}

Authors: ${article.authors.join(', ')}

Journal: ${article.journal}
Year: ${article.year}
DOI: ${article.doi}
Downloads: ${article.downloads}

Abstract:
This is a sample abstract for the research article. In a real implementation, 
this would contain the actual article content or fetch it from a server.

---
Downloaded from Gauhati University Journals Portal
© ${article.year} Gauhati University
    `.trim();

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const filename = `${article.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="bg-white text-amber-800 mb-4">Research Publications</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Academic Journals Portal
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-8">
              Access peer-reviewed research from Gauhati University's academic journals
            </p>

            {/* Search */}
            <div className="max-w-3xl mx-auto flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                <Input
                  placeholder="Search articles, authors, journals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 bg-white"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-40 bg-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                  <SelectItem value="commerce">Commerce</SelectItem>
                  <SelectItem value="law">Law</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <Counter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Journals List */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-8">Our Journals</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {journals.map((journal, index) => (
              <motion.div
                key={journal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge className="mb-2 bg-amber-100 text-amber-700">{journal.category}</Badge>
                        <CardTitle className="text-lg">{journal.title}</CardTitle>
                        <p className="text-sm text-black">ISSN: {journal.issn}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-amber-600">{journal.impact}</div>
                        <div className="text-xs text-black">Impact Factor</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-black">
                        <Calendar className="w-4 h-4" />
                        {journal.frequency}
                      </span>
                      <span className="flex items-center gap-1 text-black">
                        <FileText className="w-4 h-4" />
                        {journal.articles} articles
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {journal.indexed.map((idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{idx}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 gap-2">
                        Browse Issues <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button className="bg-amber-600 hover:bg-amber-700">
                        Submit Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black">Recent Publications</h2>
            <Button variant="outline">View All</Button>
          </div>

          <div className="space-y-4">
            {recentArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-black mb-2 hover:text-amber-700 cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-sm text-black mb-2">
                          {article.authors.join(', ')}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-black">
                          <span>{article.journal}</span>
                          <span>•</span>
                          <span>{article.year}</span>
                          <span>•</span>
                          <span>DOI: {article.doi}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-black mb-2">
                          <Download className="w-4 h-4" />
                          <span className="text-sm">{article.downloads}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1"
                          onClick={() => handleDownloadPDF(article)}
                        >
                          <Download className="w-4 h-4" />
                          PDF
                        </Button>
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
      <section className="py-16 px-4 bg-gradient-to-r from-amber-700 to-amber-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Submit Your Research
          </h2>
          <p className="text-amber-100 mb-8">
            Contribute to the academic community. Submit your research for peer review.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-amber-800 hover:bg-gray-100">
              Author Guidelines
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Submit Manuscript
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
