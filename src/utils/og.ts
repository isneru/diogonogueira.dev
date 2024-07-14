export type VariantInfo = {
	website: string
	title: string
	description: string
	image: string
	keywords: string
}

export const variants: Record<string, VariantInfo> = {
	'/': {
		website: 'https://diogonogueira.dev',
		title: 'Diogo Nogueira',
		description: 'Developer, student and @WeBuy employee.',
		image: 'https://diogonogueira.dev/og/index.png',
		keywords:
			'diogo, nogueira, diogonogueiradev, diogo nogueira dev, dev, neru, nerudev,neru dev, home'
	},
	/* 	'/contact': {
		website: 'https://diogonogueira.dev/contact',
		title: 'Diogo Nogueira | Contact',
		description: 'Get in touch with me.',
		image: 'https://diogonogueira.dev/og/contact.png',
		keywords:
			'diogo, nogueira, diogonogueiradev, diogo nogueira dev, dev, neru, nerudev,neru dev, contact, contacto'
	}, */
	'/curriculum': {
		website: 'https://diogonogueira.dev/curriculum',
		title: 'Diogo Nogueira | Curriculum',
		description: 'All the good bits.',
		image: 'https://diogonogueira.dev/og/curriculum.png',
		keywords:
			'diogo, nogueira, diogonogueiradev, diogo nogueira dev, dev, neru, nerudev,neru dev, curriculum, curriculo'
	}
}
