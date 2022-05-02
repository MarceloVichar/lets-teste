const colors = require('tailwindcss/colors')

module.exports = {
    important: true,
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            red: {
                500: '#ab1202',
                750: '#61150e'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}