import styled from "styled-components"

import { BLUE, WHITE, TRANSITION_TIME } from "../constants"

const Button = styled.button`
  border: 2px solid ${BLUE};
  border-radius: 3px;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  transition: all ${TRANSITION_TIME};
  cursor: pointer;

  @media (hover: hover) {
    :hover {
      color: ${WHITE};
      background-color: ${BLUE};
    }
  }
`

export default Button
