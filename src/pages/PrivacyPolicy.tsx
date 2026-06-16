import { Database, FileText, Target, Users, Clock, ShieldCheck, Lock, Cookie, Mail, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LegalLayout from './LegalLayout';

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  const date = t('legal.date');

  return (
    <LegalLayout
      titleMeta={t('privacy.titleMeta')}
      descriptionMeta={t('privacy.descMeta')}
      pageTitle={t('legal.privacyTitle')}
      lastUpdatedDate={date}
      sections={[
        {
          icon: <Database className="w-full h-full" />,
          title: t('privacy.s1Title'),
          children: (
            <>
              <p>{t('privacy.s1P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li><strong>{t('privacy.s1Li1')}</strong></li>
                <li><strong>{t('privacy.s1Li2')}</strong></li>
                <li><strong>{t('privacy.s1Li3')}</strong></li>
                <li><strong>{t('privacy.s1Li4')}</strong></li>
              </ul>
            </>
          ),
        },
        {
          icon: <FileText className="w-full h-full" />,
          title: t('privacy.s2Title'),
          children: (
            <>
              <p>{t('privacy.s2P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li><strong>{t('privacy.s2Li1')}</strong></li>
                <li><strong>{t('privacy.s2Li2')}</strong></li>
                <li><strong>{t('privacy.s2Li3')}</strong></li>
              </ul>
            </>
          ),
        },
        {
          icon: <Target className="w-full h-full" />,
          title: t('privacy.s3Title'),
          children: (
            <>
              <p>{t('privacy.s3P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li>{t('privacy.s3Li1')}</li>
                <li>{t('privacy.s3Li2')}</li>
                <li>{t('privacy.s3Li3')}</li>
                <li>{t('privacy.s3Li4')}</li>
                <li>{t('privacy.s3Li5')}</li>
                <li>{t('privacy.s3Li6')}</li>
                <li>{t('privacy.s3Li7')}</li>
              </ul>
            </>
          ),
        },
        {
          icon: <Users className="w-full h-full" />,
          title: t('privacy.s4Title'),
          children: (
            <>
              <p>{t('privacy.s4P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li>{t('privacy.s4Li1')}</li>
                <li>{t('privacy.s4Li2')}</li>
                <li>{t('privacy.s4Li3')}</li>
                <li>{t('privacy.s4Li4')}</li>
              </ul>
              <p>{t('privacy.s4P2')}</p>
            </>
          ),
        },
        {
          icon: <Clock className="w-full h-full" />,
          title: t('privacy.s5Title'),
          children: (
            <>
              <p>{t('privacy.s5P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li><strong>{t('privacy.s5Li1')}</strong></li>
                <li><strong>{t('privacy.s5Li2')}</strong></li>
                <li><strong>{t('privacy.s5Li3')}</strong></li>
                <li><strong>{t('privacy.s5Li4')}</strong></li>
              </ul>
            </>
          ),
        },
        {
          icon: <ShieldCheck className="w-full h-full" />,
          title: t('privacy.s6Title'),
          children: (
            <>
              <p>{t('privacy.s6P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li>{t('privacy.s6Li1')}</li>
                <li>{t('privacy.s6Li2')}</li>
                <li>{t('privacy.s6Li3')}</li>
                <li>{t('privacy.s6Li4')}</li>
                <li>{t('privacy.s6Li5')}</li>
                <li>{t('privacy.s6Li6')}</li>
                <li>{t('privacy.s6Li7')}</li>
              </ul>
              <p>{t('privacy.s6P2')}</p>
            </>
          ),
        },
        {
          icon: <Lock className="w-full h-full" />,
          title: t('privacy.s7Title'),
          children: (
            <p>{t('privacy.s7P1')}</p>
          ),
        },
        {
          icon: <Cookie className="w-full h-full" />,
          title: t('privacy.s8Title'),
          children: (
            <>
              <p>{t('privacy.s8P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li>{t('privacy.s8Li1')}</li>
                <li>{t('privacy.s8Li2')}</li>
              </ul>
              <p>{t('privacy.s8P2')}</p>
            </>
          ),
        },
        {
          icon: <Mail className="w-full h-full" />,
          title: t('privacy.s9Title'),
          children: (
            <p>{t('privacy.s9P1')}</p>
          ),
        },
        {
          icon: <RefreshCw className="w-full h-full" />,
          title: t('privacy.s10Title'),
          children: (
            <p>{t('privacy.s10P1')}</p>
          ),
        },
      ]}
    />
  );
}
