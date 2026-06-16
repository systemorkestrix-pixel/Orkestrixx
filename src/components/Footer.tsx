import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-alt border-t border-border text-text-secondary pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assets/app_icon.ico"
                alt="Orkestrix"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-black tracking-tight text-primary leading-none">Orkestrix</span>
            </div>
            <p className="text-text-muted leading-relaxed max-w-sm mb-6 font-medium text-sm">
              {t('footer.description')}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-surface text-text-muted text-xs font-medium rounded-full border border-border">{t('footer.os')}</span>
              <span className="px-3 py-1 bg-surface text-text-muted text-xs font-medium rounded-full border border-border">{t('footer.version')}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-5 text-text-secondary">{t('footer.informations')}</h4>
            <div className="text-sm text-text-muted font-medium space-y-3">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-text-dim">{t('footer.name')}</span>
                <span className="text-text-secondary">{t('footer.systemName')}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-text-dim">{t('footer.category')}</span>
                <span className="text-text-secondary">{t('footer.posInventory')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-dim">{t('footer.platform')}</span>
                <span className="text-text-secondary">{t('footer.windowsDesktop')}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-5 text-text-secondary">{t('footer.groupeProduit')}</h4>
            <ul className="space-y-3">
              <li><a href="/#modules" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">{t('footer.fonctionnalites')}</a></li>
              <li><a href="/#captures" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">{t('footer.captures')}</a></li>
              <li><a href="/#pricing" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">{t('footer.tarifs')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-5 text-text-secondary">{t('footer.groupeEntreprise')}</h4>
            <ul className="space-y-3">
              <li><Link to="/comment-acheter" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">{t('footer.commentAcheter')}</Link></li>
              <li><Link to="/revendeur" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">{t('footer.programmeRevendeur')}</Link></li>
              <li><a href="https://wa.me/213777826223" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-6">
          <Newsletter />
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-text-dim text-sm font-medium">© {new Date().getFullYear()} Orkestrix System Manager. {t('footer.license')}</p>
          <div className="flex items-center gap-2 text-xs text-text-dim">
            <span>{t('footer.systemName')}</span>
            <span className="text-border">·</span>
            <span>{t('footer.posInventory')}</span>
            <span className="text-border">·</span>
            <span>{t('footer.windowsDesktop')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
