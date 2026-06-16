import { Store, ShoppingBasket, ShoppingCart, Hammer, Tag, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function TargetAudience() {
  const { t } = useLanguage();

  const audiences = [
    { icon: <Store className="w-6 h-6" />, title: t('targetAudience.item1') },
    { icon: <ShoppingBasket className="w-6 h-6" />, title: t('targetAudience.item2') },
    { icon: <ShoppingCart className="w-6 h-6" />, title: t('targetAudience.item3') },
    { icon: <Hammer className="w-6 h-6" />, title: t('targetAudience.item4') },
    { icon: <Tag className="w-6 h-6" />, title: t('targetAudience.item5') },
    { icon: <Building2 className="w-6 h-6" />, title: t('targetAudience.item6') }
  ];

  return (
    <section className="py-24 bg-surface-alt border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-text-secondary mb-4">{t('targetAudience.title')}</h2>
          <div className="w-20 h-1 rounded-full bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary font-medium">
            {t('targetAudience.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {audiences.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 group shadow-sm"
            >
              <div className="w-14 h-14 bg-surface-alt border border-border rounded-full flex items-center justify-center text-accent mb-4 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-text-secondary font-bold text-sm sm:text-base">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
