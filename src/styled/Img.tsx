import styled from "styled-components"

import { baseUnits } from "."

const Img = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  max-width: 1200px;
  object-fit: cover;
  margin-bottom: ${baseUnits(0.5)};
`
export default Img
