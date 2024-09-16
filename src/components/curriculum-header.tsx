import { DynamicSpan } from '@components/dynamic-span'
import { me } from '@utils/me'

export const CurriculumHeader = () => {
	return (
		<div className='grid gap-3 text-center md:grid-cols-2 md:grid-rows-3'>
			{me.info.map(({ Icon, text, href }) => (
				<DynamicSpan key={text} href={href}>
					<Icon /> <span>{text}</span>
				</DynamicSpan>
			))}
		</div>
	)
}
