import { FunctionComponent } from "react"

import partners from "../content/partners"
import { Section } from "../styled/LinkList"
import SplitView from "../styled/SplitView"
import AboutPersonSection from "./AboutPersonSection"
import TextBlockSection from "./TextBlockSection"

import About from "../content/About.mdx"

const AboutSection: FunctionComponent<Section> = (props) => (
  <>
    <TextBlockSection {...props}>
      <About />
    </TextBlockSection>
    <SplitView>
      <AboutPersonSection {...partners["yann"]} borderRight />
      <AboutPersonSection {...partners["eric"]} />
    </SplitView>
  </>
)

export default AboutSection
