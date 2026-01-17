import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Check, Loader2, CreditCard, Wallet } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FaBitcoin, FaPaypal } from 'react-icons/fa';

export function CheckoutPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const plan = location.state?.plan;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        whatsapp: ''
    });
    const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card' | 'crypto'>('paypal');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlePurchase = async (e: FormEvent) => {
        e.preventDefault();

        if (!plan) {
            toast.error('No plan selected');
            return;
        }

        setIsSubmitting(true);

        // EmailJS Configuration
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CHECKOUT;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    to_name: 'Admin',
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    from_email: formData.email,
                    whatsapp_number: formData.whatsapp || 'Not provided',
                    plan_name: plan.name,
                    plan_price: plan.price,
                    plan_period: plan.period,
                    payment_method: paymentMethod.toUpperCase(),
                    order_date: new Date().toLocaleString()
                },
                PUBLIC_KEY
            );

            toast.success('Order placed successfully! Check your email for details.');
            navigate('/thank-you');
        } catch (error: any) {
            console.error('Error sending email:', error);
            const errorMessage = error?.text || error?.message || 'Failed to place order. Please try again.';
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (!plan) {
        return (
            <div className="pt-32 pb-16 px-4 text-center">
                <h1 className="text-2xl font-bold mb-4">No plan selected</h1>
                <Link to="/packages" className="text-cyan-400 hover:underline">
                    Browse Packages
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
                    <form onSubmit={handlePurchase} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">WhatsApp Number (Optional)</label>
                            <input
                                type="tel"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                placeholder="+1 234 567 8900"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
                            />
                        </div>

                        <div className="pt-6">
                            <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                            <div className="space-y-3">
                                {/* PayPal Option */}
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('paypal')}
                                    className={`w-full p-4 rounded-lg border-2 transition-all flex items-center gap-4 ${paymentMethod === 'paypal'
                                        ? 'border-cyan-500 bg-cyan-500/10'
                                        : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                                        }`}
                                >
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'paypal' ? 'border-cyan-500' : 'border-gray-600'
                                        }`}>
                                        {paymentMethod === 'paypal' && (
                                            <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                        )}
                                    </div>
                                    <FaPaypal className="text-3xl text-blue-500" />
                                    <div className="flex-1 text-left">
                                        <p className="font-semibold text-white">PayPal</p>
                                        <p className="text-sm text-gray-400">Pay securely with PayPal</p>
                                    </div>
                                </button>

                                {/* Credit/Debit Card Option */}
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('card')}
                                    className={`w-full p-4 rounded-lg border-2 transition-all flex items-center gap-4 ${paymentMethod === 'card'
                                        ? 'border-cyan-500 bg-cyan-500/10'
                                        : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                                        }`}
                                >
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-cyan-500' : 'border-gray-600'
                                        }`}>
                                        {paymentMethod === 'card' && (
                                            <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                        )}
                                    </div>
                                    <CreditCard className="text-3xl text-cyan-400" />
                                    <div className="flex-1 text-left">
                                        <p className="font-semibold text-white">Credit/Debit Card</p>
                                        <p className="text-sm text-gray-400">Visa, Mastercard, Amex</p>
                                    </div>
                                </button>

                                {/* Cryptocurrency Option */}
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('crypto')}
                                    className={`w-full p-4 rounded-lg border-2 transition-all flex items-center gap-4 ${paymentMethod === 'crypto'
                                        ? 'border-cyan-500 bg-cyan-500/10'
                                        : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                                        }`}
                                >
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'crypto' ? 'border-cyan-500' : 'border-gray-600'
                                        }`}>
                                        {paymentMethod === 'crypto' && (
                                            <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                        )}
                                    </div>
                                    <FaBitcoin className="text-3xl text-orange-500" />
                                    <div className="flex-1 text-left">
                                        <p className="font-semibold text-white">Cryptocurrency</p>
                                        <p className="text-sm text-gray-400">Bitcoin, USDT, ETH</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                'Complete Purchase'
                            )}
                        </button>
                    </form>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-lg">{plan.name} Plan</h3>
                                <p className="text-gray-400 text-sm">{plan.period}</p>
                            </div>
                            <span className="text-2xl font-bold text-cyan-400">${plan.price}</span>
                        </div>

                        <div className="border-t border-gray-700 my-4 pt-4">
                            <ul className="space-y-2">
                                {plan.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                        <Check size={16} className="text-cyan-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-t border-gray-700 mt-4 pt-4 flex justify-between items-center">
                            <span className="font-bold">Total</span>
                            <span className="text-2xl font-bold text-white">${plan.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
