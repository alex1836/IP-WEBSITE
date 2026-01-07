import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Mike Johnson',
    location: 'Texas, USA',
    content:
      'Finally a service that actually works for NFL Sunday Ticket without buffering. Setup was super easy on my Firestick.',
    rating: 5,
  },
  {
    name: 'Sarah Connor',
    location: 'California, USA',
    content:
      'Switched from cable and saving $100 a month. The movie selection is insane, literally everything is there.',
    rating: 5,
  },
  {
    name: 'David Smith',
    location: 'New York, USA',
    content:
      'Support helped me setup within 10 minutes. Great quality streams for Premier League and NBA.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    location: 'London, UK',
    content:
      'Best IPTV service I\'ve used. No freezing during big games. The 4K quality is actually real 4K.',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    location: 'Madrid, Spain',
    content:
      'Customer service is top notch. They helped me set up on my Smart TV via WhatsApp in minutes.',
    rating: 5,
  },
  {
    name: 'Ahmed Khan',
    location: 'Dubai, UAE',
    content:
      'Love the VOD section. So many movies and series updated daily. Worth every penny.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Trusted by <span className="text-cyan-400">Thousands</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our happy customers are saying about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                <User className="text-white" size={24} />
              </div>

              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>

              <blockquote className="text-gray-300 mb-6 leading-relaxed italic text-sm min-h-[60px]">
                "{testimonial.content}"
              </blockquote>

              <div>
                <div className="font-bold text-base text-white">{testimonial.name}</div>
                <div className="text-cyan-400 text-xs">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
