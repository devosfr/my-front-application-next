// tailwind.config.js
module.exports = {
    darkMode: 'class', // Habilita controle via classe
    content: [
        './pages/**/*.{js,ts,jsx,tsx}', // Next.js com Pages Router
        './app/**/*.{js,ts,jsx,tsx}',   // (opcional) para App Router
        './components/**/*.{js,ts,jsx,tsx}',
      ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  