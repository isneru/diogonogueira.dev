import { Snippet } from "@prisma/client"
import { useState } from "react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface Props {
  snippet: Snippet
}

const loadingSnippet: Snippet = {
  id: "Placeholder ID",
  createdAt: new Date(),
  text: "loading...",
  language: "loading..."
}

export const CodeBlock = ({ snippet }: Props) => {
  const [hasUserCopied, setHasUserCopied] = useState(false)

  function handleClipboardCopy() {
    setHasUserCopied(true)
    setTimeout(() => setHasUserCopied(false), 2000)
    navigator.clipboard.writeText(snippet.text)
  }
  return snippet ? (
    <div className="relative w-[80vw]">
      <SyntaxHighlighter className="scroll w-full rounded" language={snippet.language} style={oneLight}>
        {snippet.text as string}
      </SyntaxHighlighter>
      <button className="absolute right-2 top-4 text-primary hover:text-primaryhover" onClick={handleClipboardCopy}>
        {hasUserCopied ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7">
            <path
              fill-rule="evenodd"
              d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zm10.857 5.691a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 00-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7">
            <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
            <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
          </svg>
        )}
      </button>
    </div>
  ) : (
    <div className="relative">
      <SyntaxHighlighter className="scroll max-w-screen-md rounded" language={loadingSnippet.language} style={oneLight}>
        {loadingSnippet.text as string}
      </SyntaxHighlighter>
      <button className="absolute right-3 top-3 text-primary hover:text-primaryhover">
        {hasUserCopied ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7">
            <path
              fill-rule="evenodd"
              d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zm10.857 5.691a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 00-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7">
            <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
            <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
          </svg>
        )}
      </button>
    </div>
  )
}
