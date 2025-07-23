<script setup lang="ts">
import { getSeoMeta } from '~~/utils'

const { data: posts } = useAsyncData(() => {
	return queryCollection('blog').order('date', 'DESC').all()
})

useSeoMeta(getSeoMeta())
</script>

<template>
	<Header show-back-link title="blog">
		<template v-if="posts?.length" #subtitle>
			<p>
				{{ posts?.length }} {{ posts?.length === 1 ? 'post' : 'posts' }} found
			</p>
		</template>
	</Header>
	<div v-if="posts?.length">
		<div v-for="post in posts" :key="post.id">
			<NuxtLink :to="post.path">
				{{ post.title }}
			</NuxtLink>
			<p>
				{{
					new Date(post.date)
						.toLocaleDateString('en-US', {
							day: '2-digit',
							month: 'long',
							year: 'numeric'
						})
						.toLowerCase()
				}}
			</p>
		</div>
	</div>
	<div v-else><p>no posts yet, check back later</p></div>
</template>
