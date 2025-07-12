import { Component, JSX } from 'solid-js'

type Props = {
	href?: string
	children: JSX.Element
}

export const DynamicSpan: Component<Props> = ({ href, children }) => {
	return (
		<>
			{href ? (
				<a
					href={href}
					rel='noreferrer'
					target='_blank'
					class='flex items-center gap-2 decoration-primary-1 hover:underline '>
					{children}
				</a>
			) : (
				<span class='flex items-center gap-2'>{children}</span>
			)}
		</>
	)
}
