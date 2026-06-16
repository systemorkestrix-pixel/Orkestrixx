import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm shadow-black/5 border-b border-border py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            <img 
              src="/assets/app_icon.ico" 
              alt="Orkestrix"
              className="w-10 h-10 rounded-xl"
            />
            <h1 className="text-2xl font-bold tracking-tight text-primary mb-0">Orkestrix</h1>
            <div className="h-5 w-px bg-border hidden sm:block"></div>
            <span className="text-xs text-text-muted font-medium hidden sm:block">{t('header.systemManager')}</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">{t('header.accueil')}</a>
            <a href="#modules" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">{t('header.modules')}</a>
            <a href="#pricing" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">{t('header.tarifs')}</a>
            <a href="#partners" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">{t('header.partenaires')}</a>
            <LanguageSwitcher />
            <a 
              href="https://www.mediafire.com/file/et4b25bb84x6fbf/OrkestrixSystemManager-Setup-1.0.0.exe/file" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-bold rounded-xl transition-all shadow-sm shadow-accent/20 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {t('header.essaiGratuit')}
            </a>
          </nav>
          
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button 
              className="text-text-secondary hover:text-primary focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full start-0 w-full bg-card border-b border-border shadow-lg py-4 px-4 flex flex-col gap-2">
          <a href="#" className="block px-4 py-3 text-text-secondary font-medium hover:bg-surface-alt rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>{t('header.accueil')}</a>
          <a href="#modules" className="block px-4 py-3 text-text-secondary font-medium hover:bg-surface-alt rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>{t('header.modules')}</a>
          <a href="#pricing" className="block px-4 py-3 text-text-secondary font-medium hover:bg-surface-alt rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>{t('header.tarifs')}</a>
          <a href="#partners" className="block px-4 py-3 text-text-secondary font-medium hover:bg-surface-alt rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>{t('header.partenaires')}</a>
          <div className="pt-2 mt-2">
            <a 
              href="https://www.mediafire.com/file/et4b25bb84x6fbf/OrkestrixSystemManager-Setup-1.0.0.exe/file"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 px-4 py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl w-full shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download className="w-5 h-5" />
              {t('header.telechargerEssai')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
