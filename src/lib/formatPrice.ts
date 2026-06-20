import { Language } from '../translations';

export const PRICE_AMOUNT = 7250;

export function formatPrice(amount: number, lang: Language): string {
  if (lang === 'ar') {
    return `د.ج ${amount.toLocaleString('en-US')}`;
  }
  return `${amount.toLocaleString('fr-DZ')} DA`;
}

export function embedPrice(template: string, lang: Language): string {
  return template.replace('{price}', formatPrice(PRICE_AMOUNT, lang));
}
