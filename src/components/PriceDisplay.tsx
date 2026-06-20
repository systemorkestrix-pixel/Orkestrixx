import { formatPrice, PRICE_AMOUNT } from '../lib/formatPrice';
import { useLanguage } from '../context/LanguageContext';

export default function PriceDisplay() {
  const { lang } = useLanguage();

  return (
    <span dir="ltr" className="inline-block text-6xl md:text-7xl font-black text-accent-dark tracking-tight leading-none py-3">
      {formatPrice(PRICE_AMOUNT, lang)}
    </span>
  );
}
