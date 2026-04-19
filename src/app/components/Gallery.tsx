import { useState } from 'react';
import { X, Sparkles, Send, Mail, Phone, User, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE, phoneMaxLengthForCode, validatePhoneForCode } from '../lib/countryCodes';
import { FormSubmitError, submitEnquiry } from '../lib/formApi';

const galleryItems = [
  {
    id: 1,
    title: 'Bishnupuri Silk Saree',
    category: 'Sarees',
    image: '/products/Saree-7.jpg',
    description: 'Bishnupuri silk saree with full-body crack batik design — 3-ply premium silk.',
    artisan: 'Handwoven in Bengal',
    price: '₹6,049',
  },
  {
    id: 2,
    title: 'Hand-Painted Cotton Punjabi',
    category: 'Mens Wear',
    image: '/products/Punjabi-1.jpg',
    description: 'Cotton Punjabi with intricate hand-painted motifs. Size 42.',
    artisan: 'Hand-painted by artisans',
    price: '₹1,199',
  },
  {
    id: 3,
    title: 'Dhakai Punjabi',
    category: 'Mens Wear',
    image: '/products/Punjabi-2.jpg',
    description: 'Traditional Dhakai Punjabi with delicate machine work. Size 42.',
    artisan: 'Heritage Dhakai craft',
    price: '₹949',
  },
  {
    id: 4,
    title: 'Mashroo Angrakha Kurti',
    category: 'Kurtis & Co-ords',
    image: '/products/Kurti-1.jpg',
    description: 'Mashroo mix-and-match Angrakha-style kurti in mustard. Available in sizes 40 and 44.',
    artisan: 'Handcrafted Bengali style',
    price: '₹949',
  },
  {
    id: 5,
    title: 'Mashroo Angrakha Kurti',
    category: 'Kurtis & Co-ords',
    image: '/products/Kurti-2.jpg',
    description: 'Mashroo mix-and-match Angrakha-style long kurti in deep red. Available in sizes 40 and 44.',
    artisan: 'Handcrafted Bengali style',
    price: '₹949',
  },
  {
    id: 6,
    title: 'Stylish Bird Co-ord Set — Coral',
    category: 'Kurtis & Co-ords',
    image: '/products/BirdCoordSet-1.jpg',
    description: 'Cotton co-ord set with delicate bird and floral motifs. Size 42. Real colour may vary slightly due to screen resolution.',
    artisan: 'Cotton co-ord set',
    price: '₹1,199',
  },
  {
    id: 7,
    title: 'Stylish Bird Co-ord Set — Mustard',
    category: 'Kurtis & Co-ords',
    image: '/products/BirdCoordSet-2.jpg',
    description: 'Cotton co-ord set with delicate bird and floral motifs. Size 42. Real colour may vary slightly due to screen resolution.',
    artisan: 'Cotton co-ord set',
    price: '₹149',
  },
  {
    id: 8,
    title: 'Stylish Bird Co-ord Set — White',
    category: 'Kurtis & Co-ords',
    image: '/products/BirdCoordSet-3.jpg',
    description: 'Cotton co-ord set with delicate bird and floral motifs. Size 42. Real colour may vary slightly due to screen resolution.',
    artisan: 'Cotton co-ord set',
    price: '₹149',
  },
  {
    id: 9,
    title: 'Minakari Brass Jewellery Set',
    category: 'Jewellery',
    image: '/products/Jewellery-2.jpg',
    description: 'Brass jewellery set with intricate minakari (enamel) work — pendant with matching earrings.',
    artisan: 'Handcrafted enamel artistry',
    price: '₹799',
  },
  {
    id: 10,
    title: 'Monalisa Stone Necklace Set',
    category: 'Jewellery',
    image: '/products/Jewellery-3.jpg',
    description: 'Multicolour Monalisa stone set in brass with matching earrings.',
    artisan: 'Handcrafted gemstone work',
    price: '₹699',
  },
  {
    id: 11,
    title: 'Gold-Plated Choker Set',
    category: 'Jewellery',
    image: '/products/Jewellery-4.jpg',
    description: '1.5 gm gold-plated jewellery choker set with matching earrings.',
    artisan: 'Heritage gold plating',
    price: '₹649',
  },
  {
    id: 12,
    title: 'Pearl & Brass Set',
    category: 'Jewellery',
    image: '/products/Jewellery-5.jpg',
    description: 'Brass jewellery set adorned with moti (pearl) work — pendant with matching earrings.',
    artisan: 'Pearl-adorned heritage',
    price: '₹799',
  },
  {
    id: 13,
    title: 'Minakari Flamingo Pendant Set',
    category: 'Jewellery',
    image: '/products/Jewellery-6.jpg',
    description: 'Minakari work flamingo pendant with matching earrings — vibrant enamel detailing on brass.',
    artisan: 'Handcrafted enamel artistry',
    price: '₹799',
  },
];

const categories = ['All', 'Jewellery', 'Sarees', 'Kurtis & Co-ords', 'Mens Wear'];

type EnquiryErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_RE = /^[A-Za-z][A-Za-z\s.'-]{1,}$/;

function validateEnquiry(data: {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
}): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const name = data.name.trim();
  if (!name) errors.name = 'Please enter your full name';
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters';
  else if (!NAME_RE.test(name)) errors.name = 'Name can only contain letters, spaces, . \' -';

  const email = data.email.trim();
  if (!email) errors.email = 'Please enter your email address';
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address';

  const phone = data.phone.replace(/\D/g, '');
  const phoneError = validatePhoneForCode(data.countryCode, phone);
  if (phoneError) errors.phone = phoneError;

  const message = data.message.trim();
  if (message && message.length < 10) errors.message = 'Message must be at least 10 characters';

  return errors;
}

const initialEnquiryData = {
  name: '',
  email: '',
  countryCode: DEFAULT_COUNTRY_CODE,
  phone: '',
  message: '',
};

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryData, setEnquiryData] = useState(initialEnquiryData);
  const [enquiryErrors, setEnquiryErrors] = useState<EnquiryErrors>({});
  const [enquirySubmitError, setEnquirySubmitError] = useState<string | null>(null);
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleEnquiryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const nextValue = name === 'phone' ? value.replace(/\D/g, '') : value;
    setEnquiryData((prev) => ({ ...prev, [name]: nextValue }));
    if (enquiryErrors[name as keyof EnquiryErrors]) {
      setEnquiryErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof EnquiryErrors];
        return next;
      });
    }
    if (name === 'countryCode' && enquiryErrors.phone) {
      setEnquiryErrors((prev) => {
        const next = { ...prev };
        delete next.phone;
        return next;
      });
    }
  };

  const handleEnquiryBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    const validationErrors = validateEnquiry(enquiryData);
    setEnquiryErrors((prev) => ({
      ...prev,
      [name]: validationErrors[name as keyof EnquiryErrors],
    }));
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) return;
    const validationErrors = validateEnquiry(enquiryData);
    if (Object.keys(validationErrors).length > 0) {
      setEnquiryErrors(validationErrors);
      return;
    }
    setEnquiryErrors({});
    setEnquirySubmitError(null);
    setEnquirySubmitting(true);
    try {
      await submitEnquiry({
        ...enquiryData,
        productTitle: selectedImage.title,
        productCategory: selectedImage.category,
        productPrice: selectedImage.price,
        productArtisan: selectedImage.artisan,
      });
      setEnquirySubmitted(true);
      setTimeout(() => {
        setEnquirySubmitted(false);
        setShowEnquiryForm(false);
        setEnquiryData(initialEnquiryData);
        setSelectedImage(null);
      }, 3000);
    } catch (err) {
      if (err instanceof FormSubmitError && err.fieldErrors) {
        setEnquiryErrors(err.fieldErrors as EnquiryErrors);
        setEnquirySubmitError(err.message);
      } else {
        setEnquirySubmitError(
          err instanceof Error
            ? err.message
            : 'Something went wrong while sending your enquiry. Please try again.',
        );
      }
    } finally {
      setEnquirySubmitting(false);
    }
  };

  const enquiryFieldClass = (field: keyof EnquiryErrors) =>
    `w-full px-5 py-4 border-3 rounded-xl focus:ring-4 outline-none transition-all text-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/60 ${
      enquiryErrors[field]
        ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
        : 'border-white/30 focus:ring-orange-400 focus:border-orange-500'
    }`;

  const closeModal = () => {
    setSelectedImage(null);
    setShowEnquiryForm(false);
    setEnquirySubmitted(false);
    setEnquiryData(initialEnquiryData);
    setEnquiryErrors({});
    setEnquirySubmitError(null);
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
                  <form onSubmit={handleEnquirySubmit} noValidate className="space-y-6">
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
                        onBlur={handleEnquiryBlur}
                        aria-invalid={!!enquiryErrors.name}
                        aria-describedby={enquiryErrors.name ? 'enquiry-name-error' : undefined}
                        className={enquiryFieldClass('name')}
                        placeholder="Enter your full name"
                      />
                      {enquiryErrors.name && (
                        <p id="enquiry-name-error" className="mt-2 text-sm font-semibold text-red-300">
                          {enquiryErrors.name}
                        </p>
                      )}
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
                        onBlur={handleEnquiryBlur}
                        aria-invalid={!!enquiryErrors.email}
                        aria-describedby={enquiryErrors.email ? 'enquiry-email-error' : undefined}
                        className={enquiryFieldClass('email')}
                        placeholder="your.email@example.com"
                      />
                      {enquiryErrors.email && (
                        <p id="enquiry-email-error" className="mt-2 text-sm font-semibold text-red-300">
                          {enquiryErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-white mb-2 flex items-center space-x-2">
                        <Phone size={18} />
                        <span>Phone Number *</span>
                      </label>
                      <div
                        className={`flex items-stretch rounded-xl border-3 bg-white/20 backdrop-blur-sm overflow-hidden transition-all focus-within:ring-4 ${
                          enquiryErrors.phone
                            ? 'border-red-400 focus-within:ring-red-300 focus-within:border-red-400'
                            : 'border-white/30 focus-within:ring-orange-400 focus-within:border-orange-500'
                        }`}
                      >
                        <select
                          id="countryCode"
                          name="countryCode"
                          aria-label="Country code"
                          value={enquiryData.countryCode}
                          onChange={handleEnquiryChange}
                          className="px-3 py-4 bg-transparent border-r-2 border-white/30 outline-none text-lg text-white cursor-pointer"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.iso} value={c.code} className="text-gray-800">
                              {c.flag} {c.code}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          inputMode="numeric"
                          required
                          maxLength={phoneMaxLengthForCode(enquiryData.countryCode)}
                          value={enquiryData.phone}
                          onChange={handleEnquiryChange}
                          onBlur={handleEnquiryBlur}
                          aria-invalid={!!enquiryErrors.phone}
                          aria-describedby={enquiryErrors.phone ? 'enquiry-phone-error' : undefined}
                          className="flex-1 px-5 py-4 bg-transparent outline-none text-lg text-white placeholder-white/60"
                          placeholder="00000 00000"
                        />
                      </div>
                      {enquiryErrors.phone && (
                        <p id="enquiry-phone-error" className="mt-2 text-sm font-semibold text-red-300">
                          {enquiryErrors.phone}
                        </p>
                      )}
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
                        onBlur={handleEnquiryBlur}
                        aria-invalid={!!enquiryErrors.message}
                        aria-describedby={enquiryErrors.message ? 'enquiry-message-error' : undefined}
                        rows={4}
                        className={`w-full px-5 py-4 border-3 rounded-xl focus:ring-4 outline-none transition-all resize-none text-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/60 ${
                          enquiryErrors.message
                            ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
                            : 'border-white/30 focus:ring-orange-400 focus:border-orange-500'
                        }`}
                        placeholder="Any specific requirements or questions about this product..."
                      />
                      {enquiryErrors.message && (
                        <p id="enquiry-message-error" className="mt-2 text-sm font-semibold text-red-300">
                          {enquiryErrors.message}
                        </p>
                      )}
                    </div>

                    {enquirySubmitError && (
                      <div className="p-4 bg-red-500/20 backdrop-blur-sm border-2 border-red-400 rounded-xl text-red-100 font-semibold">
                        {enquirySubmitError}
                      </div>
                    )}

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setShowEnquiryForm(false)}
                        disabled={enquirySubmitting}
                        className="flex-1 bg-white/20 backdrop-blur-sm text-white py-4 rounded-xl text-lg font-bold hover:bg-white/30 transition-all shadow-lg border-2 border-white/30 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={enquirySubmitting}
                        className="flex-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-4 rounded-xl text-lg font-bold hover:shadow-2xl transition-all shadow-lg flex items-center justify-center space-x-3 border-4 border-yellow-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        <span>{enquirySubmitting ? 'Sending…' : 'Submit Enquiry'}</span>
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
