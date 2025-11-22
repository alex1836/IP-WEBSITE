import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Michael Rodriguez',
    role: 'Sports Enthusiast',
    content:
      'Best IPTV service I have ever used. Zero buffering during live sports, crystal clear quality, and their support team is incredibly responsive.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Movie Lover',
    content:
      'The VOD library is massive and the 4K quality is outstanding. Setup was incredibly easy and activation was instant. Highly recommend!',
    rating: 5,
  },
  {
    name: 'James Williams',
    role: 'Family Subscriber',
    content:
      'We can watch on multiple devices simultaneously with no issues. Great value for money and my kids love the variety of channels available.',
    rating: 5,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Loved by <span className="text-cyan-400">Thousands</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join over 50,000 satisfied customers streaming worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed">
              "{testimonials[active].content}"
            </blockquote>

            <div className="text-center">
              <div className="font-semibold text-lg">{testimonials[active].name}</div>
              <div className="text-cyan-400">{testimonials[active].role}</div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  active === index ? 'bg-cyan-400 w-8' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
