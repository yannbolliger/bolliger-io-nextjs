import { FunctionComponent, useRef, useState } from "react"

import { colors } from "../styled"
import Button from "../styled/Button"
import { LargeTitle, MediumTitle } from "../styled/typography"
import MailFormSection from "./MailFormSection"
import { Section } from "./Menu"
import TextBlockSection from "./TextBlockSection"

const ContactSection: FunctionComponent<Section> = (props) => {
  const [isFormVisible, setFormVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <TextBlockSection {...props} color={colors.primary} borderTop>
        <LargeTitle>Say Hi!</LargeTitle>
        <MediumTitle>
          <div
            ref={sectionRef}
            onClick={() => {
              setFormVisible(true)
              setTimeout(
                () => formRef.current?.scrollIntoView({ behavior: "smooth" }),
                50
              )
            }}
          >
            <Button>Email</Button>
          </div>
        </MediumTitle>
      </TextBlockSection>

      {isFormVisible && (
        <MailFormSection
          scrollRef={formRef}
          onCloseClick={() => {
            sectionRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "end",
            })
            setTimeout(() => setFormVisible(false), 500)
          }}
        />
      )}
    </>
  )
}

export default ContactSection
