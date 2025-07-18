<script lang="ts" setup>
useSeoMeta({
	title: `Diogo Nogueira's Curriculum`,
	ogTitle: `Diogo Nogueira's Curriculum`,
	twitterTitle: `Diogo Nogueira's Curriculum`,
	description: 'All the good bits.',
	ogDescription: 'All the good bits.',
	twitterDescription: 'All the good bits.',
	ogUrl: 'https://diogo.wtf/curriculum/pt',
	ogType: 'website',
	ogImage: 'https://diogo.wtf/og/curriculum.png',
	twitterImage: 'https://diogo.wtf/og/curriculum.png',
	ogLocale: 'pt_PT',
	keywords: 'diogo, nogueira, dev, neru, portfolio, curriculo, desenvolvedor'
})

import { me as info } from '@@/utils/me'

const me = info('pt')
</script>

<template>
	<div class="prose-xl prose-invert mx-auto my-20 px-8 lg:px-0">
		<h1>
			<A class="hover:underline decoration-primary-1 font-bold" href="/">
				{{ me.name }}
			</A>
		</h1>
		<h2>{{ me.about }}</h2>
		<CurriculumHeader />
		<div class="lg:grid lg:grid-cols-2 lg:gap-10">
			<div>
				<h2 id="Career" class="text-text relative font-bold">
					<span
						class="absolute -left-5 top-2 rounded-full text-primary-1 text-xl">
						#
					</span>
					{{ me.sections[0] }}
				</h2>
				<div v-for="(job, id) in me.career" :key="id">
					<h3 class="font-medium">{{ job.title }}</h3>
					<span>{{ job.description }}</span>
					<LineSpans :start="job.start" :end="job.end" />
				</div>
				<h2 id="Education" class="text-text relative font-bold">
					<span
						class="absolute -left-5 top-2 rounded-full text-primary-1 text-xl">
						#
					</span>
					{{ me.sections[1] }}
				</h2>
				<div v-for="(step, id) in me.education" :key="id">
					<h3 class="font-medium">{{ step.title }}</h3>
					<span>{{ step.description }}</span>
					<LineSpans :start="step.start" :end="step.end" />
				</div>
				<h2 id="Internships" class="text-text relative font-bold">
					<span
						class="absolute -left-5 top-2 rounded-full text-primary-1 text-xl">
						#
					</span>
					{{ me.sections[2] }}
				</h2>
				<div v-for="(internship, id) in me.internships" :key="id">
					<h3 class="font-medium">{{ internship.title }}</h3>
					<LineSpans :start="internship.start" :end="internship.end" />
					<ul class="list-disc">
						<li
							v-for="(task, id) in internship.tasks"
							:key="id"
							class="px-0 my-3 leading-snug">
							{{ task }}
						</li>
					</ul>
				</div>
			</div>
			<div>
				<h2 id="Skills" class="text-text relative font-bold">
					<span
						class="absolute -left-5 top-2 rounded-full text-primary-1 text-xl">
						#
					</span>
					{{ me.sections[3] }}
				</h2>
				<div
					v-for="section in Object.keys(me.skills)"
					:key="section"
					class="pt-2">
					<span
						class="font-semibold decoration-wavy underline decoration-primary-1">
						{{ section }}
					</span>
					{{ ': ' }}
					<span>
						{{ me.skills[section as keyof typeof me.skills].join(', ') }}
					</span>
				</div>
				<h2 id="Languages" class="text-text relative font-bold">
					<span
						class="absolute -left-5 top-2 rounded-full text-primary-1 text-xl">
						#
					</span>
					{{ me.sections[4] }}
				</h2>
				<LineSpans
					v-for="language in me.langs"
					:key="language.title"
					:start="language.title"
					:end="language.level" />
				<h2 id="Certificates" class="text-text relative font-bold">
					<span
						class="absolute -left-5 top-2 rounded-full text-primary-1 text-xl">
						#
					</span>
					{{ me.sections[5] }}
				</h2>
				<span v-for="(certificate, id) in me.certificates" :key="id">{{
					certificate
				}}</span>
				<h2 id="Achievements" class="text-text relative font-bold">
					<span
						class="absolute -left-5 top-2 rounded-full text-primary-1 text-xl">
						#
					</span>
					{{ me.sections[6] }}
				</h2>
				<LineSpans
					v-for="(achievement, id) in me.achievements"
					:key="id"
					:start="achievement.title"
					:end="achievement.date" />
			</div>
		</div>
	</div>
</template>
