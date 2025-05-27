import { links } from '@utils/links'
import clsx from 'clsx'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
	const pathname = usePathname()

	return (
		<>
			<nav className='fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-background/50 px-20 shadow-[0_1px_4px_0_#ffffff20] backdrop-blur-[3px] select-none print:hidden'>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}>
					<Link
						href='/'
						className={clsx(
							'flex items-center justify-center gap-2 text-xl font-semibold hover:text-primary-2 relative',
							{
								'text-primary-2': pathname === '/'
							}
						)}>
						<AnimatePresence>
							{pathname === '/' && (
								<motion.span
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className='bg-primary-1 absolute -left-4 top-2 size-2 rounded-full'
								/>
							)}
						</AnimatePresence>
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
							className={clsx(
								'text-lg hover:text-primary-2 font-semibold relative',
								{
									'text-primary-2': pathname.includes(link.pathname)
								}
							)}>
							<AnimatePresence>
								{pathname.includes(link.pathname) && (
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className='bg-primary-1 absolute -left-4 top-2 size-2 rounded-full'
									/>
								)}
							</AnimatePresence>
							{link.name}
						</Link>
					))}
				</motion.div>
			</nav>
		</>
	)
}
