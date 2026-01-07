import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

const movieItems: ContentItem[] = [
  {
    id: 'movie-1',
    title: 'Bandida: A Número Um',
    category: 'Action',
    image: '/22.webp',
  },
  {
    id: 'movie-2',
    title: 'Blood Free',
    category: 'Thriller',
    image: '/33.webp',
  },
  {
    id: 'movie-3',
    title: 'Gaddar',
    category: 'Drama',
    image: '/44.webp',
  },
  {
    id: 'movie-4',
    title: 'The Frog',
    category: 'Suspense',
    image: '/55.webp',
  },
  {
    id: 'movie-5',
    title: 'Black Bird',
    category: 'Crime Drama',
    image: '/66.webp',
  },
  {
    id: 'movie-6',
    title: 'Bandida: A Número Um',
    category: 'Action',
    image: '/22.webp',
  },
];

const sportItems: ContentItem[] = [
  {
    id: 'sport-1',
    title: 'Creed',
    category: 'Boxing',
    image: '/MMA1-Best-IPTV (2).png',
  },
  {
    id: 'sport-2',
    title: 'NHL Finals',
    category: 'Hockey',
    image: '/NHL2-Premium-IPTV (1).png',
  },
  {
    id: 'sport-3',
    title: 'NHL Championship',
    category: 'Hockey League',
    image: '/MHL-IPTV-Service.png',
  },
  {
    id: 'sport-4',
    title: 'NBA Championship',
    category: 'Basketball',
    image: '/NBA-IPTV-Provider.png',
  },
  {
    id: 'sport-5',
    title: 'MMA Championship',
    category: 'Mixed Martial Arts',
    image: '/MMA1-Best-IPTV-USA.png',
  },
  {
    id: 'sport-6',
    title: 'Creed',
    category: 'Boxing',
    image: '/MMA1-Best-IPTV (2).png',
  },
];

interface CarouselProps {
  items: ContentItem[];
  title: string;
}

function Carousel({ items, title }: CarouselProps) {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        scrollContainer.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainer.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });

      setTimeout(() => {
        if (scrollContainer.current) {
          setCanScrollLeft(scrollContainer.current.scrollLeft > 0);
          setCanScrollRight(
            scrollContainer.current.scrollLeft <
            scrollContainer.current.scrollWidth -
            scrollContainer.current.clientWidth -
            10
          );
        }
      }, 100);
    }
  };

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-cyan-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-cyan-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainer}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 h-80 relative group/card rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-all flex flex-col justify-end p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="text-lg font-bold leading-tight">{item.title}</h4>
                  <p className="text-sm text-cyan-400">{item.category}</p>
                </div>
                <button className="w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition-all shadow-lg">
                  <Play size={24} className="fill-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContentCarousel() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold mb-2">150,000+ Latest VOD Titles Available</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Stream <span className="text-cyan-400">Movies & Sports</span>
          </h2>
        </div>

        <div className="space-y-12">
          <Carousel items={movieItems} title="Popular Movies" />
          <Carousel items={sportItems} title="Live Sports" />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Say Goodbye to Cable Costs — The only TV subscription you need
          </p>
          <Link
            to="/packages"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
          >
            Explore Full Library
          </Link>
        </div>
      </div>
    </section>
  );
}
