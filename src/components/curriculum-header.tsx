import { DynamicSpan } from '@components/dynamic-span'
import { me } from '@utils/me'

export const CurriculumHeader = () => {
	return (
		<>
			<hr className='m-0 p-0 my-1 border-primary-1/50' />
			<div className='grid gap-3 text-center md:grid-cols-2 md:grid-rows-3 p-4 rounded-lg'>
				{me('en').info.map(({ Icon, text, href }) => (
					<DynamicSpan key={text} href={href}>
						<Icon weight='fill' strokeWidth={1.5} />
						<span>{text}</span>
					</DynamicSpan>
				))}
			</div>
			<hr className='m-0 p-0 my-1 border-primary-1/50' />
		</>
	)
}
