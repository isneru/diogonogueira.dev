import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: {
					300: '#b8b8b8',
					500: '#686868',
					800: '#202020'
				},
				accent: '#d71921',
				background: '#141414',
				text: '#F5F5F5'
			},
			screens: {
				print: { raw: 'print' }
			}
		}
	},
	plugins: [
		require('tailwind-scrollbar')({ nocompatible: true }),
		require('@tailwindcss/typography')
	]
} satisfies Config
