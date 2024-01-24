import {
  ComponentProps,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
} from "react"
import Image from "next/image"
import Link from "next/link"
import { MDXProvider } from "@mdx-js/react"

import Button from "./Button"
import Container from "./Container"
import Img from "./Img"
import SideTitleSection from "./SideTitleSection"
import { MediumTitle } from "./typography"

interface Props extends PropsWithChildren {
  color?: string
  borderRight?: boolean
  sideTitle?: ReactNode
  title?: ReactNode
  img?: ComponentProps<typeof Image>
  href?: string
}

const ItemContainer: FunctionComponent<Props> = ({
  color,
  borderRight,
  sideTitle,
  title,
  children,
  img,
  href,
}) => (
  <Container color={color} borderRight={borderRight} borderTop>
    <SideTitleSection title={sideTitle}>
      <MediumTitle>
        {href ? <Link href={href}>{title}</Link> : title}
      </MediumTitle>
    </SideTitleSection>

    {img &&
      (href ? (
        // flex to avoid weird spacing below
        <Link href={href} style={{ display: "flex" }}>
          <Img as={Image} {...img} />
        </Link>
      ) : (
        <Img as={Image} {...img} />
      ))}

    <MDXProvider components={{ a: Button, img: Img }}>{children}</MDXProvider>
  </Container>
)

export default ItemContainer
