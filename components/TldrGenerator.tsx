import React, { useState } from 'react';
import { generateQuest } from '../services/geminiService';
import { Quest } from '../types';
import QuestDisplay from './QuestDisplay';

const TldrGenerator: React.FC = () => {
    const [language, setLanguage] = useState<string>('React with TypeScript');
    const [projectGoal, setProjectGoal] = useState<string>('A personal portfolio website');
    const [quest, setQuest] = useState<Quest | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!language || !projectGoal) {
            setError('Please fill out both fields to start your quest!');
            return;
        }
        setIsLoading(true);
        setError(null);
        setQuest(null);

        try {
            const result = await generateQuest(language, projectGoal);
            setQuest(result);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const LoadingIndicator = () => (
        <div className="text-center p-8 space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400 mx-auto"></div>
            <p className="text-lg text-purple-300 font-semibold">Forjando sua Epic Quest...</p>
            <p className="text-sm text-gray-400">Os golems IA estão fazendo um trabalho duro.</p>
        </div>
    );

    return (
        <div id="generator" className="w-full max-w-2xl mx-auto bg-gray-800/60 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 shadow-2xl shadow-purple-900/30">
            <h2 className="text-3xl font-gamified text-center mb-2 text-white">Sua Epic Quest Aguarda!</h2>
            <p className="text-center text-gray-400 mb-6">Conte-nos seu objetivo e nossa IA forjará um roteiro personalizado.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="language" className="block text-sm font-bold text-cyan-400 mb-2">
                        Language / Framework
                    </label>
                    <input
                        id="language"
                        type="text"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        placeholder="e.g., Python, React, Swift"
                        className="w-full bg-gray-900/50 border-2 border-gray-700 focus:border-cyan-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    />
                </div>
                <div>
                    <label htmlFor="projectGoal" className="block text-sm font-bold text-purple-400 mb-2">
                        Project Goal
                    </label>
                    <input
                        id="projectGoal"
                        type="text"
                        value={projectGoal}
                        onChange={(e) => setProjectGoal(e.target.value)}
                        placeholder="e.g., A weather app, a snake game"
                        className="w-full bg-gray-900/50 border-2 border-gray-700 focus:border-purple-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-gamified shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                >
                    {isLoading ? 'Generating...' : 'Generate Quest'}
                </button>
            </form>

            <div className="mt-8">
                {isLoading && <LoadingIndicator />}
                {error && <div className="text-center bg-red-900/50 border border-red-500 text-red-300 p-4 rounded-lg">{error}</div>}
                {quest && <QuestDisplay quest={quest} />}
            </div>
        </div>
    );
};

export default TldrGenerator;