const name = "Diogo Nogueira"
const about = "Cybersecurity Student & Self-taught Front-end Developer"

const info = [
  {
    text: "diogoclanogueira@gmail.com"
  },
  {
    text: "(+351) 916 977 715"
  },
  {
    text: "Porto, Portugal"
  },
  {
    text: "linkedin.com/in/diogoclanogueira",
    href: "https://linkedin.com/in/diogoclanogueira"
  },
  {
    text: "github.com/isneru",
    href: "https://github.com/isneru"
  },
  {
    text: "twitter.com/nerudevs",
    href: "https://twitter.com/nerudevs"
  }
]

const career = [
  {
    title: "Current Position",
    description: "Employee at CeX - Computer Entertainment Exchange (PT)",
    start: "06/2023",
    end: "Present"
  }
]

const education = [
  {
    title: "College - Escola Superior de Tecnologia e Gestão",
    description: "Computer Security and Computer Networks",
    start: "10/2022",
    end: "Present"
  },
  {
    title: "High School - Instituto Profissional de Tecnologias Avançadas",
    description: "Hardware and Software Management",
    start: "09/2018",
    end: "07/2021"
  }
]

const internships = [
  {
    title: "Computer repair & service, Rethymno, Greece",
    start: "05/2022",
    end: "01/2022",
    tasks: [
      "Assistance in computers' formats and operational systems upgrades",
      "Computers installation and set up in a school environment",
      "Wi-Fi network installations",
      "Camera services and repairs",
      "Computer services and repairs",
      "General assistance to my supervisor",
      "Acquisition of knowledge in the field of IT and electronics"
    ]
  },
  {
    title: "ITSector, Porto, Portugal",
    start: "07/2021",
    end: "04/2021",
    tasks: [
      "Linked computers to certain networks and peripheral equipment, including printers and scanners",
      "Patched software and installed new versions to eliminate security vulnerabilities and protect data",
      "Helped streamline repair processes and update procedures for support action consistency",
      "Configured hardware, devices and software to set up workstations for employees"
    ]
  }
]

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "React",
  "TypeScript",
  "Next.js",
  "MongoDB",
  "SQL",
  "Prisma",
  "TailwindCSS",
  "Git",
  "GitHub",
  "Svelte",
  "SvelteKit",
  "Astro",
  "C",
  "PHP",
  "Java",
  "VSCode",
  "Figma",
  "Adobe Photoshop"
]

const languages = [
  {
    title: "Portuguese",
    level: "Native"
  },
  {
    title: "English",
    level: "Professional Working Proficiency"
  }
]

const certificates = ["The Web Developer Bootcamp 2022"]

const achievements = [
  {
    title: "Acquired drivers license",
    date: "01/2023"
  }
]

const hobbies = ["Driving", "Gaming", "Coffee", "Running"]

export default function useMe() {
  return {
    name,
    about,
    info,
    career,
    education,
    internships,
    skills,
    languages,
    certificates,
    achievements,
    hobbies
  }
}
