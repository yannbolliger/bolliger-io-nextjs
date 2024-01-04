import styled from "styled-components"

import { baseUnits } from "."

const Image = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  margin-bottom: ${baseUnits(0.5)};
`
export default Image
