<script lang="ts" setup>
import { motion } from 'motion-v'

interface Props {
	id?: string
}

const props = defineProps<Props>()
</script>

<template>
	<motion.div
		class="card mb-4 flex flex-col gap-2 p-4 text-balance"
		:id="props.id"
		:initial="{ opacity: 0, x: -40 }"
		:animate="{ opacity: 1, x: 0, transition: { delay: 0.4 } }">
		<strong>TL; DR</strong>
		<slot />
	</motion.div>
</template>
