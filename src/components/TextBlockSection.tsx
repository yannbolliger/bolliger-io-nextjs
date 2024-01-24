import { FunctionComponent, PropsWithChildren } from "react"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"

import { baseUnits, breakpoints } from "../styled"
import Button from "../styled/Button"
import Container from "../styled/Container"
import Img from "../styled/Img"
import { Section } from "../styled/LinkList"
import SideTitleSection from "../styled/SideTitleSection"
import { LargeTitle, MediumParagraph } from "../styled/typography"

interface Props extends PropsWithChildren, Partial<Section> {
  color?: string
  borderTop?: boolean
}

const TextBlockSection: FunctionComponent<Props> = ({
  id,
  title,
  color,
  borderTop,
  children,
}) => (
  <ContainerMorePadding id={id} borderTop={borderTop} color={color}>
    <SideTitleSection title={title} paddingRight>
      <MDXProvider
        components={{
          p: MediumParagraph,
          h2: LargeTitle,
          a: Button,
          img: Img,
        }}
      >
        {children}
      </MDXProvider>
    </SideTitleSection>
  </ContainerMorePadding>
)

const ContainerMorePadding = styled(Container)`
  @media screen and (min-width: ${breakpoints.mobile}) {
    padding-top: ${baseUnits(1)};
    padding-bottom: ${baseUnits(1)};
  }
`

export default TextBlockSection
