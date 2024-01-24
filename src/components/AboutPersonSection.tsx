import { ComponentProps, FunctionComponent, ReactNode } from "react"
import Image from "next/image"

import { colors } from "../styled"
import ItemContainer from "../styled/ItemContainer"
import LinkList, { LinkListProps } from "../styled/LinkList"

interface Props {
  firstName: string
  detailHref?: string
  links: LinkListProps["entries"]
  borderRight?: boolean
  img?: ComponentProps<typeof Image>["src"]
  about?: ReactNode
}

const AboutPersonSection: FunctionComponent<Props> = ({
  borderRight,
  detailHref,
  firstName,
  links,
  about,
  img,
}) => {
  const fullName = `${firstName} Bolliger`
  return (
    <ItemContainer
      sideTitle="Partner"
      color={colors.primaryLight}
      borderRight={borderRight}
      title={fullName}
      img={img ? { src: img, alt: fullName } : undefined}
      href={detailHref}
    >
      {about}
      {(detailHref || links) && (
        <LinkList
          entries={[
            ...(detailHref ? [{ href: detailHref, title: "Mehr" }] : []),
            ...(links || []),
          ]}
        />
      )}
    </ItemContainer>
  )
}

export default AboutPersonSection
