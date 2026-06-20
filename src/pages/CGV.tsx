import { Link } from 'react-router-dom';
import { FileText, Package, Award, CreditCard, ShoppingCart, Truck, Undo2, ShieldCheck, Copyright, UserCheck, Handshake, Shield, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { embedPrice } from '../lib/formatPrice';
import LegalLayout from './LegalLayout';

export default function CGV() {
  const { t } = useLanguage();
  const date = t('legal.date');

  return (
    <LegalLayout
      titleMeta={t('cgv.titleMeta')}
      descriptionMeta={t('cgv.descMeta')}
      pageTitle={t('legal.cgvTitle')}
      lastUpdatedDate={date}
      sections={[
        {
          icon: <FileText className="w-full h-full" />,
          title: t('cgv.s1Title'),
          children: (
            <p>{t('cgv.s1P1')}</p>
          ),
        },
        {
          icon: <Package className="w-full h-full" />,
          title: t('cgv.s2Title'),
          children: (
            <>
              <p>{t('cgv.s2P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li>{t('cgv.s2Li1')}</li>
                <li>{t('cgv.s2Li2')}</li>
                <li>{t('cgv.s2Li3')}</li>
                <li>{t('cgv.s2Li4')}</li>
                <li>{t('cgv.s2Li5')}</li>
                <li>{t('cgv.s2Li6')}</li>
              </ul>
              <p>{t('cgv.s2P2')}</p>
            </>
          ),
        },
        {
          icon: <Award className="w-full h-full" />,
          title: t('cgv.s3Title'),
          children: (
            <>
              <p>{t('cgv.s3P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li>{t('cgv.s3Li1')}</li>
                <li>{t('cgv.s3Li2')}</li>
                <li>{t('cgv.s3Li3')}</li>
                <li>{t('cgv.s3Li4')}</li>
              </ul>
              <p>{t('cgv.s3P2')}</p>
            </>
          ),
        },
        {
          icon: <CreditCard className="w-full h-full" />,
          title: t('cgv.s4Title'),
          children: (
            <>
              <p>{t('cgv.s4P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li><strong>{embedPrice(t('cgv.s4Li1'), lang)}</strong></li>
              </ul>
              <p>{t('cgv.s4P2')}</p>
            </>
          ),
        },
        {
          icon: <CreditCard className="w-full h-full" />,
          title: t('cgv.s5Title'),
          children: (
            <>
              <p>{t('cgv.s5P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li><strong>{t('cgv.s5Li1')}</strong></li>
                <li><strong>{t('cgv.s5Li2')}</strong></li>
                <li><strong>{t('cgv.s5Li3')}</strong></li>
                <li><strong>{t('cgv.s5Li4')}</strong></li>
              </ul>
            </>
          ),
        },
        {
          icon: <ShoppingCart className="w-full h-full" />,
          title: t('cgv.s6Title'),
          children: (
            <>
              <p>{t('cgv.s6P1')}</p>
              <ol className="list-decimal ps-5 space-y-2">
                <li><strong>{t('cgv.s6Li1')}</strong></li>
                <li><strong>{t('cgv.s6Li2')}</strong></li>
                <li><strong>{t('cgv.s6Li3')}</strong></li>
                <li><strong>{t('cgv.s6Li4')}</strong></li>
                <li><strong>{t('cgv.s6Li5')}</strong></li>
              </ol>
            </>
          ),
        },
        {
          icon: <Truck className="w-full h-full" />,
          title: t('cgv.s7Title'),
          children: (
            <>
              <p>{t('cgv.s7P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li><strong>{t('cgv.s7Li1')}</strong></li>
                <li><strong>{t('cgv.s7Li2')}</strong></li>
                <li><strong>{t('cgv.s7Li3')}</strong></li>
              </ul>
            </>
          ),
        },
        {
          icon: <Undo2 className="w-full h-full" />,
          title: t('cgv.s8Title'),
          children: (
            <>
              <p>{t('cgv.s8P1')}</p>
              <p>{t('cgv.s8P2')}</p>
            </>
          ),
        },
        {
          icon: <ShieldCheck className="w-full h-full" />,
          title: t('cgv.s9Title'),
          children: (
            <>
              <p>{t('cgv.s9P1')}</p>
              <p>{t('cgv.s9P2')}</p>
              <p>{t('cgv.s9P3')}</p>
            </>
          ),
        },
        {
          icon: <Copyright className="w-full h-full" />,
          title: t('cgv.s10Title'),
          children: (
            <>
              <p>{t('cgv.s10P1')}</p>
              <p>{t('cgv.s10P2')}</p>
              <p>{t('cgv.s10P3')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li>{t('cgv.s10Li1')}</li>
                <li>{t('cgv.s10Li2')}</li>
                <li>{t('cgv.s10Li3')}</li>
                <li>{t('cgv.s10Li4')}</li>
              </ul>
            </>
          ),
        },
        {
          icon: <UserCheck className="w-full h-full" />,
          title: t('cgv.s11Title'),
          children: (
            <>
              <p>{t('cgv.s11P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li>{t('cgv.s11Li1')}</li>
                <li>{t('cgv.s11Li2')}</li>
                <li>{t('cgv.s11Li3')}</li>
                <li>{t('cgv.s11Li4')}</li>
              </ul>
            </>
          ),
        },
        {
          icon: <Handshake className="w-full h-full" />,
          title: t('cgv.s12Title'),
          children: (
            <>
              <p>{t('cgv.s12P1')}</p>
              <ul className="list-disc ps-5 space-y-1">
                <li>{t('cgv.s12Li1')}</li>
                <li>{t('cgv.s12Li2')}</li>
                <li>{t('cgv.s12Li3')}</li>
                <li>{t('cgv.s12Li4')}</li>
              </ul>
              <p>{t('cgv.s12P2')}</p>
            </>
          ),
        },
        {
          icon: <Shield className="w-full h-full" />,
          title: t('cgv.s13Title'),
          children: (
            <p>{t('cgv.s13P1')}<Link to="/confidentialite" className="text-accent hover:text-accent-hover">{t('legal.privacyTitle')}</Link>{t('cgv.s13P2')}</p>
          ),
        },
        {
          icon: <Scale className="w-full h-full" />,
          title: t('cgv.s14Title'),
          children: (
            <>
              <p>{t('cgv.s14P1')}</p>
              <p>{t('cgv.s14P2')}</p>
              <p>{t('cgv.s14P3')}</p>
            </>
          ),
        },
      ]}
    />
  );
}
