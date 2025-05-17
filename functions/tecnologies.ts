
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function getTecnologies() {

    console.log(baseURL);

    try {
        const response = [
            {
                id: 1,
                name: 'Vuejs',
                emphasis: true,
                image: "/vue-js-logo.png"
            },
            {
                id: 2,
                name: 'Node.js',
                emphasis: true,
                image: "/node-js.png"
            },
            {
                id: 4,
                name: 'MongoDB',
                emphasis: true,
                image: "/mongo-db.png"
            },
            {
                id: 5,
                name: 'Nuxtjs',
                emphasis: true,
                image: "/nuxt.png"
            },
            {
                id: 6,
                name: 'Flutter',
                emphasis: true,
                image: "/flutter.png"
            },
            {
                id: 7,
                name: 'Typescript',
                emphasis: true,
                image: "/typescript.png"
            },
            {
                id: 8,
                name: 'Javascript',
                emphasis: true,
                image: "/javascript.svg"
            },
            {
                id: 9,
                name: 'Html5',
                emphasis: true,
                image: "/html5.svg"
            },
            {
                id: 10,
                name: 'Css3',
                emphasis: true,
                image: "/css3.svg"
            },
        ]

        return {
            all: response,
            getEmphasis: response.filter((item) => item.emphasis),
        }
    } catch (error) {


        console.error('Erro ao buscar usuários:', error);
        return [];
    }
}