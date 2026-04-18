export type FieldErrors = Record<string, string>;

export class FormSubmitError extends Error {
  constructor(message: string, public fieldErrors?: FieldErrors, public status?: number) {
    super(message);
    this.name = 'FormSubmitError';
  }
}

const CONTACT_ENDPOINT = '/api/contact.php';
const ENQUIRY_ENDPOINT = '/api/enquiry.php';

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

async function postJson(url: string, body: unknown): Promise<void> {
  let response: Response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...(body as object), website: '' }),
    });
  } catch {
    throw new FormSubmitError('Network error. Please check your connection and try again.');
  }

  let payload: { ok?: boolean; error?: string; errors?: FieldErrors } | null = null;
  try {
    payload = (await response.json()) as typeof payload;
  } catch {
    payload = null;
  }

  if (response.ok && payload?.ok) return;

  if (response.status === 422 && payload?.errors) {
    throw new FormSubmitError('Please fix the highlighted fields and try again.', payload.errors, 422);
  }

  if (response.status === 429) {
    throw new FormSubmitError(
      payload?.error ?? 'Too many requests. Please try again in a few minutes.',
      undefined,
      429,
    );
  }

  throw new FormSubmitError(
    payload?.error ?? 'Could not send your message right now. Please try again later.',
    undefined,
    response.status,
  );
}

export function submitContact(data: ContactPayload): Promise<void> {
  return postJson(CONTACT_ENDPOINT, data);
}

export function submitEnquiry(data: EnquiryPayload): Promise<void> {
  return postJson(ENQUIRY_ENDPOINT, data);
}
