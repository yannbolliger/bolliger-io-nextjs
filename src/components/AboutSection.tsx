import { FunctionComponent } from "react"

import About from "../content/About.mdx"
// @ts-ignore
import Eric, { data as ericData } from "../content/Eric.mdx"
// @ts-ignore
import Yann, { data as yannData } from "../content/Yann.mdx"
import SplitView from "../styled/SplitView"
import AboutPersonSection from "./AboutPersonSection"
import TextBlockSection from "./TextBlockSection"

interface Props {
  title: string
  scrollRef: React.RefObject<HTMLDivElement>
}

const AboutSection: FunctionComponent<Props> = ({ scrollRef, title }) => {
  return (
    <>
      <TextBlockSection title={title} scrollRef={scrollRef}>
        <About />
      </TextBlockSection>

      <SplitView>
        <AboutPersonSection
          fullName={yannData.fullName}
          links={yannData.links}
          borderRight
        >
          <Yann />
        </AboutPersonSection>
        <AboutPersonSection fullName={ericData.fullName} links={ericData.links}>
          <Eric />
        </AboutPersonSection>
      </SplitView>
    </>
  )
}

export default AboutSection
