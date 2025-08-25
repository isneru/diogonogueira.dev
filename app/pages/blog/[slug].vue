<script setup lang="ts">
import { motion } from 'motion-v'

const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
	return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>

<template>
	<article
		class="prose-lg prose-invert prose-p:m-0 prose-p:leading-relaxed mx-auto w-full px-8 lg:px-0">
		<ContentRenderer v-if="post" :value="post" />

		<motion.p
			:initial="{ opacity: 0, y: 20 }"
			:animate="{ opacity: 1, y: 0, transition: { delay: 0.5 } }">
			if you feel like this page is too empty, it's because it's still a work in
			progress..
		</motion.p>
	</article>
</template>
