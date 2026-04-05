import { Link } from 'react-router';
import { ArrowRight, ArrowLeft, Heart, Users, Award, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from '../../assets/3088c26f39780943c73062cfd3ac8ae7a1f65b7c.png';
import { useState, useEffect } from 'react';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1526461591544-198d2190f270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5nYWxpJTIwaGFuZGljcmFmdCUyMHBvdHRlcnl8ZW58MXx8fHwxNzcyNzE3Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1600',
    label: 'Traditional Pottery',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1762764214015-d5c22646465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjB0ZXh0aWxlJTIwaW5kaWF8ZW58MXx8fHwxNzcyNzE3Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1600',
    label: 'Handwoven Textiles',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1762342345465-d021b8491309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc2FuJTIwamV3ZWxyeXxlbnwxfHx8fDE3NzI3MTc3NzV8MA&ixlib=rb-4.1.0&q=80&w=1600',
    label: 'Artisan Jewelry',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1767330855351-480010c6c194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5nYWxpJTIwYXJ0JTIwY3VsdHVyZXxlbnwxfHx8fDE3NzI3MTc3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1600',
    label: 'Bengali Art',
  },
];

export function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section — Horizontal Image Carousel */}
      <section className="relative text-white overflow-hidden" style={{ height: '100vh', minHeight: '600px' }}>
        {/* Slides */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: idx === activeSlide ? 1 : 0 }}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/70 via-red-800/60 to-pink-900/50"></div>
          </div>
        ))}

        {/* Alpana Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <circle cx="200" cy="150" r="80" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="200" cy="150" r="60" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="200" cy="150" r="40" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="1000" cy="600" r="100" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="1000" cy="600" r="70" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <img src={logo} alt="Ekusher Naree" className="w-44 h-44 object-contain drop-shadow-2xl" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">একুশের নারী</h1>
              <p className="text-2xl md:text-3xl mb-4 font-semibold text-yellow-100">We Are Together</p>
              <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-orange-50 leading-relaxed">
                Celebrating the timeless beauty of handcrafted artisan products that tell stories of tradition, culture, and the skilled craftsmanship of Bengali women artisans
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center space-x-3 bg-white text-orange-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-50 transition-all shadow-2xl hover:scale-105 border-4 border-yellow-300"
              >
                <Sparkles size={24} />
                <span>Explore Our Collection</span>
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Prev / Next Arrows */}
        <button
          onClick={() => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
          aria-label="Previous slide"
        >
          <ArrowLeft size={22} className="text-white" />
        </button>
        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
          aria-label="Next slide"
        >
          <ArrowRight size={22} className="text-white" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`rounded-full transition-all ${idx === activeSlide ? 'w-8 h-3 bg-white' : 'w-3 h-3 bg-white/50 hover:bg-white/80'}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slide label */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
          <span className="text-white/70 text-sm font-medium tracking-widest uppercase">
            {heroSlides[activeSlide].label}
          </span>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" className="w-full h-16 fill-amber-50">
            <path d="M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Features Section with Artistic Cards */}
      <section className="py-24 bg-amber-50 relative">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M 0,0 Q 100,50 200,0 L 200,200 L 0,200 Z" fill="url(#gradient1)" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">
              Our Mission
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-orange-600"></div>
              <div className="w-3 h-3 bg-orange-600 rotate-45"></div>
              <div className="w-24 h-1 bg-orange-600"></div>
              <div className="w-3 h-3 bg-orange-600 rotate-45"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-transparent to-orange-600"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering women artisans and preserving our cultural heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-4 border-orange-200">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Handcrafted with Love</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Each piece is meticulously handcrafted by skilled artisans, preserving centuries-old culture, traditions, and craftsmanship
                </p>
                {/* Decorative dots */}
                <div className="flex justify-center space-x-2 mt-6">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-4 border-red-200">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Supporting Artisans</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We empower local artisans by giving them a platform to showcase their exceptional craftsmanship and build sustainable livelihoods
                </p>
                <div className="flex justify-center space-x-2 mt-6">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-4 border-yellow-200">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Authentic Quality</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Each product reflects the highest standards of quality and the authentic craftsmanship passed down through generations
                </p>
                <div className="flex justify-center space-x-2 mt-6">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products with Artistic Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#ea580c" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#ea580c" strokeWidth="1" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#ea580c" strokeWidth="1" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="#ea580c" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">
              Featured Crafts
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-orange-600"></div>
              <div className="w-3 h-3 bg-orange-600 rotate-45"></div>
              <div className="w-24 h-1 bg-orange-600"></div>
              <div className="w-3 h-3 bg-orange-600 rotate-45"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-transparent to-orange-600"></div>
            </div>
            <p className="text-xl text-gray-600">
              Discover our curated collection of artisan masterpieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <Link to="/gallery" className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-4 border-orange-100">
                <div className="relative overflow-hidden aspect-square">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1708706679975-6e54492f15bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXJyYWNvdHRhJTIwY3JhZnRzfGVufDF8fHx8MTc3MjcxNzc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Terracotta crafts"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Sparkles className="text-orange-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Terracotta Art</h3>
                  <p className="text-gray-600 mb-4">Traditional pottery and sculptures crafted with ancient techniques</p>
                  <div className="flex items-center space-x-2 text-orange-600 font-semibold">
                    <span>Explore Collection</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/gallery" className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-4 border-red-100">
                <div className="relative overflow-hidden aspect-square">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1762764214015-d5c22646465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjB0ZXh0aWxlJTIwaW5kaWF8ZW58MXx8fHwxNzcyNzE3Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Handwoven textiles"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Sparkles className="text-red-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-red-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Handwoven Textiles</h3>
                  <p className="text-gray-600 mb-4">Fine fabrics and traditional wear with intricate patterns</p>
                  <div className="flex items-center space-x-2 text-red-600 font-semibold">
                    <span>Explore Collection</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/gallery" className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-4 border-yellow-100">
                <div className="relative overflow-hidden aspect-square">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1762342345465-d021b8491309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc2FuJTIwamV3ZWxyeXxlbnwxfHx8fDE3NzI3MTc3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Artisan jewelry"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Sparkles className="text-yellow-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-yellow-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Artisan Jewelry</h3>
                  <p className="text-gray-600 mb-4">Handcrafted ornaments and accessories with traditional motifs</p>
                  <div className="flex items-center space-x-2 text-yellow-700 font-semibold">
                    <span>Explore Collection</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white px-12 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all hover:scale-105 border-4 border-orange-200"
            >
              <Sparkles size={24} />
              <span>Browse Products</span>
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action with Artistic Background */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-orange-600 to-pink-600 text-white relative overflow-hidden">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <g>
              {[...Array(8)].map((_, i) => (
                <circle key={i} cx={150 + i * 150} cy="200" r="60" fill="none" stroke="white" strokeWidth="3" />
              ))}
            </g>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">Get in Touch</h2>
          <div className="flex justify-center items-center space-x-2 mb-8">
            <div className="w-16 h-1 bg-white"></div>
            <div className="w-3 h-3 bg-white rotate-45"></div>
            <div className="w-16 h-1 bg-white"></div>
          </div>
          <p className="text-2xl mb-10 text-orange-50 leading-relaxed">
            Interested in our crafts or want to collaborate with our artisans? We'd love to hear from you!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 bg-white text-orange-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 border-4 border-yellow-300"
          >
            <span>Contact Us</span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
