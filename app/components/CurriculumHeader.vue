<script lang="ts" setup>
import { me } from '@@/utils/me'
</script>

<template>
	<p aria-hidden class="h-[2px] bg-[url('/pattern.svg')]" />
	<div
		class="grid gap-3 text-center md:grid-cols-2 md:grid-rows-3 p-4 rounded-lg">
		<DynamicSpan
			v-for="({ Icon, text, href }, id) in me('en').info"
			:href="href"
			:key="id">
			<component :is="Icon" weight="fill" :stroke-width="1.5" />
			<span>{{ text }}</span>
		</DynamicSpan>
	</div>
	<p aria-hidden class="h-[2px] bg-[url('/pattern.svg')]" />
</template>
