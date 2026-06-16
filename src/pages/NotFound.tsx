import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('notFound.title')}</title>
        <meta name="description" content={t('notFound.description')} />
      </Helmet>
      <div className="min-h-screen bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <PageHeader title={t('notFound.heading')} backLabel={t('legal.backToHome')} />

          <div className="mt-14 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-accent-bg rounded-full flex items-center justify-center mb-8">
              <span className="text-4xl font-black text-accent">404</span>
            </div>
            <p className="text-text-muted font-medium max-w-md">
              {t('notFound.message')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
