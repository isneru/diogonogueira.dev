import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { SetStateAction } from "react"
import { projects } from "utils/projects"

interface Props {
  setClickedImg: (value: SetStateAction<string | undefined>) => void
  clickedImg: string
  setCurrentIndex: (value: SetStateAction<number | undefined>) => void
  currentIndex: number | undefined
}

export const ImageModal = ({
  setCurrentIndex,
  setClickedImg,
  clickedImg,
  currentIndex
}: Props) => {
  function handleSwipeRight() {
    if (currentIndex === undefined) return
    const totalLength = projects.length
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0)
      const newImg = projects[0]?.img.path
      setClickedImg(newImg)
      return
    }
    const newIndex = currentIndex + 1
    const newImg = projects[newIndex]?.img.path
    setClickedImg(newImg)
    setCurrentIndex(newIndex)
  }

  function handleSwipeLeft() {
    if (currentIndex === undefined) return
    const totalLength = projects.length
    if (currentIndex - 1 < 0) {
      setCurrentIndex(totalLength - 1)
      const newImg = projects[totalLength - 1]?.img.path
      setClickedImg(newImg)
      return
    }
    const newIndex = currentIndex - 1
    const newImg = projects[newIndex]?.img.path
    setClickedImg(newImg)
    setCurrentIndex(newIndex)
  }
  return (
    <div className="fixed top-0 left-0 z-[9999] flex h-[100vh] w-[100vw] items-center justify-center bg-black/75">
      <div className="relative flex h-[80vh] w-[80vw] items-center justify-center gap-2">
        <button
          className="absolute top-0 left-0 h-full items-center justify-center rounded bg-primary px-3 text-background outline-none hover:bg-primaryhover lg:static lg:flex lg:px-6"
          onClick={handleSwipeLeft}>
          <ChevronLeftIcon width={20} height={20} />
        </button>
        <img
          src={clickedImg}
          onClick={() => setClickedImg(undefined)}
          className="h-full w-full cursor-pointer rounded-md object-cover"
          alt="Focused image"
        />
        <button
          className="absolute top-0 right-0 h-full items-center justify-center rounded bg-primary px-3 text-background outline-none hover:bg-primaryhover lg:static lg:flex lg:px-6"
          onClick={handleSwipeRight}>
          <ChevronRightIcon width={20} height={20} />
        </button>
        <button
          className="absolute -top-10 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-md bg-primary px-2 py-1 text-background hover:ring-2 hover:ring-primaryhover"
          onClick={() => setClickedImg(undefined)}>
          Close Preview
        </button>
      </div>
    </div>
  )
}
