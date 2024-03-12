import defaultTheme from 'tailwindcss/defaultTheme'
import svgToDataUri from 'mini-svg-data-uri'

import colors from 'tailwindcss/colors'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#ACAFFF',
				background: '#151517',
				text: '#F5F5F5'
			},
			keyframes: {
				color: {
					'0%,100%': {
						color: '#F5F5F5'
					},
					'50%': {
						color: '#ACAFFF'
					}
				},
				fill: {
					'0%,100%': {
						fill: '#F5F5F5'
					},
					'50%': {
						fill: '#ACAFFF'
					}
				},
				background: {
					'0%,100%': {
						background: '#F5F5F5'
					},
					'50%': {
						background: '#ACAFFF'
					}
				},
				border: {
					'0%,100%': {
						border: '1px solid #F5F5F5'
					},
					'50%': {
						border: '1px solid #ACAFFF'
					}
				}
			},
			animation: {
				color: 'color 2s linear infinite',
				fill: 'fill 2s linear infinite',
				background: 'background 2s linear infinite',
				border: 'border 2s linear infinite'
			},
			fontFamily: {
				sans: 'Outfit, sans-serif'
			},
			screens: {
				print: { raw: 'print' }
			}
		}
	},
	plugins: [
		require('tailwind-scrollbar')({ nocompatible: true }),
		require('@tailwindcss/typography'),
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					'bg-grid': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`
					}),
					'bg-grid-small': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`
					}),
					'bg-dot': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`
					})
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			)
		}
	]
}

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'))
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	)

	addBase({
		':root': newVars
	})
}
