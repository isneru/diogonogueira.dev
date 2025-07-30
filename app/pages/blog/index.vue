<script setup lang="ts">
import { getSeoMeta } from '~~/utils'

const { data: posts } = useAsyncData(() => {
	return queryCollection('blog').order('date', 'DESC').all()
})

useSeoMeta(getSeoMeta())
</script>

<template>
	<Header show-back-link title="blog">
		<!-- 	<template v-if="posts?.length" #subtitle>
			<p>
				{{ posts?.length }} {{ posts?.length === 1 ? 'post' : 'posts' }} found
			</p>
		</template> -->
		<template #subtitle>
			page under construction, check back later for updates
		</template>
	</Header>
	<!-- <div v-if="posts?.length">
		<BlogLink v-for="post in posts" :key="post.id" :blog="post" />
	</div>
	<div v-else><p>no posts yet, check back later</p></div> -->
</template>
