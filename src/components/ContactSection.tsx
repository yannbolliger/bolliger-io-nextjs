import { FunctionComponent, useRef, useState } from "react"

import { colors } from "../styled"
import Button from "../styled/Button"
import ScrollLink from "../styled/ScrollLink"
import { LargeTitle, MediumTitle } from "../styled/typography"
import MailFormSection from "./MailFormSection"
import TextBlockSection from "./TextBlockSection"

interface Props {
  title: string
  scrollRef: React.RefObject<HTMLDivElement>
}

const ContactSection: FunctionComponent<Props> = ({ title, scrollRef }) => {
  const [isFormVisible, setFormVisible] = useState(false)
  const formRef = useRef(null)

  return (
    <>
      <TextBlockSection
        title={title}
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
          onCloseClick={() => {
            scrollRef.current?.scrollIntoView({
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
