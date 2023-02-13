export interface TProject {
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

export const projects: TProject[] = [
  {
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
  },
  {
    name: "Social Links",
    description: "A Linktr.ee looking website with my social media links",
    img: {
      path: "/project-images/socials.png",
      alt: "website preview"
    },
    links: {
      repo: "https://github.com/isneru/socials",
      demo: "https://socials.diogonogueira.dev"
    }
  },
  {
    name: "Learning Go Lang",
    description:
      "A Monorepo of small Go Lang projects used for studying purposes",
    img: {
      path: "/project-images/rseatvault.png",
      alt: "image split in 3 project previews"
    },
    links: {
      repo: "https://github.com/isneru/learning-go"
    }
  },
  {
    name: "Rseat Vault",
    description: "A small group of projects hosted by Rocketseat",
    img: {
      path: "/project-images/rseatvault.png",
      alt: "image of one of the rocketseat's community projects"
    },
    links: {
      repo: "https://github.com/isneru/rseat-vault"
    }
  }
]
