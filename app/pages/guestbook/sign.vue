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
	<div class="flex h-[75vh] w-full items-center justify-center">
		<form
			@submit.prevent="submit"
			class="flex flex-col gap-6 justify-center items-center rounded-lg bg-primary-3/40 backdrop-blur-sm border border-primary-1/20 shadow-md shadow-primary-1/10 p-3 w-full max-w-lg">
			<div class="space-y-2 w-full">
				<label for="name" class="block"> name </label>
				<input
					id="name"
					v-model="name"
					placeholder="your name"
					class="bg-background w-full rounded-md border-1 px-3 py-2 transition placeholder:text-text focus:ring-2 focus:ring-text focus:outline-none" />
			</div>

			<div class="space-y-2 w-full">
				<label for="message" class="block"> message </label>
				<textarea
					id="message"
					v-model="message"
					rows="4"
					placeholder="say something nice :)"
					class="bg-background border-lithium-white/10 bg-velvet-black w-full rounded-md border-1 px-3 py-2 transition placeholder:text-text focus:ring-2 focus:ring-text focus:outline-none"></textarea>
			</div>

			<NuxtTurnstile v-model="token" />

			<div class="relative w-full">
				<button
					type="submit"
					:disabled="submitting"
					class="bg-text hover:bg-primary-1 border-lithium-white/10 w-full rounded-md border-1 px-4 py-2 font-medium text-white transition focus:ring-2 focus:ring-text focus:outline-none hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
					variant="button">
					{{ submitting ? 'sending...' : 'submit' }}
				</button>
				<span v-if="error" class="absolute text-primary-1 text-sm">
					{{ error }}
				</span>
			</div>
		</form>
	</div>
</template>
