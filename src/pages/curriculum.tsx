import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MobileIcon,
  SewingPinFilledIcon
} from "@radix-ui/react-icons"
import Head from "next/head"

export default function Curriculum() {
  const info = [
    {
      icon: <EnvelopeClosedIcon />,
      text: "diogoclanogueira@gmail.com"
    },
    {
      icon: <MobileIcon />,
      text: "(+351) 916 977 715"
    },
    {
      icon: <SewingPinFilledIcon />,
      text: "Porto, Portugal"
    },
    {
      icon: <LinkedInLogoIcon />,
      text: "linkedin.com/in/diogoclanogueira",
      href: "https://linkedin.com/in/diogoclanogueira"
    },
    {
      icon: <GitHubLogoIcon />,
      text: "github.com/isneru",
      href: "https://github.com/isneru"
    }
  ]

  const education = [
    {
      title: "College",
      where: "Escola Superior de Tecnologia e Gestão",
      when: "10/2022 - Present",
      location: "Felgueiras",
      tasks: [
        "Currently finishing my first year of the degree in Computer Security and Computer Networks",
        "Studying Web Development in my free time"
      ]
    },
    {
      title: "Internship",
      where: "Erasmus+",
      when: "01/2022 - 05/2022",
      location: "Rethymno, Greece",
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
      title: "Internship",
      where: "ITSector",
      when: "04/2021 - 07/2021",
      location: "Porto, Portugal",
      tasks: [
        "Linked computers to certain networks and peripheral equipment, including printers and scanners",
        "Patched software and installed new versions to eliminate security vulnerabilities and protect data",
        "Helped streamline repair processes and update procedures for support action consistency",
        "Configured hardware, devices and software to set up workstations for employees"
      ]
    },
    {
      title: "High School",
      where: "Instituto Profissional de Tecnologias Avançadas",
      when: "09/2018 - 07/2021",
      location: "Porto, Portugal",
      tasks: [
        "Completed the 12th grade in the area of Hardware and Software Management"
      ]
    }
  ]

  const skills = [
    "HTML",
    "CSS",
    "PHP",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "React",
    "Next.js",
    "Prisma",
    "TailwindCSS",
    "Git",
    "GitHub",
    "VSCode",
    "Figma",
    "Adobe Photoshop",
    "Windows",
    "Linux"
  ]

  return (
    <>
      <Head>
        <title>Curriculum</title>
        <meta name="description" content="Curriculum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="prose-xl prose-invert mx-auto mt-20 px-8 lg:px-0">
        <h1>Diogo Nogueira</h1>
        <h2>Cybersecurity Student & Self-taught Front-end Developer</h2>
        <div className="grid gap-3 text-center md:grid-cols-2 md:grid-rows-3">
          {info.map(({ icon, text, href }, idx) =>
            href ? (
              <a
                key={idx}
                href={href}
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2">
                {icon} <span>{text}</span>
              </a>
            ) : (
              <span key={idx} className="flex items-center gap-2">
                {icon} <span>{text}</span>
              </span>
            )
          )}
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          <div>
            <h2>Education</h2>
            {education.map((section, idx) => (
              <div key={idx}>
                <h3>{section.title}</h3>
                <p>{section.where}</p>
                <span className="relative flex w-full items-center justify-between">
                  <span className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-[url('/pattern.png')]" />
                  <span className="bg-background pr-2">{section.when}</span>
                  <span className="bg-background pl-2">{section.location}</span>
                </span>
                <ul className="list-disc">
                  {section.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h2>Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded bg-primary px-2 leading-relaxed text-background">
                  {skill}
                </span>
              ))}
            </div>
            <h2>Languages</h2>
            <span className="relative flex w-full items-center justify-between">
              <span className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-[url('/pattern.png')]" />
              <span className="bg-background pr-2">Portuguese</span>
              <span className="bg-background pl-2">Native</span>
            </span>
            <span className="relative flex w-full items-center justify-between">
              <span className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-[url('/pattern.png')]" />
              <span className="bg-background pr-2">English</span>
              <span className="bg-background pl-2">
                Professional Working Proficiency
              </span>
            </span>
            <h2>Certificates</h2>
            <span className="relative flex w-full items-center justify-between">
              <span>The Web Developer Bootcamp 2022</span>
            </span>
            <h2>Achievements</h2>
            <span className="relative flex w-full items-center justify-between">
              <span className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-[url('/pattern.png')]" />
              <span className="bg-background pr-2">
                Acquired drivers license
              </span>
              <span className="bg-background pl-2">07/2022 - 01/2023</span>
            </span>
            <h2>Interests</h2>
            <div className="flex flex-wrap gap-3">
              <span className="rounded px-2 leading-relaxed ring-2 ring-primary/50">
                Driving
              </span>
              <span className="rounded px-2 leading-relaxed ring-2 ring-primary/50">
                Coding
              </span>
              <span className="rounded px-2 leading-relaxed ring-2 ring-primary/50">
                Coffee
              </span>
              <span className="rounded px-2 leading-relaxed ring-2 ring-primary/50">
                Working out
              </span>
            </div>
            <div className="h-32 lg:hidden" />
          </div>
        </div>
      </div>
    </>
  )
}
