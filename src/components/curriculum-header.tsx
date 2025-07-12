import { me } from '../utils/me'
import { DynamicSpan } from './dynamic-span'

export const CurriculumHeader = () => {
	return (
		<>
			<p aria-hidden class="h-[2px] bg-[url('/pattern.svg')]" />
			<div class='grid gap-3 text-center md:grid-cols-2 md:grid-rows-3 p-4 rounded-lg'>
				{me('en').info.map(({ Icon, text, href }) => (
					<DynamicSpan href={href}>
						<Icon weight='fill' strokeWidth={1.5} />
						<span>{text}</span>
					</DynamicSpan>
				))}
			</div>
			<p aria-hidden class="h-[2px] bg-[url('/pattern.svg')]" />
		</>
	)
}
