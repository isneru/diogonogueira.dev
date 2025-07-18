<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pathname = computed(() => route.path)
</script>

<template>
	<nav
		class="fixed mx-auto top-6 left-0 right-0 z-50 flex h-16 items-center bg-primary-3/40 backdrop-blur-[8px] justify-between shadow-[0_1px_4px_0_#D77A6120] select-none print:hidden w-[90vw] rounded-xl border border-primary-1/10 px-6 py-3 transition-all duration-300 ease-in-out md:w-[calc(100%-3rem)] md:px-8 lg:w-[calc(100%-4rem)] xl:max-w-7xl">
		<motion.div
			:initial="{ opacity: 0, x: 100 }"
			:animate="{ opacity: 1, x: 0 }">
			<NuxtLink
				:class="{
					'flex items-center justify-center gap-2 text-xl font-semibold hover:text-primary-1 relative': true,
					'text-primary-1': pathname === '/'
				}"
				to="/">
				<AnimatePresence>
					<motion.span
						v-if="pathname === '/'"
						:initial="{ opacity: 0 }"
						:animate="{ opacity: 1 }"
						:exit="{ opacity: 0 }"
						class="bg-primary-2 absolute -left-4 top-2 size-2 rounded-full" />
				</AnimatePresence>
				diogo
			</NuxtLink>
		</motion.div>
		<motion.div
			:initial="{ opacity: 0, x: -100 }"
			:animate="{ opacity: 1, x: 0 }"
			class="flex items-center gap-4">
			<NuxtLink
				:to="`/curriculum/${pathname.endsWith('en') ? 'pt' : 'en'}`"
				:class="{
					'text-lg hover:text-primary-1 font-semibold relative': true,
					'text-primary-1': pathname.includes('/curriculum')
				}">
				<AnimatePresence>
					<motion.span
						v-if="pathname.includes('/curriculum')"
						:initial="{ opacity: 0 }"
						:animate="{ opacity: 1 }"
						:exit="{ opacity: 0 }"
						class="bg-primary-2 absolute -left-4 top-2 size-2 rounded-full" />
				</AnimatePresence>
				{{ `curriculum (${pathname.includes('en') ? 'pt' : 'en'})` }}
			</NuxtLink>
		</motion.div>
	</nav>
</template>
