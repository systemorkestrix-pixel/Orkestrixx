interface NotificationPayload {
  channel: 'telegram' | 'email';
  subject: string;
  message: string;
  metadata?: Record<string, string>;
}

const TELEGRAM_BOT_TOKEN: string | null = null;
const TELEGRAM_CHAT_ID: string | null = null;
const NOTIFICATION_ENABLED = false;

function isProd(): boolean {
  return typeof window !== 'undefined' && window.location.hostname !== 'localhost';
}

export async function sendNotification(payload: NotificationPayload): Promise<void> {
  console.log('[Notification] Sending:', {
    channel: payload.channel,
    subject: payload.subject,
    message: payload.message.substring(0, 100),
  });

  if (!NOTIFICATION_ENABLED || !isProd()) return;

  if (payload.channel === 'telegram' && TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    const text = `*${payload.subject}*\n\n${payload.message}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    });
  }
}

export async function notifyNewsletterSubscription(email: string, role: string): Promise<void> {
  await sendNotification({
    channel: 'telegram',
    subject: '🔔 Nouvel abonné newsletter',
    message: `Email: ${email}\nRôle: ${role}\nDate: ${new Date().toLocaleString('fr-FR')}`,
    metadata: { email, role },
  });
}

export function isTelegramConfigured(): boolean {
  return TELEGRAM_BOT_TOKEN !== null && TELEGRAM_CHAT_ID !== null;
}
