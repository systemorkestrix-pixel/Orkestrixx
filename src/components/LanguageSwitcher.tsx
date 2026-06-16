import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-alt text-text-secondary hover:text-primary transition-all text-xs font-bold"
      title={lang === 'fr' ? t('languageSwitcher.switchToArabic') : t('languageSwitcher.switchToFrench')}
    >
      <Languages className="w-3.5 h-3.5" />
      <span>{lang === 'fr' ? 'AR' : 'FR'}</span>
    </button>
  );
}
