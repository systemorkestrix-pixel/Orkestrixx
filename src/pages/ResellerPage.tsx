import { usePageMeta } from '../lib/usePageMeta';
import { ArrowLeft, Store, ShoppingBag, Wrench, Laptop, CheckCircle, Percent, Shield, HeadphonesIcon, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';

const roles = [
  {
    icon: <Store className="w-8 h-8" />,
    titleKey: 'resellerPage.role1Title' as const,
    descriptionKey: 'resellerPage.role1Desc' as const,
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    titleKey: 'resellerPage.role2Title' as const,
    descriptionKey: 'resellerPage.role2Desc' as const,
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    titleKey: 'resellerPage.role3Title' as const,
    descriptionKey: 'resellerPage.role3Desc' as const,
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    titleKey: 'resellerPage.role4Title' as const,
    descriptionKey: 'resellerPage.role4Desc' as const,
  },
];

const benefits = [
  {
    icon: <Percent className="w-6 h-6 text-accent" />,
    titleKey: 'resellerPage.benefit1Title' as const,
    descriptionKey: 'resellerPage.benefit1Desc' as const,
  },
  {
    icon: <Shield className="w-6 h-6 text-accent" />,
    titleKey: 'resellerPage.benefit2Title' as const,
    descriptionKey: 'resellerPage.benefit2Desc' as const,
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-accent" />,
    titleKey: 'resellerPage.benefit3Title' as const,
    descriptionKey: 'resellerPage.benefit3Desc' as const,
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-accent" />,
    titleKey: 'resellerPage.benefit4Title' as const,
    descriptionKey: 'resellerPage.benefit4Desc' as const,
  },
];

const steps = [
  {
    step: '1',
    titleKey: 'resellerPage.step1Title' as const,
    descKey: 'resellerPage.step1Desc' as const,
  },
  {
    step: '2',
    titleKey: 'resellerPage.step2Title' as const,
    descKey: 'resellerPage.step2Desc' as const,
  },
  {
    step: '3',
    titleKey: 'resellerPage.step3Title' as const,
    descKey: 'resellerPage.step3Desc' as const,
  },
  {
    step: '4',
    titleKey: 'resellerPage.step4Title' as const,
    descKey: 'resellerPage.step4Desc' as const,
  },
];

export default function ResellerPage() {
  const { t, lang } = useLanguage();
  usePageMeta(t('resellerPage.title'), t('resellerPage.description'));

  return (
    <>
      <div className={`min-h-screen bg-surface ${lang === 'ar' ? 'rtl' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <PageHeader title={t('resellerPage.title')} description={t('resellerPage.description')} backLabel={t('resellerPage.backToHome')} />

          <div className="mt-14">
            <section className="mb-20">
              <h2 className="text-2xl font-bold text-text-secondary mb-8 text-center">{t('resellerPage.rolesTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {roles.map((role, index) => (
                  <div key={index} className="bg-card p-8 rounded-xl border border-border shadow-sm hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-surface-alt rounded-xl border border-border flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent-bg transition-colors">
                      {role.icon}
                    </div>
                    <h3 className="text-lg font-bold text-text-secondary mb-3">{t(role.titleKey)}</h3>
                    <p className="text-text-muted text-sm font-medium leading-relaxed">{t(role.descriptionKey)}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-2xl font-bold text-text-secondary mb-8 text-center">{t('resellerPage.benefitsTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-5 bg-card p-8 rounded-xl border border-border shadow-sm">
                    <div className="w-14 h-14 bg-accent-bg rounded-xl flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-secondary mb-2">{t(benefit.titleKey)}</h3>
                      <p className="text-text-muted text-sm font-medium leading-relaxed">{t(benefit.descriptionKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-2xl font-bold text-text-secondary mb-8 text-center">{t('resellerPage.howToTitle')}</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {steps.map((item, index) => (
                  <div key={index} className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-sm">
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-lg font-bold text-text-secondary mb-1">{t(item.titleKey)}</h3>
                      <p className="text-text-muted text-sm font-medium">{t(item.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="max-w-3xl mx-auto bg-card rounded-2xl border border-accent/20 shadow-md p-12 text-center">
              <div className="w-16 h-16 bg-accent-bg rounded-xl border border-accent/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-text-secondary mb-4">{t('resellerPage.ctaTitle')}</h2>
              <p className="text-text-muted font-medium mb-8 max-w-lg mx-auto">
                {t('resellerPage.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:systemorkestrix@gmail.com?subject=Candidature%20Programme%20Revendeur"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
                >
                  <Mail className="w-5 h-5" />
                  {t('resellerPage.ctaButton')}
                </a>
              </div>
              <p className="text-text-dim text-xs mt-6">
                {t('resellerPage.ctaNote')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
