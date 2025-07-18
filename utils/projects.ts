export type Project = {
	id: number
	name: string
	description: string
	img: {
		path: string
		alt: string
	}
	links: {
		demo?: string
		repo: string
	}
}

export const projects: Project[] = [
	{
		id: 1,
		name: 'New Tab',
		description: 'Simple HTML page for New Tab Override extension on browsers',
		img: {
			path: '/project-images/newtab.png',
			alt: 'New Tab Override preview'
		},
		links: {
			repo: 'https://github.com/isneru/newtab',
			demo: 'https://newtab-nine.vercel.app'
		}
	},
	{
		id: 2,
		name: 'Cex Test Agenda',
		description: 'A tests order management project.',
		img: {
			path: '/project-images/cex-test-agenda.png',
			alt: 'Cex Test Agenda preview'
		},
		links: {
			repo: 'https://github.com/isneru/test-agenda'
		}
	},
	{
		id: 3,
		name: 'Encryption App',
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
		id: 4,
		name: 'Funny CSS',
		description: 'A small group of funny css snippets',
		img: {
			path: '/project-images/funny-css.png',
			alt: 'Preview of one of the funny CSS snippets'
		},
		links: {
			repo: 'https://github.com/isneru/funny-css',
			demo: 'https://funny-css.vercel.app'
		}
	},
	{
		id: 5,
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
		id: 6,
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
		id: 7,
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
		id: 8,
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
