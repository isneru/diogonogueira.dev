import { Meta, MetaProvider, Title } from '@solidjs/meta'
import { For, type Component } from 'solid-js'
import { Motion } from 'solid-motionone'
import { projects } from '../utils/projects'
import { Card } from '../components/card'

const floatingTools = {
	left: [
		{ id: 1, src: '/icons/node.svg', alt: 'Node.js logo', title: 'Node.js' },
		{ id: 2, src: '/icons/prisma.svg', alt: 'Prisma logo', title: 'Prisma' },
		{ id: 3, src: '/icons/ts.svg', alt: 'TypeScript logo', title: 'TypeScript' }
	],
	right: [
		{ id: 1, src: '/icons/react.svg', alt: 'React.js logo', title: 'React.js' },
		{
			id: 2,
			src: '/icons/tw.svg',
			alt: 'Tailwind CSS logo',
			title: 'Tailwind CSS'
		},
		{ id: 3, src: '/icons/next.svg', alt: 'Next.js logo', title: 'Next.js' }
	]
}

export const Home: Component = () => {
	return (
		<>
			<MetaProvider>
				<Title>Diogo Nogueira</Title>
				<Meta
					name='description'
					content='Developer and Telecommunications Engineering student.'
				/>

				<Meta property='og:type' content='website' />
				<Meta
					property='og:url'
					content='https://diogonogueira-dev.vercel.app/'
				/>
				<Meta
					property='og:image'
					content='https://diogonogueira-dev.vercel.app/og/index.png'
				/>

				<Meta name='twitter:card' content='summary_large_image' />
				<Meta name='twitter:title' content='Diogo Nogueira' />
				<Meta
					name='twitter:description'
					content='Developer and Telecommunications Engineering student.'
				/>
				<Meta
					name='twitter:image'
					content='https://diogonogueira-dev.vercel.app/og/index.png'
				/>

				<Meta
					name='keywords'
					content='diogo, nogueira, diogonogueiradev, diogo nogueira dev, dev, neru, nerudev, neru dev, home'
				/>
			</MetaProvider>
			<div class='flex h-[75vh] w-full items-center justify-center'>
				<div class='grid gap-x-16 grid-cols-5'>
					<Motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0, transition: { delay: 0.15 } }}
						class='mt-10 lg:flex flex-col items-center gap-3 hidden'>
						<div class='flex flex-col gap-4 w-full items-center'>
							<For each={floatingTools.left}>
								{tool => (
									<Motion.img
										title={tool.title}
										src={tool.src}
										width={50}
										classList={{ 'mr-10': tool.id === 2 }}
										height={50}
										alt={tool.alt}
										initial={{ opacity: 0, x: 40 }}
										animate={{
											opacity: 1,
											x: 0,
											transition: { delay: tool.id * 0.15 }
										}}
									/>
								)}
							</For>
						</div>
					</Motion.div>
					<div class='col-span-5 lg:col-span-3 '>
						<Motion.strong
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							class='mb-6 flex flex-col text-7xl font-bold text-center'>
							<span>
								I'm&nbsp;<span class='text-primary-2'>Diogo </span>
							</span>
							<span>
								Nogueira<span class='text-primary-1'>,</span>
							</span>
						</Motion.strong>
						<Motion.h1
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
							class='flex flex-col text-xl leading-7 text-primary-2 text-center'>
							<span>
								a
								<strong class='font-bold text-text'>
									&nbsp;frontend developer&nbsp;
								</strong>
								who chose
							</span>
							<span>to hard code his life.</span>
						</Motion.h1>
					</div>
					<Motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={{ opacity: 1, x: 0, transition: { delay: 0.15 } }}
						class='mt-10 lg:flex flex-col items-center gap-3 hidden'>
						<div class='flex flex-col gap-4 w-full items-center'>
							<For each={floatingTools.right}>
								{tool => (
									<Motion.img
										title={tool.title}
										src={tool.src}
										width={50}
										classList={{ 'ml-10': tool.id === 2 }}
										height={50}
										alt={tool.alt}
										initial={{ opacity: 0, x: -40 }}
										animate={{
											opacity: 1,
											x: 0,
											transition: { delay: tool.id * 0.15 }
										}}
									/>
								)}
							</For>
						</div>
					</Motion.div>
				</div>
			</div>
			<div class='flex flex-col items-center pb-10'>
				<Motion.p
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
					class='mb-8 text-5xl font-bold text-right col-span-1 lg:col-span-2 xl:col-span-3'>
					Projects:
				</Motion.p>
				<div class='grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2 xl:grid-cols-3'>
					<For each={projects}>{project => <Card project={project} />}</For>
				</div>
			</div>
		</>
	)
}
