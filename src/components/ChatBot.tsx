import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ArrowRight, Loader2, Sparkles, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { WEBSITE_CONTENT, KnowledgeItem } from '../data/websiteContent';

interface Message {
    id: number;
    text: React.ReactNode;
    sender: 'bot' | 'user';
    timestamp: Date;
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello! 👋 I'm your DeIPTV Assistant. Ask me about prices, channels, devices, or anything else!",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI thinking delay
        setTimeout(() => {
            const responseObj = generateSmartResponse(userMessage.text as string);

            const botMessage: Message = {
                id: Date.now() + 1,
                text: responseObj.text,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 800 + Math.random() * 800); // Natural delay
    };

    const generateSmartResponse = (input: string): { text: React.ReactNode } => {
        const lowerInput = input.toLowerCase();

        // Simple scoring algorithm
        let bestMatch: KnowledgeItem | null = null;
        let highestScore = 0;

        for (const item of WEBSITE_CONTENT) {
            let score = 0;
            for (const keyword of item.keywords) {
                if (lowerInput.includes(keyword.toLowerCase())) {
                    score += keyword.length; // Prioritize longer, more specific keywords
                }
            }
            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }
        }

        if (bestMatch && highestScore > 0) {
            return {
                text: (
                    <div className="space-y-3">
                        <p>{bestMatch.answer}</p>
                        {/* Dynamic Links/Buttons */}
                        {bestMatch.links && bestMatch.links.length > 0 && (
                            <div className="flex flex-col gap-2 mt-2">
                                {bestMatch.links.map((link, idx) => (
                                    link.external ? (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 bg-green-600/20 text-green-400 text-xs py-2 px-3 rounded-lg hover:bg-green-600/30 transition-colors border border-green-500/30"
                                        >
                                            {link.text} <ExternalLink size={12} />
                                        </a>
                                    ) : (
                                        <button
                                            key={idx}
                                            onClick={() => { setIsOpen(false); navigate(link.url); }}
                                            className="flex items-center justify-center gap-2 bg-cyan-500/20 text-cyan-400 text-xs py-2 px-3 rounded-lg hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
                                        >
                                            {link.text} <ArrowRight size={12} />
                                        </button>
                                    )
                                ))}
                            </div>
                        )}
                    </div>
                )
            };
        }

        // Fallback / AI "I don't know" handling
        const fallbacks = [
            "I'm not 100% sure about that, but our support team definitely knows! You can check our FAQ page or chat with us on WhatsApp.",
            "That's a good question. While I look that up, you might want to view our packages or contact support for a quick answer."
        ];

        return {
            text: (
                <div className="space-y-3">
                    <p>{fallbacks[Math.floor(Math.random() * fallbacks.length)]}</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <button
                            onClick={() => { setIsOpen(false); navigate('/faq-page'); }}
                            className="flex items-center justify-center gap-1 bg-gray-700 text-white text-xs py-2 px-2 rounded hover:bg-gray-600"
                        >
                            View FAQ
                        </button>
                        <a
                            href="https://wa.me/message/HACCQ2SN2ZVNG1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1 bg-green-600 text-white text-xs py-2 px-2 rounded hover:bg-green-700"
                        >
                            WhatsApp Support
                        </a>
                    </div>
                </div>
            )
        };
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center md:right-8 md:bottom-8 ${isOpen ? 'bg-gray-700 rotate-90' : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/50'
                    }`}
            >
                {isOpen ? <X size={28} className="text-white" /> : <MessageCircle size={28} className="text-white fill-current" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                )}
            </button>

            {/* Chat Window */}
            <div
                className={`fixed bottom-24 right-4 z-50 w-[90vw] md:w-[380px] md:right-8 bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
                    }`}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-b border-gray-700 flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                            <Bot size={24} className="text-white" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                    </div>
                    <div>
                        <h3 className="font-bold text-white flex items-center gap-2">
                            DeIPTV Assistant
                            <Sparkles size={14} className="text-amber-400" />
                        </h3>
                        <p className="text-xs text-cyan-400">Online | Replies Instantly</p>
                    </div>
                </div>

                {/* Messages Body */}
                <div className="h-[400px] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-gray-700' : 'bg-cyan-500/20'
                                }`}>
                                {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} className="text-cyan-400" />}
                            </div>

                            <div
                                className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${msg.sender === 'user'
                                    ? 'bg-blue-600 text-white rounded-tr-none'
                                    : 'bg-gray-800 text-gray-200 border border-gray-700 rounded-tl-none'
                                    }`}
                            >
                                <div className="whitespace-pre-line">{msg.text}</div>
                                <div className={`text-[10px] mt-1 opacity-50 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                <Bot size={16} className="text-cyan-400" />
                            </div>
                            <div className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-2xl rounded-tl-none">
                                <div className="flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-gray-800 bg-gray-900/50">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask about channels, prices..."
                            className="w-full bg-gray-800 text-white text-sm rounded-full pl-4 pr-12 py-3 border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-500"
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim() || isTyping}
                            className="absolute right-1 p-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isTyping ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                        </button>
                    </div>
                    <div className="mt-2 text-center">
                        <p className="text-[10px] text-gray-500">
                            Powered by <span className="text-cyan-600 font-semibold">DeIPTV AI</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
