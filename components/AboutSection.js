import React from "react"
import PropTypes from "prop-types"

import { useApiData } from "../api"
import SplitView from "../styled/SplitView"
import TextBlockSection from "./TextBlockSection"
import AboutPersonSection from "./AboutPersonSection"

const AboutSection = ({ textBlock }) => {
  const people = useApiData({
    collection: "personal_infos",
    fields: "*, person.first_name, person.last_name, photo.*"
  })

  return (
    <>
      <TextBlockSection textBlock={textBlock} />

      {people[0] && people[1] && (
        <SplitView>
          <AboutPersonSection personalInfo={people[0]} borderRight />
          <AboutPersonSection personalInfo={people[1]} />
        </SplitView>
      )}
    </>
  )
}

AboutSection.propTypes = {
  textBlock: PropTypes.object
}

export default AboutSection
