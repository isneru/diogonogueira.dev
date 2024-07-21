'use client'

import {
	career,
	education,
	internships,
	skills,
	name,
	about,
	achievements,
	certificates,
	languages
} from '@utils/me'
import { CurriculumHeader, LineSpans } from '@components'
import Link from 'next/link'

export default function Curriculum() {
	return (
		<div className='prose-xl prose-invert mx-auto my-20 px-8 lg:px-0'>
			<h1>
				<Link className='hover:underline decoration-accent' href='/'>
					{name}
				</Link>
			</h1>
			<h2>{about}</h2>
			<CurriculumHeader />
			<div className='lg:grid lg:grid-cols-2 lg:gap-10'>
				<div>
					<h2 id='Career' className='text-text relative'>
						<span className='absolute -left-4 top-2 rounded-full text-accent text-base font-light'>
							#
						</span>
						Career
					</h2>
					{career.map(job => (
						<div key={job.title}>
							<h3>{job.title}</h3>
							<span>{job.description}</span>
							<LineSpans start={job.start} end={job.end} />
						</div>
					))}
					<h2 id='Skills' className='text-text relative'>
						<span className='absolute -left-4 top-2 rounded-full text-accent text-base font-light'>
							#
						</span>
						Skills
					</h2>
					<div className='flex flex-wrap gap-3'>
						{skills.map(skill => (
							<span
								key={skill}
								className='rounded-full bg-primary-500 px-4 leading-relaxed text-background'>
								{skill}
							</span>
						))}
					</div>
					<h2 id='Languages' className='text-text relative'>
						<span className='absolute -left-4 top-2 rounded-full text-accent text-base font-light'>
							#
						</span>
						Languages
					</h2>
					{languages.map(language => (
						<LineSpans
							key={language.title}
							start={language.title}
							end={language.level}
						/>
					))}
					<h2 id='Certificates' className='text-text relative'>
						<span className='absolute -left-4 top-2 rounded-full text-accent text-base font-light'>
							#
						</span>
						Certificates
					</h2>
					{certificates.map(certificate => (
						<span key={certificate}>{certificate}</span>
					))}
					<h2 id='Achievements' className='text-text relative'>
						<span className='absolute -left-4 top-2 rounded-full text-accent text-base font-light'>
							#
						</span>
						Achievements
					</h2>
					{achievements.map(achievement => (
						<LineSpans
							key={achievement.title}
							start={achievement.title}
							end={achievement.date}
						/>
					))}
					{/* 					<h2 className='text-text relative'>
						<span className='absolute -left-4 top-2 rounded-full text-accent text-base font-light'>#</span>
						Interests
					</h2>
					<div className='flex flex-wrap gap-4'>
						{hobbies.map(hobby => (
							<span
								key={hobby}
								className='rounded-full px-3 ring-2 ring-primary-500/50'>
								{hobby}
							</span>
						))}
					</div> */}
				</div>
				<div>
					<h2 id='Education' className='text-text relative'>
						<span className='absolute -left-4 top-2 rounded-full text-accent text-base font-light'>
							#
						</span>
						Education
					</h2>
					{education.map(step => (
						<div key={step.title}>
							<h3>{step.title}</h3>
							<span>{step.description}</span>
							<LineSpans start={step.start} end={step.end} />
						</div>
					))}
					<h2 id='Internships' className='text-text relative'>
						<span className='absolute -left-4 top-2 rounded-full text-accent text-base font-light'>
							#
						</span>
						Internships
					</h2>
					{internships.map(internship => (
						<div key={internship.title}>
							<span>{internship.title}</span>
							<LineSpans start={internship.start} end={internship.end} />
							<ul className='list-disc'>
								{internship.tasks.map(task => (
									<li key={task}>{task}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
