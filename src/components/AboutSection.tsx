import React from "react"

import { useApiData } from "../api"
import SplitView from "../styled/SplitView"
import TextBlockSection from "./TextBlockSection"
import AboutPersonSection from "./AboutPersonSection"

import About, { title } from "../content/About.mdx"

interface Props {
  scrollRef: React.RefObject<HTMLDivElement>
}

const AboutSection: React.FC<Props> = ({ scrollRef }) => {
  const people = useApiData({
    collection: "personal_infos",
    fields: "*, person.first_name, person.last_name, photo.filename",
  })

  return (
    <>
      <TextBlockSection title={title} scrollRef={scrollRef}>
        <About />
      </TextBlockSection>

      {people[0] && people[1] && (
        <SplitView>
          <AboutPersonSection personalInfo={people[0]} borderRight />
          <AboutPersonSection personalInfo={people[1]} />
        </SplitView>
      )}
    </>
  )
}

export default AboutSection
