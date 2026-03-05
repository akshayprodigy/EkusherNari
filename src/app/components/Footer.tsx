import { Heart, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router';
import logo from '../../assets/3088c26f39780943c73062cfd3ac8ae7a1f65b7c.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 400">
          <g>
            {[...Array(8)].map((_, i) => (
              <circle key={i} cx={150 + i * 150} cy="200" r="60" fill="none" stroke="white" strokeWidth="2" />
            ))}
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section - Artistic */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img src={logo} alt="Ekusher Nari Logo" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-bold text-2xl text-white">একুশের নারী</h3>
                <p className="text-sm text-orange-400 italic">Platform for Women</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Celebrating the rich heritage of Bengali craftsmanship and empowering local women artisans to showcase their extraordinary talents.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-600 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-orange-400 flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors text-lg flex items-center space-x-2 group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-orange-400 transition-colors"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-orange-400 transition-colors text-lg flex items-center space-x-2 group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-orange-400 transition-colors"></span>
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors text-lg flex items-center space-x-2 group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-orange-400 transition-colors"></span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-lg flex items-center space-x-2 group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-orange-400 transition-colors"></span>
                  <span>About Our Artisans</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-lg flex items-center space-x-2 group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-orange-400 transition-colors"></span>
                  <span>Support Our Mission</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info - Artistic */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-orange-400 flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>Contact</span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-lg leading-relaxed">
                    123 Artisan Street<br />
                    Kumartuli, Kolkata<br />
                    West Bengal 700005, India
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3 pt-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                <a href="mailto:info@ekushernari.com" className="hover:text-orange-400 transition-colors text-lg">
                  info@ekushernari.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                <a href="tel:+919876543210" className="hover:text-orange-400 transition-colors text-lg">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-orange-600"></div>
          <div className="w-2 h-2 bg-orange-600 rotate-45"></div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"></div>
          <div className="w-2 h-2 bg-pink-600 rotate-45"></div>
          <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-pink-600"></div>
        </div>

        {/* Bottom Bar - Artistic */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            © 2026 একুশের নারী (Ekusher Nari). All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center space-x-2">
            <span>Made with</span>
            <Heart size={18} className="text-red-500 fill-current animate-pulse" />
            <span>for Bengali Women Artisans</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
