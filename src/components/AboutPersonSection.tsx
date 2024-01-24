import { ComponentProps, FunctionComponent, PropsWithChildren } from "react"
import Image from "next/image"

import { colors } from "../styled"
import ItemContainer from "../styled/ItemContainer"
import LinkList from "../styled/LinkList"

interface Props extends PropsWithChildren {
  fullName: string
  detailHref?: string
  links: { [k: string]: string }
  borderRight?: boolean
  img?: ComponentProps<typeof Image>["src"]
}

const AboutPersonSection: FunctionComponent<Props> = ({
  borderRight,
  detailHref,
  fullName,
  links,
  children,
  img,
}) => (
  <ItemContainer
    sideTitle="Partner"
    color={colors.primaryLight}
    borderRight={borderRight}
    title={fullName}
    img={img ? { src: img, alt: fullName } : undefined}
    href={detailHref}
  >
    {children}
    {(detailHref || links) && (
      <LinkList
        entries={[
          ...(detailHref ? [{ href: detailHref, title: "Mehr" }] : []),
          ...Object.entries(links).map(([title, href]) => ({
            title,
            href,
          })),
        ]}
      />
    )}
  </ItemContainer>
)

export default AboutPersonSection
