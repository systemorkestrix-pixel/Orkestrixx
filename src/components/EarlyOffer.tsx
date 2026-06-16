import { Check, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function EarlyOffer() {
  const { t } = useLanguage();

  const features = [
    t('earlyOffer.feature1'),
    t('earlyOffer.feature2'),
    t('earlyOffer.feature3'),
    t('earlyOffer.feature4')
  ];

  return (
    <section className="py-16 bg-surface-alt border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border-md shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              
              <div className="p-8 md:p-10 flex flex-col justify-center items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-border">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-bg text-accent-dark font-bold text-xs mb-4 border border-accent/20 uppercase tracking-wider">
                  {t('earlyOffer.badge')}
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-accent-dark text-5xl md:text-6xl font-black tracking-tight">29 €</span>
                  <span className="text-text-muted text-lg font-medium">≈ 7 250 DZD</span>
                </div>
                <p className="text-text-dim text-xs font-medium">{t('earlyOffer.priceNote')}</p>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <ul className="space-y-3 mb-8">
                  {features.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent-bg flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-accent" />
                      </span>
                      <span className="text-text-secondary text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.mediafire.com/file/et4b25bb84x6fbf/OrkestrixSystemManager-Setup-1.0.0.exe/file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5" />
                  {t('earlyOffer.button')}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
