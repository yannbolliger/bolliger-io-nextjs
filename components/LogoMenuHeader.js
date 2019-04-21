import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { baseUnits, breakpoints } from "../styled"
import Container from "../styled/Container"
import Burger from "../styled/Burger"
import SplitView from "../styled/SplitView"
import Menu from "./Menu"

const LogoMenuHeader = ({ titles }) => {
  const [isMenuVisible, setMenuVisible] = useState(false)

  return (
    <>
      {isMenuVisible && (
        <Menu titles={titles} onClose={() => setMenuVisible(false)} />
      )}

      <Container>
        <SplitViewTopPadding>
          <Logo src="static/BST-Logo.svg" />

          {titles && !isMenuVisible && (
            <Burger onClick={() => setMenuVisible(true)} />
          )}
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

LogoMenuHeader.propTypes = {
  titles: PropTypes.array.isRequired
}

export default LogoMenuHeader
