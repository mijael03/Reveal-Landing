/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    bg: '#1E1E1E',
                    overlay: '#0E0E0EB2',
                    navbar: '#0E0E0E',
                },
                text: {
                    primary: '#FFFFFF',
                    secondary: '#B3B3B3',
                },
                accent: {
                    DEFAULT: '#00D4FF',
                    hover: '#00B8E6',
                },
                gradient: {
                    green: '#1DB779',
                    yellow: '#F6E049',
                }
            },
            backgroundImage: {
                'gradient-green-yellow': 'linear-gradient(90deg, #1DB779 0%, #F6E049 100%)',
                'gradient-border': 'linear-gradient(2.53deg, rgba(255, 255, 255, 0.08) -3.17%, rgba(255, 255, 255, 0.8) 52.21%, rgba(255, 255, 255, 0.08) 119.97%)',
            }
        },
    },
    plugins: [],
}