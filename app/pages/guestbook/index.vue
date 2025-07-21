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
	<div class="mx-auto mt-10 flex w-full max-w-2xl flex-col items-center gap-10">
		<div class="flex w-full items-center justify-between gap-4">
			<motion.p
				:initial="{ opacity: 0, x: -20 }"
				:animate="{ opacity: 1, x: 0, transition: { delay: 0.15 } }"
				class="relative text-3xl font-bold">
				messages sent by my
				<span class="decoration-burnt-sienna-1 italic underline decoration-wavy"
					>"fans"</span
				>
				<span
					class="text-burnt-sienna-1 absolute top-1 -left-5 rounded-full text-2xl">
					#
				</span>
			</motion.p>
			<MotionNuxtLink
				:initial="{ opacity: 0, x: 20 }"
				:animate="{ opacity: 1, x: 0, transition: { delay: 0.15 } }"
				to="/guestbook/sign"
				class="bg-gunmetal hover:bg-burnt-sienna-1 text-antiflash-white animate-ripple ml-auto inline-block rounded-lg border px-4 py-2 font-medium transition-colors">
				sign yours
			</MotionNuxtLink>
		</div>
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
					transition: { delay: entries[entries.length - 1 - idx]!.id! * 0.1 }
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
	</div>
</template>
