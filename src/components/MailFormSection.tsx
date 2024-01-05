import { FunctionComponent, RefObject } from "react"
import styled from "styled-components"

import { colors } from "../styled"
import Container from "../styled/Container"
import Cross from "../styled/Cross"
import SideTitleSection from "../styled/SideTitleSection"
import MailForm from "./MailForm"

interface Props {
  onCloseClick: () => void
  scrollRef: RefObject<HTMLDivElement>
}

const FixedCross = styled(Cross)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0;
`

const MailFormSection: FunctionComponent<Props> = ({
  onCloseClick,
  scrollRef,
}) => (
  <Container ref={scrollRef} color={colors.primaryLight} borderTop>
    <SideTitleSection paddingRight>
      <FixedCross onClick={onCloseClick} />
      <MailForm />
    </SideTitleSection>
  </Container>
)

export default MailFormSection
