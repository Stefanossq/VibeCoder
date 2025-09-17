import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-16 mt-24 bg-gray-900/70 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {/* Product Column */}
                    <div>
                        <h4 className="font-bold text-cyan-400 font-gamified mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#generator" className="text-gray-400 hover:text-white transition-colors">Generator</a></li>
                            <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                            <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                        </ul>
                    </div>
                    {/* Company Column */}
                    <div>
                        <h4 className="font-bold text-purple-400 font-gamified mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                     {/* Legal Column */}
                    <div>
                        <h4 className="font-bold text-cyan-400 font-gamified mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                     {/* Social Column */}
                    <div>
                         <h4 className="font-bold text-purple-400 font-gamified mb-4">VibeCoding</h4>
                         <p className="text-gray-500">Level Up Your Code!</p>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
                     <p>&copy; {new Date().getFullYear()} VibeCoding. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;