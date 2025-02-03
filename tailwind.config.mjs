/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Gabarito", "sans-serif"],
				sans: ["Be Vietnam Pro", "sans-serif"],
			},
			textColor: {
				primary: '#1471b2',
				secondary: '#1d68a9',
			},
			backgroundColor: {
				black: '#1a1a1a',
				primary:  '#1471b2',
				secondary: '#1d68a9',
				card: 'rgba(255, 255, 255,.25)',
				gray: {
					700: '#242424'
				}
			},
			borderColor: {
				card: 'rgba(255, 255, 255,.25)',
			}
		},
	},
	plugins: [],
}
