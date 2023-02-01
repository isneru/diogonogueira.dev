import { Snippet } from "@prisma/client"
import { CheckIcon, CopyIcon, Link1Icon } from "@radix-ui/react-icons"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface Props {
  snippet: Snippet | null | undefined
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
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_PROJECT_URL}/snippets/${snippetId}`)
  }

  return snippet ? (
    <div className="group relative w-[80vw] md:w-[60vw]">
      <SyntaxHighlighter wrapLongLines className="scroll w-full rounded" language={snippet.language} style={oneLight}>
        {snippet.text}
      </SyntaxHighlighter>
      <div className="absolute right-2 top-4 hidden items-center gap-1 group-hover:flex">
        <button className="text-primary hover:text-primaryhover" onClick={() => handleLinkCopy(snippet.id)}>
          {hasUserCopiedLink ? <CheckIcon width={22} height={22} /> : <Link1Icon width={22} height={22} />}
        </button>
        <button className="text-primary hover:text-primaryhover" onClick={() => handleCodeCopy(snippet.text)}>
          {hasUserCopiedCode ? <CheckIcon width={22} height={22} /> : <CopyIcon width={22} height={22} />}
        </button>
      </div>
    </div>
  ) : (
    <div className="group relative w-[80vw] animate-pulse md:w-[60vw]">
      <SyntaxHighlighter wrapLongLines className="scroll w-full rounded" language="md" style={oneLight}>
        Loading...
      </SyntaxHighlighter>
    </div>
  )
}
