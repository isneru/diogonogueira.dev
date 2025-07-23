<script lang="ts" setup>
import { computed, useRuntimeConfig } from '#imports'
import { motion } from 'motion-v'

interface Props {
	id?: string
}

const props = defineProps<Props>()
</script>

<template>
	<p>
		<slot />
	</p>
</template>
