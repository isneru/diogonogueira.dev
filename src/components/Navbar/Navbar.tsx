import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useRouter } from "next/router"

export const Navbar = () => {
  const { pathname } = useRouter()
  return (
    <nav className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between px-20 backdrop-blur-[2px]">
      <Link href="/" className="flex items-center justify-center gap-1">
        {pathname === "/" ? (
          <>
            <div className="flex h-8 w-8 animate-background items-center justify-center rounded-xl bg-primary sm:h-6 sm:w-6 sm:rounded-lg">
              <div className="h-3.5 w-0.5 rotate-[30deg] rounded-full bg-white sm:h-3 sm:w-0.5" />
            </div>
            <div className="hidden text-xl font-bold sm:block">
              <span className="animate-color">diogo</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-text bg-background sm:h-6 sm:w-6 sm:rounded-lg">
              <div className="h-3.5 w-0.5 rotate-[30deg] rounded-full bg-text sm:h-3 sm:w-0.5"></div>
            </div>
            <div className="hidden text-xl font-bold sm:block">
              <span>diogo</span>
            </div>
          </>
        )}
      </Link>
      <div className="flex items-center justify-center">
        <a href="https://github.com/isneru" target="_blank" rel="noreferrer">
          <GitHubLogoIcon role="img" width={20} height={20} />
        </a>
      </div>
    </nav>
  )
}
