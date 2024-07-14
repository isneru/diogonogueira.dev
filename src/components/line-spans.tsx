type Props = {
	start: string
	end: string
}

export const LineSpans = ({ start, end }: Props) => {
	return (
		<span className='relative flex w-full items-center justify-between'>
			<span className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-[url('/pattern.png')]" />
			<span className='bg-background pr-2'>{start}</span>
			<span className='bg-background pl-2'>{end}</span>
		</span>
	)
}
