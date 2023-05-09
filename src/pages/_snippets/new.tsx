import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { CaretDownIcon, Cross1Icon } from "@radix-ui/react-icons"
import { Title } from "components"
import type { GetServerSideProps, NextPage } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import { api } from "utils/api"
import { langs } from "utils/md-supported-langs"

const NewSnippet: NextPage = () => {
  const [language, setLanguage] = useState({ name: "Language", value: "" })
  const [code, setCode] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [tag, setTag] = useState("")

  const snippetCreate = api.snippet.create.useMutation()

  const router = useRouter()

  async function handleCreateSnippet() {
    if (language.name === "Language") return
    const createdSnippet = await snippetCreate.mutateAsync({
      language: language.value,
      text: code,
      tags: [language.value, ...tags]
    })
    router.push(`/snippets/${createdSnippet.id}`)
  }

  function confirmTagSubmit() {
    if (tag === "") return
    setTags([...tags, tag.replace(" ", "-").toLocaleLowerCase()])
    setTag("")
  }

  function deleteTag(tag: string) {
    setTags(previousValue => previousValue.filter(item => item !== tag))
  }

  return (
    <>
      <Head>
        <title>Create New Snippet</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex h-screen w-full items-center justify-center">
        <div>
          <Title>
            Create a new <span className="text-primary">Snippet</span>
          </Title>
          <p className="text-xl leading-7 text-primary">
            Paste your code below and select the corresponding language.
          </p>
          <div className="mb-3 flex items-center gap-4">
            <textarea
              value={code}
              rows={1}
              onChange={e => setCode(e.currentTarget.value)}
              className="scroll w-4/5 resize-none rounded bg-background p-3 outline-none ring-2 ring-text"
            />
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex w-1/5 justify-between gap-3 rounded p-3 outline-none ring-2 ring-text hover:bg-black/5">
                {language.name}
                <CaretDownIcon width={22} height={22} />
              </DropdownMenu.Trigger>

              <DropdownMenu.Content
                sideOffset={8}
                className="scroll max-h-[30vh] min-w-[138px] overflow-y-scroll rounded bg-background shadow-lg shadow-text/20 ring-2 ring-text">
                <DropdownMenu.RadioGroup
                  className="divide-y divide-text/20"
                  value={language.value}
                  onValueChange={value => {
                    const newLang = langs.find(lang => lang.value === value)
                    setLanguage(newLang!)
                  }}>
                  {langs.map(lang => (
                    <DropdownMenu.RadioItem
                      key={lang.value}
                      value={lang.value}
                      className="cursor-pointer py-1 px-2 focus-visible:outline-none hover:bg-gradient-to-r hover:from-primary/20 hover:to-transparent">
                      {lang.name}
                    </DropdownMenu.RadioItem>
                  ))}
                </DropdownMenu.RadioGroup>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          <div className="flex flex-col">
            <label htmlFor="tag" className="text-xl leading-7 text-primary">
              Tags
            </label>
            <div className="flex w-full gap-2 rounded bg-background p-3 ring-2 ring-text">
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="flex min-w-fit items-center gap-1 rounded-full bg-primary px-3 py-px text-sm font-light text-white hover:bg-primary">
                  <span>{`#${tag}`}</span>
                  <button onClick={() => deleteTag(tag)}>
                    <Cross1Icon width={12} height={12} />
                  </button>
                </div>
              ))}
              <input
                value={tag}
                id="tag"
                onKeyUp={e => e.key === "Enter" && confirmTagSubmit()}
                onChange={e => setTag(e.currentTarget.value)}
                type="text"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
          <button
            className="mt-4 w-full rounded  bg-primary p-3 text-background"
            onClick={handleCreateSnippet}>
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default NewSnippet

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  console.log(session?.user)
  if (!session || session.user?.id !== "cldhha2iz0000ruasw0vywsme") {
    return {
      redirect: {
        destination: "/snippets",
        permanent: false
      }
    }
  }

  return { props: {} }
}
