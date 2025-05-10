
const baseURL = process.env.NEXT_PUBLIC_API_URL;

// whatsappClient.ts

export async function sendWhatsAppMessage(toPhoneNumber: string, message: string) {

    const PHONE_NUMBER_ID = 'YOUR_PHONE_NUMBER_ID';
    const ACCESS_TOKEN = 'YOUR_TEMPORARY_ACCESS_TOKEN'; // ⚠️ NÃO use isso em produção!

    const url = `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`;

    const payload = {
        messaging_product: 'whatsapp',
        to: toPhoneNumber, // Ex: '559999999999'
        type: 'text',
        text: { body: message }
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const error = await response.json();
        console.error('Erro ao enviar mensagem:', error);
        throw new Error('Erro ao enviar mensagem pelo WhatsApp');
    }

    return response.json();
}
