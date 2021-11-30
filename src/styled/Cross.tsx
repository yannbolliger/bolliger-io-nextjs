import React from "react"
import styled from "styled-components"

import { colors, borderWidth, baseUnits } from "."

const Cross: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <CrossWrapper onClick={onClick}>
    <CrossLine />
    <CrossLine up />
  </CrossWrapper>
)

const CrossWrapper = styled.div`
  display: block;
  position: relative;
  align-self: center;

  width: ${baseUnits(0.5)};
  height: ${baseUnits(0.5)};

  cursor: pointer;
`

const CrossLine = styled.span<{ up?: boolean }>`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: ${(props) => (props.up ? "rotate(-45deg)" : "rotate(45deg)")};

  height: ${borderWidth};
  background-color: ${colors.borderColor};
`

export default Cross
