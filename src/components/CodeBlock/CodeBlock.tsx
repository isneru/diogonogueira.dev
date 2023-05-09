import { Tag } from "@prisma/client"
import * as HoverCard from "@radix-ui/react-hover-card"
import { CheckIcon, CopyIcon, Link1Icon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface Props {
  snippet:
    | {
        id: string
        createdAt: Date
        text: string
        language: string
        tags: Tag[]
      }
    | null
    | undefined
}

export const CodeBlock = ({ snippet }: Props) => {
  const [hasUserCopiedCode, setHasUserCopiedCode] = useState(false)
  const [hasUserCopiedLink, setHasUserCopiedLink] = useState(false)

  function handleCodeCopy(snippetText: string) {
    setHasUserCopiedCode(true)
    setTimeout(() => setHasUserCopiedCode(false), 2000)
    navigator.clipboard.writeText(snippetText)
  }
  function handleLinkCopy(snippetId: string) {
    setHasUserCopiedLink(true)
    setTimeout(() => setHasUserCopiedLink(false), 2000)
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_PROJECT_URL}/snippets/${snippetId}`
    )
  }

  return snippet ? (
    <div className="mb-4 flex flex-col gap-1 border-b border-text/10 pb-4">
      <div className="flex flex-col justify-center gap-2 pl-1">
        <span className="text-2xl font-semibold">
          {snippet.createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </span>
        <div className="flex items-center gap-2">
          {snippet.tags.map(tag => (
            <Link
              href={`/snippets/tags/${tag.text}`}
              key={tag.text}
              className="flex items-center justify-center rounded-full bg-primary px-3 py-px text-sm font-light text-white hover:bg-primary">
              {`#${tag.text}`}
            </Link>
          ))}
        </div>
      </div>
      <div className="group relative w-[80vw] md:w-[60vw]">
        <SyntaxHighlighter
          wrapLongLines
          className="scroll w-full rounded"
          language={snippet.language}
          style={oneLight}>
          {snippet.text}
        </SyntaxHighlighter>
        <div className="absolute right-2 top-4 hidden items-center gap-1 group-hover:flex">
          <HoverCard.Root openDelay={0} closeDelay={0}>
            <HoverCard.Trigger asChild>
              <button
                className="relative text-primary hover:text-primary"
                onClick={() => handleLinkCopy(snippet.id)}>
                {hasUserCopiedLink ? (
                  <CheckIcon width={22} height={22} />
                ) : (
                  <Link1Icon width={22} height={22} />
                )}
              </button>
            </HoverCard.Trigger>
            <HoverCard.Content asChild>
              <>
                <span className="rounded bg-background px-2 py-1 text-primary">
                  {hasUserCopiedLink ? "Copied!" : "Copy Link"}
                </span>
                <HoverCard.Arrow className="fill-background" />
              </>
            </HoverCard.Content>
          </HoverCard.Root>
          <HoverCard.Root openDelay={0} closeDelay={0}>
            <HoverCard.Trigger asChild>
              <button
                className="group text-primary hover:text-primary"
                onClick={() => handleCodeCopy(snippet.text)}>
                {hasUserCopiedCode ? (
                  <CheckIcon width={22} height={22} />
                ) : (
                  <CopyIcon width={22} height={22} />
                )}
              </button>
            </HoverCard.Trigger>
            <HoverCard.Content asChild>
              <>
                <span className="rounded bg-background px-2 py-1 text-primary">
                  {hasUserCopiedCode ? "Copied!" : "Copy Snippet"}
                </span>
                <HoverCard.Arrow className="fill-background" />
              </>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
      </div>
    </div>
  ) : (
    <div className="group relative w-[80vw] animate-pulse md:w-[60vw]">
      <SyntaxHighlighter
        wrapLongLines
        className="scroll w-full rounded"
        language="md"
        style={oneLight}>
        Loading...
      </SyntaxHighlighter>
    </div>
  )
}
