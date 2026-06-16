import { Handshake, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Reseller() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="py-24 bg-surface-alt border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-text-secondary mb-4">{t('reseller.title')}</h2>
          <div className="w-20 h-1 rounded-full bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary font-medium">
            {t('reseller.description')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-card rounded-xl border border-border p-10 shadow-sm text-center"
        >
          <div className="w-16 h-16 bg-accent-bg rounded-xl border border-accent/20 flex items-center justify-center mx-auto mb-6">
            <Handshake className="w-8 h-8 text-accent" />
          </div>
          <p className="text-text-secondary text-lg font-bold leading-relaxed mb-6">
            {t('reseller.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:systemorkestrix@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              {t('reseller.button')}
            </a>
            <Link
              to="/revendeur"
              className="inline-flex items-center gap-3 px-6 py-4 bg-card border border-border hover:border-accent/50 text-text-secondary font-bold rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
            >
              {t('reseller.learnMore')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
