<script lang="ts" setup>
import { motion } from 'motion-v'

interface Props {
	title: string
	showBackLink?: boolean
}

const { title, showBackLink = false } = defineProps<Props>()
</script>

<template>
	<header class="mb-8">
		<motion.nav
			:initial="{ opacity: 0, x: 40 }"
			:animate="{ opacity: 1, x: 0, transition: { delay: 0.2 } }"
			v-if="showBackLink"
			aria-label="Breadcrumb navigation"
			class="my-4">
			<NuxtLink
				aria-label="Go back to homepage"
				class="text-gunmetal/60 group/back hover:text-burnt-sienna-1/60 flex items-center gap-1 text-sm transition-colors"
				to="/">
				<Icon
					size="14"
					class="transition-transform group-hover/back:-translate-x-0.5"
					name="material-symbols:arrow-left-alt-rounded" />
				back
			</NuxtLink>
		</motion.nav>

		<motion.h1
			:initial="{ opacity: 0, y: -40 }"
			:animate="{ opacity: 1, y: 0, transition: { delay: 0.3 } }"
			class="group/popover relative mb-4 inline-block text-4xl font-bold tracking-tight md:text-6xl">
			{{ title }}
			<span
				class="text-burnt-sienna-1 absolute top-1 -left-12 hidden rounded-full md:inline">
				#
			</span>
			<span
				v-if="$slots.popover"
				class="bg-gunmetal/95 text-antiflash-white pointer-events-none absolute top-2 left-full transform rounded-xl px-2 py-1 text-sm font-normal tracking-normal whitespace-nowrap italic opacity-0 backdrop-blur-sm transition-all group-hover/popover:translate-x-2 group-hover/popover:opacity-100 md:top-6">
				<slot name="popover" />
			</span>
		</motion.h1>

		<motion.div
			:initial="{ opacity: 0, x: -40 }"
			:animate="{ opacity: 1, x: 0, transition: { delay: 0.45 } }"
			v-if="$slots.subtitle"
			class="text-gunmetal/60 text-sm md:text-base">
			<slot name="subtitle" />
		</motion.div>
	</header>
</template>
