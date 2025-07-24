<script setup lang="ts">
import type { NuxtError } from '#app'

const quotes404 = [
	'this page got lost in the void.',
	'404? more like 4-oops.',
	"the meows couldn't find what you're looking for.",
	"it's not you. it's the URL.",
	'404. a digital ghost town.',
	'oops. this page went to take a nap.',
	'this page is on vacation.',
	'this page is taking a coffee break.'
]
const quote404 = quotes404[Math.floor(Math.random() * quotes404.length)]

const props = defineProps({
	error: Object as () => NuxtError
})
</script>

<template>
	<NuxtLayout v-if="error"">
		<Header size="large" :title="error.statusCode.toString()" class="mx-auto" />
		<section class="text-gunmetal/70 mb-12 text-center text-base md:text-lg">
			<p class="mb-4 italic">
				{{
					error.statusCode === 404
						? quote404
						: "well that wasn't supposed to happen"
				}}
			</p>
			<NuxtLink
				to="/"
				class="border-antiflash-white/10 bg-gunmetal text-antiflash-white inline-block rounded border px-6 py-4 text-lg font-semibold"
				variant="button">
				← go back home
			</NuxtLink>
		</section>
	</NuxtLayout>
</template>
