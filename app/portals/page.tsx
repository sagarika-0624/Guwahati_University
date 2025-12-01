'use client';

import React from 'react';

export default function PortalsPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-black mb-8">University Portals</h1>
                <div className="grid md:grid-cols-3 gap-6">
                    <a href="/mmtc" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                        <h2 className="text-2xl font-bold mb-2">MMTC Portal</h2>
                        <p className="text-black">Access MMTC resources</p>
                    </a>
                    <a href="/studentportal" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                        <h2 className="text-2xl font-bold mb-2">Student Portal</h2>
                        <p className="text-black">Student services and resources</p>
                    </a>
                    <a href="/admissionportal" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                        <h2 className="text-2xl font-bold mb-2">Admission Portal</h2>
                        <p className="text-black">Apply for admission</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
