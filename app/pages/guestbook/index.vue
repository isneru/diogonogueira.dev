<script lang="ts" setup>
import { NuxtLink } from '#components'
import { motion } from 'motion-v'
import { getSeoMeta, timeAgo } from '@@/utils'

useSeoMeta(getSeoMeta())

const MotionNuxtLink = motion.create(NuxtLink)

const {
	data: entries,
	error,
	status
} = await useLazyFetch('/api/guestbook', { server: false })
</script>

<template>
	<Header title="guestbook" showBackLink>
		<template #subtitle>
			<p class="mb-3">messages sent by my guests</p>
			<MotionNuxtLink
				:initial="{ opacity: 0, x: 20 }"
				:animate="{ opacity: 1, x: 0, transition: { delay: 0.15 } }"
				to="/guestbook/sign"
				class="bg-gunmetal group hover:bg-burnt-sienna-1 text-antiflash-white animate-ripple hover:animate-ripple-hover border-antiflash-white flex w-fit items-center gap-2 rounded-lg border-2 px-4 py-2 font-medium transition-all hover:underline">
				sign my guestbook
				<Icon
					size="20"
					name="material-symbols:arrow-right-alt-rounded"
					class="transition-transform group-hover:translate-x-0.5" />
			</MotionNuxtLink>
		</template>
	</Header>

	<p v-if="status !== 'success' && !error">loading...</p>
	<p v-else-if="error" class="text-burnt-sienna-1">
		{{ 'something went wrong. try again later :(' }}
	</p>
	<div v-else class="w-full space-y-4">
		<p v-if="!entries?.length">no entries yet, be the first to say hi!</p>
		<motion.div
			v-else
			v-for="(entry, idx) in entries"
			:key="entry.id"
			:initial="{ opacity: 0, y: -20 }"
			:animate="{
				opacity: 1,
				y: 0,
				transition: {
					delay: entries[entries.length - 1 - idx]!.id! * 0.1 + 0.5
				}
			}"
			class="bg-burnt-sienna-3/40 border-burnt-sienna-1/20 shadow-burnt-sienna-1/10 w-full rounded-lg border py-3 shadow-md backdrop-blur-sm">
			<p class="text-burnt-sienna-1 mb-1 px-3 text-xl font-bold">
				{{ entry.name }}
			</p>
			<div class="bg-burnt-sienna-1/20 my-2 h-px w-full" />
			<p class="px-3 whitespace-pre-wrap">
				{{ entry.message }}
			</p>
			<p class="mt-2 px-3 text-right text-xs italic">
				{{ timeAgo(entry.created_at!) }}
			</p>
		</motion.div>
	</div>
</template>
