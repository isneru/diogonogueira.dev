import { Outfit } from 'next/font/google'
import { cn } from '@utils/cn'
import { Navbar } from '@components'
import { Metadata } from 'next'
import '@styles/globals.css'

const outfit = Outfit({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900']
})

type Props = Readonly<{
	children: React.ReactNode
}>

export const metadata: Metadata = {
	title: 'Diogo Nogueira',
	description: 'Developer and Telecommunications Engineering student.',
	icons: '/favicon.png',
	openGraph: {
		type: 'website',
		url: 'https://diogonogueira-dev.vercel.app/',
		images: 'https://diogonogueira-dev.vercel.app/og/index.png'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Diogo Nogueira',
		description: 'Developer and Telecommunications Engineering student.',
		images: 'https://diogonogueira-dev.vercel.app/og/index.png'
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
