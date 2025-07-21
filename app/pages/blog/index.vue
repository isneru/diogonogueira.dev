<script setup lang="ts">
const { data: posts } = useAsyncData(() => {
	return queryCollection('blog').order('date', 'DESC').all()
})
</script>

<template>
	<Header title="Blog" />
	<div v-if="posts?.length">
		<div v-for="post in posts" :key="post.id">
			<NuxtLink :to="post.path">
				{{ post.title }}
			</NuxtLink>
			<p>
				{{
					new Date(post.date).toLocaleDateString('en-GB', {
						day: '2-digit',
						month: 'short',
						year: 'numeric'
					})
				}}
			</p>
			<p>{{ post.description }}</p>
		</div>
	</div>
	<div v-else><p>no posts yet, check back later</p></div>
</template>
