import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Card, ImageModal } from "components"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { projects, TProject } from "utils/projects"

export default function Home() {
  const [clickedImg, setClickedImg] = useState<string>()
  const [currentIndex, setCurrentIndex] = useState<number>()

  function handleClick(project: TProject, index: number) {
    setCurrentIndex(index)
    setClickedImg(project.img.path)
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="relative flex h-screen w-full items-center justify-center">
        <div>
          <h1 className="mb-6 flex flex-col text-7xl font-bold">
            <span>
              I'm <span className="text-primary">Diogo</span>
            </span>
            <span>Nogueira,</span>
          </h1>
          <h2 className="flex flex-col text-xl leading-7 text-textdim">
            <span>
              a{" "}
              <strong className="font-bold text-text">
                front-end developer
              </strong>{" "}
              who chose
            </span>
            <span>to hard code his life.</span>
          </h2>
          <div className="mt-2 flex flex-col gap-2">
            <Link
              className="inline-flex w-full items-center justify-center rounded border border-text/50 p-2 transition-colors hover:border-primary/50 hover:bg-text/5 hover:text-primary"
              href="/curriculum.pdf">
              Curriculum
            </Link>
            {/* <div className="flex items-center divide-x-[1px] divide-text/50">
              <h3 className="pr-2 text-lg leading-7 text-textdim">
                Tech Stack
              </h3>
              <div className="flex items-center gap-2 pl-2">
                <JavascripIcon />
                <TypescriptIcon />
                <ReactIcon />
                <TailwindIcon />
              </div>
            </div> */}
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <ChevronDownIcon width={22} height={22} className="animate-bounce" />
        </div>
      </div>
      <div className="flex flex-col items-center pb-10 pt-16">
        {/* ^ remove pb-10 in the future ^ */}
        <h3 className="mb-8 text-5xl font-bold">Projects</h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <Card
              id={idx}
              handleClick={handleClick}
              key={idx}
              project={project}
            />
          ))}
          {clickedImg && (
            <ImageModal
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              setClickedImg={setClickedImg}
              clickedImg={clickedImg}
            />
          )}
        </div>
      </div>
      {/* next section below */}
      <div className="flex h-screen w-full flex-col items-center pt-16"></div>
    </>
  )
}
