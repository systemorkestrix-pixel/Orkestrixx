import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PageHeaderProps {
  title: string;
  description?: string;
  backLabel?: string;
}

export default function PageHeader({ title, description, backLabel }: PageHeaderProps) {
  const { lang } = useLanguage();

  return (
    <div className="mb-12">
      <div className="flex justify-center mb-8">
        <Link to="/">
          <img
            src="/assets/app_icon.ico"
            alt="Orkestrix"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-md"
          />
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-text-secondary tracking-tight text-center">{title}</h1>

      {description && (
        <p className="text-text-muted font-medium mt-2 sm:mt-3 text-sm sm:text-base text-center max-w-2xl mx-auto">{description}</p>
      )}

      {backLabel && (
        <div className="flex justify-center mt-5 sm:mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-bold text-sm transition-colors group"
          >
            <ArrowLeft
              className={`w-4 h-4 transition-transform ${
                lang === 'ar' ? 'group-hover:-translate-x-0.5 rotate-180' : 'group-hover:-translate-x-0.5'
              }`}
            />
            {backLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
