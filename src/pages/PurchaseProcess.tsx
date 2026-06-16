import { usePageMeta } from '../lib/usePageMeta';
import { Download, Play, Wallet, CheckCircle, Key, Smartphone, Building2, CreditCard, Bitcoin, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';

const steps = [
  {
    icon: <Download className="w-6 h-6 text-white" />,
    titleKey: 'purchaseProcess.step1Title' as const,
    descriptionKey: 'purchaseProcess.step1Desc' as const,
  },
  {
    icon: <Play className="w-6 h-6 text-white" />,
    titleKey: 'purchaseProcess.step2Title' as const,
    descriptionKey: 'purchaseProcess.step2Desc' as const,
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    titleKey: 'purchaseProcess.step3Title' as const,
    descriptionKey: 'purchaseProcess.step3Desc' as const,
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    titleKey: 'purchaseProcess.step4Title' as const,
    descriptionKey: 'purchaseProcess.step4Desc' as const,
  },
  {
    icon: <Key className="w-6 h-6 text-white" />,
    titleKey: 'purchaseProcess.step5Title' as const,
    descriptionKey: 'purchaseProcess.step5Desc' as const,
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    titleKey: 'purchaseProcess.step6Title' as const,
    descriptionKey: 'purchaseProcess.step6Desc' as const,
  },
];

const paymentMethods = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    nameKey: 'purchaseProcess.method1Name' as const,
    descriptionKey: 'purchaseProcess.method1Desc' as const,
    type: 'international' as const,
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    nameKey: 'purchaseProcess.method2Name' as const,
    descriptionKey: 'purchaseProcess.method2Desc' as const,
    type: 'international' as const,
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    nameKey: 'purchaseProcess.method3Name' as const,
    descriptionKey: 'purchaseProcess.method3Desc' as const,
    type: 'local' as const,
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    nameKey: 'purchaseProcess.method4Name' as const,
    descriptionKey: 'purchaseProcess.method4Desc' as const,
    type: 'local' as const,
  },
  {
    icon: <Bitcoin className="w-6 h-6" />,
    nameKey: 'purchaseProcess.method5Name' as const,
    descriptionKey: 'purchaseProcess.method5Desc' as const,
    type: 'international' as const,
  },
];

export default function PurchaseProcess() {
  const { t, lang } = useLanguage();
  usePageMeta(`${t('purchaseProcess.title')} — Orkestrix System Manager`, t('purchaseProcess.description'));

  return (
    <>
      <div className={`min-h-screen bg-surface ${lang === 'ar' ? 'rtl' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <PageHeader title={t('purchaseProcess.title')} description={t('purchaseProcess.description')} backLabel={t('purchaseProcess.backToHome')} />

          <div className="mt-14">
            <section className="mb-20">
              <h2 className="text-2xl font-bold text-text-secondary mb-8 text-center">{t('purchaseProcess.stepsTitle')}</h2>
              <div className="max-w-3xl mx-auto space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-md relative z-10">
                        {step.icon}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-1 h-full bg-border rounded-full my-2"></div>
                      )}
                    </div>
                    <div className="pt-3 pb-8">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-dark text-white text-sm font-bold mb-3 shadow-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-text-secondary mb-2">{t(step.titleKey)}</h3>
                      <p className="text-text-muted font-medium leading-relaxed">{t(step.descriptionKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-2xl font-bold text-text-secondary mb-8 text-center">{t('purchaseProcess.paymentTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border shadow-sm hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent-bg rounded-xl flex items-center justify-center text-accent">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-text-secondary">{t(method.nameKey)}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${method.type === 'international' ? 'bg-primary-bg text-primary' : 'bg-accent-bg text-accent-dark'}`}>
                          {method.type === 'international' ? t('purchaseProcess.typeInternational') : t('purchaseProcess.typeLocal')}
                        </span>
                      </div>
                    </div>
                    <p className="text-text-muted text-sm font-medium">{t(method.descriptionKey)}</p>
                  </div>
                ))}
              </div>

              <div className="max-w-3xl mx-auto mt-8 bg-surface-alt rounded-xl border border-border p-6 text-center">
                <p className="text-text-muted text-sm font-medium">
                  {t('purchaseProcess.paymentNote')}
                </p>
              </div>
            </section>

            <section className="max-w-3xl mx-auto bg-surface-alt rounded-2xl border border-border p-10 text-center">
              <h2 className="text-2xl font-bold text-text-secondary mb-4">{t('purchaseProcess.ctaTitle')}</h2>
              <p className="text-text-muted font-medium mb-8 max-w-lg mx-auto">
                {t('purchaseProcess.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.mediafire.com/file/et4b25bb84x6fbf/OrkestrixSystemManager-Setup-1.0.0.exe/file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5" />
                  {t('purchaseProcess.ctaButton')}
                </a>
                <Link
                  to="/revendeur"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-border hover:border-accent/50 text-text-secondary font-bold rounded-xl transition-all shadow-sm"
                >
                  {t('purchaseProcess.ctaReseller')}
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
