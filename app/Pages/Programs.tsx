// app/programs/page.tsx
'use client';

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, GraduationCap, Clock, Users, BookOpen, ArrowRight, Filter
} from 'lucide-react';

// UI Components (since imports are missing)
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
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    {...props}
  />
);

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const Select = ({
  value,
  onValueChange,
  children
}: {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { value, onValueChange })
      )}
    </div>
  );
};

const SelectTrigger = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <button
    className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 opacity-50"
    >
      <path
        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  </button>
);

const SelectValue = ({ placeholder }: { placeholder?: string }) => (
  <span className="text-black">{placeholder}</span>
);

const SelectContent = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`absolute top-full z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-1 shadow-lg ${className}`}>
    {children}
  </div>
);

const SelectItem = ({
  value,
  children,
  ...props
}: {
  value: string;
  children: React.ReactNode;
  [key: string]: any;
}) => (
  <button
    className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    onClick={() => props.onValueChange?.(value)}
    {...props}
  >
    {children}
  </button>
);

const programs = [
  { name: 'B.Sc. Computer Science', level: 'UG', duration: '3 Years', seats: 120, dept: 'Science' },
  { name: 'B.Sc. Physics', level: 'UG', duration: '3 Years', seats: 100, dept: 'Science' },
  { name: 'B.Sc. Chemistry', level: 'UG', duration: '3 Years', seats: 100, dept: 'Science' },
  { name: 'B.Sc. Mathematics', level: 'UG', duration: '3 Years', seats: 80, dept: 'Science' },
  { name: 'B.A. English', level: 'UG', duration: '3 Years', seats: 150, dept: 'Arts' },
  { name: 'B.A. Assamese', level: 'UG', duration: '3 Years', seats: 100, dept: 'Arts' },
  { name: 'B.A. Economics', level: 'UG', duration: '3 Years', seats: 120, dept: 'Arts' },
  { name: 'B.Com', level: 'UG', duration: '3 Years', seats: 200, dept: 'Commerce' },
  { name: 'M.Sc. Computer Science', level: 'PG', duration: '2 Years', seats: 60, dept: 'Science' },
  { name: 'M.Sc. Physics', level: 'PG', duration: '2 Years', seats: 50, dept: 'Science' },
  { name: 'M.A. English', level: 'PG', duration: '2 Years', seats: 80, dept: 'Arts' },
  { name: 'MBA', level: 'PG', duration: '2 Years', seats: 120, dept: 'Commerce' },
  { name: 'Ph.D. Computer Science', level: 'PhD', duration: '3-5 Years', seats: 20, dept: 'Science' },
  { name: 'Ph.D. Physics', level: 'PhD', duration: '3-5 Years', seats: 15, dept: 'Science' },
  { name: 'LLB', level: 'UG', duration: '5 Years', seats: 60, dept: 'Law' },
  { name: 'LLM', level: 'PG', duration: '2 Years', seats: 30, dept: 'Law' },
];

export default function Programs() {
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('all');
  const [dept, setDept] = useState('all');

  const filteredPrograms = programs.filter(program => {
    const matchSearch = program.name.toLowerCase().includes(search.toLowerCase());
    const matchLevel = level === 'all' || program.level === level;
    const matchDept = dept === 'all' || program.dept === dept;
    return matchSearch && matchLevel && matchDept;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-amber-500 text-white mb-4 border-0">
            200+ Programs
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">Academic Programs</h1>
          <p className="text-red-100 max-w-2xl mx-auto text-lg">
            Discover programs across Science, Arts, Commerce, and Law
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b sticky top-0 z-40 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
            <Input
              placeholder="Search programs..."
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={level} onValueChange={setLevel}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="UG">Undergraduate</SelectItem>
              <SelectItem value="PG">Postgraduate</SelectItem>
              <SelectItem value="PhD">Doctorate</SelectItem>
            </SelectContent>
          </Select>

          <Select value={dept} onValueChange={setDept}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="Science">Science</SelectItem>
              <SelectItem value="Arts">Arts</SelectItem>
              <SelectItem value="Commerce">Commerce</SelectItem>
              <SelectItem value="Law">Law</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-black">
              Available Programs ({filteredPrograms.length})
            </h2>
            <div className="flex items-center gap-2 text-sm text-black">
              <Filter className="w-4 h-4" />
              <span>Filtered Results</span>
            </div>
          </div>

          {/* Empty State */}
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">No programs found</h3>
              <p className="text-black mb-4">Try adjusting your search criteria</p>
              <Button
                onClick={() => {
                  setSearch('');
                  setLevel('all');
                  setDept('all');
                }}
                variant="outline"
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Badges */}
                      <div className="flex items-start justify-between mb-4">
                        <Badge className={
                          program.level === 'UG' ? 'bg-blue-100 text-blue-700 border-0' :
                            program.level === 'PG' ? 'bg-emerald-100 text-emerald-700 border-0' :
                              'bg-purple-100 text-purple-700 border-0'
                        }>
                          {program.level}
                        </Badge>
                        <Badge variant="outline">{program.dept}</Badge>
                      </div>

                      {/* Program Name */}
                      <h3 className="text-lg font-bold text-black mb-3 flex-1">
                        {program.name}
                      </h3>

                      {/* Program Details */}
                      <div className="flex items-center gap-4 text-sm text-black mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {program.seats} seats
                        </span>
                      </div>

                      {/* Action Button */}
                      <Button variant="outline" className="w-full gap-2 group">
                        View Details
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}