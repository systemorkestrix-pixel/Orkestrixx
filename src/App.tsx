import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactNode } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatYouCanDo from './components/WhatYouCanDo';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Screenshots from './components/Screenshots';
import Trust from './components/Trust';
import Pricing from './components/Pricing';
import TargetAudience from './components/TargetAudience';
import Reseller from './components/Reseller';
import Footer from './components/Footer';
import LegalMentions from './pages/LegalMentions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CGV from './pages/CGV';
import ResellerPage from './pages/ResellerPage';
import PurchaseProcess from './pages/PurchaseProcess';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/LanguageContext';

function HomePage() {
  const { lang } = useLanguage();
  return (
    <div className={`min-h-screen bg-surface text-text-secondary selection:bg-[#4EA5F5] selection:text-white font-sans overflow-x-hidden ${lang === 'ar' ? 'rtl' : ''}`}>
      <Header />
      <main>
        <Hero />
        <WhatYouCanDo />
        <Features />
        <Workflow />
        <Screenshots />
        <Trust />
        <Pricing />
        <TargetAudience />
        <Reseller />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions-legales" element={<PageShell><LegalMentions /></PageShell>} />
          <Route path="/confidentialite" element={<PageShell><PrivacyPolicy /></PageShell>} />
          <Route path="/cgv" element={<PageShell><CGV /></PageShell>} />
          <Route path="/revendeur" element={<PageShell><ResellerPage /></PageShell>} />
          <Route path="/comment-acheter" element={<PageShell><PurchaseProcess /></PageShell>} />
          <Route path="*" element={<PageShell><NotFound /></PageShell>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

function PageShell({ children }: { children: ReactNode }) {
  const { lang } = useLanguage();
  return (
    <div className={`min-h-screen bg-surface text-text-secondary font-sans overflow-x-hidden ${lang === 'ar' ? 'rtl' : ''}`}>
      {children}
    </div>
  );
}
