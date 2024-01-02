import { FunctionComponent } from "react"

import Projects from "../content/Projects.mdx"
import { colors } from "../styled"
import { Section } from "./Menu"
import TextBlockSection from "./TextBlockSection"

const ProjectsSection: FunctionComponent<Section> = (props) => (
  <TextBlockSection {...props} color={colors.secondary} borderTop>
    <Projects />
  </TextBlockSection>
)

export default ProjectsSection
