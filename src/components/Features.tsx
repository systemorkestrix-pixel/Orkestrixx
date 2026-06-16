import { PackageSearch, TrendingUp, ShoppingCart, Activity, FileText, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <PackageSearch className="w-6 h-6 text-accent" />,
      title: t('features.item1Title'),
      description: t('features.item1Desc')
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      title: t('features.item2Title'),
      description: t('features.item2Desc')
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-accent" />,
      title: t('features.item3Title'),
      description: t('features.item3Desc')
    },
    {
      icon: <Activity className="w-6 h-6 text-accent" />,
      title: t('features.item4Title'),
      description: t('features.item4Desc')
    },
    {
      icon: <FileText className="w-6 h-6 text-accent" />,
      title: t('features.item5Title'),
      description: t('features.item5Desc')
    },
    {
      icon: <Database className="w-6 h-6 text-accent" />,
      title: t('features.item6Title'),
      description: t('features.item6Desc')
    }
  ];

  return (
    <section id="modules" className="py-24 bg-surface relative z-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-text-secondary sm:text-4xl mb-4">
            {t('features.title')}
          </h2>
          <div className="w-20 h-1 rounded-full bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary font-medium">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-surface-alt rounded-lg border border-border flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent-bg transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-text-secondary mb-3">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
