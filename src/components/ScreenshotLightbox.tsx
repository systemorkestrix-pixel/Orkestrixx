import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  screenshots: { src: string; altKey: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ScreenshotLightbox({ screenshots, currentIndex, onClose, onPrev, onNext }: Props) {
  const { t } = useLanguage();
  const touchStartX = useRef(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); e.stopImmediatePropagation(); }
      if (e.key === 'ArrowLeft') { onPrev(); e.stopImmediatePropagation(); }
      if (e.key === 'ArrowRight') { onNext(); e.stopImmediatePropagation(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext();
      else onPrev();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10"
        aria-label={t('screenshots.close')}
      >
        <X className="w-5 h-5" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10"
        aria-label={t('screenshots.prev')}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div
        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={screenshots[currentIndex].src}
          alt={t(screenshots[currentIndex].altKey)}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          draggable={false}
        />
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10"
        aria-label={t('screenshots.next')}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
        {currentIndex + 1} / {screenshots.length}
      </div>
    </motion.div>
  );
}
