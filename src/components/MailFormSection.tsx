import React from "react"
import styled from "styled-components"

import { colors, baseUnits } from "../styled"
import Container from "../styled/Container"
import Cross from "../styled/Cross"
import SplitView from "../styled/SplitView"
import { SideMargin } from "../styled/SideTitle"
import MailForm from "./MailForm"

interface Props {
  onCloseClick: () => void
  scrollRef: React.RefObject<HTMLDivElement>
}

const MailFormSection: React.FC<Props> = ({ onCloseClick, scrollRef }) => (
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
