<script setup lang="ts">
import { Tldr } from '#components'

const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
	return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>

<template>
	<article class="prose-lg prose-invert mx-auto px-8 lg:px-0">
		<ContentRenderer v-if="post" :value="post" />
	</article>
</template>
