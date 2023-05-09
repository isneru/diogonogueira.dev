import { CodeBlock, Title } from "components"
import Head from "next/head"
import { useRouter } from "next/router"
import { api } from "utils/api"

export default function Tag() {
  const router = useRouter()
  const tag = router.query.tag as string
  const { data: snippets } = api.snippet.getByTag.useQuery({ tag })
  return (
    <>
      <Head>
        <title>Snippets | #{tag}</title>
        <meta name="description" content="Tag" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex flex-col items-center justify-center py-20">
        <Title>
          {"All "}
          <span className="text-primary">
            {tag && tag.charAt(0).toUpperCase() + tag.slice(1)}
          </span>
          {" Snippets"}
        </Title>
        <div className="flex flex-col gap-2">
          {snippets
            ? snippets.map((snippet, idx) => (
                <CodeBlock key={idx} snippet={snippet} />
              ))
            : [...new Array(3)].map((_, idx) => (
                <CodeBlock key={idx} snippet={undefined} />
              ))}
        </div>
      </div>
    </>
  )
}
