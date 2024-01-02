import { FunctionComponent, RefObject } from "react"
import styled from "styled-components"

import { baseUnits, colors } from "../styled"
import Container from "../styled/Container"
import Cross from "../styled/Cross"
import { SideMargin } from "../styled/SideTitle"
import SplitView from "../styled/SplitView"
import MailForm from "./MailForm"

interface Props {
  onCloseClick: () => void
  scrollRef: RefObject<HTMLDivElement>
}

const MailFormSection: FunctionComponent<Props> = ({
  onCloseClick,
  scrollRef,
}) => (
  <Container ref={scrollRef} color={colors.primaryLight} borderTop>
    <SplitView>
      <SideMarginWithBottomMargin>
        <Cross onClick={onCloseClick} />
      </SideMarginWithBottomMargin>

      <MailForm />
    </SplitView>
  </Container>
)

const SideMarginWithBottomMargin = styled(SideMargin)`
  margin-bottom: ${baseUnits(0.5)};
`

export default MailFormSection
