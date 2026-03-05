import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Sparkles className="text-orange-600 mx-auto mb-6" size={48} />
          <h1 className="text-6xl font-bold mb-6 text-gray-800 drop-shadow-sm">Contact Us</h1>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-orange-600"></div>
            <div className="w-4 h-4 bg-orange-600 rotate-45"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"></div>
            <div className="w-4 h-4 bg-pink-600 rotate-45"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-pink-600"></div>
          </div>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have questions about our crafts, want to collaborate, or just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Artistic Design */}
          <div>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-3xl opacity-75 blur"></div>
              <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-3xl p-10 text-white shadow-2xl border-4 border-yellow-300">
                <div className="flex items-center space-x-3 mb-8">
                  <Sparkles size={32} />
                  <h2 className="text-4xl font-bold">Get in Touch</h2>
                </div>
                
                <p className="text-orange-50 mb-10 text-lg leading-relaxed">
                  Feel free to reach out to us through any of the following channels. We're here to help and answer any questions you may have.
                </p>

                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-start space-x-5">
                      <div className="relative">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform">
                          <Phone size={28} />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Phone</h3>
                        <p className="text-orange-50 text-lg">+91 98765 43210</p>
                        <p className="text-orange-50 text-lg">+91 98765 43211</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-5">
                      <div className="relative">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform">
                          <Mail size={28} />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Email</h3>
                        <p className="text-orange-50 text-lg">info@ekushernari.com</p>
                        <p className="text-orange-50 text-lg">support@ekushernari.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-5">
                      <div className="relative">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform">
                          <MapPin size={28} />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Address</h3>
                        <p className="text-orange-50 text-lg leading-relaxed">
                          123 Artisan Street<br />
                          Kumartuli, Kolkata<br />
                          West Bengal 700005<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="flex justify-center space-x-3 mt-10">
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Map Placeholder with Artistic Design */}
            <div className="mt-8 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl opacity-50 blur"></div>
              <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl overflow-hidden shadow-xl h-72 border-4 border-orange-200">
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-600">
                  <MapPin size={64} className="text-orange-600 mb-4" />
                  <p className="text-xl font-semibold text-orange-700">Visit Us</p>
                  <p className="text-gray-600">Kumartuli, Kolkata</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Artistic Design */}
          <div>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border-4 border-orange-200">
                <div className="flex items-center space-x-3 mb-8">
                  <Sparkles className="text-orange-600" size={32} />
                  <h2 className="text-4xl font-bold text-gray-800">Send a Message</h2>
                </div>
                
                {submitted && (
                  <div className="mb-8 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-4 border-green-300 rounded-2xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Sparkles className="text-green-600" size={24} />
                      <p className="text-green-700 font-semibold text-lg">Thank you for your message! We'll get back to you soon.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-3 border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all text-lg bg-gradient-to-br from-white to-orange-50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-3 border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all text-lg bg-gradient-to-br from-white to-orange-50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-3 border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all text-lg bg-gradient-to-br from-white to-orange-50"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-3 border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all text-lg bg-gradient-to-br from-white to-orange-50"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-5 py-4 border-3 border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all resize-none text-lg bg-gradient-to-br from-white to-orange-50"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-5 rounded-xl text-lg font-bold hover:shadow-2xl transition-all shadow-lg flex items-center justify-center space-x-3 border-4 border-orange-200 hover:scale-105"
                  >
                    <span>Send Message</span>
                    <Send size={24} />
                  </button>
                </form>

                {/* Decorative elements */}
                <div className="flex justify-center space-x-2 mt-8">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
