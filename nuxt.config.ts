import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		plugins: [tailwindcss()]
	},
	site: {
		name: 'Diogo Nogueira',
		url: 'https://diogo.wtf'
	},
	runtimeConfig: {},
	sourcemap: { client: true, server: false },
	css: ['~/styles/globals.css'],
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/sitemap',
		'@nuxt/icon',
		'@nuxtjs/turnstile',
		'@nuxt/scripts',
		'nitro-cloudflare-dev',
		'motion-v/nuxt',
		'@nuxt/content'
	],
	experimental: {
		viewTransition: true
	},
	app: {
		head: {
			script: [{ src: '/oneko/oneko.js', tagPosition: 'bodyOpen' }],
			htmlAttrs: {
				lang: 'en'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'theme-color', content: '#000000' },
				{ name: 'color-scheme', content: 'dark' },
				{ name: 'author', content: 'Diogo' },
				{ name: 'twitter:card', content: 'summary_large_image' }
			],
			link: [
				{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
				{ rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' }
			]
		}
	},
	turnstile: {
		siteKey: '0x4AAAAAABlobQEy6KJ2kakO'
	},
	nitro: {
		compatibilityDate: '2025-07-15',
		preset: 'cloudflare_module',
		prerender: {
			crawlLinks: true,
			routes: ['/', '/curriculum/en', '/curriculum/pt']
		},
		experimental: { database: true, tasks: true },
		cloudflare: {
			deployConfig: true,
			nodeCompat: true,
			wrangler: {
				name: 'website',
				observability: { logs: { enabled: true } },
				keep_vars: true,
				d1_databases: [
					{
						binding: 'DB',
						database_name: 'website-guestbook',
						database_id: '97f364da-57f6-4d2b-9ae2-bfadd27ac9bb'
					}
				]
			}
		}
	},

	$production: {
		nitro: {
			database: {
				default: {
					connector: 'cloudflare-d1',
					options: {
						bindingName: 'DB'
					}
				}
			}
		}
	}
})
