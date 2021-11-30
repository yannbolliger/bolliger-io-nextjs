import React from "react"

import { colors } from "../styled"
import TextBlockSection from "./TextBlockSection"

import Projects from "../content/Projects.mdx"

interface Props {
  title: string
  scrollRef: React.RefObject<HTMLDivElement>
}

const ProjectsSection: React.FC<Props> = ({ title, scrollRef }) => (
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
