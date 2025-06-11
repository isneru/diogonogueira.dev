'use client'

import { me as info } from '@utils/me'
import { CurriculumHeader, LineSpans } from '@components'
import Link from 'next/link'
import { redirect, useParams } from 'next/navigation'

export default function Curriculum() {
	const { lang } = useParams()
	if (lang !== 'en' && lang !== 'pt') {
		redirect('/curriculum/en')
	}
	const me = info(lang)

	return (
		<div className='prose-xl prose-invert mx-auto my-20 px-8 lg:px-0'>
			<h1>
				<Link
					className='hover:underline decoration-primary-1 font-bold'
					href='/'>
					{me.name}
				</Link>
			</h1>
			<h2>{me.about}</h2>
			<CurriculumHeader />
			<div className='lg:grid lg:grid-cols-2 lg:gap-10'>
				<div>
					<h2 id='Career' className='text-text relative font-bold'>
						<span className='absolute -left-5 top-2 rounded-full text-primary-1 text-xl'>
							#
						</span>
						{me.sections[0]}
					</h2>
					{me.career.map(job => (
						<div key={job.title}>
							<h3 className='font-medium'>{job.title}</h3>
							<span>{job.description}</span>
							<LineSpans start={job.start} end={job.end} />
						</div>
					))}
					<h2 id='Education' className='text-text relative font-bold'>
						<span className='absolute -left-5 top-2 rounded-full text-primary-1 text-xl'>
							#
						</span>
						{me.sections[1]}
					</h2>
					{me.education.map(step => (
						<div key={step.title}>
							<h3 className='font-medium'>{step.title}</h3>
							<span>{step.description}</span>
							<LineSpans start={step.start} end={step.end} />
						</div>
					))}
					<h2 id='Internships' className='text-text relative font-bold'>
						<span className='absolute -left-5 top-2 rounded-full text-primary-1 text-xl'>
							#
						</span>
						{me.sections[2]}
					</h2>
					{me.internships.map(internship => (
						<div key={internship.title}>
							<h3 className='font-medium'>{internship.title}</h3>
							<LineSpans start={internship.start} end={internship.end} />
							<ul className='list-disc'>
								{internship.tasks.map(task => (
									<li className='px-0 my-3 leading-snug' key={task}>
										{task}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div>
					<h2 id='Skills' className='text-text relative font-bold'>
						<span className='absolute -left-5 top-2 rounded-full text-primary-1 text-xl'>
							#
						</span>
						{me.sections[3]}
					</h2>
					{Object.keys(me.skills).map(section => (
						<div key={section} className='pt-2'>
							<span className='font-semibold decoration-wavy underline decoration-primary-1'>
								{section}
							</span>
							{': '}
							<span>
								{me.skills[section as keyof typeof me.skills].join(', ')}
							</span>
						</div>
					))}

					<h2 id='Languages' className='text-text relative font-bold'>
						<span className='absolute -left-5 top-2 rounded-full text-primary-1 text-xl'>
							#
						</span>
						{me.sections[4]}
					</h2>
					{me.langs.map(language => (
						<LineSpans
							key={language.title}
							start={language.title}
							end={language.level}
						/>
					))}
					<h2 id='Certificates' className='text-text relative font-bold'>
						<span className='absolute -left-5 top-2 rounded-full text-primary-1 text-xl'>
							#
						</span>
						{me.sections[5]}
					</h2>
					{me.certificates.map(certificate => (
						<span key={certificate}>{certificate}</span>
					))}
					<h2 id='Achievements' className='text-text relative font-bold'>
						<span className='absolute -left-5 top-2 rounded-full text-primary-1 text-xl'>
							#
						</span>
						{me.sections[6]}
					</h2>
					{me.achievements.map(achievement => (
						<LineSpans
							key={achievement.title}
							start={achievement.title}
							end={achievement.date}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
