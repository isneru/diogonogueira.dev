import type { GetServerSideProps } from "next"
import { getSession, signIn } from "next-auth/react"

export default function Login() {
  function handleLogin() {
    signIn("discord", { callbackUrl: "/" })
  }

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <button onClick={handleLogin}>Sign In with Discord</button>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session) {
    return { props: {} }
  }

  return {
    props: {},
    redirect: {
      destination: "/",
      permanent: false
    }
  }
}
