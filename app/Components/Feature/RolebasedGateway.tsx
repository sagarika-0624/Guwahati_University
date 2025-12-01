import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPageUrl } from '@/lib/utils';
import {
  GraduationCap, Users, Briefcase, UserPlus,
  BookOpen, Calendar, Award, FileText, BarChart3,
  ClipboardList, Settings, Bell, ArrowRight, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/ui/LanguageContext';

const roles = [
  {
    id: 'student',
    name: 'Student',
    icon: GraduationCap,
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Access courses, grades, schedules, and campus resources',
    features: [
      { name: 'Course Materials', icon: BookOpen },
      { name: 'Exam Schedule', icon: Calendar },
      { name: 'Grade Portal', icon: Award },
      { name: 'Assignments', icon: FileText }
    ],
    quickActions: [
      { name: 'View Timetable', href: 'StudentPortal' },
      { name: 'Check Results', href: 'Results' },
      { name: 'Library Access', href: 'Library' }
    ]
  },
  {
    id: 'faculty',
    name: 'Faculty',
    icon: Users,
    color: 'from-emerald-500 to-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    description: 'Manage courses, research, and academic administration',
    features: [
      { name: 'Research Portal', icon: BarChart3 },
      { name: 'Student Management', icon: ClipboardList },
      { name: 'Publication Hub', icon: FileText },
      { name: 'Course Admin', icon: Settings }
    ],
    quickActions: [
      { name: 'Upload Materials', href: 'Upload-Materials' },
      { name: 'Mark Attendance', href: 'Attendance' },
      { name: 'Submit Grades', href: 'Grades' }
    ]
  },
  {
    id: 'staff',
    name: 'Staff',
    icon: Briefcase,
    color: 'from-purple-500 to-purple-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Administrative tools and operational management',
    features: [
      { name: 'HR Portal', icon: Users },
      { name: 'Announcements', icon: Bell },
      { name: 'Reports', icon: BarChart3 },
      { name: 'Records', icon: FileText }
    ],
    quickActions: [
      { name: 'Staff Directory', href: 'Staff-Directory' },
      { name: 'Leave Portal', href: 'Leave-Portal' },
      { name: 'IT Support', href: 'IT-Support' }
    ]
  },
  {
    id: 'prospective',
    name: 'Prospective Student',
    icon: UserPlus,
    color: 'from-amber-500 to-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    description: 'Explore programs, admissions, and campus life',
    features: [
      { name: 'Programs', icon: BookOpen },
      { name: 'Admissions', icon: FileText },
      { name: 'Campus Tour', icon: Calendar },
      { name: 'Scholarships', icon: Award }
    ],
    quickActions: [
      { name: 'Apply Now', href: 'Admissions' },
      { name: 'View Programs', href: 'Programs' },
      { name: 'Virtual Tour', href: 'CampusLife' }
    ]
  }
];

export default function RoleBasedGateway() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-orange-50/20 to-red-50/30 z-0" />
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, #f59e0b 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
              {t('personalizedExperience')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('yourGateway')}
              <span className="bg-gradient-to-r from-red-700 to-amber-600 bg-clip-text text-transparent"> {t('excellence')}</span>
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              {t('selectRoleDesc')}
            </p>
          </motion.div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;
            const isHovered = hoveredRole === role.id;

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredRole(role.id)}
                onMouseLeave={() => setHoveredRole(null)}
              >
                <motion.div
                  className={`relative h-full bg-white rounded-2xl border-2 transition-colors cursor-pointer overflow-hidden ${isSelected ? role.borderColor : 'border-gray-100 hover:border-gray-200'
                    }`}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedRole(isSelected ? null : role.id)}
                >
                  {/* Top gradient bar */}
                  <div className={`h-2 bg-gradient-to-r ${role.color}`} />

                  <div className="p-6">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                      animate={{ rotate: isHovered ? 360 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-black hover:text-red-700 transition-colors duration-300 mb-2 cursor-default">{role.name}</h3>
                    <p className="text-black text-sm mb-6">{role.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {role.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-black">
                          <feature.icon className="w-4 h-4 text-gray-400" />
                          <span>{feature.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expand Button */}
                    <Button
                      variant="outline"
                      className={`w-full group ${isSelected ? 'bg-gray-900 text-white hover:bg-gray-800' : ''}`}
                    >
                      {isSelected ? 'View Actions' : 'Select Role'}
                      <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </Button>
                  </div>

                  {/* Expanded Actions */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-gray-100 overflow-hidden"
                      >
                        <div className="p-6 space-y-3">
                          <p className="text-xs font-semibold text-black uppercase tracking-wide">Quick Actions</p>
                          {role.quickActions.map((action, i) => (
                            <a
                              key={i}
                              href={createPageUrl(action.href)}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                            >
                              <span className="font-medium text-black">{action.name}</span>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* SSO Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full border border-green-200">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-medium">{t('ssoEnabled')}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}