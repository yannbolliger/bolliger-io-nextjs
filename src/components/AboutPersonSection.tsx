import { MDXProvider } from "@mdx-js/react"

import { colors } from "../styled"
import SideTitleSection, { SideMargin } from "../styled/SideTitle"
import Container from "../styled/Container"
import SplitView from "../styled/SplitView"
import { MediumTitle } from "../styled/typography"
import Button from "../styled/Button"
import Image from "../styled/Image"

interface Props {
  fullName: string
  links: { [k: string]: string }
  borderRight?: boolean
}

const AboutPersonSection: React.FC<Props> = ({
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
