import { FunctionComponent, PropsWithChildren, ReactNode } from "react"
import styled from "styled-components"

import { baseUnits, breakpoints } from "."
import SplitView from "./SplitView"
import { SmallTitle } from "./typography"

interface Props extends PropsWithChildren {
  title: ReactNode
}

const SideTitleSection: FunctionComponent<Props> = ({ title, children }) => (
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
    min-width: ${baseUnits(2)};
  }
  @media screen and (min-width: ${breakpoints.medium}) {
    width: ${baseUnits(3)};
    min-width: ${baseUnits(3)};
  }
  @media screen and (min-width: ${breakpoints.large}) {
    width: ${baseUnits(4)};
    min-width: ${baseUnits(4)};
  }
`

export default SideTitleSection
