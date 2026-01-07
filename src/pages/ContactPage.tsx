import { useState, FormEvent } from 'react';
import { Mail, MessageCircle, MapPin, Phone, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // EmailJS Configuration - support@deiptv8k.com
        const SERVICE_ID = 'service_iuitcs4';  // Gmail service
        const TEMPLATE_ID = 'template_4rmwze6';  // Contact form template
        const PUBLIC_KEY = '5jt4ss4iP86wegTkN';

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Admin'
                },
                PUBLIC_KEY
            );

            toast.success('Message sent successfully! We will get back to you soon.');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: 'General Inquiry',
                message: ''
            });
        } catch (error: any) {
            console.error('Error sending email:', error);
            const errorMessage = error?.text || error?.message || 'Failed to send message. Please try again later.';
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Contact Us
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Have questions? We're here to help. Reach out to us through any of the channels below.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                        <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white mb-1">Email Support</h4>
                                    <p className="text-gray-400 text-sm mb-2">Our team usually responds within 24 hours.</p>
                                    <a href="mailto:support@deiptv8k.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                        support@deiptv8k.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white mb-1">Live Chat</h4>
                                    <p className="text-gray-400 text-sm mb-2">Available 24/7 for instant assistance.</p>
                                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-left">
                                        Start a chat
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white mb-1">WhatsApp Support</h4>
                                    <p className="text-gray-400 text-sm mb-2">Chat with us on WhatsApp.</p>
                                    <a href="https://wa.me/message/HACCQ2SN2ZVNG1" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                        +1 (716) 328-0936
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white mb-1">Location</h4>
                                    <p className="text-gray-400 text-sm">
                                        United States
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                            <select
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            >
                                <option>General Inquiry</option>
                                <option>Technical Support</option>
                                <option>Billing Question</option>
                                <option>Refund Request</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
