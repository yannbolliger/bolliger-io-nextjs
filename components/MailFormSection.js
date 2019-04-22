import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colors, baseUnits } from "../styled"
import Container from "../styled/Container"
import Cross from "../styled/Cross"
import SplitView from "../styled/SplitView"
import { SideMargin } from "../styled/SideTitle"
import MailForm from "./MailForm"

const MailFormSection = React.forwardRef(({ onCloseClick }, ref) => (
  <Container ref={ref} color={colors.primaryLight} borderTop>
    <SplitView>
      <SideMarginWithBottomMargin>
        <Cross onClick={onCloseClick} />
      </SideMarginWithBottomMargin>

      <MailForm />
    </SplitView>
  </Container>
))

const SideMarginWithBottomMargin = styled(SideMargin)`
  margin-bottom: ${baseUnits(0.5)};
`

MailFormSection.propTypes = {
  onCloseClick: PropTypes.func.isRequired
}

export default MailFormSection
