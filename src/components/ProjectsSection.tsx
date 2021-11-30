import React from "react"

import { colors } from "../styled"
import TextBlockSection from "./TextBlockSection"

// @ts-ignore
import Projects, { title } from "../content/Projects.mdx"

interface Props {
  scrollRef: React.RefObject<HTMLDivElement>
}

const ProjectsSection: React.FC<Props> = ({ scrollRef }) => (
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
