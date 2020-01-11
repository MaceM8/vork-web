import styled from "styled-components"
import { Link as GasbyLink } from "gatsby"
import { PRIMARY, TRANSITION_TIME } from "../constants"
import hoverMedia from "../util/hover"

const Link = styled(GasbyLink)`
  margin: 0 2rem;
  text-transform: uppercase;
  color: ${PRIMARY};
  transition: all ${TRANSITION_TIME};
  text-decoration: none;

  &:after {
    display: block;
    content: "";
    height: 0.1rem;
    width: 0px;
    transition: width 0.2s ease 0s;
    background: ${PRIMARY};
  }

  ${hoverMedia`
    &:after {
        width: 100%;
    }
  `}
`

export default Link
