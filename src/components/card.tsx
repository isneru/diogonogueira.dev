import { type Project } from '@utils/projects'
import { motion } from 'framer-motion'

type Props = {
	project: Project
}

const listItem = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 }
}

export const Card = ({ project }: Props) => {
	return (
		<motion.div
			variants={listItem}
			className='flex max-w-sm flex-col rounded-lg bg-primary-2 shadow'>
			<img
				className='h-full max-h-40 w-full rounded-t-lg object-cover'
				draggable='false'
				src={project.img.path}
				alt={project.img.alt}
			/>
			<div className='flex h-full flex-col p-5'>
				<span className='mb-2 text-2xl font-bold tracking-tight'>
					{project.name}
				</span>
				<p className='mb-3 font-normal text-text'>{project.description}</p>
				<div className='mt-auto flex w-full items-center gap-3'>
					{project.links.repo && (
						<a
							href={project.links.repo}
							rel='noreferrer'
							target='_blank'
							className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-1 px-3 py-2 text-center text-sm font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background hover:bg-text'>
							Repository
							<svg
								aria-hidden='true'
								className='h-4 w-4'
								width='15'
								height='15'
								viewBox='0 0 15 15'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z'
									fill='currentColor'
									fillRule='evenodd'
									clipRule='evenodd'
									data-darkreader-inline-fill=''
								/>
							</svg>
						</a>
					)}
					{project.links.demo && (
						<a
							href={project.links.demo}
							rel='noreferrer'
							target='_blank'
							className='inline-flex w-1/2 items-center justify-center gap-2 rounded-lg bg-primary-1 px-3 py-2 text-center text-sm font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-background hover:bg-text'>
							Demo
							<svg
								aria-hidden='true'
								className='h-4 w-4'
								width='15'
								height='15'
								viewBox='0 0 15 15'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z'
									fill='currentColor'
									fillRule='evenodd'
									clipRule='evenodd'
									data-darkreader-inline-fill=''
								/>
							</svg>
						</a>
					)}
					{!project.links.demo && !project.links.repo && (
						<span className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-1 px-3 py-2 text-center text-sm font-medium text-text'>
							Private Project
							<svg
								aria-hidden='true'
								className='h-4 w-4'
								width='15'
								height='15'
								viewBox='0 0 15 15'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z'
									fill='currentColor'
									fillRule='evenodd'
									clipRule='evenodd'
								/>
							</svg>
						</span>
					)}
				</div>
			</div>
		</motion.div>
	)
}
