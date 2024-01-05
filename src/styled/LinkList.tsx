import { FunctionComponent, ReactNode } from "react"
import Link from "next/link"
import styled from "styled-components"

import { baseUnits, breakpoints } from "."
import Button from "./Button"

export interface Section {
  id: string
  title: ReactNode
}

interface Href {
  href: string
  title: ReactNode
}

export interface LinkListProps {
  entries?: (Section | Href)[]
  onClose?: () => void
  className?: string
}

const LinkList: FunctionComponent<LinkListProps> = ({
  entries = [],
  className,
  onClose,
}) => (
  <LinkWrapper className={className}>
    {entries
      .map((e) =>
        "id" in e
          ? { href: `#${e.id}`, ...e }
          : { ...e, title: <Button as="span">{e.title}</Button> }
      )
      .map(({ href, title }) => (
        <Link key={href} href={href} onClick={onClose}>
          {title}
        </Link>
      ))}
  </LinkWrapper>
)

const LinkWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: ${baseUnits(0.5)};
  column-gap: ${baseUnits(1)};

  @media screen and (min-width: ${breakpoints.mobile}) {
    flex-flow: row wrap;
  }
`

export default LinkList
