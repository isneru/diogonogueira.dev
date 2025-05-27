type Props = {
	href?: string
	children: React.ReactNode
}

export const DynamicSpan = ({ href, children }: Props) => {
	return (
		<>
			{href ? (
				<a
					href={href}
					rel='noreferrer'
					target='_blank'
					className='flex items-center gap-2 decoration-primary-1 hover:underline '>
					{children}
				</a>
			) : (
				<span className='flex items-center gap-2 '>{children}</span>
			)}
		</>
	)
}
