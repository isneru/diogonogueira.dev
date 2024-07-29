'use client'

import { Card } from '@components'
import { projects } from '@utils/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const cardContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
			delayChildren: 0.5
		}
	}
}

const toolsContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
			delayChildren: 0.2
		}
	}
}

const listItem = (side: 'l' | 'r') => ({
	hidden: { opacity: 0, x: side === 'r' ? -40 : 40 },
	show: { opacity: 1, x: 0 }
})

const MotionReactFragment = motion(React.Fragment)
const MotionImage = motion(Image)

export default function Home() {
	return (
		<>
			<div className='flex h-[75vh] w-full items-center justify-center'>
				<div className='grid gap-x-16 grid-cols-5'>
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0, transition: { delay: 0.15 } }}
						className='mt-10 lg:flex flex-col items-center gap-3 hidden'>
						<motion.div
							variants={toolsContainer}
							initial='hidden'
							animate='show'
							className='flex flex-col gap-4 w-full items-center'>
							<MotionImage
								variants={listItem('l')}
								title='Node'
								src='/icons/node.svg'
								width={50}
								height={50}
								alt='Node.js logo'
							/>
							<MotionImage
								variants={listItem('l')}
								title='Prisma'
								className='mr-10'
								src='/icons/prisma.svg'
								width={50}
								height={50}
								alt='Prisma logo'
							/>
							<MotionImage
								variants={listItem('l')}
								title='TypeScript'
								src='/icons/ts.svg'
								width={50}
								height={50}
								alt='TypeScript logo'
							/>
						</motion.div>
					</motion.div>
					<div className='col-span-5 lg:col-span-3 '>
						<motion.strong
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							className='mb-6 flex flex-col text-7xl font-bold text-center'>
							<span>
								I'm&nbsp;<span className='text-primary-500'>Diogo </span>
							</span>
							<span>
								Nogueira<span className='text-accent'>,</span>
							</span>
						</motion.strong>
						<motion.h1
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
							className='flex flex-col text-xl leading-7 text-primary-500 text-center'>
							<span>
								a
								<strong className='font-bold text-text'>
									&nbsp;frontend developer&nbsp;
								</strong>
								who chose
							</span>
							<span>to hard code his life.</span>
						</motion.h1>
					</div>
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={{ opacity: 1, x: 0, transition: { delay: 0.15 } }}
						className='mt-10 lg:flex flex-col items-center gap-3 hidden'>
						<motion.div
							variants={toolsContainer}
							initial='hidden'
							animate='show'
							className='flex flex-col gap-4 w-full items-center'>
							<MotionImage
								variants={listItem('r')}
								title='React'
								src='/icons/react.svg'
								width={50}
								height={50}
								alt='React.js logo'
							/>
							<MotionImage
								variants={listItem('r')}
								title='Tailwind'
								className='ml-10'
								src='/icons/tw.svg'
								width={50}
								height={50}
								alt='Tailwind CSS logo'
							/>
							<MotionImage
								variants={listItem('r')}
								title='Next'
								src='/icons/next.svg'
								width={50}
								height={50}
								alt='Next.js logo'
							/>
						</motion.div>
					</motion.div>
				</div>
			</div>
			<div className='flex flex-col items-center pb-10'>
				<div className='grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2 xl:grid-cols-3'>
					<motion.p
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
						className='mb-8 text-5xl font-bold w-full text-right col-span-1 lg:col-span-2 xl:col-span-3'>
						Projects
					</motion.p>
					<MotionReactFragment
						variants={cardContainer}
						initial='hidden'
						animate='show'>
						{projects.map(project => (
							<Card key={project.name} project={project} />
						))}
					</MotionReactFragment>
				</div>
			</div>
		</>
	)
}
