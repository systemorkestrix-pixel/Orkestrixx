import { CreditCard, Building2, Smartphone, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function PaymentMethods() {
  const { t } = useLanguage();

  const methods = [
    {
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      name: t('paymentMethods.method1')
    },
    {
      icon: <Building2 className="w-6 h-6 text-accent" />,
      name: t('paymentMethods.method2')
    },
    {
      icon: <CreditCard className="w-6 h-6 text-accent" />,
      name: t('paymentMethods.method3')
    }
  ];

  return (
    <section className="py-12 bg-surface border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-surface-alt rounded-2xl border border-border p-8 md:p-10 text-center"
        >
          <h3 className="text-xl font-bold text-text-secondary mb-6">{t('paymentMethods.title')}</h3>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            {methods.map((method, index) => (
              <div key={index} className="flex items-center gap-3 bg-card rounded-xl px-5 py-3 border border-border shadow-sm">
                <div className="w-10 h-10 bg-accent-bg rounded-lg flex items-center justify-center">
                  {method.icon}
                </div>
                <span className="text-text-secondary font-bold text-sm">{method.name}</span>
              </div>
            ))}
          </div>

          <div className="text-text-muted text-sm font-medium leading-relaxed max-w-lg mx-auto space-y-2">
            <p>{t('paymentMethods.text')}</p>
            <p className="flex items-center justify-center gap-1.5 text-text-secondary">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              {t('paymentMethods.confirmation')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
