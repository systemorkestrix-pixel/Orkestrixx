import { useState, useCallback } from 'react';
import { Download, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import ScreenshotCarousel from './ScreenshotCarousel';
import ScreenshotLightbox from './ScreenshotLightbox';

const SCREENSHOTS: { src: string; altKey: string }[] = [
  { src: '/assets/dashboard-screenshot.PNG', altKey: 'screenshots.altDashboard' },
  { src: '/assets/Piont De vente.PNG', altKey: 'screenshots.altPOS' },
  { src: '/assets/Inventaire.PNG', altKey: 'screenshots.altStock' },
  { src: '/assets/Ventes.PNG', altKey: 'screenshots.altSales' },
  { src: '/assets/Fournisseurs.PNG', altKey: 'screenshots.altSuppliers' },
  { src: '/assets/Rapports.PNG', altKey: 'screenshots.altReports' },
];

export default function Hero() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const lightboxPrev = useCallback(() => {
    setLightboxIndex(i => i !== null ? (i - 1 + SCREENSHOTS.length) % SCREENSHOTS.length : null);
  }, []);

  const lightboxNext = useCallback(() => {
    setLightboxIndex(i => i !== null ? (i + 1) % SCREENSHOTS.length : null);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-24 bg-gradient-to-b from-surface to-surface-alt">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
        >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-text-secondary leading-tight mb-8">
              {t('hero.titlePrefix')} <br className="hidden sm:block" /> <span className="text-accent-dark">{t('hero.titleHighlight')}</span>
            </h1>

            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-bg text-accent-dark font-bold text-xs border border-accent/20 uppercase tracking-wider shadow-sm">
                <Shield className="w-4 h-4 text-accent-dark" />
                {t('pricing.badge')}
              </div>
              <span dir="ltr" className="text-6xl md:text-7xl font-black text-accent-dark tracking-tight leading-none">{t('hero.price')}</span>
              <span dir="ltr" className="text-base text-text-muted font-medium">{t('hero.priceDzd')}</span>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-bold text-text-secondary mt-1">
                <span>{t('pricing.benefit1')}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span>{t('pricing.benefit2')}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span>{t('pricing.benefit3')}</span>
              </div>
            </div>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed font-medium max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col items-center gap-5">
              <a 
                href="https://github.com/systemorkestrix-pixel/Orkestrixx/releases/download/v1.0.0/OrkestrixSystemManager-Setup-1.0.0.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent hover:bg-accent-hover text-white text-lg font-bold rounded-xl transition-all shadow-sm hover:-translate-y-1"
              >
                <Download className="w-6 h-6" />
                <span>{t('hero.button')}</span>
              </a>
            </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-[1000px] mx-auto px-4 mt-16 relative z-10"
      >
        <div className="group">
          <ScreenshotCarousel screenshots={SCREENSHOTS} onImageClick={openLightbox} isLightboxOpen={lightboxIndex !== null} />
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <ScreenshotLightbox
            screenshots={SCREENSHOTS}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={lightboxPrev}
            onNext={lightboxNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
