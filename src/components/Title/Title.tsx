import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}
export const Title = (props: Props) => {
  return (
    <h1 {...props} className="mb-8 text-center text-7xl font-bold">
      {props.children}
    </h1>
  )
}
