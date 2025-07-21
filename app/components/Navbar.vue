<script lang="ts" setup>
import { motion } from 'motion-v'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const route = useRoute()
const pathname = computed(() => route.path)

const routes = computed(() => [
	{
		label: 'guestbook',
		to: '/guestbook',
		active: pathname.value.includes('/guestbook')
	},
	{
		label: `curriculum (${pathname.value.includes('en') ? 'pt' : 'en'})`,
		to: `/curriculum/${pathname.value.endsWith('en') ? 'pt' : 'en'}`,
		active: pathname.value.includes('/curriculum')
	}
])
</script>
<template>
	<div class="fixed top-0 right-0 left-0 z-50 flex justify-center px-6 pt-6">
		<nav
			aria-label="Main navigation"
			class="bg-burnt-sienna-3/40 border-burnt-sienna-1/10 w-full rounded-xl border px-6 py-4 text-lg font-semibold shadow-[0_1px_4px_0_#D77A6120] backdrop-blur-[8px] transition-all duration-300 ease-in-out select-none md:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] xl:max-w-7xl print:hidden"
			role="navigation">
			<div class="flex items-center justify-between">
				<NuxtLink
					aria-label="Home"
					class="transition-colors duration-200"
					:class="{
						'text-burnt-sienna-1': pathname === '/',
						'hover:text-burnt-sienna-1': pathname !== '/'
					}"
					to="/">
					diogo
				</NuxtLink>

				<ul class="hidden items-center space-x-1 md:flex">
					<li v-for="(route, idx) in routes" :key="idx">
						<NuxtLink
							:aria-label="`Go to ${route.label} page`"
							:to="route.to"
							:class="{
								'text-burnt-sienna-1': route.active,
								'hover:text-burnt-sienna-1': !route.active
							}"
							class="px-3 py-1 transition-colors duration-200">
							{{ route.label }}
						</NuxtLink>
					</li>
				</ul>

				<button
					:aria-expanded="isMenuOpen"
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
					class="hover:bg-gunmetal/10 rounded-md p-1 transition-colors duration-200 md:hidden"
					@click="isMenuOpen = !isMenuOpen">
					<span class="sr-only">Menu</span>
					<svg
						class="h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							v-if="!isMenuOpen"
							d="M4 6h16M4 12h16M4 18h16"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2" />
						<path
							v-else
							d="M6 18L18 6M6 6l12 12"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2" />
					</svg>
				</button>
			</div>

			<div
				v-show="isMenuOpen"
				id="mobile-menu"
				class="border-gunmetal/10 mt-3 border-t pt-3 md:hidden">
				<ul class="flex flex-col space-y-2">
					<li v-for="route in routes" :key="route.to">
						<NuxtLink
							:aria-label="`Go to ${route.label} page`"
							:to="route.to"
							:class="{
								'text-burnt-sienna-1': route.active,
								'hover:text-burnt-sienna-1': !route.active
							}"
							class="block px-3 py-2 text-sm transition-colors duration-200"
							@click="isMenuOpen = false">
							{{ route.label }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>
