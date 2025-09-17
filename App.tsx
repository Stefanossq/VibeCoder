import React from 'react';
import Header from './components/Header';
import TldrGenerator from './components/TldrGenerator';
import Footer from './components/Footer';

// --- Sub-components for SaaS Landing Page ---

const FeatureCard: React.FC<{ icon: JSX.Element; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/20 text-center transform transition-transform duration-300 hover:-translate-y-2">
        <div className="flex justify-center mb-4 text-cyan-400">{React.cloneElement(icon, { className: "w-12 h-12" })}</div>
        <h3 className="text-xl font-bold font-gamified mb-2">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
);

const Features: React.FC = () => (
    <section id="features" className="py-24">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-gamified text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Unlock Your Potential</h2>
            <p className="text-lg text-purple-300 mt-2">Core features designed for rapid skill progression.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard title="AI Questmaster" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 13.5a3.375 3.375 0 00-3.375-3.375h-1.5a3.375 3.375 0 00-3.375 3.375v1.5A3.375 3.375 0 0013.125 18v1.5a3.375 3.375 0 003.375 3.375h1.5a3.375 3.375 0 003.375-3.375v-1.5a3.375 3.375 0 00-3.375-3.375h-1.5z" /></svg>}>
                Get personalized, step-by-step roadmaps from our advanced AI for any project you can imagine.
            </FeatureCard>
            <FeatureCard title="Gamified Learning" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 100-13.5h9a9.75 9.75 0 100 13.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12.75l3 3m0-3l-3 3M17.25 12.75h-6.75" /></svg>}>
                Earn XP, level up, and stay motivated. Turn the grind of learning into an addictive game.
            </FeatureCard>
            <FeatureCard title="Actionable Steps" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
                No more vague tutorials. Receive clear, concise tasks that guide you from concept to completion.
            </FeatureCard>
        </div>
    </section>
);

const PricingTier: React.FC<{ plan: string; price: string; features: string[]; primary?: boolean }> = ({ plan, price, features, primary = false }) => (
    <div className={`border rounded-lg p-8 h-full flex flex-col ${primary ? 'bg-purple-600/20 border-purple-500 shadow-2xl shadow-purple-900/50' : 'bg-gray-800/50 border-gray-700'}`}>
        <h3 className={`text-2xl font-gamified mb-4 ${primary ? 'text-purple-300' : 'text-cyan-400'}`}>{plan}</h3>
        <p className="text-4xl font-bold mb-6">{price}<span className="text-lg text-gray-400">/mo</span></p>
        <ul className="space-y-3 text-gray-300 flex-grow">
            {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {feature}
                </li>
            ))}
        </ul>
        <a href="#generator" className={`w-full text-center mt-8 font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg font-gamified ${primary ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]' : 'bg-cyan-600 hover:bg-cyan-500 text-white'}`}>
            Start Now
        </a>
    </div>
);

const Pricing: React.FC = () => (
    <section id="pricing" className="py-24 bg-gray-900/50">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-gamified text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Choose Your Path</h2>
            <p className="text-lg text-purple-300 mt-2">Simple, transparent pricing for every developer level.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <PricingTier 
                plan="Adventurer" 
                price="$0" 
                features={["5 AI Quests per month", "Standard Features", "Community Support"]}
            />
            <PricingTier 
                plan="Legend" 
                price="$12" 
                features={["Unlimited AI Quests", "Priority Feature Access", "Discord Community Role", "Priority Support"]}
                primary
            />
        </div>
    </section>
);


const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
            {/* Background glowing shapes */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            <style>
                {`
                html { scroll-behavior: smooth; }
                @keyframes blob {
	                0% { transform: translate(0px, 0px) scale(1); }
	                33% { transform: translate(30px, -50px) scale(1.1); }
	                66% { transform: translate(-20px, 20px) scale(0.9); }
	                100% { transform: translate(0px, 0px) scale(1); }
                }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
                `}
            </style>
            
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow container mx-auto px-4">
                    {/* Hero Section */}
                    <section className="py-20 text-center">
                         <h1 className="text-5xl md:text-7xl font-gamified text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                            Stop Tutorial Hell.
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-300 max-w-3xl mx-auto">
                            Transform your project ideas into <span className="text-cyan-400 font-bold">gamified quests</span> and start building, not just watching.
                        </p>
                    </section>
                    
                    {/* Generator Section */}
                    <section className="py-12 flex justify-center">
                        <TldrGenerator />
                    </section>

                    {/* Features Section */}
                    <Features />
                </main>
                
                {/* Pricing Section (Full Width) */}
                <Pricing />

                <div className="container mx-auto px-4">
                     <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
