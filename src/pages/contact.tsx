import { Title } from "components"
import Head from "next/head"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Hire me!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col items-center justify-center gap-7 py-20">
        <Title>Contact</Title>
        <p className="rounded bg-primary p-2 text-xl text-background">
          Get in touch with me anytime, through social media, e-mail, or phone
          number.
        </p>
        <div className="mt-20 flex w-full flex-col gap-20">
          <div>
            <h2 className="block text-5xl font-semibold text-textdim">Work</h2>
            <div className="container mt-2 flex rounded-md border border-text/20">
              <div className="flex w-full flex-col divide-y divide-text/20">
                <strong className="bg-primary/5 py-1 pl-5">Type</strong>
                <div className="flex flex-col pl-5">
                  <p className="py-1">Address</p>
                  <p className="py-1">E-mail</p>
                </div>
              </div>
              <div className="flex w-full flex-col divide-y divide-text/20">
                <strong className="bg-primary/5 py-1">Info</strong>
                <div className="flex flex-col">
                  <p className="py-1">Valongo, Porto, Portugal</p>
                  <a
                    className="py-1 hover:underline"
                    href="mailto:diogoclanogueira@gmail.com">
                    diogoclanogueira@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="block text-5xl font-semibold text-textdim">
              Social Media
            </h2>
            <div className="container mt-2 flex rounded-md border border-text/20">
              <div className="flex w-full flex-col divide-y divide-text/20">
                <strong className="bg-primary/5 py-1 pl-5">Platform</strong>
                <div className="flex flex-col pl-5">
                  <p className="py-1">LinkedIn</p>
                  <p className="py-1">Instagram</p>
                  <p className="py-1">Github</p>
                </div>
              </div>
              <div className="flex w-full flex-col divide-y divide-text/20">
                <strong className="bg-primary/5 py-1">Info</strong>
                <div className="flex flex-col">
                  <a
                    className="py-1 hover:underline"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/diogoclanogueira">
                    linkedin.com/in/diogoclanogueira
                  </a>
                  <a
                    className="py-1 hover:underline"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/diog6l">
                    instagram.com/diog6l
                  </a>
                  <a
                    className="py-1 hover:underline"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/isneru">
                    github.com/isneru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
