import { Metadata } from 'next'

type Props = Readonly<{
	children: React.ReactNode
}>

export const metadata: Metadata = {
	title: 'Diogo Nogueira | Curriculum',
	description: 'All the good bits.',
	openGraph: {
		type: 'website',
		url: 'https://diogonogueira.dev',
		images: 'https://diogonogueira.dev/og/curriculum.png'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Diogo Nogueira | Curriculum',
		description: 'All the good bits.',
		images: 'https://diogonogueira.dev/og/curriculum.png'
	},
	keywords: [
		'diogo',
		'nogueira',
		'diogonogueiradev',
		'diogo nogueira dev',
		'dev',
		'neru',
		'nerudev',
		'neru dev',
		'curriculum'
	]
}

export default function Layout({ children }: Props) {
	return children
}
