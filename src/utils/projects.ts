export type Project = {
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
    name: "Shapeshifter",
    description: "Managing weekly activities made simple. (under development)",
    img: {
      path: "/project-images/shapeshifter.png",
      alt: "App Preview"
    },
    links: {
      repo: "https://github.com/isneru/shapeshifter",
      demo: "https://www.shapeshifterapp.xyz"
    }
  },
  {
    name: "Encrypting/Decrypting App",
    description:
      "A simple app to encrypt and decrypt data using AES-256-CBC algorithm. Made for College",
    img: {
      path: "/project-images/si-encrypt.png",
      alt: "App Preview"
    },
    links: {
      repo: "https://github.com/isneru/si-encrypt",
      demo: "https://si-encrypt.vercel.app"
    }
  },
  {
    name: "Funny CSS",
    description: "A small group of funny CSS projects",
    img: {
      path: "/project-images/funny-css.png",
      alt: "Preview of one of the funny css projects"
    },
    links: {
      repo: "https://github.com/isneru/funny-css",
      demo: "https://funny-css.vercel.app"
    }
  },
  {
    name: "Lol Client (UI)",
    description: "A game's client user interface. (WORK IN PROGRESS)",
    img: {
      path: "/project-images/lolclient.png",
      alt: "lol client preview"
    },
    links: {
      repo: "https://github.com/isneru/lol-client",
      demo: "https://lolclient.vercel.app"
    }
  },
  {
    name: "Rocketseat™ Vault",
    description: "A small group of projects hosted by Rocketseat",
    img: {
      path: "/project-images/rseatvault.png",
      alt: "image of one of the rocketseat's community projects"
    },
    links: {
      repo: "https://github.com/isneru/rseat-vault"
    }
  },
  {
    name: "Svelte Todo",
    description: "A simple todo app made with SvelteKit",
    img: {
      path: "/project-images/svelte-todo.png",
      alt: "Preview of the todo app"
    },
    links: {
      repo: "https://github.com/isneru/svelte-todo",
      demo: "https://svelte-getting-started.vercel.app"
    }
  },
  {
    name: "Learning Go Lang",
    description:
      "A Monorepo of small Go Lang projects used for studying purposes",
    img: {
      path: "/project-images/learninggo.png",
      alt: "todo cli app in go"
    },
    links: {
      repo: "https://github.com/isneru/learning-go"
    }
  }
  /* {
    name: "Genshin Pity Tracker",
    description:
      "A project which main goal was to have a dedicated platform to note down and track each player's current pities. (number of pulls for a character  in Genshin impact)",
    img: {
      path: "/project-images/genshinpitytracker.png",
      alt: "Player pity tracking system image"
    },
    links: {
      demo: "https://genshin-pity-counter.vercel.app/",
      repo: "https://github.com/isneru/genshin-pity-counter"
    }
  }, 
  {
    name: "Branding Champs",
    description:
      "Astro built website to consume League of Legends' API and check champions' informations. (WORK IN PROGRESS)",
    img: {
      path: "/project-images/brandingchamps.png",
      alt: "website preview"
    },
    links: {
      demo: "https://brandingchamps.diogonogueira.dev",
      repo: "https://github.com/isneru/branding-champions"
    }
  },
  {
    name: "Night Talk",
    description:
      "Social network based on music taste. Uses Spotify Provider for authentication. (WORK IN PROGRESS)",
    img: {
      path: "/project-images/nighttalk.png",
      alt: "authenticated user profile playlists preview"
    },
    links: {
      demo: "https://night-talk.vercel.app",
      repo: "https://github.com/isneru/night-talk"
    }
  }*/
]
