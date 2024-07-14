'use client'

import { Outfit } from 'next/font/google'
import { cn } from '@utils/cn'
import '@styles/globals.css'
import { OG, Navbar } from '@components'
import { usePathname } from 'next/navigation'

const outfit = Outfit({ subsets: ['latin'] })

type Props = Readonly<{
	children: React.ReactNode
}>

export default function RootLayout({ children }: Props) {
	const pathname = usePathname()

	return (
		<html lang='en'>
			<link rel='icon' href='/favicon.png' />
			<OG />
			<body className={cn(outfit.className)}>
				<Navbar pathname={pathname} />
				{children}
			</body>
		</html>
	)
}
