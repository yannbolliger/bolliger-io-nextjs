import { ChangeEvent, FormEvent } from "react"

import sendMail from "../api/sendMail"
import useValueErrorState from "../hooks/useValueErrorState"
import { ButtonInput } from "../styled/Button"
import Form from "../styled/Form"
import Input, { TextArea } from "../styled/Input"
import { MediumTitle, SmallTitle } from "../styled/typography"

const MailForm = () => {
  const isFormSubmitted = useValueErrorState("")

  const name = useValueErrorState("")
  const email = useValueErrorState("")
  const message = useValueErrorState("")

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    isFormSubmitted.setValue("Wird geschickt...")
    isFormSubmitted.setError("")

    sendMail(name.value, email.value, message.value)
      .then(() => isFormSubmitted.setValue("Die Nachricht wurde geschickt!"))
      .catch(() => isFormSubmitted.setError("Es ist ein Fehler aufgetreten."))
  }

  return isFormSubmitted.value && !isFormSubmitted.hasError ? (
    <MediumTitle>{isFormSubmitted.value}</MediumTitle>
  ) : (
    <div>
      {isFormSubmitted.hasError && (
        <SmallTitle>{isFormSubmitted.error}</SmallTitle>
      )}

      <Form onSubmit={onSubmit}>
        <Input
          name="name"
          type="text"
          label="Name"
          value={name.value}
          error={name.error}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            name.setValue(event.target.value)
          }
          required
        />
        <Input
          name="email"
          type="email"
          label="E-Mail"
          value={email.value}
          error={email.error}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            email.setValue(event.target.value)
          }
          required
        />
        <TextArea
          name="message"
          label="Nachricht..."
          required
          value={message.value}
          error={message.error}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            message.setValue(event.target.value)
          }
          rows={4}
        />
        <ButtonInput name="submit" type="submit" value="Nachricht schicken" />
      </Form>
    </div>
  )
}

export default MailForm
