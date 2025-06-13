import { Metadata } from 'next/types'

type Props = Readonly<{
	children: React.ReactNode
}>

export const metadata: Metadata = {
	title: 'Diogo Nogueira | Curriculum',
	description: 'Developer and Telecommunications Engineering student.',
	icons: '/favicon.png',
	openGraph: {
		type: 'website',
		url: 'https://diogonogueira-dev.vercel.app/',
		images: 'https://diogonogueira-dev.vercel.app/og/curriculum.png'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Diogo Nogueira | Curriculum',
		description: 'Developer and Telecommunications Engineering student.',
		images: 'https://diogonogueira-dev.vercel.app/og/curriculum.png'
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
		'home'
	]
}

export default function Layout({ children }: Props) {
	return children
}
