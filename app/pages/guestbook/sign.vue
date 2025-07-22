<script lang="ts" setup>
import { ref } from 'vue'
import { getSeoMeta } from '@@/utils'

useSeoMeta(getSeoMeta())

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

definePageMeta({
	layout: 'unrestricted-width'
})
</script>

<template>
	<div class="flex h-[80vh] w-full flex-col items-center gap-10 xl:flex-row">
		<div
			class="flex w-full flex-col items-center justify-center gap-4 xl:items-start">
			<p class="relative text-3xl font-bold">
				<span
					class="text-burnt-sienna-1 absolute top-1 -left-5 rounded-full text-xl">
					#
				</span>
				What is this?
			</p>
			<p class="max-w-4/5 text-base leading-relaxed md:text-lg">
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
			class="bg-burnt-sienna-1/20 mx-auto flex h-px w-4/5 xl:h-4/5 xl:w-px" />
		<div class="flex w-full items-center justify-center">
			<form
				@submit.prevent="submit"
				class="bg-burnt-sienna-3/40 border-burnt-sienna-1/20 shadow-burnt-sienna-1/10 flex w-full max-w-lg flex-col items-center justify-center gap-6 rounded-lg border p-4 shadow-md backdrop-blur-sm">
				<div class="flex w-full flex-col">
					<label for="name" class="relative block pl-2 text-lg font-semibold">
						<span class="text-burnt-sienna-1 absolute -left-2 text-lg">
							#
						</span>
						<Icon
							class="text-burnt-sienna-1 absolute top-full -left-0.5 size-5! translate-y-1/2"
							name="material-symbols:subdirectory-arrow-right-rounded" />
						name
					</label>
					<input
						id="name"
						v-model="name"
						placeholder="your name"
						class="bg-antiflash-white border-burnt-sienna-2 placeholder:text-gunmetal focus:ring-burnt-sienna-1/20 ml-auto flex w-[calc(100%-1.5rem)] rounded-md border-1 px-3 py-2 transition focus:ring-2 focus:outline-none" />
				</div>
				<div class="flex w-full flex-col">
					<label
						for="message"
						class="relative block pl-2 text-lg font-semibold">
						<span class="text-burnt-sienna-1 absolute -left-2 text-lg">
							#
						</span>
						<Icon
							class="text-burnt-sienna-1 absolute top-full -left-0.5 size-5! translate-y-1/2"
							name="material-symbols:subdirectory-arrow-right-rounded" />
						message</label
					>
					<textarea
						id="message"
						v-model="message"
						rows="4"
						placeholder="say something nice :)"
						class="bg-antiflash-white border-burnt-sienna-2 placeholder:text-gunmetal focus:ring-burnt-sienna-1/20 ml-auto flex w-[calc(100%-1.5rem)] resize-none rounded-md border-1 px-3 py-2 transition focus:ring-2 focus:outline-none"></textarea>
				</div>
				<div class="relative grid h-[66px] place-items-center">
					<NuxtTurnstile :options="{ language: 'en' }" v-model="token" />
					<Icon
						name="tabler:border-corner-square"
						class="text-burnt-sienna-1 absolute -top-2 -left-2 size-6! transform" />
					<Icon
						name="tabler:border-corner-square"
						class="text-burnt-sienna-1 absolute -top-2 -right-2 size-6! rotate-90 transform" />
					<Icon
						name="tabler:border-corner-square"
						class="text-burnt-sienna-1 absolute -bottom-2 -left-2 size-6! -rotate-90 transform" />
					<Icon
						name="tabler:border-corner-square"
						class="text-burnt-sienna-1 absolute -right-2 -bottom-2 size-6! rotate-180 transform" />
				</div>
				<div class="relative w-full">
					<button
						type="submit"
						:disabled="submitting"
						class="bg-burnt-sienna-1 text-antiflash-white hover:bg-antiflash-white hover:text-burnt-sienna-1 border-burnt-sienna-1 focus:ring-burnt-sienna-1 w-full rounded-lg border-1 px-4 py-2 font-medium transition hover:cursor-pointer focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						variant="button">
						{{ submitting ? 'sending...' : 'submit' }}
					</button>
					<span v-if="error" class="text-burnt-sienna-1 absolute text-sm">
						{{ error }}
					</span>
				</div>
			</form>
		</div>
	</div>
</template>
