type SeoMeta = {
	title: string
	ogTitle: string
	twitterTitle: string
	description: string
	ogDescription: string
	twitterDescription: string
	ogUrl: string
	ogType: string
	ogImage: string
	twitterImage: string
	ogLocale: string
	keywords: string
}

const routesSEO: Record<string, SeoMeta> = {
	'/': {
		title: 'Diogo Nogueira',
		ogTitle: 'Diogo Nogueira',
		twitterTitle: 'Diogo Nogueira',
		description: 'Developer and Telecommunications Engineering student.',
		ogDescription: 'Developer and Telecommunications Engineering student.',
		twitterDescription: 'Developer and Telecommunications Engineering student.',
		ogUrl: 'https://diogo.wtf',
		ogType: 'website',
		ogImage: 'https://diogo.wtf/og/index.png',
		twitterImage: 'https://diogo.wtf/og/index.png',
		ogLocale: 'en_US',
		keywords:
			'diogo, nogueira, dev, neru, home, portfolio, curriculum, developer'
	},

	'/curriculum/pt': {
		title: `Curriculum de Diogo Nogueira`,
		ogTitle: `Curriculum de Diogo Nogueira`,
		twitterTitle: `Curriculum de Diogo Nogueira`,
		description: 'All the good bits.',
		ogDescription: 'All the good bits.',
		twitterDescription: 'All the good bits.',
		ogUrl: 'https://diogo.wtf/curriculum/pt',
		ogType: 'website',
		ogImage: 'https://diogo.wtf/og/curriculum.png',
		twitterImage: 'https://diogo.wtf/og/curriculum.png',
		ogLocale: 'pt_PT',
		keywords: 'diogo, nogueira, dev, neru, portfolio, curriculo, desenvolvedor'
	},
	'/curriculum/en': {
		title: `Diogo Nogueira's Curriculum`,
		ogTitle: `Diogo Nogueira's Curriculum`,
		twitterTitle: `Diogo Nogueira's Curriculum`,
		description: 'All the good bits.',
		ogDescription: 'All the good bits.',
		twitterDescription: 'All the good bits.',
		ogUrl: 'https://diogo.wtf/curriculum/en',
		ogType: 'website',
		ogImage: 'https://diogo.wtf/og/curriculum.png',
		twitterImage: 'https://diogo.wtf/og/curriculum.png',
		ogLocale: 'en_US',
		keywords: 'diogo, nogueira, dev, neru, portfolio, curriculo, developer'
	},
	'/guestbook': {
		title: `Diogo Nogueira's Guestbook`,
		ogTitle: `Diogo Nogueira's Guestbook`,
		twitterTitle: `Diogo Nogueira's Guestbook`,
		description: 'All messages written are here.',
		ogDescription: 'All messages written are here.',
		twitterDescription: 'All messages written are here.',
		ogUrl: 'https://diogo.wtf/guestbook',
		ogType: 'website',
		ogImage: 'https://diogo.wtf/og/index.png',
		twitterImage: 'https://diogo.wtf/og/index.png',
		ogLocale: 'en_US',
		keywords:
			'diogo, nogueira, dev, neru, portfolio, curriculo, developer, guestbook'
	},
	'/guestbook/sign': {
		title: `Sign Diogo Nogueira's Guestbook`,
		ogTitle: `Sign Diogo Nogueira's Guestbook`,
		twitterTitle: `Sign Diogo Nogueira's Guestbook`,
		description: 'Leave a message!',
		ogDescription: 'Leave a message!',
		twitterDescription: 'Leave a message!',
		ogUrl: 'https://diogo.wtf/guestbook/sign',
		ogType: 'website',
		ogImage: 'https://diogo.wtf/og/index.png',
		twitterImage: 'https://diogo.wtf/og/index.png',
		ogLocale: 'en_US',
		keywords:
			'diogo, nogueira, dev, neru, portfolio, curriculo, developer, guestbook'
	}
}

export const getSeoMeta = (): any => {
	return routesSEO[useRoute().path] ?? routesSEO['/']
}
