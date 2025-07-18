<script lang="ts" setup>
useSeoMeta({
	title: 'Diogo Nogueira | Guestbook',
	ogTitle: 'Diogo Nogueira | Guestbook',
	ogSiteName: 'Diogo Nogueira | Guestbook',
	twitterTitle: 'Diogo Nogueira | Guestbook',
	description: 'Leave a message!',
	ogDescription: 'Leave a message!',
	twitterDescription: 'Leave a message!',
	ogUrl: 'https://diogo.wtf/guestbook',
	ogType: 'website',
	ogImage: 'https://diogo.wtf/og/index.png',
	twitterImage: 'https://diogo.wtf/og/index.png',
	ogLocale: 'pt_PT',
	keywords: 'diogo, nogueira, dev, neru, portfolio, curriculo, desenvolvedor'
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
	<!-- <Header show-back-link size="medium" title="guestbook">
		<template #subtitle>
			<p class="italic">messages from lovely people 💌</p>
		</template>
	</Header>

	<section class="mb-8">
		<NuxtLink
			to="/guestbook/sign"
			class="border-lithium-white/10 inline-block border px-4 py-2 text-sm font-medium">
			sign the guestbook →
		</NuxtLink>
	</section>

	<section class="mb-16 space-y-6 text-sm leading-relaxed md:text-base">
		<p v-if="status !== 'success' && !error" class="text-lithium-white/60">
			loading...
		</p>

		<p v-else-if="error" class="text-cherry-soda">
			something went wrong. try again later :(
		</p>

		<div v-else>
			<p v-if="!entries?.length" class="text-lithium-white/60">
				no entries yet, be the first to say hi!
			</p>

			<div v-else class="space-y-4">
				<div
					v-for="entry in entries"
					:key="entry.id"
					class="border-lithium-white/10 bg-velvet-black rounded-lg border-2 p-4">
					<p class="text-lithium-white mb-1 font-medium">{{ entry.name }}</p>
					<p class="text-lithium-white/80 whitespace-pre-wrap">
						{{ entry.message }}
					</p>
					<p class="text-lithium-white/50 mt-2 text-xs">
						{{ timeAgo(entry.created_at) }}
					</p>
				</div>
			</div>
		</div>
	</section> -->
</template>
