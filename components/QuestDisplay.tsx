
import React from 'react';
import { Quest, QuestStep } from '../types';

interface QuestDisplayProps {
    quest: Quest;
}

const CheckpointIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const StepCard: React.FC<{ step: QuestStep; index: number }> = ({ step, index }) => {
    return (
        <div 
            className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:border-purple-400"
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
        >
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <CheckpointIcon />
                    <h3 className="text-lg font-bold text-cyan-400 font-gamified">Level {step.level}: {step.title}</h3>
                </div>
                <div className="bg-yellow-500 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
                    {step.xp} XP
                </div>
            </div>
            <p className="text-gray-300">{step.description}</p>
        </div>
    );
};

const QuestDisplay: React.FC<QuestDisplayProps> = ({ quest }) => {
    return (
        <div className="mt-12 w-full max-w-4xl mx-auto">
            <style>
                {`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
            <div className="text-center mb-8">
                <h2 className="text-4xl font-gamified text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] mb-2">{quest.title}</h2>
                <p className="text-purple-300 text-lg">{quest.description}</p>
            </div>
            <div className="space-y-4">
                {quest.steps.map((step, index) => (
                    <StepCard key={index} step={step} index={index} />
                ))}
            </div>
        </div>
    );
};

export default QuestDisplay;
