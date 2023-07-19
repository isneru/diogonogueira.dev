type TLinkOrSpan = {
  href?: string
  children: React.ReactNode
}

const LinkOrSpan = ({ href, children }: TLinkOrSpan) => {
  if (href) {
    return (
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="flex w-fit items-center gap-2 decoration-primary hover:underline">
        {children}
      </a>
    )
  }
  return <span className="flex items-center gap-2">{children}</span>
}

export default LinkOrSpan
