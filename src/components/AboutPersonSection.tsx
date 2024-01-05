import { FunctionComponent, PropsWithChildren } from "react"
import { MDXProvider } from "@mdx-js/react"

import { baseUnits, colors } from "../styled"
import Button from "../styled/Button"
import Container from "../styled/Container"
import Img from "../styled/Img"
import ItemContainer from "../styled/ItemContainer"
import SideTitleSection, { SideMargin } from "../styled/SideTitleSection"
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
  <ItemContainer
    color={colors.primaryLight}
    borderRight={borderRight}
    title={fullName}
    sideTitle="Partner"
  >
    {children}
    {links && (
      <SplitView style={{ marginTop: baseUnits(0.5) }}>
        <SideMargin>Links</SideMargin>
        {Object.entries(links).map(([name, url]) => (
          <Button key={url} href={url}>
            {name}
          </Button>
        ))}
      </SplitView>
    )}
  </ItemContainer>
)

export default AboutPersonSection
