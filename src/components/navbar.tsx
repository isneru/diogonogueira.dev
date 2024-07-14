import { links } from '@utils/links'
import clsx from 'clsx'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {
	pathname: string
}

export const Navbar = ({ pathname }: Props) => {
	return (
		<>
			<nav className='fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-background/50 px-20 shadow-[0_1px_4px_0_#151517] backdrop-blur-[3px] select-none print:hidden'>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}>
					<Link
						href='/'
						className={clsx(
							'flex items-center justify-center gap-2 text-xl font-semibold hover:text-primary-500 relative',
							{
								'text-primary-500': pathname === '/'
							}
						)}>
						{pathname === '/' && (
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className='bg-accent absolute -left-4 top-2 size-2 rounded-full'
							/>
						)}
						diogo
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					className='flex items-center gap-4'>
					{links.map(link => (
						<Link
							key={link.pathname}
							href={link.pathname}
							className={clsx('text-lg hover:text-primary-500 relative', {
								'text-primary-500': pathname === link.pathname
							})}>
							{pathname === link.pathname && (
								<motion.span
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className='bg-accent absolute -left-4 top-2 size-2 rounded-full'
								/>
							)}
							{link.name}
						</Link>
					))}
				</motion.div>
			</nav>
		</>
	)
}