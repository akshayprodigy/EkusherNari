import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE, phoneMaxLengthForCode, validatePhoneForCode } from '../lib/countryCodes';
import { FormSubmitError, submitContact } from '../lib/formApi';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

type ContactErrors = {
  name?: string;
  email?: string;
  phone?: string;
  pincode?: string;
  subject?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_RE = /^[A-Za-z][A-Za-z\s.'-]{1,}$/;
const PINCODE_RE = /^[1-9]\d{5}$/;

function validateContact(data: {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  pincode: string;
  subject: string;
  message: string;
}): ContactErrors {
  const errors: ContactErrors = {};
  const name = data.name.trim();
  if (!name) errors.name = 'Please enter your full name';
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters';
  else if (!NAME_RE.test(name)) errors.name = 'Name can only contain letters, spaces, . \' -';

  const email = data.email.trim();
  if (!email) errors.email = 'Please enter your email address';
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address';

  const phone = data.phone.replace(/\D/g, '');
  if (phone) {
    const phoneError = validatePhoneForCode(data.countryCode, phone);
    if (phoneError) errors.phone = phoneError;
  }

  const pincode = data.pincode.trim();
  if (pincode && !PINCODE_RE.test(pincode)) {
    errors.pincode = 'PIN code must be 6 digits and cannot start with 0';
  }

  const subject = data.subject.trim();
  if (!subject) errors.subject = 'Please enter a subject';
  else if (subject.length < 3) errors.subject = 'Subject must be at least 3 characters';

  const message = data.message.trim();
  if (!message) errors.message = 'Please enter a message';
  else if (message.length < 10) errors.message = 'Message must be at least 10 characters';

  return errors;
}

const initialFormData = {
  name: '',
  email: '',
  countryCode: DEFAULT_COUNTRY_CODE,
  phone: '',
  whatsappOptIn: false,
  pincode: '',
  subject: '',
  message: '',
};

export function Contact() {
  const [formData, setFormData] = useState(initialFormData);

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContact(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);
    try {
      await submitContact(formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData(initialFormData);
      }, 3000);
    } catch (err) {
      if (err instanceof FormSubmitError && err.fieldErrors) {
        setErrors(err.fieldErrors as ContactErrors);
        setSubmitError(err.message);
      } else {
        setSubmitError(
          err instanceof Error
            ? err.message
            : 'Something went wrong while sending your message. Please try again.',
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name } = target;
    let value: string | boolean = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'phone' && typeof value === 'string') {
      value = value.replace(/\D/g, '');
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof ContactErrors];
        return next;
      });
    }
    if (name === 'countryCode' && errors.phone) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.phone;
        return next;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    const validationErrors = validateContact(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: validationErrors[name as keyof ContactErrors],
    }));
  };

  const fieldClass = (field: keyof ContactErrors) =>
    `w-full px-5 py-4 border-3 rounded-xl focus:ring-4 outline-none transition-all text-lg bg-gradient-to-br from-white to-orange-50 ${
      errors[field]
        ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
        : 'border-orange-300 focus:ring-orange-200 focus:border-orange-500'
    }`;

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
          {/* Contact Information */}
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
                        <a href="tel:+918910143371" className="text-orange-50 text-lg hover:text-yellow-200 transition-colors">
                          +91 89101 43371
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-5">
                      <div className="relative">
                        <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-white/30 group-hover:scale-110 transition-transform">
                          <WhatsAppIcon />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
                        <a
                          href="https://api.whatsapp.com/send/?phone=918910143371&text&type=phone_number&app_absent=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-50 text-lg hover:text-yellow-200 transition-colors"
                        >
                          +91 89101 43371
                        </a>
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
                        <a href="mailto:info@ekushernaree.com" className="text-orange-50 text-lg hover:text-yellow-200 transition-colors block">
                          info@ekushernaree.com
                        </a>
                        <a href="mailto:contact@ekushernaree.com" className="text-orange-50 text-lg hover:text-yellow-200 transition-colors block">
                          contact@ekushernaree.com
                        </a>
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
                          36, B.T. Road<br />
                          24 Parganas (N)<br />
                          Kolkata – 700058
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-3 mt-10">
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Visit Us — Google Maps embed */}
            <div className="mt-8 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl opacity-50 blur"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-orange-200">
                <div className="flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-orange-100 to-red-100">
                  <MapPin className="text-orange-600" size={28} />
                  <div>
                    <p className="text-xl font-bold text-orange-700 leading-tight">Visit Us</p>
                    <p className="text-sm text-gray-700">36, B.T. Road, Kolkata – 700058</p>
                  </div>
                </div>
                <iframe
                  title="Ekusher Naree location — 36 BT Road, Kolkata 700058"
                  src="https://www.google.com/maps?q=36%20B.T.%20Road%2C%20Kolkata%20700058&output=embed"
                  className="w-full h-72 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=36%20B.T.%20Road%2C%20Kolkata%20700058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 text-sm font-semibold text-orange-700 hover:text-orange-900 bg-orange-50 border-t-2 border-orange-200"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
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

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
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
                      onBlur={handleBlur}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={fieldClass('name')}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm font-semibold text-red-600">
                        {errors.name}
                      </p>
                    )}
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
                      onBlur={handleBlur}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={fieldClass('email')}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm font-semibold text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div
                      className={`flex items-stretch rounded-xl border-3 bg-gradient-to-br from-white to-orange-50 overflow-hidden transition-all focus-within:ring-4 ${
                        errors.phone
                          ? 'border-red-500 focus-within:ring-red-200 focus-within:border-red-500'
                          : 'border-orange-300 focus-within:ring-orange-200 focus-within:border-orange-500'
                      }`}
                    >
                      <select
                        id="countryCode"
                        name="countryCode"
                        aria-label="Country code"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="px-3 py-4 bg-transparent border-r-2 border-orange-200 outline-none text-lg text-gray-700 cursor-pointer"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.iso} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        inputMode="numeric"
                        maxLength={phoneMaxLengthForCode(formData.countryCode)}
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className="flex-1 px-5 py-4 bg-transparent outline-none text-lg"
                        placeholder="00000 00000"
                      />
                    </div>
                    {errors.phone && (
                      <p id="phone-error" className="mt-2 text-sm font-semibold text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp opt-in checkbox */}
                  <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-xl px-5 py-4">
                    <input
                      type="checkbox"
                      id="whatsappOptIn"
                      name="whatsappOptIn"
                      checked={formData.whatsappOptIn}
                      onChange={handleChange}
                      className="w-5 h-5 accent-green-600 cursor-pointer"
                    />
                    <label htmlFor="whatsappOptIn" className="text-gray-700 font-medium cursor-pointer flex items-center space-x-2">
                      <span className="text-[#25D366]">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline mr-1">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </span>
                      <span>Also contact me on WhatsApp</span>
                    </label>
                  </div>

                  <div>
                    <label htmlFor="pincode" className="block text-sm font-bold text-gray-700 mb-2">
                      Postal PIN Code
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      inputMode="numeric"
                      maxLength={6}
                      value={formData.pincode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.pincode}
                      aria-describedby={errors.pincode ? 'pincode-error' : undefined}
                      className={fieldClass('pincode')}
                      placeholder="6-digit PIN code"
                    />
                    {errors.pincode && (
                      <p id="pincode-error" className="mt-2 text-sm font-semibold text-red-600">
                        {errors.pincode}
                      </p>
                    )}
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
                      onBlur={handleBlur}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={fieldClass('subject')}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-2 text-sm font-semibold text-red-600">
                        {errors.subject}
                      </p>
                    )}
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
                      onBlur={handleBlur}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      rows={6}
                      className={`w-full px-5 py-4 border-3 rounded-xl focus:ring-4 outline-none transition-all resize-none text-lg bg-gradient-to-br from-white to-orange-50 ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
                          : 'border-orange-300 focus:ring-orange-200 focus:border-orange-500'
                      }`}
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-sm font-semibold text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-50 border-2 border-red-300 rounded-xl text-red-700 font-semibold">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-5 rounded-xl text-lg font-bold hover:shadow-2xl transition-all shadow-lg flex items-center justify-center space-x-3 border-4 border-orange-200 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span>{submitting ? 'Sending…' : 'Send Message'}</span>
                    <Send size={24} />
                  </button>
                </form>

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
