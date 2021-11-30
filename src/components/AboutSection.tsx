import React from "react"

import SplitView from "../styled/SplitView"
import TextBlockSection from "./TextBlockSection"
import AboutPersonSection from "./AboutPersonSection"

// @ts-ignore
import About, { title } from "../content/About.mdx"
// @ts-ignore
import Yann, { data as yannData } from "../content/Yann.mdx"
// @ts-ignore
import Eric, { data as ericData } from "../content/Eric.mdx"

interface Props {
  scrollRef: React.RefObject<HTMLDivElement>
}

const AboutSection: React.FC<Props> = ({ scrollRef }) => {
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
