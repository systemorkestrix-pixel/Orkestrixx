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
    <div className="relative select-none">
      <div
        className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-lg"
        style={{ aspectRatio: '16 / 9' }}
      >
        <motion.div
          className="flex h-full"
          animate={{ x: -current * 100 + '%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          style={{ touchAction: 'pan-y' }}
        >
          {screenshots.map((s, i) => (
            <div
              key={i}
              className="min-w-full h-full flex-shrink-0 cursor-pointer flex items-center justify-center bg-surface"
              onClick={() => onImageClick(i)}
            >
              <img
                src={s.src}
                alt={t(s.altKey)}
                className="w-full h-full object-contain"
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            </div>
          ))}
        </motion.div>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 hover:opacity-100 focus-visible:opacity-100"
          aria-label={t('screenshots.prev')}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 hover:opacity-100 focus-visible:opacity-100"
          aria-label={t('screenshots.next')}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
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
