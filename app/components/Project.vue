<script lang="ts" setup>
import { motion } from 'motion-v'
import { type Project } from '@@/utils'

type Props = {
	project: Project
}

const { project } = defineProps<Props>()
</script>

<template>
	<motion.a
		:href="project.links.repo"
		target="_blank"
		rel="noreferrer"
		:initial="{ opacity: 0, y: 20 }"
		:animate="{
			opacity: 1,
			y: 0,
			transition: { delay: 0.5 + project.id * 0.08 }
		}"
		class="card flex w-full flex-col gap-2 p-3 md:flex-row md:gap-6">
		<div class="flex h-full flex-col">
			<span class="my-2 px-2 text-2xl font-bold tracking-tight">
				{{ project.name }}
			</span>
			<p class="text-gunmetal mb-6 px-2 font-normal">
				{{ project.description }}
			</p>
		</div>
		<img
			class="border-burnt-sienna-1/20 shadow-burnt-sienna-1/10 ml-auto aspect-video h-full max-h-40 w-full rounded-lg border object-cover shadow-md md:max-w-2/5"
			draggable="false"
			:src="project.img.path"
			:alt="project.img.alt" />
	</motion.a>
</template>
