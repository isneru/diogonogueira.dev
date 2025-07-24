<script lang="ts" setup>
type Props = {
	href?: string
}

const { href } = defineProps<Props>()
</script>

<template>
	<a
		v-if="href"
		:href="href"
		rel="noreferrer"
		target="_blank"
		class="decoration-burnt-sienna-1 flex items-center gap-2 hover:underline">
		<slot />
	</a>
	<span v-else class="flex items-center gap-2"><slot /></span>
</template>
