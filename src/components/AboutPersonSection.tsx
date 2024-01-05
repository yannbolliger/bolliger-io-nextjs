import { FunctionComponent, PropsWithChildren } from "react"

import { colors } from "../styled"
import ItemContainer from "../styled/ItemContainer"
import LinkList from "../styled/LinkList"

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
      <LinkList
        entries={Object.entries(links).map(([title, href]) => ({
          title,
          href,
        }))}
      />
    )}
  </ItemContainer>
)

export default AboutPersonSection
