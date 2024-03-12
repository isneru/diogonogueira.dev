export type Project = {
	name: string
	description: string
	img: {
		path: string
		alt: string
	}
	links: {
		demo?: string
		repo?: string
	}
}

export const projects: Project[] = [
	{
		name: 'Cex Test Agenda',
		description: 'A tests order management project.',
		img: {
			path: '/project-images/cex-test-agenda.png',
			alt: 'Cex Test Agenda preview'
		},
		links: {}
	},
	{
		name: 'Encrypting/Decrypting App',
		description:
			'A simple app to encrypt and decrypt data using AES-256-CBC algorithm. (Made for College)',
		img: {
			path: '/project-images/si-encrypt.png',
			alt: 'App Preview'
		},
		links: {
			repo: 'https://github.com/isneru/si-encrypt',
			demo: 'https://si-encrypt.vercel.app'
		}
	},
	{
		name: 'Funny CSS',
		description: 'A small group of funny CSS projects',
		img: {
			path: '/project-images/funny-css.png',
			alt: 'Preview of one of the funny css projects'
		},
		links: {
			repo: 'https://github.com/isneru/funny-css',
			demo: 'https://funny-css.vercel.app'
		}
	},
	{
		name: 'Lol Client (UI)',
		description: "A game's client user interface. (WORK IN PROGRESS)",
		img: {
			path: '/project-images/lolclient.png',
			alt: 'lol client preview'
		},
		links: {
			repo: 'https://github.com/isneru/lol-client',
			demo: 'https://lolclient.vercel.app'
		}
	},
	{
		name: 'Rocketseat™ Vault',
		description: 'A small group of projects hosted by Rocketseat',
		img: {
			path: '/project-images/rseatvault.png',
			alt: "image of one of the rocketseat's community projects"
		},
		links: {
			repo: 'https://github.com/isneru/rseat-vault'
		}
	},
	{
		name: 'Svelte Todo',
		description: 'A simple todo app made with SvelteKit',
		img: {
			path: '/project-images/svelte-todo.png',
			alt: 'Preview of the todo app'
		},
		links: {
			repo: 'https://github.com/isneru/svelte-todo',
			demo: 'https://svelte-getting-started.vercel.app'
		}
	},
	{
		name: 'Learning Go Lang',
		description:
			'A Monorepo of small Go Lang projects used for studying purposes',
		img: {
			path: '/project-images/learninggo.png',
			alt: 'todo cli app in go'
		},
		links: {
			repo: 'https://github.com/isneru/learning-go'
		}
	}
]
