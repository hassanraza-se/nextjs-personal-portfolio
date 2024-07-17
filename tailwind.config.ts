import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {},
            colors: {
                primary: "#7D6AE9",
                secondary: "#9951E6",
                orange: "#E9878A",
                yellow: "#F3AE6A",
                yellow2: "#FFC84E",
                slate: "#F0EFF5",
                white: "#FFFFFF",
                black: "#000000",
                darkGrey: "#474C52",
                gray: "#727A84",
                lightGrey: "#A1A7AD",
                slateGrey: "#D0D3D6",
            },
            keyframes: {
                bounceSmooth: {
                    '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' },
                    '50%': { transform: 'translateY(-5px)', animationTimingFunction: 'ease-in-out' },
                },
                blinkCursor: {
                    '50%': { 'border-right-color': 'transparent' },
                },
                typeAndDelete: {
                    '0%, 10%': { width: '0' },
                    '45%, 55%': { width: '6.2em' }, // adjust width based on content
                    '90%, 100%': { width: '0' },
                },
            },
            animation: {
                "bounce-smooth": 'bounceSmooth 1s infinite',
                "blink-cursor": 'blinkCursor 0.5s step-end infinite alternate',
                "type-and-delete": 'typeAndDelete 4s steps(11) infinite',
            }
        },
    },
    plugins: [],
};
export default config;
