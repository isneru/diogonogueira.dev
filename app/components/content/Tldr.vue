<script lang="ts" setup>
import { motion } from 'motion-v'

interface Props {
	id?: string
}

const props = defineProps<Props>()
</script>

<template>
	<motion.div
		class="bg-burnt-sienna-3/40 border-burnt-sienna-1/20 shadow-burnt-sienna-1/10 hover:shadow-burnt-sienna-1/20 rounded-lg border px-3 py-2 shadow-md backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg"
		:id="props.id"
		:initial="{ opacity: 0, x: -40 }"
		:animate="{ opacity: 1, x: 0, transition: { delay: 0.4 } }">
		<strong class="my-1">TL; DR</strong>
		<slot />
	</motion.div>
</template>
