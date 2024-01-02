import { FunctionComponent, PropsWithChildren } from "react"
import { MDXProvider } from "@mdx-js/react"

import { colors } from "../styled"
import Button from "../styled/Button"
import Container from "../styled/Container"
import Image from "../styled/Image"
import SideTitleSection, { SideMargin } from "../styled/SideTitle"
import SplitView from "../styled/SplitView"
import { MediumTitle } from "../styled/typography"

interface Props extends PropsWithChildren {
  fullName: string
  links: { [k: string]: string }
  borderRight?: boolean
}

const AboutPersonSection: FunctionComponent<Props> = ({
  borderRight,
  fullName,
  links,
  children,
}) => (
  <Container color={colors.primaryLight} borderRight={borderRight} borderTop>
    <SideTitleSection title="Partner">
      <MediumTitle>{fullName}</MediumTitle>
    </SideTitleSection>

    {links && (
      <SplitView>
        <SideMargin>Links</SideMargin>
        {Object.entries(links).map(([name, url]) => (
          <Button key={url} href={url}>
            {name}
          </Button>
        ))}
      </SplitView>
    )}

    <MDXProvider components={{ a: Button, img: Image }}>{children}</MDXProvider>
  </Container>
)

export default AboutPersonSection
