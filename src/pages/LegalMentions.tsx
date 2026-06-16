import { Link } from 'react-router-dom';
import { Building2, User, Server, Copyright, Shield, Cookie, AlertTriangle, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LegalLayout from './LegalLayout';

export default function LegalMentions() {
  const { t } = useLanguage();
  const date = t('legal.date');

  return (
    <LegalLayout
      titleMeta={t('legalMentions.titleMeta')}
      descriptionMeta={t('legalMentions.descMeta')}
      pageTitle={t('legal.mentionsTitle')}
      lastUpdatedDate={date}
      sections={[
        {
          icon: <Building2 className="w-full h-full" />,
          title: t('legalMentions.s1Title'),
          children: (
            <>
              <p>{t('legalMentions.s1P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li><strong>{t('legalMentions.s1Li1')}</strong></li>
                <li><strong>{t('legalMentions.s1Li2')}</strong></li>
                <li><strong>{t('legalMentions.s1Li3')}</strong></li>
                <li><strong>{t('legalMentions.s1Li4')}</strong></li>
                <li><strong>{t('legalMentions.s1Li5')}</strong></li>
                <li><strong>{t('legalMentions.s1Li6')}</strong></li>
                <li><strong>{t('legalMentions.s1Li7')}</strong></li>
                <li><strong>{t('legalMentions.s1Li8')}</strong></li>
              </ul>
            </>
          ),
        },
        {
          icon: <User className="w-full h-full" />,
          title: t('legalMentions.s2Title'),
          children: (
            <p>{t('legalMentions.s2P1')}</p>
          ),
        },
        {
          icon: <Server className="w-full h-full" />,
          title: t('legalMentions.s3Title'),
          children: (
            <>
              <p>{t('legalMentions.s3P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li><strong>{t('legalMentions.s3Li1')}</strong></li>
                <li><strong>{t('legalMentions.s3Li2')}</strong></li>
                <li><strong>{t('legalMentions.s3Li3')}</strong></li>
              </ul>
            </>
          ),
        },
        {
          icon: <Copyright className="w-full h-full" />,
          title: t('legalMentions.s4Title'),
          children: (
            <>
              <p>{t('legalMentions.s4P1')}</p>
              <p>{t('legalMentions.s4P2')}</p>
              <p>{t('legalMentions.s4P3')}</p>
            </>
          ),
        },
        {
          icon: <Shield className="w-full h-full" />,
          title: t('legalMentions.s5Title'),
          children: (
            <>
              <p>{t('legalMentions.s5P1')}</p>
              <p>{t('legalMentions.s5P2Before')}<Link to="/confidentialite" className="text-accent hover:text-accent-hover">{t('legal.privacyTitle')}</Link>{t('legalMentions.s5P2After')}</p>
            </>
          ),
        },
        {
          icon: <Cookie className="w-full h-full" />,
          title: t('legalMentions.s6Title'),
          children: (
            <p>{t('legalMentions.s6P1')}</p>
          ),
        },
        {
          icon: <AlertTriangle className="w-full h-full" />,
          title: t('legalMentions.s7Title'),
          children: (
            <>
              <p>{t('legalMentions.s7P1')}</p>
              <p>{t('legalMentions.s7P2')}</p>
              <p>{t('legalMentions.s7P3')}</p>
            </>
          ),
        },
        {
          icon: <Scale className="w-full h-full" />,
          title: t('legalMentions.s8Title'),
          children: (
            <p>{t('legalMentions.s8P1')}</p>
          ),
        },
      ]}
    />
  );
}
