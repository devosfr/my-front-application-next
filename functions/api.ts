
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function getUsers() {
    console.log(baseURL);

    try {
        const response = await fetch(`${baseURL}/users`);
        // const response = await fetch('https://apinodeexpress-production.up.railway.app/users');
        if (!response.ok) {
            throw new Error(`Erro ao buscar usuários: ${response.status}`);
        }
        const users = await response.json();
        return users.json();
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        return [];
    }
}