'use client'

import { Card } from '@components'
import { projects } from '@utils/projects'
import { motion } from 'framer-motion'
import React from 'react'

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.6
		}
	}
}

const Fragment = motion(React.Fragment)

export default function Home() {
	return (
		<>
			<div className='flex h-[75vh] w-full items-center justify-center lg:justify-normal'>
				<div>
					<motion.h1
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						className='mb-6 flex flex-col text-7xl font-bold'>
						<span>
							I'm <span className='text-primary-500'>Diogo</span>
						</span>
						<span>
							Nogueira<span className='text-accent'>,</span>
						</span>
					</motion.h1>
					<motion.h2
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
						className='flex flex-col text-xl leading-7 text-primary-500'>
						<span>
							a
							<strong className='font-bold text-text'>
								{' '}
								front-end developer{' '}
							</strong>
							who chose
						</span>
						<span>to hard code his life.</span>
					</motion.h2>
				</div>
			</div>
			<div className='flex flex-col items-center pb-10'>
				<div className='grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2 xl:grid-cols-3'>
					<motion.h3
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
						className='mb-8 text-5xl font-bold w-full text-right col-span-1 lg:col-span-2 xl:col-span-3'>
						Projects
					</motion.h3>
					<Fragment variants={container} initial='hidden' animate='show'>
						{projects.map(project => (
							<Card key={project.name} project={project} />
						))}
					</Fragment>
				</div>
			</div>
		</>
	)
}
