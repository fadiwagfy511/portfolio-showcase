/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './data/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        { pattern: /bg-(amber|red|green|blue|pink|teal|violet|cyan|indigo|orange|purple|yellow)-(400|500|600)\/(10|20|30)/ },
        { pattern: /border-(amber|red|green|blue|pink|teal|violet|cyan|indigo|orange|purple|yellow)-(400|500|600)\/(20|30|50)/ },
        { pattern: /text-(amber|red|green|blue|pink|teal|violet|cyan|indigo|orange|purple|yellow)-(300|400|500)/ },
    ],
};
