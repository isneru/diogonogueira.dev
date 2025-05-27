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
					1: '#D77A61',
					2: '#D8B4A0',
					3: '#DBD3D8'
				},
				background: '#EFF1F3',
				text: '#223843'
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
