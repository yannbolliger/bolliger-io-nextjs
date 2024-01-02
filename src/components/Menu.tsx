import { FunctionComponent, RefObject } from "react"
import styled from "styled-components"

import { baseUnits, breakpoints, colors } from "../styled"
import Container from "../styled/Container"
import Cross from "../styled/Cross"
import ScrollLink from "../styled/ScrollLink"
import SplitView from "../styled/SplitView"

export interface Section {
  id: string
  ref: RefObject<HTMLElement>
  title: string
}

interface Props {
  sections: Section[]
  visible?: boolean
  onClose?: () => void
}

const Menu: FunctionComponent<Props> = ({ visible, sections, onClose }) => (
  <AnimatedContainer visible={visible} borderBottom color={colors.primaryLight}>
    <SplitViewPadding>
      <LinkWrapper>
        {sections.map((section) => (
          <ScrollLinkWithMargin
            targetRef={section.ref}
            key={section.id}
            onClick={onClose}
          >
            {section.title}
          </ScrollLinkWithMargin>
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

  @media screen and (min-width: ${breakpoints.mobile}) {
    flex-flow: row nowrap;
  }
`

const ScrollLinkWithMargin = styled(ScrollLink)`
  margin: 0;
  margin-bottom: ${baseUnits(0.25)};

  @media screen and (min-width: ${breakpoints.mobile}) {
    margin: 0;
    margin-right: ${baseUnits(1)};
  }
`

export default Menu
