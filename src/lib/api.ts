export interface NewsletterPayload {
  email: string;
  role: 'prospect' | 'customer' | 'reseller' | 'distributor';
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

const API_BASE_URL: string | null = null;

export async function submitNewsletter(data: NewsletterPayload): Promise<ApiResponse> {
  console.log('[API] Newsletter submission:', data);

  if (!API_BASE_URL) {
    await new Promise((r) => setTimeout(r, 800));
    return {
      success: true,
      message: 'Inscription réussie. Merci de votre intérêt pour Orkestrix.',
    };
  }

  const response = await fetch(`${API_BASE_URL}/api/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Erreur lors de l\'inscription à la newsletter.');
  }

  return response.json();
}

export function getApiBaseUrl(): string | null {
  return API_BASE_URL;
}
