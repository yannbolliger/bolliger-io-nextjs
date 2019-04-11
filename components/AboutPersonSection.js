import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

import { colors, baseUnits } from "../styled"
import SideTitleSection, { SideMargin } from "../styled/SideTitle"
import Container from "../styled/Container"
import SplitView from "../styled/SplitView"
import Image from "../styled/Image"
import { MediumTitle } from "../styled/typography"

const AboutPersonSection = ({ personalInfo, borderRight }) => (
  <Container color={colors.primaryLight} borderRight={borderRight}>
    <SideTitleSection title="Partner">
      <MediumTitle>
        {personalInfo.person.first_name} {personalInfo.person.last_name}
      </MediumTitle>
    </SideTitleSection>

    <MarginWrapper marginBottom={!personalInfo.photo}>
      <ReactMarkdown linkTarget="_blank">
        {`About &mdash; ${personalInfo.description}`}
      </ReactMarkdown>
    </MarginWrapper>

    {personalInfo.photo && <Image src={personalInfo.photo.data.full_url} />}

    {personalInfo.links && (
      <SplitView>
        <SideMargin>Links</SideMargin>

        <ReactMarkdown linkTarget="_blank">{personalInfo.links}</ReactMarkdown>
      </SplitView>
    )}
  </Container>
)

const MarginWrapper = styled.div`
  margin-bottom: ${props => (props.marginBottom ? baseUnits(0.5) : "0")};
`

AboutPersonSection.propTypes = {
  personalInfo: PropTypes.object.isRequired,
  borderRight: PropTypes.bool
}

export default AboutPersonSection
