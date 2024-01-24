import Head from "next/head"
import Image from "next/image"

import LogoMenuHeader from "../components/LogoMenuHeader"
import ProjectsSection from "../components/ProjectsSection"
import TextBlockSection from "../components/TextBlockSection"
import partners from "../content/partners"
import { colors } from "../styled"
import Img from "../styled/Img"
import ItemContainer from "../styled/ItemContainer"
import LinkList from "../styled/LinkList"
import SplitView from "../styled/SplitView"
import { LargeTitle, MediumParagraph } from "../styled/typography"

const yannData = partners["yann"]
const sections = [
  {
    id: "about",
    title: "About me",
  },
  { id: "blog", title: "Blog" },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact me",
  },
]

const baseDomain =
  process.env.NODE_ENV == "production"
    ? "https://bolliger.io"
    : "http://localhost:3000"

const YannPage = () => (
  <>
    <Head>
      <title>Yann Bolliger</title>
    </Head>

    <LogoMenuHeader
      logoWords={[yannData.firstName, "Bolliger"]}
      entries={[...sections, { href: baseDomain, title: "Home" }]}
    />

    <TextBlockSection {...sections[0]}>
      <Img as={Image} src={yannData.img} alt="Portrait" />
      {yannData.about}
    </TextBlockSection>

    <TextBlockSection borderTop color={colors.primaryLight} title="Links">
      <MediumParagraph as="div">
        <LinkList entries={yannData.links} />
      </MediumParagraph>
    </TextBlockSection>

    <TextBlockSection {...sections[1]} borderTop>
      <LargeTitle>Thoughts</LargeTitle>
      <MediumParagraph>Sometimes I write some stuff...</MediumParagraph>
    </TextBlockSection>
    <SplitView>
      <ItemContainer
        color={colors.primaryLight}
        borderRight
        title="Manual work is a Bug"
        sideTitle="Organisation"
      />
      <ItemContainer
        color={colors.primaryLight}
        title="Manchmal auch etwas auf Deutsch mit einem typisch langen Titel"
        sideTitle="Tech"
      />
    </SplitView>

    <ProjectsSection {...sections[2]} />
  </>
)

export default YannPage
