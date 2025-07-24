import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		blog: defineCollection({
			type: 'page',
			source: '**/*.md',
			schema: z.object({
				title: z.string(),
				date: z.string()
			})
		})
	}
})
