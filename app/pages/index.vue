<script lang="ts" setup>
useSeoMeta({
	title: 'Diogo Nogueira',
	ogTitle: 'Diogo Nogueira',
	twitterTitle: 'Diogo Nogueira',
	description: 'Developer and Telecommunications Engineering student.',
	ogDescription: 'Developer and Telecommunications Engineering student.',
	twitterDescription: 'Developer and Telecommunications Engineering student.',
	ogUrl: 'https://diogo.wtf',
	ogType: 'website',
	ogImage: 'https://diogo.wtf/og/index.png',
	twitterImage: 'https://diogo.wtf/og/index.png',
	ogLocale: 'en_US',
	keywords: 'diogo, nogueira, dev, neru, home, portfolio, curriculum, developer'
})

import { motion } from 'motion-v'
import { projects } from '@@/utils/projects'

const floatingTools = {
	left: [
		{ id: 1, src: '/icons/node.svg', alt: 'Node.js logo', title: 'Node.js' },
		{ id: 2, src: '/icons/prisma.svg', alt: 'Prisma logo', title: 'Prisma' },
		{ id: 3, src: '/icons/ts.svg', alt: 'TypeScript logo', title: 'TypeScript' }
	],
	right: [
		{ id: 1, src: '/icons/react.svg', alt: 'React.js logo', title: 'React.js' },
		{
			id: 2,
			src: '/icons/tw.svg',
			alt: 'Tailwind CSS logo',
			title: 'Tailwind CSS'
		},
		{ id: 3, src: '/icons/next.svg', alt: 'Next.js logo', title: 'Next.js' }
	]
}
</script>

<template>
	<div class="flex h-[55vh] w-full items-center justify-center">
		<div class="grid gap-x-16 grid-cols-5">
			<motion.div
				:initial="{ opacity: 0, x: 40 }"
				:animate="{ opacity: 1, x: 0, transition: { delay: 0.15 } }"
				class="mt-10 lg:flex flex-col items-center gap-3 hidden">
				<div class="flex flex-col gap-4 w-full items-center">
					<motion.img
						v-for="tool in floatingTools.left"
						:title="tool.title"
						:src="tool.src"
						:width="50"
						:class="{ 'mr-10': tool.id === 2 }"
						:height="50"
						:alt="tool.alt"
						:initial="{ opacity: 0, x: 40 }"
						:animate="{
							opacity: 1,
							x: 0,
							transition: { delay: (tool.id + 1) * 0.15 }
						}" />
				</div>
			</motion.div>
			<div class="col-span-5 lg:col-span-3">
				<motion.strong
					:initial="{ opacity: 0, y: -100 }"
					:animate="{ opacity: 1, y: 0 }"
					class="mb-6 flex flex-col text-7xl font-bold text-center">
					<span>I'm&nbsp;<span class="text-primary-2">Diogo </span> </span>
					<span>Nogueira<span class="text-primary-1">,</span> </span>
				</motion.strong>
				<motion.h1
					:initial="{ opacity: 0, y: 10 }"
					:animate="{ opacity: 1, y: 0, transition: { delay: 0.2 } }"
					class="flex flex-col text-xl leading-7 text-primary-2 text-center">
					<span>
						a
						<strong class="font-bold text-text">
							&nbsp;frontend developer&nbsp;
						</strong>
						who chose
					</span>
					<span>to hard code his life.</span>
				</motion.h1>
			</div>
			<motion.div
				:initial="{ opacity: 0, x: -40 }"
				:animate="{ opacity: 1, x: 0, transition: { delay: 0.15 } }"
				class="mt-10 lg:flex flex-col items-center gap-3 hidden">
				<div class="flex flex-col gap-4 w-full items-center">
					<motion.img
						v-for="tool in floatingTools.right"
						:key="tool.id"
						:title="tool.title"
						:src="tool.src"
						:width="50"
						:class="{ 'ml-10': tool.id === 2 }"
						:height="50"
						:alt="tool.alt"
						:initial="{ opacity: 0, x: -40 }"
						:animate="{
							opacity: 1,
							x: 0,
							transition: { delay: (tool.id + 1) * 0.15 }
						}" />
				</div>
			</motion.div>
		</div>
	</div>
	<div class="flex flex-col items-center py-10">
		<motion.p
			:initial="{ opacity: 0, y: -40 }"
			:animate="{ opacity: 1, y: 0, transition: { delay: 0.3 } }"
			class="mb-8 text-4xl lg:text-5xl font-bold text-center col-span-1 lg:col-span-2 xl:col-span-3">
			some of my projects...
		</motion.p>
		<div class="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2 xl:grid-cols-3">
			<Card v-for="project in projects" :project="project" :key="project.id" />
		</div>
	</div>
</template>
