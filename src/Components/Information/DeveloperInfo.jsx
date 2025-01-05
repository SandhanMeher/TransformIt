import React from 'react';

export default function DeveloperInfo() {
    return (
        <div className='w-screen min-h-56 p-4 text-yellow-100'>
            <h1 className='text-2xl font-bold '>Developer Information</h1>
            <hr className='my-4' />
            <ul className='list-disc pl-5'>
                <li><strong>Name:</strong> Sandhan Meher</li>
                <li><strong>GitHub ID:</strong> <a href="https://github.com/SandhanMeher" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">SandhanMeher <span role="img" aria-label="GitHub">🐱</span></a></li>
                <li><strong>LinkedIn ID:</strong> <a href="https://www.linkedin.com/in/sandhan-meher-82b666225/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">linkedin.com/sandhan-mehere <span role="img" aria-label="LinkedIn">🔗</span></a></li>
                <li><strong>Twitter ID:</strong> <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">@Sandhan  <span role="img" aria-label="Twitter">🐦</span></a></li>
            </ul>
        </div>
    );
}
