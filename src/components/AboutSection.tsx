import { FunctionComponent } from "react"

import About from "../content/About.mdx"
// @ts-ignore
import Eric, { data as ericData } from "../content/Eric.mdx"
// @ts-ignore
import Yann, { data as yannData } from "../content/Yann.mdx"
import SplitView from "../styled/SplitView"
import AboutPersonSection from "./AboutPersonSection"
import { Section } from "./Menu"
import TextBlockSection from "./TextBlockSection"

const AboutSection: FunctionComponent<Section> = (props) => {
  return (
    <>
      <TextBlockSection {...props}>
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
