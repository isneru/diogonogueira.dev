<script lang="ts" setup>
import { motion } from 'motion-v'
import { type Project } from '@@/utils'

type Props = {
	project: Project
}

const { project } = defineProps<Props>()
</script>

<template>
	<motion.div
		:initial="{ opacity: 0, y: 20 }"
		:animate="{
			opacity: 1,
			y: 0,
			transition: { delay: 0.2 + project.id * 0.08 }
		}"
		class="bg-burnt-sienna-3/40 border-burnt-sienna-1/20 shadow-burnt-sienna-1/10 hover:shadow-burnt-sienna-1/20 flex max-w-sm flex-col rounded-lg border p-3 shadow-md backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg">
		<img
			class="border-burnt-sienna-1/20 shadow-burnt-sienna-1/10 h-full max-h-40 w-full rounded-lg border object-cover shadow-md"
			draggable="false"
			:src="project.img.path"
			:alt="project.img.alt" />
		<div class="flex h-full flex-col">
			<span class="my-2 px-2 text-2xl font-bold tracking-tight">
				{{ project.name }}
			</span>
			<p class="text-gunmetal mb-6 px-2 font-normal">
				{{ project.description }}
			</p>
			<div class="mt-auto flex w-full items-center gap-3">
				<a
					v-if="project.links.repo"
					:href="project.links.repo"
					rel="noreferrer"
					target="_blank"
					class="bg-gunmetal text-antiflash-white focus:ring-antiflash-white hover:bg-burnt-sienna-1 inline-flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-center text-sm font-medium transition-colors focus:ring-2 focus:outline-none">
					Repository
					<svg
						aria-hidden="true"
						class="size-[15px]"
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
							data-darkreader-inline-fill="" />
					</svg>
				</a>
				<a
					v-if="project.links.demo"
					:href="project.links.demo"
					rel="noreferrer"
					target="_blank"
					class="bg-gunmetal text-antiflash-white focus:ring-antiflash-white hover:bg-burnt-sienna-1 inline-flex w-1/2 items-center justify-center gap-2 rounded-lg px-3 py-2 text-center text-sm font-medium transition-colors focus:ring-2 focus:outline-none">
					Demo
					<svg
						aria-hidden="true"
						class="size-[15px]"
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
							data-darkreader-inline-fill="" />
					</svg>
				</a>
			</div>
		</div>
	</motion.div>
</template>
