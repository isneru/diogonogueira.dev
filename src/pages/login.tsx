import type { GetServerSideProps, NextPage } from "next"
import { getSession, signIn } from "next-auth/react"

const Login: NextPage = () => {
  function handleLogin() {
    signIn("discord", { callbackUrl: "/" })
  }

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <button onClick={handleLogin}>Sign In with Discord</button>
    </main>
  )
}

export default Login

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
