export type CountryCode = {
  code: string;
  label: string;
  flag: string;
  iso: string;
};

export const COUNTRY_CODES: CountryCode[] = [
  { code: '+91', label: 'India', flag: '🇮🇳', iso: 'IN' },
  { code: '+1', label: 'USA / Canada', flag: '🇺🇸', iso: 'US' },
  { code: '+44', label: 'United Kingdom', flag: '🇬🇧', iso: 'GB' },
  { code: '+61', label: 'Australia', flag: '🇦🇺', iso: 'AU' },
  { code: '+971', label: 'United Arab Emirates', flag: '🇦🇪', iso: 'AE' },
  { code: '+65', label: 'Singapore', flag: '🇸🇬', iso: 'SG' },
  { code: '+60', label: 'Malaysia', flag: '🇲🇾', iso: 'MY' },
  { code: '+880', label: 'Bangladesh', flag: '🇧🇩', iso: 'BD' },
  { code: '+977', label: 'Nepal', flag: '🇳🇵', iso: 'NP' },
  { code: '+94', label: 'Sri Lanka', flag: '🇱🇰', iso: 'LK' },
];

export const DEFAULT_COUNTRY_CODE = '+91';

export function validatePhoneForCode(code: string, digits: string): string | undefined {
  if (!digits) return 'Please enter your phone number';
  if (!/^\d+$/.test(digits)) return 'Phone number must contain only digits';

  if (code === '+91') {
    if (digits.length !== 10) return 'Indian mobile number must be 10 digits';
    if (!/^[6-9]/.test(digits)) return 'Indian mobile number must start with 6, 7, 8, or 9';
    return undefined;
  }

  if (digits.length < 7 || digits.length > 15) {
    return 'Phone number must be between 7 and 15 digits';
  }
  return undefined;
}

export function phoneMaxLengthForCode(code: string): number {
  return code === '+91' ? 10 : 15;
}
