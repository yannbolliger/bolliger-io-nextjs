import { FunctionComponent } from "react"
import styled from "styled-components"

import { baseUnits, borderWidth, colors } from "."

const Burger: FunctionComponent<{ onClick: () => void }> = ({ onClick }) => (
  <BurgerWrapper onClick={onClick}>
    <BurgerLine />
    <BurgerLine />
    <BurgerLine />
  </BurgerWrapper>
)

const BurgerWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-self: center;

  width: ${baseUnits(0.5)};
  height: 1rem;
  flex-shrink: 0;
  margin-left: ${baseUnits(0.5)};

  cursor: pointer;
`

const BurgerLine = styled.span`
  width: 100%;
  height: ${borderWidth};
  background-color: ${colors.borderColor};
`

export default Burger
