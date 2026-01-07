import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
    {
        title: 'The Future of IPTV Streaming in 2024',
        excerpt: 'Discover how IPTV technology is evolving with 4K streaming, AI recommendations, and better compression algorithms.',
        date: 'March 15, 2024',
        author: 'Tech Team',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000',
    },
    {
        title: 'How to Setup IPTV on Your Smart TV',
        excerpt: 'A comprehensive guide to setting up your subscription on Samsung, LG, and Android TV devices.',
        date: 'March 10, 2024',
        author: 'Support Team',
        category: 'Guides',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=1000',
    },
    {
        title: 'Top Sports Events to Watch This Month',
        excerpt: 'Don\'t miss out on the biggest sporting events happening this month. Check our schedule.',
        date: 'March 5, 2024',
        author: 'Sports Editor',
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000',
    },
];

export function BlogPage() {
    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Latest <span className="text-cyan-400">News</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Stay updated with the latest trends, guides, and announcements
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={14} />
                                        {post.author}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <button className="flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all">
                                    Read More <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
