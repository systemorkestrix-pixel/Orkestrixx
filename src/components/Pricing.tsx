import { Check, Download, CreditCard, Building2, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const benefits = [
  'pricing.benefit1',
  'pricing.benefit2',
  'pricing.benefit3',
  'pricing.benefit4',
  'pricing.benefit5',
  'pricing.benefit6'
] as const;

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-surface-alt border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-text-secondary mb-4">{t('pricing.title')}</h2>
          <div className="w-20 h-1 rounded-full bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary font-medium">
            {t('pricing.description')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-card rounded-2xl border border-accent/20 shadow-md shadow-accent/5 overflow-hidden">
            
            <div className="p-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-bg text-accent-dark font-bold text-xs mb-6 border border-accent/20 uppercase tracking-wider">
                {t('pricing.badge')}
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-accent-dark text-6xl md:text-7xl font-black tracking-tight">{t('pricing.price')}</span>
              </div>
              <p className="text-text-dim text-xs font-medium">{t('pricing.trialText')}</p>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xl font-bold text-text-secondary mb-1">{t('pricing.benefit1')}</p>
                <p className="text-text-muted text-sm font-medium">{t('pricing.tagline')}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs font-bold text-text-dim uppercase tracking-wider mb-3">{t('pricing.paymentTitle')}</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-1.5 bg-surface-alt rounded-lg px-3 py-1.5 border border-border">
                    <Smartphone className="w-3.5 h-3.5 text-accent" />
                    <span className="text-text-secondary text-xs font-bold">BaridiMob</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-alt rounded-lg px-3 py-1.5 border border-border">
                    <Building2 className="w-3.5 h-3.5 text-accent" />
                    <span className="text-text-secondary text-xs font-bold">CCP</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-alt rounded-lg px-3 py-1.5 border border-border">
                    <CreditCard className="w-3.5 h-3.5 text-accent" />
                    <span className="text-text-secondary text-xs font-bold">PayPal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 pb-4">
              <ul className="space-y-2.5">
                {benefits.map((key, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent-bg flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </span>
                    <span className="text-text-secondary text-sm font-medium">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 pt-4 text-center border-t border-border">
              <p className="text-xs text-text-dim mb-4 font-medium">{t('pricing.paymentText')}</p>
              <a
                href="https://github.com/systemorkestrix-pixel/Orkestrixx/releases/download/v1.0.0/OrkestrixSystemManager-Setup-1.0.0.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                {t('pricing.button')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
