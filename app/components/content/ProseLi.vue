<script lang="ts" setup>
interface Props {
	id?: string
}

const props = defineProps<Props>()
</script>

<template>
	<li :id="props.id" class="list-disc">
		<slot />
	</li>
</template>
