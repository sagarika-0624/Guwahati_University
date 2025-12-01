'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  BookOpen, Award, Users, Globe, TrendingUp, FileText,
  ArrowRight, ExternalLink, Search, Filter, Building2,
  Microscope, Leaf, Cpu, FlaskConical, Atom
} from 'lucide-react';

// UI Components with TypeScript
const Button = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  [key: string]: any;
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-white text-black hover:bg-gray-50',
    ghost: 'hover:bg-gray-100 text-black',
    destructive: 'bg-red-600 text-white hover:bg-red-700'
  };
  const sizes = {
    default: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    sm: 'px-3 py-1.5 text-xs',
    icon: 'w-10 h-10'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Badge = ({
  children,
  variant = 'default',
  className = ''
}: {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'destructive';
  className?: string;
}) => {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
  const variants = {
    default: 'bg-gray-100 text-black',
    outline: 'border border-gray-300 text-black',
    secondary: 'bg-purple-100 text-purple-700',
    destructive: 'bg-red-100 text-red-700'
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Input = ({ className = '', ...props }: { className?: string;[key: string]: any }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    {...props}
  />
);

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pb-3 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const TabsContext = React.createContext<{ value: string; onValueChange: (value: string) => void }>({ value: '', onValueChange: () => { } });

const Tabs = ({ value, onValueChange, children, className = '' }: any) => (
  <TabsContext.Provider value={{ value, onValueChange }}>
    <div className={className}>{children}</div>
  </TabsContext.Provider>
);

const TabsList = ({ children, className = '' }: any) => (
  <div className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-black ${className}`}>
    {children}
  </div>
);

const TabsTrigger = ({ value, children, className = '' }: any) => {
  const { value: selectedValue, onValueChange } = React.useContext(TabsContext);
  return (
    <button
      onClick={() => onValueChange(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${selectedValue === value ? 'bg-white text-black shadow-sm' : 'text-black hover:text-black'
        } ${className}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children, className = '' }: any) => {
  const { value: selectedValue } = React.useContext(TabsContext);
  if (selectedValue !== value) return null;
  return <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}>{children}</div>;
};

const Counter = ({ value, label, icon: Icon, delay }: { value: string, label: string, icon: any, delay: number }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    // Each counter takes 1.5 seconds to animate, so we delay each one by 1.5 seconds after the previous
    const animation = animate(count, numericValue, {
      duration: 1.5,
      delay: delay * 1.5, // Sequential delay: 0s, 1.5s, 3s, 4.5s, 6s, 7.5s
      ease: "easeOut"
    });
    return animation.stop;
  }, [count, numericValue, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 1.5 }} // Match the animation delay
      className="text-center"
    >
      <Icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
      <div className="text-2xl font-bold text-black flex justify-center items-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm text-black font-medium">{label}</div>
    </motion.div>
  );
};

const researchStats = [
  { label: 'Research Centers', value: '15+', icon: Building2 },
  { label: 'Publications', value: '1200+', icon: FileText },
  { label: 'Patents', value: '45', icon: Award },
  { label: 'Ph.D. Scholars', value: '850+', icon: Users },
  { label: 'Citations', value: '15k+', icon: TrendingUp },
  { label: 'Collaborations', value: '50+', icon: Globe },
];

const researchCenters = [
  {
    name: 'Advanced Centre for Biotechnology',
    department: 'Biotechnology',
    head: 'Dr. Biplab Bhuyan',
    focus: ['Genetic Engineering', 'Bioinformatics', 'Drug Discovery'],
    funding: '₹15 Cr',
    icon: FlaskConical,
    color: 'from-emerald-500 to-emerald-700'
  },
  {
    name: 'Artificial Intelligence Research Lab',
    department: 'Computer Science',
    head: 'Dr. Arunabh Sarma',
    focus: ['Machine Learning', 'NLP', 'Computer Vision'],
    funding: '₹8 Cr',
    icon: Cpu,
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Environmental Studies Center',
    department: 'Environmental Science',
    head: 'Prof. Ritu Gogoi',
    focus: ['Climate Change', 'Biodiversity', 'Pollution Control'],
    funding: '₹12 Cr',
    icon: Leaf,
    color: 'from-green-500 to-green-700'
  },
  {
    name: 'Nuclear Physics Research Center',
    department: 'Physics',
    head: 'Prof. Nirmali Gogoi',
    focus: ['Particle Physics', 'Nuclear Energy', 'Radiation Studies'],
    funding: '₹20 Cr',
    icon: Atom,
    color: 'from-purple-500 to-purple-700'
  }
];

const recentPublications = [
  {
    title: 'Impact of Climate Change on Brahmaputra River Basin Ecosystem',
    authors: ['Dr. R. Gogoi', 'Dr. A. Das', 'Prof. M. Sharma'],
    journal: 'Nature Climate Change',
    year: 2024,
    citations: 45,
    type: 'Journal Article'
  },
  {
    title: 'Novel Machine Learning Approach for Assamese Language Processing',
    authors: ['Dr. A. Sarma', 'S. Kalita', 'Dr. P. Deka'],
    journal: 'ACM Computing Surveys',
    year: 2024,
    citations: 32,
    type: 'Journal Article'
  },
  {
    title: 'Genetic Diversity of Tea Plants in Northeast India',
    authors: ['Dr. B. Bhuyan', 'Dr. N. Hazarika'],
    journal: 'Plant Genetic Resources',
    year: 2023,
    citations: 28,
    type: 'Research Paper'
  },
  {
    title: 'Traditional Medicinal Plants of Assam: A Comprehensive Study',
    authors: ['Prof. L. Bora', 'Dr. K. Dutta'],
    journal: 'Journal of Ethnopharmacology',
    year: 2023,
    citations: 56,
    type: 'Review Article'
  }
];

export default function ResearchPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('centers');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge className="bg-amber-500 text-purple-900 mb-4 border-0 font-bold">
              Research Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Advancing Knowledge,
              <span className="block text-amber-300">Transforming Lives</span>
            </h1>
            <p className="text-xl text-purple-50 max-w-2xl mx-auto mb-8 font-medium">
              Leading groundbreaking research in Northeast India across multiple disciplines
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 gap-2 font-bold"
              >
                <Microscope className="w-5 h-5" />
                Explore Research
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-purple-300 hover:bg-white/10 font-bold"
              >
                View Publications
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {researchStats.map((stat, index) => (
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

      {/* Main Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="centers">Research Centers</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>

              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                <Input
                  placeholder="Search research..."
                  className="pl-10 text-black"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Research Centers Tab */}
            <TabsContent value="centers" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                {researchCenters.map((center, index) => {
                  const Icon = center.icon;
                  return (
                    <motion.div
                      key={center.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className={`w-14 h-14 bg-gradient-to-br ${center.color} rounded-xl flex items-center justify-center shadow-lg`}>
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-1 text-black group-hover:text-red-700 transition-colors duration-300">{center.name}</CardTitle>
                              <p className="text-sm text-black font-medium">{center.department}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-black font-semibold mb-1">Head</p>
                              <p className="text-sm text-black">{center.head}</p>
                            </div>
                            <div>
                              <p className="text-sm text-black font-semibold mb-2">Research Focus</p>
                              <div className="flex flex-wrap gap-2">
                                {center.focus.map((area) => (
                                  <Badge key={area} variant="secondary" className="text-xs">
                                    {area}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t">
                              <div>
                                <p className="text-xs text-black">Funding</p>
                                <p className="text-lg font-bold text-black">{center.funding}</p>
                              </div>
                              <Button size="sm" variant="outline" className="gap-1">
                                Learn More <ArrowRight className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Publications Tab */}
            <TabsContent value="publications" className="mt-8">
              <div className="space-y-4">
                {recentPublications.map((pub, index) => (
                  <motion.div
                    key={pub.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-shadow group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <Badge className="mb-2">{pub.type}</Badge>
                            <h3 className="font-semibold text-black group-hover:text-red-700 transition-colors duration-300 mb-2">{pub.title}</h3>
                            <p className="text-sm text-black mb-2">{pub.authors.join(', ')}</p>
                            <div className="flex items-center gap-4 text-sm text-black">
                              <span>{pub.journal}</span>
                              <span>•</span>
                              <span>{pub.year}</span>
                              <span>•</span>
                              <span>{pub.citations} citations</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="w-4 h-4" />
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="mt-8">
              <div className="text-center py-12">
                <p className="text-black">Research projects coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-700 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Research Opportunities
          </h2>
          <p className="text-purple-100 mb-8">
            Join our research community and contribute to groundbreaking discoveries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
              Contact Research Office
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
