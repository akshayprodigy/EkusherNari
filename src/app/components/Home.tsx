import { Link } from 'react-router';
import { ArrowRight, Heart, Users, Award, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from '../../assets/3088c26f39780943c73062cfd3ac8ae7a1f65b7c.png';

const eventImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1526461591544-198d2190f270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5nYWxpJTIwaGFuZGljcmFmdCUyMHBvdHRlcnl8ZW58MXx8fHwxNzcyNzE3Nzc0fDA&ixlib=rb-4.1.0&q=80&w=600', label: 'Traditional Pottery' },
  { id: 2, src: 'https://images.unsplash.com/photo-1708706679975-6e54492f15bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXJyYWNvdHRhJTIwY3JhZnRzfGVufDF8fHx8MTc3MjcxNzc3NHww&ixlib=rb-4.1.0&q=80&w=600', label: 'Terracotta Art' },
  { id: 3, src: 'https://images.unsplash.com/photo-1762764214015-d5c22646465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjB0ZXh0aWxlJTIwaW5kaWF8ZW58MXx8fHwxNzcyNzE3Nzc1fDA&ixlib=rb-4.1.0&q=80&w=600', label: 'Handwoven Textiles' },
  { id: 4, src: 'https://images.unsplash.com/photo-1762342345465-d021b8491309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc2FuJTIwamV3ZWxyeXxlbnwxfHx8fDE3NzI3MTc3NzV8MA&ixlib=rb-4.1.0&q=80&w=600', label: 'Artisan Jewelry' },
  { id: 5, src: 'https://images.unsplash.com/photo-1650726583448-dda0065f2f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGNyYWZ0c3xlbnwxfHx8fDE3NzI3MTc3NzV8MA&ixlib=rb-4.1.0&q=80&w=600', label: 'Traditional Crafts' },
  { id: 6, src: 'https://images.unsplash.com/photo-1767330855351-480010c6c194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5nYWxpJTIwYXJ0JTIwY3VsdHVyZXxlbnwxfHx8fDE3NzI3MTc3NzZ8MA&ixlib=rb-4.1.0&q=80&w=600', label: 'Bengali Art' },
  { id: 7, src: 'https://images.unsplash.com/photo-1678791673777-57274271e434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNsYXklMjBwb3R0ZXJ5fGVufDF8fHx8MTc3MjcxNzc3Nnww&ixlib=rb-4.1.0&q=80&w=600', label: 'Clay Pottery' },
  { id: 8, src: 'https://images.unsplash.com/photo-1768902406144-a348c559c73c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiYXNrZXQlMjB3ZWF2aW5nfGVufDF8fHx8MTc3MjcxNzc3Nnww&ixlib=rb-4.1.0&q=80&w=600', label: 'Basket Weaving' },
];

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section with Alpana Pattern */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-32 overflow-hidden">
        {/* Alpana Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            {/* Traditional Bengali Alpana Patterns */}
            <circle cx="200" cy="150" r="80" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="200" cy="150" r="60" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="200" cy="150" r="40" fill="none" stroke="white" strokeWidth="2" />
            <path d="M 200 150 L 220 170 L 200 190 L 180 170 Z" fill="white" />
            
            <circle cx="1000" cy="600" r="100" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="1000" cy="600" r="80" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="1000" cy="600" r="60" fill="none" stroke="white" strokeWidth="2" />
            
            {/* Lotus petals motif */}
            <g transform="translate(600, 400)">
              <ellipse cx="0" cy="-50" rx="20" ry="50" fill="white" opacity="0.3" />
              <ellipse cx="35" cy="-35" rx="20" ry="50" fill="white" opacity="0.3" transform="rotate(45 35 -35)" />
              <ellipse cx="50" cy="0" rx="20" ry="50" fill="white" opacity="0.3" transform="rotate(90 50 0)" />
              <ellipse cx="35" cy="35" rx="20" ry="50" fill="white" opacity="0.3" transform="rotate(135 35 35)" />
              <ellipse cx="0" cy="50" rx="20" ry="50" fill="white" opacity="0.3" transform="rotate(180 0 50)" />
              <ellipse cx="-35" cy="35" rx="20" ry="50" fill="white" opacity="0.3" transform="rotate(225 -35 35)" />
              <ellipse cx="-50" cy="0" rx="20" ry="50" fill="white" opacity="0.3" transform="rotate(270 -50 0)" />
              <ellipse cx="-35" cy="-35" rx="20" ry="50" fill="white" opacity="0.3" transform="rotate(315 -35 -35)" />
            </g>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <img src={logo} alt="Ekusher Naree" className="w-44 h-44 object-contain drop-shadow-2xl" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              একুশের নারী
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold text-yellow-100">
              We Are Together
            </p>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-orange-50 leading-relaxed">
              Celebrating the timeless beauty of handcrafted artisan products that tell stories of tradition, culture, and the skilled craftsmanship of Bengali women artisans
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-3 bg-white text-orange-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 border-4 border-yellow-300"
            >
              <Sparkles size={24} />
              <span>Explore Our Collection</span>
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" className="w-full h-16 fill-amber-50">
            <path d="M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Horizontal Scrollable Event Gallery Strip */}
      <section className="bg-gray-900 py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></div>
            <h2 className="text-white text-2xl font-bold">Our Art &amp; Events</h2>
            <div className="flex-1 h-px bg-white/10"></div>
            <Link to="/gallery" className="text-orange-400 hover:text-orange-300 text-sm font-medium flex items-center space-x-1 transition-colors">
              <span>View All</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div
          className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...eventImages, ...eventImages].map((img, idx) => (
            <Link
              key={idx}
              to="/gallery"
              className="snap-start flex-shrink-0 relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ width: '220px', height: '280px' }}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-semibold leading-tight">{img.label}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400 rounded-2xl transition-colors"></div>
            </Link>
          ))}
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
