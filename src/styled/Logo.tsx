import { FunctionComponent } from "react"
import styled from "styled-components"

import { colors } from "."
import { SideMargin } from "./SideTitle"
import { MediumTitle } from "./typography"

const LogoFont = styled(MediumTitle)`
  display: inline;
  font-size: 1.75em;
  font-weight: 600;
  letter-spacing: 0.011em;
  margin: 0;
  user-select: none;
  hyphens: none;
`

const LogoBar = styled.div`
  background: ${colors.textColor};
  height: 0.15em;
  width: 100%;
  min-width: 2em;
  margin: 0.7em;
  margin-top: 1em;
`

const LogoWidth = styled(SideMargin)`
  width: auto !important;
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
`

interface Props {
  words?: [string, string]
}

const Logo: FunctionComponent<Props> = ({
  words = ["Bolliger", "Studios"],
}) => (
  <div>
    <LogoWidth>
      <LogoFont>{words[0]}</LogoFont>
      <LogoBar />
    </LogoWidth>
    <LogoFont>{words[1]}</LogoFont>
  </div>
)

export default Logo
