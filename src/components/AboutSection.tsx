import { FunctionComponent } from "react"

import About from "../content/About.mdx"
// @ts-ignore
import Eric, { data as ericData } from "../content/Eric.mdx"
// @ts-ignore
import Yann, { data as yannData } from "../content/Yann.mdx"
import { Section } from "../styled/LinkList"
import SplitView from "../styled/SplitView"
import AboutPersonSection from "./AboutPersonSection"
import TextBlockSection from "./TextBlockSection"

import ericImg from "../content/eric.jpg"
import yannImg from "../content/yann.jpg"

const AboutSection: FunctionComponent<Section> = (props) => (
  <>
    <TextBlockSection {...props}>
      <About />
    </TextBlockSection>

    <SplitView>
      <AboutPersonSection
        fullName={yannData.fullName}
        links={yannData.links}
        img={yannImg}
        borderRight
      >
        <Yann />
      </AboutPersonSection>
      <AboutPersonSection
        fullName={ericData.fullName}
        links={ericData.links}
        img={ericImg}
      >
        <Eric />
      </AboutPersonSection>
    </SplitView>
  </>
)

export default AboutSection
