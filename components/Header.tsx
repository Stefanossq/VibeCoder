import React from 'react';

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const Header: React.FC = () => {
    return (
        <header className="py-6 px-4 md:px-8 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800/50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <CodeIcon />
                    <h1 className="text-2xl font-gamified text-white drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
                        VibeCoding
                    </h1>
                </div>
                 <div className="flex items-center gap-4">
                     <button className="text-gray-300 hover:text-white transition-colors duration-300">
                         Login
                     </button>
                     <a href="#pricing" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                        Sign Up
                    </a>
                 </div>
            </div>
        </header>
    );
};

export default Header;