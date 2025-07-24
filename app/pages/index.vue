<script lang="ts" setup>
import { getSeoMeta, projects } from '@@/utils'
import { motion } from 'motion-v'

const age = Math.floor(
	(Date.now() - new Date('2003-01-19').getTime()) /
		(1000 * 60 * 60 * 24 * 365.25)
)

useSeoMeta(getSeoMeta())
</script>

<template>
	<Header :title="'diogo nogueira'" class="text-burnt-sienna-1">
		<template #popover> {{ age }} years old (he/him) </template>
		<template #subtitle>
			<p>
				a <span class="text-burnt-sienna-2">frontend developer</span> who chose
				to hard code his life.
			</p>
			<p>aka <span class="text-burnt-sienna-2">neru</span></p>
		</template>
	</Header>
	<motion.p
		:initial="{ opacity: 0, y: 20 }"
		:animate="{ opacity: 1, y: 0, transition: { delay: 0.5 } }"
		class="mb-1 font-semibold uppercase"
		>Projects</motion.p
	>
	<div class="space-y-4">
		<Card v-for="project in projects" :key="project.id" :project="project" />
	</div>
</template>
