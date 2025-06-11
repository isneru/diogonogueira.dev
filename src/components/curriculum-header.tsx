import { DynamicSpan } from '@components/dynamic-span'
import { me } from '@utils/me'

export const CurriculumHeader = () => {
	return (
		<>
			<p aria-hidden className="h-[2px] bg-[url('/pattern.svg')]" />
			<div className='grid gap-3 text-center md:grid-cols-2 md:grid-rows-3 p-4 rounded-lg'>
				{me('en').info.map(({ Icon, text, href }) => (
					<DynamicSpan key={text} href={href}>
						<Icon weight='fill' strokeWidth={1.5} />
						<span>{text}</span>
					</DynamicSpan>
				))}
			</div>
			<p aria-hidden className="h-[2px] bg-[url('/pattern.svg')]" />
		</>
	)
}
