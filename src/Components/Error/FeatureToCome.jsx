import React from 'react';
import { Link } from 'react-router-dom';

export default function FeatureToCome() {
    return (
        <div className='h-screen w-screen bg-slate-500 flex items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-white mb-4'>🚀 Feature Coming Soon</h1>
                <p className='text-lg text-white mb-4'>We're working hard to bring you this feature. Stay tuned! 😊</p>
                <Link to="/" className='text-lg text-blue-300 underline'>Go back to Home</Link>
            </div>
        </div>
    );
}
