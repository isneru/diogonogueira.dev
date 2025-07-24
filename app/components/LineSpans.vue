<script lang="ts" setup>
type Props = {
	start: string
	end: string
}

const { start, end } = defineProps<Props>()
</script>

<template>
	<span class="relative flex w-full items-center justify-between">
		<span
			class="absolute inset-x-0 top-1/2 -z-10 h-[3px] -translate-y-1/2 bg-[url('/pattern.svg')]" />
		<span class="bg-antiflash-white pr-2">{{ start }}</span>
		<span class="bg-antiflash-white pl-2">{{ end }}</span>
	</span>
</template>
