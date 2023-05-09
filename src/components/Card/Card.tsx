import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { TProject } from "utils/projects"

interface CardProps {
  project: TProject
  id: number
  handleClick: (project: TProject, index: number) => void
}

export const Card = ({ project, id, handleClick }: CardProps) => {
  return (
    <div className="flex max-w-sm flex-col rounded-lg border border-primary/40 bg-background shadow">
      <img
        onClick={() => handleClick(project, id)}
        className="f-hull max-h-40 w-full cursor-pointer rounded-t-lg object-cover"
        src={project.img.path}
        alt={project.img.alt}
      />
      <div className="flex h-full flex-col p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {project.name}
        </h5>
        <p className="mb-3 font-normal text-primary">{project.description}</p>
        <div className="mt-auto flex w-full items-center gap-3">
          <a
            href={project.links.repo}
            rel="noreferrer"
            target="_blank"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary hover:bg-primary/80">
            Repository
            <ExternalLinkIcon aria-hidden="true" className="h-4 w-4" />
          </a>
          {project.links.demo && (
            <a
              href={project.links.demo}
              rel="noreferrer"
              target="_blank"
              className="inline-flex w-1/2 items-center justify-center gap-2 rounded-lg bg-neutral-200 px-3 py-2 text-center text-sm font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-200 hover:bg-neutral-300">
              Demo
              <ExternalLinkIcon aria-hidden="true" className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
