import { FunctionComponent } from "react"
import styled, { css } from "styled-components"

import { baseUnits, borders, breakpoints } from "."

interface Props {
  label: string
  error?: string
}

const Input: FunctionComponent<
  Props & React.InputHTMLAttributes<HTMLInputElement>
> = (props) => (
  <InputWrapper>
    <BasicInput {...props} placeholder={props.label} />
    {props.error && <ErrorLabel>{props.error}</ErrorLabel>}
  </InputWrapper>
)

export default Input

export const TextArea: FunctionComponent<
  Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = (props) => (
  <InputWrapper fullWidth>
    <MultiLineInput {...props} placeholder={props.label} />
    {props.error && <ErrorLabel>{props.error}</ErrorLabel>}
  </InputWrapper>
)

const InputWrapper = styled.div<{ fullWidth?: boolean }>`
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
