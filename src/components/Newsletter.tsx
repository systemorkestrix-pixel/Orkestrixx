import { useState, FormEvent } from 'react';
import { Mail, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { submitNewsletter, NewsletterPayload } from '../lib/api';
import { trackNewsletterSubscribe } from '../lib/analytics';
import { notifyNewsletterSubscription } from '../lib/notifications';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<NewsletterPayload['role']>('prospect');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const roles: { value: NewsletterPayload['role']; label: string }[] = [
    { value: 'prospect', label: t('newsletter.roleProspect') },
    { value: 'customer', label: t('newsletter.roleCustomer') },
    { value: 'reseller', label: t('newsletter.roleReseller') },
    { value: 'distributor', label: t('newsletter.roleDistributor') },
  ];

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('submitting');

    try {
      const result = await submitNewsletter({ email: email.trim(), role });
      if (result.success) {
        setStatus('success');
        trackNewsletterSubscribe(role);
        await notifyNewsletterSubscription(email, role);
        setEmail('');
        setRole('prospect');
      } else {
        setStatus('error');
        setErrorMessage(result.message);
      }
    } catch {
      setStatus('error');
      setErrorMessage(t('newsletter.errorMessage'));
    }
  }

  function handleReset() {
    setStatus('idle');
    setErrorMessage('');
  }

  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-10 text-white shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
          <Mail className="w-5 h-5 text-accent" />
        </div>
        <h3 className="text-lg font-bold">{t('newsletter.title')}</h3>
      </div>
      <p className="text-white/80 text-sm font-medium mb-6 leading-relaxed">
        {t('newsletter.description')}
      </p>

      {status === 'success' ? (
        <div className="bg-white/10 rounded-xl p-6 text-center">
          <CheckCircle className="w-10 h-10 text-accent mx-auto mb-3" />
          <p className="font-bold text-white mb-1">{t('newsletter.successTitle')}</p>
          <p className="text-white/70 text-sm font-medium">{t('newsletter.successText')}</p>
          <button
            onClick={handleReset}
            className="mt-4 text-xs text-accent hover:text-accent-hover underline font-bold"
          >
            {t('newsletter.subscribeAgain')}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === 'error' && (
            <div className="bg-red-500/20 rounded-lg px-4 py-3 flex items-center gap-2 border border-red-500/30">
              <AlertCircle className="w-4 h-4 text-red-300 flex-shrink-0" />
              <p className="text-sm text-white font-medium">{errorMessage}</p>
            </div>
          )}

          <div className="flex flex-col lg:flex-row lg:items-end gap-3 lg:gap-4">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
                {t('newsletter.emailLabel')}
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.emailPlaceholder')}
                required
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 font-medium text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
              />
            </div>

            <div className="w-full lg:w-44">
              <label htmlFor="newsletter-role" className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
                {t('newsletter.roleLabel')}
              </label>
              <select
                id="newsletter-role"
                value={role}
                onChange={(e) => setRole(e.target.value as NewsletterPayload['role'])}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
              >
                {roles.map((r) => (
                  <option key={r.value} value={r.value} className="bg-primary text-white">
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || !email.trim()}
              className="w-full lg:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed lg:shrink-0"
            >
              {status === 'submitting' ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <Send className="w-4 h-4" />
              )}
              {status === 'submitting' ? t('newsletter.submittingText') : t('newsletter.submitText')}
            </button>
          </div>

          <p className="text-white/50 text-xs text-center">
            {t('newsletter.privacyText')}
          </p>
        </form>
      )}
    </div>
  );
}
