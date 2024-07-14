import { variants } from '@utils/og'
import { usePathname } from 'next/navigation'

export const OG = () => {
	const pathname = usePathname()
	return (
		<>
			<meta property='og:url' content={variants[pathname ?? '/'].website} />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={variants[pathname ?? '/'].title} />
			<meta
				property='og:description'
				content={variants[pathname ?? '/'].description}
			/>
			<meta property='og:image' content={variants[pathname ?? '/'].image} />

			<meta name='robots' content='nofollow' />
			<meta name='keywords' content={variants[pathname ?? '/'].keywords} />
			<meta
				name='description'
				content={variants[pathname ?? '/'].description}
			/>

			<meta name='twitter:card' content='summary_large_image' />
			<meta property='twitter:domain' content='diogonogueira.dev' />
			<meta
				property='twitter:url'
				content={variants[pathname ?? '/'].website}
			/>
			<meta name='twitter:title' content={variants[pathname ?? '/'].title} />
			<meta
				name='twitter:description'
				content={variants[pathname ?? '/'].description}
			/>
			<meta name='twitter:image' content={variants[pathname ?? '/'].image} />
			<title>{variants[pathname ?? '/'].title}</title>
			<meta
				name='description'
				content={variants[pathname ?? '/'].description}
			/>
		</>
	)
}
