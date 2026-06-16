import { ReactNode } from 'react';
import { usePageMeta } from '../lib/usePageMeta';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';

interface LegalSection {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
}

interface LegalLayoutProps {
  titleMeta: string;
  descriptionMeta: string;
  pageTitle: string;
  sections: LegalSection[];
  lastUpdatedDate: string;
}

export default function LegalLayout({ titleMeta, descriptionMeta, pageTitle, sections, lastUpdatedDate }: LegalLayoutProps) {
  const { t, lang } = useLanguage();
  usePageMeta(titleMeta, descriptionMeta);

  return (
    <>
      <div className={`min-h-screen bg-surface ${lang === 'ar' ? 'rtl' : ''}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          <PageHeader title={pageTitle} backLabel={t('legal.backToHome')} />

          <div className="space-y-10">
            {sections.map((section, index) => (
              <section key={index} className="relative pl-5 sm:pl-6 border-s-2 border-accent/30">
                <div className="flex items-start gap-3 mb-4">
                  {section.icon && (
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent">
                      {section.icon}
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-text-secondary">{section.title}</h2>
                </div>
                <div className="text-text-secondary text-sm leading-relaxed space-y-2">
                  {section.children}
                </div>
              </section>
            ))}
          </div>

          <div className="pt-8 mt-16 border-t border-border">
            <p className="text-text-dim text-xs">{t('legal.lastUpdated')} : {lastUpdatedDate}</p>
          </div>

        </div>
      </div>
    </>
  );
}
