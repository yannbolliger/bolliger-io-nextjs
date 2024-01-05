import { FunctionComponent } from "react"
import styled from "styled-components"

import { baseUnits, borderWidth, colors } from "."
import { commonIconStyle } from "./Burger"

interface Props {
  onClick?: () => void
  className?: string
}

const Cross: FunctionComponent<Props> = (props) => (
  <CrossWrapper {...props}>
    <CrossLine />
    <CrossLine up />
  </CrossWrapper>
)

const CrossWrapper = styled.div`
  display: block;
  position: relative;

  ${commonIconStyle}
  height: ${baseUnits(0.5)};
`

const CrossLine = styled.span<{ up?: boolean }>`
  width: 100%;
  position: absolute;
  top: 35%;
  transform: ${(props) => (props.up ? "rotate(-45deg)" : "rotate(45deg)")};

  height: ${borderWidth};
  background-color: ${colors.borderColor};
`

export default Cross
