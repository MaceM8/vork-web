import styled from "styled-components"
import { PRIMARY, TRANSITION_TIME } from "../constants"
import hoverMedia from "../util/hover"

const ExternalLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  color: ${PRIMARY};
  text-decoration: none;
  text-transform: ${({ uppercase }) => uppercase && "uppercase"};
  transition: all ${TRANSITION_TIME};

  div {
    margin-right: 1rem;
  }

  &:after {
    position: absolute;
    bottom: -2px;
    height: 2px;
    display: block;
    content: "";
    width: 0px;
    transition: width 0.2s ease-in-out 0s;
    background: ${PRIMARY};
  }

  ${({ withUnderline }) =>
    withUnderline &&
    hoverMedia`
    &:after {
        width: 100%;
    }
  `}
`

export default ExternalLink
