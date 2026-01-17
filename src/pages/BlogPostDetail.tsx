import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import posts from '../data/blogPosts.json';

export function BlogPostDetail() {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="pt-32 pb-20 text-center">
                <h1 className="text-2xl font-bold">Post not found</h1>
                <Link to="/blog" className="text-cyan-400 mt-4 inline-block">Back to Blog</Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | DeIPTV Blog</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.image} />
                <link rel="canonical" href={`https://deiptv8k.com/blog/${post.slug}`} />
            </Helmet>

            <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Link to="/blog" className="flex items-center gap-2 text-cyan-400 mb-8 hover:gap-3 transition-all">
                    <ArrowLeft size={20} /> Back to Blog
                </Link>

                <div className="mb-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full font-semibold">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime || '5 min read'}
                        </div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                            <User size={20} className="text-gray-400" />
                        </div>
                        <div>
                            <div className="text-white font-semibold">{post.author}</div>
                            <div className="text-gray-400 text-sm">IPTV Expert</div>
                        </div>
                    </div>
                </div>

                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-3xl mb-12 shadow-2xl"
                />

                <div
                    className="prose prose-invert prose-cyan max-w-none text-gray-300 leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to experience buffer-free streaming?</h3>
                    <p className="text-gray-400 mb-8">Join 50,000+ happy customers and start your DeIPTV journey today.</p>
                    <Link
                        to="/packages"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                    >
                        View Our Plans
                    </Link>
                </div>
            </article>
        </>
    );
}
