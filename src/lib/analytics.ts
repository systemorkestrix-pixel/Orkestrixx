export type EventName =
  | 'trial_download'
  | 'pricing_cta_click'
  | 'reseller_cta_click'
  | 'newsletter_subscribe'
  | 'contact_action'
  | 'purchase_page_visit'
  | 'page_view';

export interface EventProperties {
  [key: string]: string | number | boolean;
}

const GA_MEASUREMENT_ID: string | null = null;

function isProd(): boolean {
  return typeof window !== 'undefined' && window.location.hostname !== 'localhost';
}

function sendToAnalytics(event: EventName, properties?: EventProperties): void {
  if (typeof window === 'undefined') return;

  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', event, properties ?? {});
  }
}

export function trackEvent(event: EventName, properties?: EventProperties): void {
  if (!isProd()) {
    console.log(`[Analytics] Track: ${event}`, properties ?? {});
    return;
  }
  sendToAnalytics(event, properties);
}

export function trackDownload(label: string): void {
  trackEvent('trial_download', { label, action: 'download' });
}

export function trackCtaClick(label: string, location: string): void {
  trackEvent('pricing_cta_click', { label, location });
}

export function trackResellerClick(): void {
  trackEvent('reseller_cta_click', { action: 'reseller_contact' });
}

export function trackNewsletterSubscribe(role: string): void {
  trackEvent('newsletter_subscribe', { role });
}

export function trackPageView(page: string): void {
  trackEvent('page_view', { page });
}

export function initAnalytics(): void {
  if (!isProd() || !GA_MEASUREMENT_ID) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  const inline = document.createElement('script');
  inline.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(inline);
}
