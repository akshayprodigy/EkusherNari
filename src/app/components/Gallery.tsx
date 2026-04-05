import { useState } from 'react';
import { X, Sparkles, Send, Mail, Phone, User, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryItems = [
  {
    id: 1,
    title: 'Traditional Pottery',
    category: 'Terracotta',
    image: 'https://images.unsplash.com/photo-1526461591544-198d2190f270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5nYWxpJTIwaGFuZGljcmFmdCUyMHBvdHRlcnl8ZW58MXx8fHwxNzcyNzE3Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Handcrafted clay pottery with traditional Bengali designs',
    artisan: 'Crafted by skilled hands',
    price: '₹850 - ₹2,500',
  },
  {
    id: 2,
    title: 'Terracotta Art',
    category: 'Terracotta',
    image: 'https://images.unsplash.com/photo-1708706679975-6e54492f15bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXJyYWNvdHRhJTIwY3JhZnRzfGVufDF8fHx8MTc3MjcxNzc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Beautiful terracotta sculptures and decorative pieces',
    artisan: 'Heritage craftsmanship',
    price: '₹1,200 - ₹5,000',
  },
  {
    id: 3,
    title: 'Handwoven Textiles',
    category: 'Textiles',
    image: 'https://images.unsplash.com/photo-1762764214015-d5c22646465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjB0ZXh0aWxlJTIwaW5kaWF8ZW58MXx8fHwxNzcyNzE3Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Fine handwoven fabrics with intricate patterns',
    artisan: 'Weaved with tradition',
    price: '₹3,500 - ₹15,000',
  },
  {
    id: 4,
    title: 'Artisan Jewelry',
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1762342345465-d021b8491309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc2FuJTIwamV3ZWxyeXxlbnwxfHx8fDE3NzI3MTc3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Handcrafted traditional jewelry and ornaments',
    artisan: 'Adorned with love',
    price: '₹500 - ₹8,000',
  },
  {
    id: 5,
    title: 'Traditional Crafts',
    category: 'Mixed',
    image: 'https://images.unsplash.com/photo-1650726583448-dda0065f2f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGNyYWZ0c3xlbnwxfHx8fDE3NzI3MTc3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Collection of various traditional handicrafts',
    artisan: 'Diverse artistry',
    price: '₹600 - ₹4,000',
  },
  {
    id: 6,
    title: 'Bengali Art',
    category: 'Art',
    image: 'https://images.unsplash.com/photo-1767330855351-480010c6c194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5nYWxpJTIwYXJ0JTIwY3VsdHVyZXxlbnwxfHx8fDE3NzI3MTc3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Artistic expressions of Bengali culture',
    artisan: 'Cultural masterpiece',
    price: '₹2,000 - ₹12,000',
  },
  {
    id: 7,
    title: 'Clay Pottery',
    category: 'Pottery',
    image: 'https://images.unsplash.com/photo-1678791673777-57274271e434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNsYXklMjBwb3R0ZXJ5fGVufDF8fHx8MTc3MjcxNzc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Handmade clay pots and vessels',
    artisan: 'Shaped by tradition',
    price: '₹400 - ₹2,000',
  },
  {
    id: 8,
    title: 'Basket Weaving',
    category: 'Weaving',
    image: 'https://images.unsplash.com/photo-1768902406144-a348c559c73c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiYXNrZXQlMjB3ZWF2aW5nfGVufDF8fHx8MTc3MjcxNzc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Traditional basket weaving techniques',
    artisan: 'Interwoven beauty',
    price: '₹300 - ₹1,500',
  },
  {
    id: 9,
    title: 'Artisan at Work',
    category: 'Artisans',
    image: 'https://images.unsplash.com/photo-1667382515296-74fd12d4b522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5nYWxpJTIwd29tYW4lMjBhcnRpc2FufGVufDF8fHx8MTc3MjcxNzc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Skilled artisans creating beautiful crafts',
    artisan: 'Women empowerment',
    price: 'Custom Orders',
  },
  {
    id: 10,
    title: 'Craft Workshop',
    category: 'Artisans',
    image: 'https://images.unsplash.com/photo-1726931535415-edbc43d42c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kaWNyYWZ0JTIwd29ya3Nob3B8ZW58MXx8fHwxNzcyNzE3Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Behind the scenes of handicraft making',
    artisan: 'Creative process',
    price: 'Workshop Available',
  },
  {
    id: 11,
    title: 'Heritage Architecture',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1769013649818-144bb8f6a5c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2xrYXRhJTIwaGVyaXRhZ2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyNzE3Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Cultural heritage and traditional architecture',
    artisan: 'Timeless beauty',
    price: 'Custom Art Pieces',
  },
  {
    id: 12,
    title: 'Traditional Textiles',
    category: 'Textiles',
    image: 'https://images.unsplash.com/photo-1762764214015-d5c22646465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHRleHRpbGVzfGVufDF8fHx8MTc3MjcxNzc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Colorful traditional textile designs',
    artisan: 'Vibrant heritage',
    price: '₹4,000 - ₹20,000',
  },
];

const categories = ['All', 'Terracotta', 'Textiles', 'Jewelry', 'Pottery', 'Weaving', 'Artisans', 'Culture', 'Art', 'Mixed'];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleEnquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnquiryData({
      ...enquiryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitted(true);
    setTimeout(() => {
      setEnquirySubmitted(false);
      setShowEnquiryForm(false);
      setEnquiryData({ name: '', email: '', phone: '', message: '' });
      setSelectedImage(null);
    }, 3000);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowEnquiryForm(false);
    setEnquirySubmitted(false);
    setEnquiryData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 1000">
          <g>
            {[...Array(6)].map((_, i) => (
              <circle key={i} cx={200 + i * 200} cy="150" r="80" fill="none" stroke="#ea580c" strokeWidth="2" />
            ))}
            {[...Array(6)].map((_, i) => (
              <circle key={`b${i}`} cx={200 + i * 200} cy="500" r="80" fill="none" stroke="#dc2626" strokeWidth="2" />
            ))}
            {[...Array(6)].map((_, i) => (
              <circle key={`c${i}`} cx={200 + i * 200} cy="850" r="80" fill="none" stroke="#d97706" strokeWidth="2" />
            ))}
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Artistic Design */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Sparkles className="text-orange-600 mx-auto mb-4" size={48} />
          </div>
          <h1 className="text-6xl font-bold mb-6 text-gray-800 drop-shadow-sm">Artisan Gallery</h1>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-orange-600"></div>
            <div className="w-4 h-4 bg-orange-600 rotate-45"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"></div>
            <div className="w-4 h-4 bg-pink-600 rotate-45"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-pink-600"></div>
          </div>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Explore our curated collection of exquisite handicrafts and meet the talented artisans behind each masterpiece
          </p>
        </div>

        {/* Artistic Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white shadow-xl scale-110 border-4 border-yellow-300'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 border-2 border-orange-300 shadow-md'
              }`}
            >
              {selectedCategory === category && (
                <span className="absolute -top-2 -right-2">
                  <Sparkles className="text-yellow-400" size={20} />
                </span>
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Artistic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer relative"
              onClick={() => setSelectedImage(item)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative border effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-4 border-orange-200 group-hover:border-pink-300">
                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-orange-100 to-red-100">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center space-x-2 mb-3">
                        <Sparkles className="text-yellow-400" size={20} />
                        <span className="px-4 py-1 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm rounded-full font-semibold shadow-lg">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{item.title}</h3>
                      <p className="text-white/90 text-sm mb-2 leading-relaxed">{item.description}</p>
                      <p className="text-yellow-300 text-sm italic font-medium">{item.artisan}</p>
                    </div>
                  </div>

                  {/* Sparkle icon in corner */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="text-orange-600" size={20} />
                    </div>
                  </div>
                </div>

                {/* Card footer with decorative elements */}
                <div className="p-5 bg-gradient-to-br from-orange-50 via-white to-red-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600 italic">{item.artisan}</p>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Sparkles className="text-gray-300 mx-auto mb-4" size={64} />
            <p className="text-gray-500 text-2xl">No items found in this category.</p>
          </div>
        )}
      </div>

      {/* Enhanced Lightbox Modal with Enquiry */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="fixed top-6 right-6 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all backdrop-blur-sm border-2 border-white/30 z-50"
          >
            <X className="text-white" size={32} />
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {!showEnquiryForm ? (
              <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                {/* Image — proportionally constrained so full image is visible */}
                <div className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 flex-shrink-0">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain max-h-[75vh]"
                    style={{ background: 'rgba(0,0,0,0.4)' }}
                  />
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white/50"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-white/50"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-white/50"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white/50"></div>
                </div>

                {/* Details panel */}
                <div className="lg:w-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 flex flex-col justify-center">
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <Sparkles className="text-yellow-400" size={24} />
                    <span className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold shadow-lg">
                      {selectedImage.category}
                    </span>
                    <Sparkles className="text-yellow-400" size={24} />
                  </div>

                  <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-center">{selectedImage.title}</h2>
                  <p className="text-white/90 text-xl mb-3 leading-relaxed text-center">{selectedImage.description}</p>
                  <p className="text-yellow-300 text-lg italic font-medium text-center mb-4">{selectedImage.artisan}</p>

                  <div className="text-center mb-6">
                    <p className="text-2xl font-bold text-white bg-gradient-to-r from-orange-600 to-red-600 inline-block px-6 py-2 rounded-full">
                      {selectedImage.price}
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => setShowEnquiryForm(true)}
                      className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:shadow-2xl transition-all hover:scale-105 border-4 border-yellow-300"
                    >
                      <MessageCircle size={24} />
                      <span>Enquiry Now</span>
                      <Sparkles size={24} />
                    </button>
                  </div>

                  <div className="flex justify-center space-x-2 mt-8">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <MessageCircle className="text-yellow-400" size={32} />
                  <h2 className="text-4xl font-bold text-white">Product Enquiry</h2>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/30">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={selectedImage.image} 
                      alt={selectedImage.title}
                      className="w-24 h-24 object-cover rounded-lg border-2 border-white/50"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{selectedImage.title}</h3>
                      <p className="text-yellow-300 italic">{selectedImage.artisan}</p>
                      <p className="text-white font-semibold mt-1">{selectedImage.price}</p>
                    </div>
                  </div>
                </div>

                {enquirySubmitted ? (
                  <div className="p-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-2xl border-4 border-green-300 text-center">
                    <Sparkles className="text-white mx-auto mb-4" size={48} />
                    <h3 className="text-3xl font-bold text-white mb-3">Enquiry Submitted!</h3>
                    <p className="text-white/90 text-xl">
                      Thank you for your interest in <span className="font-bold">{selectedImage.title}</span>. 
                      Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-white mb-2 flex items-center space-x-2">
                        <User size={18} />
                        <span>Your Name *</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={enquiryData.name}
                        onChange={handleEnquiryChange}
                        className="w-full px-5 py-4 border-3 border-white/30 rounded-xl focus:ring-4 focus:ring-orange-400 focus:border-orange-500 outline-none transition-all text-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/60"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-white mb-2 flex items-center space-x-2">
                        <Mail size={18} />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={enquiryData.email}
                        onChange={handleEnquiryChange}
                        className="w-full px-5 py-4 border-3 border-white/30 rounded-xl focus:ring-4 focus:ring-orange-400 focus:border-orange-500 outline-none transition-all text-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/60"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-white mb-2 flex items-center space-x-2">
                        <Phone size={18} />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={enquiryData.phone}
                        onChange={handleEnquiryChange}
                        className="w-full px-5 py-4 border-3 border-white/30 rounded-xl focus:ring-4 focus:ring-orange-400 focus:border-orange-500 outline-none transition-all text-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/60"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-white mb-2 flex items-center space-x-2">
                        <MessageCircle size={18} />
                        <span>Your Message</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={enquiryData.message}
                        onChange={handleEnquiryChange}
                        rows={4}
                        className="w-full px-5 py-4 border-3 border-white/30 rounded-xl focus:ring-4 focus:ring-orange-400 focus:border-orange-500 outline-none transition-all resize-none text-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/60"
                        placeholder="Any specific requirements or questions about this product..."
                      />
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setShowEnquiryForm(false)}
                        className="flex-1 bg-white/20 backdrop-blur-sm text-white py-4 rounded-xl text-lg font-bold hover:bg-white/30 transition-all shadow-lg border-2 border-white/30"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-4 rounded-xl text-lg font-bold hover:shadow-2xl transition-all shadow-lg flex items-center justify-center space-x-3 border-4 border-yellow-300 hover:scale-105"
                      >
                        <span>Submit Enquiry</span>
                        <Send size={20} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
