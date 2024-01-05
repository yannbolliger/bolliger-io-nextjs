import { FunctionComponent, ReactNode } from "react"
import Link from "next/link"
import styled from "styled-components"

import { baseUnits, breakpoints, colors } from "../styled"
import Button from "../styled/Button"
import Container from "../styled/Container"
import Cross from "../styled/Cross"
import SplitView from "../styled/SplitView"

export interface Section {
  id: string
  title: ReactNode
}

interface Href {
  href: string
  title: ReactNode
}

export interface MenuProps {
  entries: (Section | Href)[]
  visible?: boolean
  onClose?: () => void
}

const Menu: FunctionComponent<MenuProps> = ({ visible, entries, onClose }) => (
  <AnimatedContainer visible={visible} borderBottom color={colors.primaryLight}>
    <SplitViewPadding>
      <LinkWrapper>
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

      <Cross onClick={onClose} />
    </SplitViewPadding>
  </AnimatedContainer>
)

const AnimatedContainer = styled(Container)<{ visible?: boolean }>`
  display: ${(props) => (props.visible ? "block" : "none")};
`

const SplitViewPadding = styled(SplitView)`
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;

  @media screen and (min-width: ${breakpoints.mobile}) {
    padding: ${baseUnits(0.5)} 0;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: ${baseUnits(0.5)};
  column-gap: ${baseUnits(1)};

  @media screen and (min-width: ${breakpoints.mobile}) {
    flex-flow: row wrap;
  }
`

export default Menu
