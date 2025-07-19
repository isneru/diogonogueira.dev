<script lang="ts" setup>
useSeoMeta({
	title: `Diogo Nogueira's Guestbook`,
	ogTitle: `Diogo Nogueira's Guestbook`,
	twitterTitle: `Diogo Nogueira's Guestbook`,
	description: 'Leave a message!',
	ogDescription: 'Leave a message!',
	twitterDescription: 'Leave a message!',
	ogUrl: 'https://diogo.wtf/guestbook/sign',
	ogType: 'website',
	ogImage: 'https://diogo.wtf/og/index.png',
	twitterImage: 'https://diogo.wtf/og/index.png',
	ogLocale: 'en_US',
	keywords:
		'diogo, nogueira, dev, neru, portfolio, curriculo, developer, guestbook'
})

import { ref } from 'vue'

const name = ref('')
const message = ref('')
const token = ref('')
const submitting = ref(false)
const error = ref('')
const success = ref(false)

const submit = async () => {
	error.value = ''
	success.value = false

	if (!name.value.trim() || !message.value.trim() || !token.value) {
		error.value = token.value
			? 'both fields are required'
			: 'please complete the captcha check'
		return
	}

	submitting.value = true

	try {
		await useFetch('/api/guestbook', {
			method: 'POST',
			body: { name: name.value, message: message.value, token: token.value }
		})
		success.value = true
		name.value = message.value = token.value = ''
	} catch (e: any) {
		error.value = e?.data?.error || 'something went wrong'
	}

	submitting.value = false
	navigateTo({ path: '/guestbook/' })
}
</script>

<template>
	<div class="flex flex-col xl:flex-row items-center gap-10 w-full h-[80vh]">
		<div
			class="flex flex-col items-center xl:items-start justify-center w-full gap-4">
			<p class="font-bold text-3xl relative">
				<span
					class="absolute -left-5 top-1 rounded-full text-primary-1 text-xl">
					#
				</span>
				What is this?
			</p>
			<p class="leading-relaxed text-base md:text-lg max-w-4/5">
				Welcome to my digital guestbook! This is a cozy little corner of the
				internet where you can drop a message, share your thoughts, or simply
				say hello. Whether you're here to leave some kind words, give feedback,
				or just want to let me know you stopped by—this is the place. I really
				appreciate you taking the time to write something. It means a lot. So go
				ahead, don’t be shy—type anything you like and hit submit! 😊
			</p>
		</div>
		<div
			id="divider"
			class="w-4/5 h-px xl:w-px xl:h-4/5 bg-primary-1/20 flex mx-auto" />
		<div class="flex w-full items-center justify-center">
			<form
				@submit.prevent="submit"
				class="flex flex-col gap-6 justify-center items-center rounded-lg bg-primary-3/40 backdrop-blur-sm border border-primary-1/20 shadow-md shadow-primary-1/10 p-4 w-full max-w-lg">
				<div class="w-full flex flex-col">
					<label for="name" class="block font-semibold text-lg pl-2 relative">
						<span class="absolute -left-2 text-primary-1 text-lg"> # </span>
						<Icon
							class="absolute top-full size-5! translate-y-1/2 -left-0.5 text-primary-1"
							name="material-symbols:subdirectory-arrow-right-rounded" />
						name
					</label>
					<input
						id="name"
						v-model="name"
						placeholder="your name"
						class="bg-background w-[calc(100%-1.5rem)] flex ml-auto rounded-md border-1 border-primary-2 px-3 py-2 transition placeholder:text-text focus:ring-2 focus:ring-primary-1/20 focus:outline-none" />
				</div>
				<div class="w-full flex flex-col">
					<label
						for="message"
						class="block font-semibold text-lg pl-2 relative">
						<span class="absolute -left-2 text-primary-1 text-lg"> # </span>
						<Icon
							class="absolute top-full size-5! translate-y-1/2 -left-0.5 text-primary-1"
							name="material-symbols:subdirectory-arrow-right-rounded" />
						message</label
					>
					<textarea
						id="message"
						v-model="message"
						rows="4"
						placeholder="say something nice :)"
						class="resize-none bg-background w-[calc(100%-1.5rem)] flex ml-auto rounded-md border-1 border-primary-2 px-3 py-2 transition placeholder:text-text focus:ring-2 focus:ring-primary-1/20 focus:outline-none"></textarea>
				</div>
				<NuxtTurnstile v-model="token" />
				<div class="relative w-full">
					<button
						type="submit"
						:disabled="submitting"
						class="bg-primary-1 text-background hover:bg-background hover:text-primary-1 w-full rounded-lg border-1 border-primary-1 px-4 py-2 font-medium transition focus:ring-2 focus:ring-primary-1 focus:outline-none hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
						variant="button">
						{{ submitting ? 'sending...' : 'submit' }}
					</button>
					<span v-if="error" class="absolute text-primary-1 text-sm">
						{{ error }}
					</span>
				</div>
			</form>
		</div>
	</div>
</template>
