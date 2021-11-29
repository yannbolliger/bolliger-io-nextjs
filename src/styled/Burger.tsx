import styled from "styled-components"

import { colors, borderWidth, baseUnits } from "."

const Burger: React.FC<{ onClick: () => void }> = ({ onClick }) => (
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

  cursor: pointer;
`

const BurgerLine = styled.span`
  width: 100%;
  height: ${borderWidth};
  background-color: ${colors.borderColor};
`

export default Burger
