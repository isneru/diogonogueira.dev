<script lang="ts" setup>
import { type BlogCollectionItem } from '@nuxt/content'

type Props = {
	blog: BlogCollectionItem
}

const { blog } = defineProps<Props>()
</script>

<template>
	<div
		class="border-gunmetal/20 group hover:border-burnt-sienna-1/20 mb-6 flex w-full items-center justify-between border-b px-2 transition-colors">
		<NuxtLink
			:to="blog.path"
			class="group-hover:text-burnt-sienna-1 text-lg font-semibold transition-colors">
			{{ blog.title }}
		</NuxtLink>
		<p
			class="text-gunmetal/60 group-hover:text-burnt-sienna-1/60 mt-1 text-sm tabular-nums transition-colors">
			{{ blog.date ?? '01-01-1970' }}
		</p>
	</div>
</template>
