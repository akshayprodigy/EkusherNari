import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID as string | undefined;
const ENQUIRY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ENQUIRY_TEMPLATE_ID as string | undefined;

function assertConfig(templateId: string | undefined, label: string) {
  if (!SERVICE_ID || !PUBLIC_KEY || !templateId) {
    throw new Error(
      `EmailJS is not configured for ${label}. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_PUBLIC_KEY and the relevant template ID in your .env file.`,
    );
  }
}

export type ContactPayload = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  whatsappOptIn: boolean;
  pincode: string;
  subject: string;
  message: string;
};

export async function sendContactEmail(data: ContactPayload) {
  assertConfig(CONTACT_TEMPLATE_ID, 'contact form');
  const fullPhone = data.phone ? `${data.countryCode} ${data.phone}` : '';
  return emailjs.send(
    SERVICE_ID!,
    CONTACT_TEMPLATE_ID!,
    {
      name: data.name,
      email: data.email,
      phone: fullPhone,
      whatsapp_opt_in: data.whatsappOptIn ? 'Yes' : 'No',
      pincode: data.pincode || '—',
      subject: data.subject,
      message: data.message,
    },
    { publicKey: PUBLIC_KEY! },
  );
}

export type EnquiryPayload = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
  productTitle: string;
  productCategory: string;
  productPrice: string;
  productArtisan: string;
};

export async function sendEnquiryEmail(data: EnquiryPayload) {
  assertConfig(ENQUIRY_TEMPLATE_ID, 'enquiry form');
  const fullPhone = `${data.countryCode} ${data.phone}`;
  return emailjs.send(
    SERVICE_ID!,
    ENQUIRY_TEMPLATE_ID!,
    {
      name: data.name,
      email: data.email,
      phone: fullPhone,
      message: data.message || '—',
      product_title: data.productTitle,
      product_category: data.productCategory,
      product_price: data.productPrice,
      product_artisan: data.productArtisan,
    },
    { publicKey: PUBLIC_KEY! },
  );
}
