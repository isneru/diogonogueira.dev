import { A, useLocation } from '@solidjs/router'
import clsx from 'clsx'
import { Motion, Presence } from 'solid-motionone'
import { Component, createMemo, Show } from 'solid-js'

export const Navbar: Component = () => {
	const location = useLocation()
	const pathname = createMemo(() => location.pathname)

	return (
		<nav class='fixed mx-auto top-6 left-0 right-0 z-50 flex h-16 items-center justify-between shadow-[0_1px_4px_0_#D77A6120] select-none print:hidden w-[90vw] rounded-xl border border-primary-1/10 bg-primary-3/40 px-6 py-3 backdrop-blur-[8px] transition-all duration-300 ease-in-out md:w-[calc(100%-1rem)] md:px-8 lg:w-[calc(100%-4rem)] xl:max-w-7xl'>
			<Motion.div
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}>
				<A
					href='/'
					class={clsx(
						'flex items-center justify-center gap-2 text-xl font-semibold hover:text-primary-1 relative',
						{
							'text-primary-1': pathname() === '/'
						}
					)}>
					<Presence>
						<Show when={pathname() === '/'}>
							<Motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								class='bg-primary-2 absolute -left-4 top-2 size-2 rounded-full'
							/>
						</Show>
					</Presence>
					diogo
				</A>
			</Motion.div>
			<Motion.div
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				class='flex items-center gap-4'>
				<A
					href={`/curriculum/${pathname().endsWith('en') ? 'pt' : 'en'}`}
					class={clsx('text-lg hover:text-primary-1 font-semibold relative', {
						'text-primary-1': pathname().includes('/curriculum')
					})}>
					<Presence>
						<Show when={pathname().includes('/curriculum')}>
							<Motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								class='bg-primary-2 absolute -left-4 top-2 size-2 rounded-full'
							/>
						</Show>
					</Presence>
					{`curriculum (${pathname().includes('en') ? 'pt' : 'en'})`}
				</A>
			</Motion.div>
		</nav>
	)
}
