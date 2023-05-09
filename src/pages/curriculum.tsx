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

  const internships = [
    {
      where: "Computer repair & service",
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
      where: "ITSector",
      when: "04/2021 - 07/2021",
      location: "Porto, Portugal",
      tasks: [
        "Linked computers to certain networks and peripheral equipment, including printers and scanners",
        "Patched software and installed new versions to eliminate security vulnerabilities and protect data",
        "Helped streamline repair processes and update procedures for support action consistency",
        "Configured hardware, devices and software to set up workstations for employees"
      ]
    }
  ]

  const education = [
    {
      title: "College",
      where: "Escola Superior de Tecnologia e Gestão, Felgueiras",
      before: "Computer Security and Computer Networks",
      after: "10/2022 - Present"
    },
    {
      title: "High School",
      where: "Instituto Profissional de Tecnologias Avançadas, Porto",
      before: "Hardware and Software Management",
      after: "09/2018 - 07/2021"
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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="prose-xl prose-invert mx-auto mt-20 px-8 lg:px-0">
        <h1>Diogo Nogueira</h1>
        <h2 className="text-primary">
          Cybersecurity Student & Self-taught Front-end Developer
        </h2>
        <div className="grid gap-3 text-center md:grid-cols-2 md:grid-rows-3">
          {info.map(({ icon, text, href }, idx) => (
            <LinkOrSpan key={idx} href={href}>
              {icon} <span>{text}</span>
            </LinkOrSpan>
          ))}
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          <div>
            <h2 className="text-primary">Education</h2>
            {education.map((edu, idx) => (
              <div key={idx}>
                <h3>{edu.title}</h3>
                <span>{edu.where}</span>
                <LineSpans before={edu.before} after={edu.after} />
              </div>
            ))}
            <h2 className="text-primary">Internships</h2>
            {internships.map((intern, idx) => (
              <div key={idx}>
                <span>{intern.where}</span>
                <LineSpans before={intern.location} after={intern.when} />
                <ul className="list-disc">
                  {intern.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-primary">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded bg-primary px-2 leading-relaxed text-background">
                  {skill}
                </span>
              ))}
            </div>
            <h2 className="text-primary">Languages</h2>
            <LineSpans before={"Portuguese"} after={"Native"} />
            <LineSpans
              before={"English"}
              after={"Professional Working Proficiency"}
            />
            <h2 className="text-primary">Certificates</h2>
            <span>The Web Developer Bootcamp 2022</span>
            <h2 className="text-primary">Achievements</h2>
            <LineSpans
              before={"Acquired drivers license"}
              after={"07/2022 - 01/2023"}
            />
            <h2 className="text-primary">Interests</h2>
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

const LineSpans = ({ before, after }: { before: string; after: string }) => {
  return (
    <span className="relative flex w-full items-center justify-between">
      <span className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-[url('/pattern.png')]" />
      <span className="bg-background pr-2">{before}</span>
      <span className="bg-background pl-2">{after}</span>
    </span>
  )
}

type TLinkOrSpan = {
  href?: string
  children: React.ReactNode
}
const LinkOrSpan = ({ href, children }: TLinkOrSpan) => {
  if (href) {
    return (
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="flex w-fit items-center gap-2 decoration-primary hover:underline">
        {children}
      </a>
    )
  }
  return <span className="flex items-center gap-2">{children}</span>
}
