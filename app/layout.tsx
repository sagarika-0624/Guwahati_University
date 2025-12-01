'use client';

import React from 'react';
import './globals.css';
import UnifiedHeader from '@/app/Components/layout/UnifiedHeader';
import Footer from '@/app/Components/layout/Footer';
import { LanguageProvider } from '@/components/ui/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --color-primary: #991b1b;
            --color-primary-light: #dc2626;
            --color-secondary: #f59e0b;
            --color-accent: #d97706;
            --font-primary: 'Inter', sans-serif;
            --font-secondary: 'Playfair Display', serif;
          }
          
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap');
          
          body {
            font-family: var(--font-primary);
            margin: 0;
            padding: 0;
          }
          
          h1, h2, h3 {
            font-family: var(--font-primary);
          }
          
          .font-serif {
            font-family: var(--font-secondary);
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #991b1b;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #7f1d1d;
          }
          
          /* Smooth scroll */
          html {
            scroll-behavior: smooth;
          }
          
          /* Selection color */
          ::selection {
            background: #991b1b;
            color: white;
          }
        `}</style>
      </head>
      <body>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col bg-white">
            <UnifiedHeader />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}