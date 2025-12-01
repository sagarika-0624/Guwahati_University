'use client';

import { Suspense } from 'react';
import Research from '@/app/Pages/Research';

export default function ResearchPage() {
    return (
        <Suspense fallback={<div />}> 
            <Research />
        </Suspense>
    );
}
