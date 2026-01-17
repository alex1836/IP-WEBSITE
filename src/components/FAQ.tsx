import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'How quickly can I start watching DeIPTV?',
    answer:
      'Your DeIPTV account is activated instantly after payment. You can start streaming our premium channels within minutes of signing up.',
  },
  {
    question: 'What devices are supported by DeIPTV?',
    answer:
      'DeIPTV supports Smart TVs, Android, iOS, Fire TV, Apple TV, Roku, PC, Mac, and most streaming devices. You can watch on multiple devices simultaneously depending on your plan.',
  },
  {
    question: 'Is there a free DeIPTV trial available?',
    answer:
      'Yes! We offer a free IPTV trial before subscription. No credit card required. You can test DeIPTV service quality and decide if it meets your needs.',
  },
  {
    question: 'What is the DeIPTV refund policy?',
    answer:
      'We offer a 7-day money-back guarantee on all DeIPTV subscriptions. If you are not satisfied with our service, contact support within 7 days for a full refund.',
  },
  {
    question: 'Do you offer technical support for DeIPTV?',
    answer:
      'Absolutely! Our DeIPTV support team is available 24/7 via live chat, email, and WhatsApp to help with any questions or technical issues.',
  },
  {
    question: 'Can I watch DeIPTV in 4K quality?',
    answer:
      'Yes! DeIPTV Premium and Professional plans support 4K Ultra HD streaming on compatible devices with sufficient internet speed (25+ Mbps recommended).',
  },
  {
    question: 'What payment methods does DeIPTV accept?',
    answer:
      'DeIPTV accepts multiple payment methods including PayPal, credit/debit cards (Visa, Mastercard, American Express), and cryptocurrency for your convenience.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about our service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`text-cyan-400 flex-shrink-0 transition-transform ${openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  size={24}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
