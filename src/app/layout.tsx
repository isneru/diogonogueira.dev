import { Outfit } from 'next/font/google'
import { cn } from '@utils/cn'
import { Navbar } from '@components'
import { Metadata } from 'next'
import '@styles/globals.css'

const outfit = Outfit({ subsets: ['latin'] })

type Props = Readonly<{
	children: React.ReactNode
}>

export const metadata: Metadata = {
	title: 'Diogo Nogueira',
	description: 'Developer, student and @WeBuy employee.',
	icons: '/favicon.png',
	openGraph: {
		type: 'website',
		url: 'https://diogonogueira.dev',
		images: 'https://diogonogueira.dev/og/index.png'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Diogo Nogueira',
		description: 'Developer, student and @WeBuy employee.',
		images: 'https://diogonogueira.dev/og/index.png'
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

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body className={cn(outfit.className)}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
