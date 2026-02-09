export interface KnowledgeItem {
    id: string;
    keywords: string[];
    answer: string;
    category: 'general' | 'pricing' | 'technical' | 'guide' | 'policy' | 'content';
    links?: { text: string; url: string; external?: boolean }[];
}


export const WEBSITE_CONTENT: KnowledgeItem[] = [
    // --- CONVERSATIONAL / SMALL TALK ---
    {
        id: 'bot_identity',
        keywords: ['who are you', 'are you a bot', 'are you human', 'what is your name', 'ai', 'robot'],
        answer: "I am the DeIPTV Smart Assistant 🤖! I'm an AI here to help you get the best streaming experience.",
        category: 'general'
    },
    {
        id: 'how_are_you',
        keywords: ['how are you', 'how is used', 'how are u', 'whatsapp', 'sup', 'what up'],
        answer: "I'm doing great, thanks for asking! 🚀 Ready to help you watch your favorite channels.",
        category: 'general'
    },
    {
        id: 'compliment',
        keywords: ['good', 'great', 'awesome', 'amazing', 'cool', 'nice', 'best', 'love you', 'smart', 'intelligent'],
        answer: "Thank you! 😊 We try our best to provide the best service and support.",
        category: 'general'
    },
    {
        id: 'insult_polite',
        keywords: ['stupid', 'bad', 'idiot', 'useless', 'shut up', 'hate'],
        answer: "I'm sorry if I couldn't help you yet! 😔 Please tell me exactly what you're looking for, or ask to speak to a human on WhatsApp.",
        category: 'general',
        links: [{ text: "Chat with Human", url: "https://wa.me/message/HACCQ2SN2ZVNG1", external: true }]
    },
    {
        id: 'joke',
        keywords: ['joke', 'funny', 'laugh', 'tell me a joke'],
        answer: "Why did the IPTV stream break up with the internet? Because there was no connection! 😂 (Don't worry, our servers are much more stable!)",
        category: 'general'
    },
    {
        id: 'goodbye',
        keywords: ['bye', 'goodbye', 'see you', 'cya', 'exit', 'quit', 'leave'],
        answer: "Goodbye! 👋 Happy streaming! Come back if you need anything else.",
        category: 'general'
    },
    {
        id: 'thanks',
        keywords: ['thank', 'thx', 'thanks', 'appreciate'],
        answer: "You're very welcome! Let me know if you need anything else. 🌟",
        category: 'general'
    },
    {
        id: 'greeting',
        keywords: ['hello', 'hi', 'hey', 'start', 'good morning', 'good evening', 'salam', 'hola', 'bonjour', 'yo', 'marhaba', 'welcome'],
        answer: "Hello! 👋 Welcome to DeIPTV 8K. I'm here to answer ANY question you have about our service. How can I help?",
        category: 'general'
    },
    {
        id: 'what_is',
        keywords: ['what is deiptv', 'about you', 'who are you', 'service'],
        answer: "DeIPTV is a premium IPTV provider offering over 25,000 live TV channels and 60,000+ VODs (Movies & Series) in 4K/Ultra HD quality. We support all devices and offer 99.9% uptime with Anti-Freeze technology.",
        category: 'general',
        links: [{ text: "View Features", url: "/#features" }]
    },

    // --- PRICING & PLANS (From Plans.tsx) ---
    {
        id: 'price_general',
        keywords: ['price', 'cost', 'how much', 'pay', 'subscription', 'plan', 'package', 'rate', 'euro', 'dollar', 'cheap'],
        answer: "We have flexible plans starting from $13.00/month. \n\n**Normal Plans:**\n- 1 Month: $13\n- 3 Months: $24\n- 6 Months: $36\n- 12 Months: $59\n\n**Premium Plans (More Content & 4K):**\n- 1 Month: $15\n- 12 Months: $86 (Best Value)\n\nCheck all prices here:",
        category: 'pricing',
        links: [{ text: "View All Plans", url: "/packages" }]
    },
    {
        id: 'trial_free',
        keywords: ['trial', 'test', 'free', 'demo', 'try', 'check', 'quality'],
        answer: "Yes! We offer a **2H Free Trial** ($0.00) so you can test our premium service quality. No credit card required.",
        category: 'pricing',
        links: [{ text: "Get Free Trial", url: "https://wa.me/message/HACCQ2SN2ZVNG1", external: true }]
    },
    {
        id: 'trial_paid',
        keywords: ['24h', 'day pass', 'one day', 'daily'],
        answer: "We also offer a **24-Hour Pass** for just $4.00. This gives you full access to all VIP channels and Movies for a full day.",
        category: 'pricing',
        links: [{ text: "Buy 24H Pass", url: "/packages" }]
    },
    {
        id: 'refund_policy',
        keywords: ['refund', 'money back', 'guarantee', 'return', 'cancel'],
        answer: "We offer a **7-Day Money-Back Guarantee**. If you experience lag, buffering, or setup issues that we can't fix, we will refund you. Satisfaction guaranteed!",
        category: 'policy',
        links: [{ text: "Read Refund Policy", url: "/refund-policy" }]
    },
    {
        id: 'payment_methods',
        keywords: ['payment', 'paypal', 'credit card', 'visa', 'mastercard', 'crypto', 'bitcoin', 'usdt', 'stripe', 'pay'],
        answer: "We accept multiple secure payment methods including **PayPal**, **Credit/Debit Cards** (Visa, Mastercard, Amex), and **Cryptocurrency** (Bitcoin, USDT) for privacy.",
        category: 'pricing'
    },

    // --- CHANNELS & CONTENT (From Features.tsx & Plans.tsx) ---
    {
        id: 'channels_count',
        keywords: ['how many channels', 'list', 'content', 'sport', 'movie', 'series'],
        answer: "Our Premium plan includes **50,000+ Live Channels** and **66,000+ Movies & Series** (VOD). We cover Sports (EPL, NBA, NFL), News, Kids, Documentaries, and International channels from all countries.",
        category: 'content'
    },
    {
        id: 'quality_4k',
        keywords: ['4k', 'uhd', 'hd', 'quality', 'resolution', 'fhd'],
        answer: "Yes! We stream in **4K Ultra HD** and FHD. Ideally, you need an internet speed of at least 25 Mbps for smooth 4K streaming.",
        category: 'technical'
    },
    {
        id: 'adult_content',
        keywords: ['adult', 'xxx', '18+', 'porn'],
        answer: "We do have adult content available as an optional category. It includes parental control features to keep it secure.",
        category: 'content'
    },

    // --- SETUP & DEVICES (From GuidePage.tsx & FAQ.tsx) ---
    {
        id: 'devices_supported',
        keywords: ['device', 'smart tv', 'samsung', 'lg', 'android', 'firestick', 'ios', 'iphone', 'apple tv', 'mag', 'pc', 'windows', 'mac'],
        answer: "DeIPTV works on **ALL devices**: Samsung/LG Smart TVs, Amazon Firestick, Android Box/Phone, Apple TV, iPhone/iPad, PC, Mac, and MAG boxes.",
        category: 'technical',
        links: [{ text: "Setup Guides", url: "/guide" }]
    },
    {
        id: 'setup_firestick',
        keywords: ['setup firestick', 'install firestick', 'amazon fire', 'downloader'],
        answer: "For Firestick: 1. Install 'Downloader' app. 2. Enter code **29834** to get IPTV Smarters. 3. Login with your Xtream Codes (Username/Password) sent to your email.",
        category: 'guide',
        links: [{ text: "Full Firestick Guide", url: "/guide" }]
    },
    {
        id: 'setup_smarttv',
        keywords: ['setup smart tv', 'samsung tv', 'lg tv', 'ibo player', 'smarters tv'],
        answer: "For Smart TVs (Samsung/LG): Search for 'IPTV Smarters Pro' or 'IBO Player' in your TV's app store. Login using the details we send to your email.",
        category: 'guide',
        links: [{ text: "Smart TV Guide", url: "/guide" }]
    },
    {
        id: 'setup_mobile',
        keywords: ['setup mobile', 'android phone', 'ios setup', 'iphone'],
        answer: "For Mobile: Download 'IPTV Smarters Pro' (Android) or 'Smarters Player Lite' (iOS). Log in with Xtream Codes API using your subscription details.",
        category: 'guide'
    },

    // --- TECHNICAL & TROUBLESHOOTING ---
    {
        id: 'activtion_time',
        keywords: ['when', 'how long', 'activation', 'wait', 'instant'],
        answer: "Activation is **Instant**! You will receive your login details via email immediately after payment.",
        category: 'general'
    },
    {
        id: 'buffering_fix',
        keywords: ['freeze', 'buffer', 'lag', 'stop', 'slow', 'loading', 'stuck'],
        answer: "We use Anti-Freeze Technology to minimize buffering. If you face issues: 1. Restart your router. 2. Use a wired (Ethernet) connection if possible. 3. Check if your internet speed is above 20 Mbps.",
        category: 'technical'
    },
    {
        id: 'vpn_needed',
        keywords: ['vpn', 'proxy', 'blocked', 'secure', 'protect'],
        answer: "You do **NOT** need a VPN. Our service is secure and works globally. However, if your ISP blocks IPTV, you can use any VPN (like NordVPN or ExpressVPN) - our service is VPN-friendly.",
        category: 'technical'
    },

    // --- RESELLER (From ResellerPage.tsx) ---
    {
        id: 'reseller_program',
        keywords: ['reseller', 'agent', 'sell', 'business', 'panel', 'profit'],
        answer: "Become a DeIPTV Reseller and earn up to 100% profit! We provide a dedicated Panel to manage your customers, credits with huge discounts, and 24/7 support.",
        category: 'general',
        links: [{ text: "Join Reseller Program", url: "/reseller" }]
    },

    // --- CONTACT ---
    {
        id: 'support_contact',
        keywords: ['contact', 'help', 'support', 'email', 'chat', 'whatsapp'],
        answer: "Our support team is available 24/7 via Live Chat and WhatsApp. WhatsApp is the fastest way to get a reply.",
        category: 'general',
        links: [
            { text: "Chat on WhatsApp", url: "https://wa.me/message/HACCQ2SN2ZVNG1", external: true },
            { text: "Contact Page", url: "/contact" }
        ]
    }
];
