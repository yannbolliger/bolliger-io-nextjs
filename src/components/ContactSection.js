import React, { useState, useRef } from "react"
import PropTypes from "prop-types"

import { colors } from "../styled"
import { LargeTitle, MediumTitle } from "../styled/typography"
import Button from "../styled/Button"
import ScrollLink from "../styled/ScrollLink"
import TextBlockSection from "./TextBlockSection"
import MailFormSection from "./MailFormSection"

const ContactSection = ({ scrollRef }) => {
  const [isFormVisible, setFormVisible] = useState(false)
  const formRef = useRef(null)

  return (
    <>
      <TextBlockSection
        title="Kontakt"
        color={colors.primary}
        borderTop
        scrollRef={scrollRef}
      >
        <LargeTitle>Say Hi!</LargeTitle>
        <MediumTitle>
          <ScrollLink
            as="div"
            onClick={() => setFormVisible(true)}
            targetRef={formRef}
          >
            <Button>Email</Button>
          </ScrollLink>
        </MediumTitle>
      </TextBlockSection>

      {isFormVisible && (
        <MailFormSection
          scrollRef={formRef}
          onCloseClick={() => setFormVisible(false)}
        />
      )}
    </>
  )
}

ContactSection.propTypes = {
  textBlock: PropTypes.object,
  scrollRef: PropTypes.object.isRequired,
}

export default ContactSection
