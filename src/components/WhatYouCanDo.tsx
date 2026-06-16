import { ShoppingCart, Package, BarChart3, Users, FileSpreadsheet, WifiOff } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  <ShoppingCart className="w-6 h-6 text-accent" />,
  <Package className="w-6 h-6 text-accent" />,
  <Users className="w-6 h-6 text-accent" />,
  <BarChart3 className="w-6 h-6 text-accent" />,
  <FileSpreadsheet className="w-6 h-6 text-accent" />,
  <WifiOff className="w-6 h-6 text-accent" />
];

export default function WhatYouCanDo() {
  const { t } = useLanguage();

  const capabilities = [
    {
      icon: icons[0],
      title: t('whatYouCanDo.item1Title')
    },
    {
      icon: icons[1],
      title: t('whatYouCanDo.item2Title')
    },
    {
      icon: icons[2],
      title: t('whatYouCanDo.item3Title')
    },
    {
      icon: icons[3],
      title: t('whatYouCanDo.item4Title')
    },
    {
      icon: icons[4],
      title: t('whatYouCanDo.item5Title')
    },
    {
      icon: icons[5],
      title: t('whatYouCanDo.item6Title')
    }
  ];

  return (
    <section className="py-24 bg-surface-alt border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-text-secondary mb-4">{t('whatYouCanDo.title')}</h2>
          <div className="w-20 h-1 rounded-full bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary font-medium">
            {t('whatYouCanDo.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
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
              <h3 className="text-lg font-bold text-text-secondary mb-0">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
