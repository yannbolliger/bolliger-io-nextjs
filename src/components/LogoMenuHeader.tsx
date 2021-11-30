import React, { useState } from "react"
import styled from "styled-components"

import { baseUnits, breakpoints } from "../styled"
import Container from "../styled/Container"
import Burger from "../styled/Burger"
import SplitView from "../styled/SplitView"
import Menu, { Section } from "./Menu"

interface Props {
  sections: [Section]
}

const LogoMenuHeader: React.FC<Props> = ({ sections }) => {
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
          <Logo src="/BST-Logo.svg" />

          {!isMenuVisible && <Burger onClick={() => setMenuVisible(true)} />}
        </SplitViewTopPadding>
      </Container>
    </>
  )
}

const SplitViewTopPadding = styled(SplitView)`
  flex-wrap: nowrap;
  padding-top: 0;
  justify-content: space-between;

  @media screen and (min-width: ${breakpoints.mobile}) {
    padding-top: ${baseUnits(0.5)};
  }
`

const Logo = styled.img`
  width: ${baseUnits(6.28)};
  max-width: calc(100% - ${baseUnits(1)});
`

export default LogoMenuHeader
