import { Sparkles, Heart, Users, Award } from 'lucide-react';
import logo from '../../assets/3088c26f39780943c73062cfd3ac8ae7a1f65b7c.png';

export function About() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <g>
            {[...Array(5)].map((_, i) => (
              <g key={i}>
                <circle cx={150 + i * 250} cy="200" r="100" fill="none" stroke="#ea580c" strokeWidth="2" />
                <circle cx={150 + i * 250} cy="200" r="70" fill="none" stroke="#ea580c" strokeWidth="2" />
                <circle cx={150 + i * 250} cy="200" r="40" fill="none" stroke="#ea580c" strokeWidth="2" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Ekusher Naree" className="w-32 h-32 object-contain drop-shadow-xl" />
          </div>
          <Sparkles className="text-orange-600 mx-auto mb-6" size={48} />
          <h1 className="text-6xl font-bold mb-6 text-gray-800 drop-shadow-sm">About Us</h1>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-orange-600"></div>
            <div className="w-4 h-4 bg-orange-600 rotate-45"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"></div>
            <div className="w-4 h-4 bg-pink-600 rotate-45"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-pink-600"></div>
          </div>
          <p className="text-3xl font-bold text-orange-600">একুশের নারী — Ekusher Naree</p>
        </div>

        {/* Main content card */}
        <div className="relative mb-12">
          <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-3xl opacity-20 blur-xl"></div>
          <div className="relative bg-white rounded-3xl p-12 shadow-2xl border-4 border-orange-200">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At <span className="font-bold text-orange-600">Ekusher Naree</span>, we are committed to delivering high-quality products while working with local artisan communities. We collaborate with skilled local craftsmen, treating them as valued vendor partners, so that authentic, handcrafted creations can reach a wider audience.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Our commitment to quality and creativity is also reflected in the lifestyle and craft exhibitions we have organised. These events showcase the extraordinary work of local artisans, providing them with a platform to connect with enthusiasts and customers — a venture we proudly continue.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              By combining modern business practices with traditional skills, we ensure that every product reflects quality, creativity, and reliability. Our approach not only helps preserve local craftsmanship but also empowers artisans by connecting their work with larger markets.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We believe in building long-term relationships with customers, partners, and artisan vendors through trust, fairness, and excellence.
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border-4 border-orange-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Celebrating Tradition</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Honouring centuries-old craftsmanship and Bengali cultural heritage</p>
            </div>
          </div>
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border-4 border-red-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Empowering Artisans</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Providing local artisans a platform and sustainable livelihood</p>
            </div>
          </div>
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Delivering Quality</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every product reflects authenticity, creativity, and reliability</p>
            </div>
          </div>
        </div>

        {/* Tagline banner */}
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-3xl opacity-75 blur"></div>
          <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-8 text-white text-center shadow-2xl border-4 border-yellow-300">
            <p className="text-2xl md:text-3xl font-bold tracking-wide">
              Celebrating tradition. Empowering artisans. Delivering quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
