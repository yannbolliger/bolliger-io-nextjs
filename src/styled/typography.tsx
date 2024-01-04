import styled, { css } from "styled-components"

import { baseUnits } from "."

export const SmallTitle = styled.h4`
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: 700;

  margin-bottom: ${baseUnits(0.25)};
`

const medium = css`
  font-size: 1.66666rem;
  font-weight: 500;
  line-height: 1.2;
`

export const MediumTitle = styled.h3`
  ${medium}
  hyphens: auto;
  text-wrap: balance;
  text-overflow: ellipsis;
  margin-bottom: ${baseUnits(0.5)};
`

export const LargeTitle = styled.h2`
  font-size: 3rem;
  line-height: 1;
  font-weight: 500;
  margin-bottom: ${baseUnits(0.5)};
`

export const MediumParagraph = styled.p`
  ${medium}
`
