import { BarChart3, Package, ShoppingCart, TrendingUp, Target, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Investment() {
  const { t } = useLanguage();

  const points = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-accent" />,
      title: t('investment.item1Title'),
      description: t('investment.item1Desc')
    },
    {
      icon: <Package className="w-6 h-6 text-accent" />,
      title: t('investment.item2Title'),
      description: t('investment.item2Desc')
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-accent" />,
      title: t('investment.item3Title'),
      description: t('investment.item3Desc')
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      title: t('investment.item4Title'),
      description: t('investment.item4Desc')
    },
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      title: t('investment.item5Title'),
      description: t('investment.item5Desc')
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: t('investment.item6Title'),
      description: t('investment.item6Desc')
    }
  ];

  return (
    <section className="py-24 bg-surface-alt border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-text-secondary mb-4">{t('investment.title')}</h2>
          <div className="w-20 h-1 rounded-full bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary font-medium">
            {t('investment.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 group shadow-sm"
            >
              <div className="w-14 h-14 bg-surface-alt rounded-lg border border-border flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent-bg transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-text-secondary mb-3">{item.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
