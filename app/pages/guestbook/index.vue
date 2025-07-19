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
	<div class="mt-10 flex flex-col items-center gap-10 w-full mx-auto max-w-2xl">
		<div class="flex justify-between items-center gap-4 w-full">
			<motion.p
				:initial="{ opacity: 0, x: -20 }"
				:animate="{ opacity: 1, x: 0, transition: { delay: 0.15 } }"
				class="font-bold text-3xl relative">
				messages sent by my
				<span class="underline decoration-primary-1 decoration-wavy italic"
					>"fans"</span
				>
				<span
					class="absolute -left-5 top-1 rounded-full text-primary-1 text-2xl">
					#
				</span>
			</motion.p>
			<MotionNuxtLink
				:initial="{ opacity: 0, x: 20 }"
				:animate="{ opacity: 1, x: 0, transition: { delay: 0.15 } }"
				to="/guestbook/sign"
				class="bg-text hover:bg-primary-1 text-background inline-block border px-4 py-2 rounded-lg font-medium transition-colors animate-ripple ml-auto">
				sign yours
			</MotionNuxtLink>
		</div>
		<p v-if="status !== 'success' && !error">loading...</p>
		<p v-else-if="error" class="text-primary-1">
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
				class="w-full rounded-lg bg-primary-3/40 backdrop-blur-sm border border-primary-1/20 shadow-md shadow-primary-1/10 py-3">
				<p class="mb-1 font-bold text-primary-1 text-xl px-3">
					{{ entry.name }}
				</p>
				<div class="h-px bg-primary-1/20 w-full my-2" />
				<p class="whitespace-pre-wrap px-3">
					{{ entry.message }}
				</p>
				<p class="mt-2 text-xs px-3 text-right italic">
					{{ timeAgo(entry.created_at!) }}
				</p>
			</motion.div>
		</div>
	</div>
</template>
