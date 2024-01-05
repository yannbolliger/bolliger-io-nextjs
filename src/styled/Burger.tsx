import { FunctionComponent } from "react"
import styled, { css } from "styled-components"

import { baseUnits, borderWidth, colors } from "."

const Burger: FunctionComponent<{ onClick: () => void }> = ({ onClick }) => (
  <BurgerWrapper onClick={onClick}>
    <BurgerLine />
    <BurgerLine />
    <BurgerLine />
  </BurgerWrapper>
)

export const verticalAlignMargin = baseUnits(0.2)

export const commonIconStyle = css`
  margin-top: ${verticalAlignMargin};
  width: ${baseUnits(0.5)};
  flex-shrink: 0;
  margin-left: ${baseUnits(0.5)};
  cursor: pointer;
`

const BurgerWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  ${commonIconStyle}
  height: 1rem;
`

const BurgerLine = styled.span`
  width: 100%;
  height: ${borderWidth};
  background-color: ${colors.borderColor};
`

export default Burger
