/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{razor,html,cshtml}"],
    theme: {
        colors: {
            "bdp-blue": "#1d4899",
            "bdp-yellow": "#ffcb04",
            "bdp-red": "#d30014",
            "white": "#ffffff",
        },
        fontFamily: {
            "aleo-light": ["aleo-light", "sans-serif"],
            "immenhausen-regular": ["immenhausen-regular", "sans-serif"],
        },
    },
    plugins: [require("daisyui")],
}