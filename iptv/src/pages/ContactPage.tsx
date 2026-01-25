import { useState, FormEvent } from 'react';
import { Mail, MessageCircle, MapPin, Phone, Loader2, Shield } from 'lucide-react';
import toast from 'react-hot-toast';
import { contactFormSchema } from '../utils/validation';
import { useRateLimit, formatTimeRemaining } from '../utils/rateLimit';
import { ZodError } from 'zod';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [honeypot, setHoneypot] = useState(''); // Bot detection
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    // Rate limiting: 3 attempts per minute
    const { checkRateLimit, isBlocked } = useRateLimit(3, 60000);

    // reCAPTCHA
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Bot detection - honeypot field should be empty
        if (honeypot) {
            return;
        }

        // Check rate limit
        const rateLimitCheck = checkRateLimit();
        if (!rateLimitCheck.allowed) {
            const timeRemaining = rateLimitCheck.resetTime
                ? formatTimeRemaining(rateLimitCheck.resetTime)
                : '1 minute';
            toast.error(`Too many attempts. Please try again in ${timeRemaining}.`);
            return;
        }

        // Validate form data with Zod
        try {
            const validatedData = contactFormSchema.parse(formData);
            setValidationErrors({});

            setIsSubmitting(true);

            // Get reCAPTCHA token
            if (!executeRecaptcha) {
                toast.error('reCAPTCHA not ready');
                setIsSubmitting(false);
                return;
            }

            const token = await executeRecaptcha('contact_form');

            // Send to Backend API
            const response = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...validatedData,
                    recaptchaToken: token
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            toast.success('Message sent successfully! We will get back to you soon.');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: 'General Inquiry',
                message: ''
            });
        } catch (error) {
            if (error instanceof ZodError) {
                const errors: Record<string, string> = {};
                error.issues.forEach((err: any) => {
                    if (err.path[0]) {
                        errors[err.path[0].toString()] = err.message;
                    }
                });
                setValidationErrors(errors);
                toast.error('Please check the form for errors.');
            } else {
                console.error('Submission error:', error);
                toast.error('Failed to send message. Please try again later.');
            }
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
        // Clear validation error for this field
        if (validationErrors[id]) {
            setValidationErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[id];
                return newErrors;
            });
        }
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
                                    className={`w-full bg-gray-700 border ${validationErrors.firstName ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors`}
                                    placeholder="John"
                                />
                                {validationErrors.firstName && (
                                    <p className="text-red-400 text-xs mt-1">{validationErrors.firstName}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className={`w-full bg-gray-700 border ${validationErrors.lastName ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors`}
                                    placeholder="Doe"
                                />
                                {validationErrors.lastName && (
                                    <p className="text-red-400 text-xs mt-1">{validationErrors.lastName}</p>
                                )}
                            </div>
                        </div>

                        {/* Honeypot field - hidden from users, catches bots */}
                        <div className="hidden" aria-hidden="true">
                            <label htmlFor="website">Website</label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`w-full bg-gray-700 border ${validationErrors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors`}
                                placeholder="john@example.com"
                            />
                            {validationErrors.email && (
                                <p className="text-red-400 text-xs mt-1">{validationErrors.email}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                            <select
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={`w-full bg-gray-700 border ${validationErrors.subject ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors`}
                            >
                                <option>General Inquiry</option>
                                <option>Technical Support</option>
                                <option>Billing Question</option>
                                <option>Refund Request</option>
                            </select>
                            {validationErrors.subject && (
                                <p className="text-red-400 text-xs mt-1">{validationErrors.subject}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className={`w-full bg-gray-700 border ${validationErrors.message ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors`}
                                placeholder="How can we help you?"
                            ></textarea>
                            {validationErrors.message && (
                                <p className="text-red-400 text-xs mt-1">{validationErrors.message}</p>
                            )}
                        </div>

                        {/* Rate limit warning */}
                        {isBlocked && (
                            <div className="flex items-center gap-2 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                                <Shield className="text-yellow-400" size={20} />
                                <p className="text-yellow-400 text-sm">Rate limit active. Please wait before submitting again.</p>
                            </div>
                        )}
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
