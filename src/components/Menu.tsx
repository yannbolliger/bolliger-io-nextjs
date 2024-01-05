import { FunctionComponent } from "react"
import styled from "styled-components"

import { baseUnits, breakpoints, colors } from "../styled"
import { verticalAlignMargin } from "../styled/Burger"
import Container from "../styled/Container"
import Cross from "../styled/Cross"
import LinkList, { LinkListProps } from "../styled/LinkList"
import SplitView from "../styled/SplitView"

export interface MenuProps extends LinkListProps {
  visible?: boolean
}

const Menu: FunctionComponent<MenuProps> = ({ visible, onClose, entries }) => (
  <AnimatedContainer visible={visible} borderBottom color={colors.primaryLight}>
    <SplitViewPadding>
      <LinkListAligned {...{ onClose, entries }} />
      <Cross onClick={onClose} />
    </SplitViewPadding>
  </AnimatedContainer>
)

const AnimatedContainer = styled(Container)<{ visible?: boolean }>`
  display: ${(props) => (props.visible ? "block" : "none")};
`

const SplitViewPadding = styled(SplitView)`
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;

  @media screen and (min-width: ${breakpoints.mobile}) {
    padding: ${baseUnits(0.5)} 0;
  }
`

const LinkListAligned = styled(LinkList)`
  padding-top: ${verticalAlignMargin};
`

export default Menu
