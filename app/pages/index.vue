<script lang="ts" setup>
import { getSeoMeta } from '@@/utils'

useSeoMeta(getSeoMeta())
</script>

<template>
	<Header :title="'diogo nogueira'" class="text-burnt-sienna-1 mb-2!">
		<template #subtitle>
			<p>aka <span class="text-burnt-sienna-2">neru</span></p>
			<p class="italic">he/him</p>
		</template>
	</Header>
	<p class="text-sm leading-relaxed font-medium md:text-base">
		a frontend developer who chose to hard code his life.
	</p>
</template>
