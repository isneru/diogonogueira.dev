import { GetServerSideProps } from "next"
import Head from "next/head"

export default function Curriculum() {
  return (
    <>
      <Head>
        <title>Curriculum</title>
        <meta name="description" content="Curriculum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    redirect: {
      destination: "/curriculum.pdf",
      permanent: false
    }
  }
}
