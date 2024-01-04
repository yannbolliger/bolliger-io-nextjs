import { FunctionComponent, useState } from "react"
import styled from "styled-components"

import { baseUnits, breakpoints } from "../styled"
import Burger from "../styled/Burger"
import Container from "../styled/Container"
import Logo from "../styled/Logo"
import SplitView from "../styled/SplitView"
import Menu, { Section } from "./Menu"

interface Props {
  sections: Section[]
  logoWords?: [string, string]
}

const LogoMenuHeader: FunctionComponent<Props> = ({ sections, logoWords }) => {
  const [isMenuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <Menu
        visible={isMenuVisible}
        sections={sections}
        onClose={() => setMenuVisible(false)}
      />
      <Container>
        <SplitViewTopPadding>
          <Logo words={logoWords} />

          {!isMenuVisible && <Burger onClick={() => setMenuVisible(true)} />}
        </SplitViewTopPadding>
      </Container>
    </>
  )
}

const SplitViewTopPadding = styled(SplitView)`
  flex-wrap: nowrap;
  justify-content: space-between;

  @media screen and (min-width: ${breakpoints.mobile}) {
    padding-top: ${baseUnits(0.5)};
  }
`

export default LogoMenuHeader
