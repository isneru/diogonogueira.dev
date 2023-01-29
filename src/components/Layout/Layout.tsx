import { Navbar } from "../Navbar"

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
