import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Screenshot {
  src: string;
  altKey: string;
}

interface Props {
  screenshots: Screenshot[];
  onImageClick: (index: number) => void;
  isLightboxOpen: boolean;
}

export default function ScreenshotCarousel({ screenshots, onImageClick, isLightboxOpen }: Props) {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef(0);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % screenshots.length);
  }, [screenshots.length]);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (isLightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, isLightboxOpen]);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <div className="relative select-none" dir="ltr">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center"
          animate={{ x: -current * 100 + '%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          style={{ touchAction: 'pan-y' }}
        >
          {screenshots.map((s, i) => {
            const isActive = i === current;
            return (
              <div
                key={i}
                className="flex-[0_0_100%] max-w-full md:min-w-full md:flex-shrink-0 flex items-center justify-center py-4 sm:py-8 md:py-10"
              >
                <div
                  className={`
                    w-full md:w-[85%] lg:w-[82%] md:max-w-[880px]
                    transition-all duration-500 ease-out
                    ${isActive ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-50'}
                  `}
                >
                  <div
                    className="bg-white rounded-2xl shadow-xl border border-border/60 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    onClick={() => onImageClick(i)}
                  >
                    <div className="h-9 sm:h-10 bg-surface-alt border-b border-border flex items-center px-4 gap-2 select-none">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-300/70" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400/70" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400/70" />
                    </div>
                    <div className="aspect-video bg-white">
                      <img
                        src={s.src}
                        alt={t(s.altKey)}
                        className="w-full h-full object-contain p-0.5 sm:p-1"
                        loading={i === 0 ? 'eager' : 'lazy'}
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-text-secondary shadow-md hover:shadow-lg flex items-center justify-center transition-all z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 backdrop-blur-sm"
          aria-label={t('screenshots.prev')}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-text-secondary shadow-md hover:shadow-lg flex items-center justify-center transition-all z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 backdrop-blur-sm"
          aria-label={t('screenshots.next')}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current
                ? 'w-6 bg-accent'
                : 'w-2.5 bg-border hover:bg-text-muted'
            }`}
            aria-label={`${t('screenshots.dot')} ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
