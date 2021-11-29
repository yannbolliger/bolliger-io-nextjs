import React from "react"
import styled, { css } from "styled-components"

import { borders, baseUnits, breakpoints } from "."

interface Props {
  type: string
  name: string
  onChange?: () => void
  value?: string
  error?: string
  label?: string
}

const Input: React.FC<Props> = (props) => {
  const labelText = props.label || props.name
  const capitalisedLabel = labelText[0].toUpperCase() + labelText.substr(1)

  return (
    <InputWrapper fullWidth={props.type === "textarea"}>
      {props.type === "textarea" ? (
        <MultiLineInput {...props} placeholder={capitalisedLabel} />
      ) : (
        <BasicInput {...props} placeholder={capitalisedLabel} />
      )}

      {props.error && <ErrorLabel>{props.error}</ErrorLabel>}
    </InputWrapper>
  )
}

const InputWrapper = styled.div<{ fullWidth: boolean }>`
  margin-bottom: ${baseUnits(0.5)};
  flex-basis: 100%;

  @media screen and (min-width: ${breakpoints.mobile}) {
    flex-basis: ${(props) =>
      props.fullWidth ? "100%" : `calc(50% - ${baseUnits(0.25)})`};
  }
`

const sharedInputStyles = css`
  width: 100%;
  padding-bottom: 0.25em;

  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: transparent;
  border: none;
  border-bottom: ${borders(true)};
  border-radius: 0;

  ::placeholder {
    opacity: 1;
    color: inherit;
  }
`

const BasicInput = styled.input`
  ${sharedInputStyles}
`

const MultiLineInput = styled.textarea`
  ${sharedInputStyles}
  resize: vertical;
`

const ErrorLabel = styled.div``

export default Input
