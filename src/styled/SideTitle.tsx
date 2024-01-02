import { PropsWithChildren } from "react"
import styled from "styled-components"

import { baseUnits, breakpoints } from "."
import { SmallTitle } from "./typography"
import SplitView from "./SplitView"

interface Props extends PropsWithChildren {
  title: string
}

const SideTitleSection: React.FC<Props> = ({ title, children }) => (
  <SplitView>
    <SideMargin>
      <SmallTitle>{title}</SmallTitle>
    </SideMargin>
    {children}
  </SplitView>
)

export const SideMargin = styled.div`
  flex-shrink: 0;
  width: 100%;

  @media screen and (min-width: ${breakpoints.mobile}) {
    width: ${baseUnits(2)};
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    width: ${baseUnits(4)};
  }
`

export default SideTitleSection
