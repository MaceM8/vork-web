import React from "react"
import styled from "styled-components"
import { WHITE, BORDER_RADIUS, BREAKPOINTS, GREY2 } from "../constants"
import Heading from "./Heading"
import Text from "./Text"
import Icon from "./Icon"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem;
  background-color: ${WHITE};
  border-radius: ${BORDER_RADIUS};
  margin-bottom: 2rem;
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
`

const DesktopChevron = styled(Icon)`
  display: none;
  transform: rotate(180deg);
  height: 5rem;
  width: 5rem;
  margin-right: 2rem;
  color: ${GREY2};

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    display: block;
  }
`

const SimpleCard = ({ heading, text, ...props }) => (
  <Wrapper {...props}>
    <DesktopChevron icon="chevronRight" />
    <div>
      <Heading small>{heading}</Heading>
      <Text small>{text}</Text>
    </div>
  </Wrapper>
)

export default SimpleCard
