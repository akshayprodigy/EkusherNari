import { Heart } from 'lucide-react';
import { Link } from 'react-router';
import logo from '../../assets/3088c26f39780943c73062cfd3ac8ae7a1f65b7c.png';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

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
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img src={logo} alt="Ekusher Naree Logo" className="w-20 h-20 object-contain" />
              <div>
                <h3 className="font-bold text-2xl text-white">একুশের নারী</h3>
                <p className="text-sm text-orange-400 italic">We Are Together</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Celebrating the rich heritage of Bengali craftsmanship and empowering local artisans to showcase their extraordinary talents.
            </p>

            {/* Social Media Icons — original brand logos */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ekushernaree"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/ekushernaree"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@EkusherNaree"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=918910143371&text&type=phone_number&app_absent=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
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
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors text-lg flex items-center space-x-2 group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-orange-400 transition-colors"></span>
                  <span>About Us</span>
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
            </ul>
          </div>

          {/* Contact Info */}
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
                    36, B.T. Road<br />
                    24 Parganas (N)<br />
                    Kolkata – 700058
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3 pt-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                <a href="mailto:info@ekushernaree.com" className="hover:text-orange-400 transition-colors text-lg">
                  info@ekushernaree.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                <a href="mailto:contact@ekushernaree.com" className="hover:text-orange-400 transition-colors text-lg">
                  contact@ekushernaree.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                <a href="tel:+918910143371" className="hover:text-orange-400 transition-colors text-lg">
                  +91 89101 43371
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

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            © 2026 একুশের নারী (Ekusher Naree). All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center space-x-2">
            <span>Made with</span>
            <Heart size={18} className="text-red-500 fill-current animate-pulse" />
            <span>for local artisans</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
