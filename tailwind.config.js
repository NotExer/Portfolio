/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./templates/**/*.html", "./static/**/*.js"],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                midu: {
                    purple: "#d613e7",
                    blue: "#8b51f5",
                    yellow: "#fdf500",
                },
            },
            animation: {
                "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                "glow-pulse": {
                    "0%, 100%": { opacity: 1, filter: "brightness(1.2)" },
                    "50%": { opacity: 0.8, filter: "brightness(1)" },
                },
            },
        },
    },
    plugins: [],
}
