import { WifiOff, Lock, Server, Target, RefreshCw, Store } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  <WifiOff className="w-5 h-5" />,
  <Lock className="w-5 h-5" />,
  <Server className="w-5 h-5" />,
  <Target className="w-5 h-5" />,
  <RefreshCw className="w-5 h-5" />,
  <Store className="w-5 h-5" />
];

export default function Trust() {
  const { t } = useLanguage();

  const points = [
    t('trust.item1'),
    t('trust.item2'),
    t('trust.item3'),
    t('trust.item4'),
    t('trust.item5'),
    t('trust.item6')
  ];

  return (
    <section className="py-24 bg-surface border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-text-secondary mb-4">{t('trust.title')}</h2>
          <div className="w-20 h-1 rounded-full bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary font-medium">
            {t('trust.description')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-card px-5 py-3 rounded-xl border border-border shadow-sm hover:border-accent/50 transition-all"
            >
              <div className="w-10 h-10 bg-accent-bg rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                {icons[index]}
              </div>
              <span className="text-text-secondary font-bold text-sm">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
