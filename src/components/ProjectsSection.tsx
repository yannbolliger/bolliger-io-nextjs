import { FunctionComponent, RefObject } from "react"

import Projects from "../content/Projects.mdx"
import { colors } from "../styled"
import TextBlockSection from "./TextBlockSection"

interface Props {
  title: string
  scrollRef: RefObject<HTMLDivElement>
}

const ProjectsSection: FunctionComponent<Props> = ({ title, scrollRef }) => (
  <TextBlockSection
    title={title}
    color={colors.secondary}
    borderTop
    scrollRef={scrollRef}
  >
    <Projects />
  </TextBlockSection>
)

export default ProjectsSection
