import { FunctionComponent, PropsWithChildren } from "react"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"

import { baseUnits, breakpoints } from "../styled"
import Container from "../styled/Container"
import SideTitleSection from "../styled/SideTitle"
import { LargeTitle, MediumParagraph } from "../styled/typography"

interface Props extends PropsWithChildren {
  title?: string
  color?: string
  borderTop?: boolean
  scrollRef?: React.RefObject<HTMLDivElement>
}

const TextBlockSection: FunctionComponent<Props> = ({
  title,
  color,
  borderTop,
  children,
  scrollRef,
}) =>
  !title ? null : (
    <ContainerMorePadding borderTop={borderTop} color={color} ref={scrollRef}>
      <SideTitleSection title={title}>
        <PaddingRightWrapper>
          <MDXProvider components={{ p: MediumParagraph, h2: LargeTitle }}>
            {children}
          </MDXProvider>
        </PaddingRightWrapper>
      </SideTitleSection>
    </ContainerMorePadding>
  )

const ContainerMorePadding = styled(Container)`
  @media screen and (min-width: ${breakpoints.mobile}) {
    padding-top: ${baseUnits(1)};
    padding-bottom: ${baseUnits(1)};
  }
`

const PaddingRightWrapper = styled.div`
  padding-right: 0;

  @media screen and (min-width: ${breakpoints.mobile}) {
    padding-right: ${baseUnits(2)};
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    padding-right: ${baseUnits(4)};
  }
`

export default TextBlockSection
