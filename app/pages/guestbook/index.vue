<script lang="ts" setup>
useSeoMeta({
	title: `Diogo Nogueira's Guestbook`,
	ogTitle: `Diogo Nogueira's Guestbook`,
	twitterTitle: `Diogo Nogueira's Guestbook`,
	description: 'All messages written are here.',
	ogDescription: 'All messages written are here.',
	twitterDescription: 'All messages written are here.',
	ogUrl: 'https://diogo.wtf/guestbook',
	ogType: 'website',
	ogImage: 'https://diogo.wtf/og/index.png',
	twitterImage: 'https://diogo.wtf/og/index.png',
	ogLocale: 'en_US',
	keywords:
		'diogo, nogueira, dev, neru, portfolio, curriculo, developer, guestbook'
})

const {
	data: entries,
	error,
	status
} = await useLazyFetch('/api/guestbook', { server: false })

const timeAgo = (input: string | number | Date) => {
	const utc =
		typeof input === 'string' ? new Date(input + 'Z') : new Date(input)
	const diff = Date.now() - utc.getTime()

	const minutes = Math.floor(diff / 60000)
	if (minutes < 1) return 'just now'
	if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`

	const hours = Math.floor(minutes / 60)
	if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`

	const days = Math.floor(hours / 24)
	if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`

	const months = Math.floor(days / 30)
	if (months < 12) return `${months} month${months === 1 ? '' : 's'} ago`

	const years = Math.floor(months / 12)
	return `${years} year${years === 1 ? '' : 's'} ago`
}
</script>

<template>
	<div class="mt-10 flex flex-col items-center gap-10 w-full mx-auto max-w-2xl">
		<div class="flex justify-between items-center gap-4 w-full">
			<p class="font-bold text-3xl relative">
				messages sent by my
				<span class="underline decoration-primary-1 decoration-wavy italic"
					>"fans"</span
				>
				<span
					class="absolute -left-5 top-1 rounded-full text-primary-1 text-2xl">
					#
				</span>
			</p>
			<NuxtLink
				to="/guestbook/sign"
				class="bg-text hover:bg-primary-1 text-background inline-block border px-4 py-2 rounded-lg font-medium transition-colors animate-ripple ml-auto">
				sign yours
			</NuxtLink>
		</div>
		<p v-if="status !== 'success' && !error">loading...</p>
		<p v-else-if="error" class="text-primary-1">
			{{ 'something went wrong. try again later :(' }}
		</p>
		<div v-else class="w-full space-y-4">
			<p v-if="!entries?.length">no entries yet, be the first to say hi!</p>
			<div
				v-else
				v-for="entry in entries"
				:key="entry.id"
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
			</div>
		</div>
	</div>
</template>
