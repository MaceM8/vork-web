import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { string } from "prop-types"

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ImageComponent = styled(Img)`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`

const RoundImage = ({ height, ...props }) => {
  return (
    <ImageWrapper height={height}>
      <ImageComponent {...props}></ImageComponent>
    </ImageWrapper>
  )
}

RoundImage.propTypes = {
  height: string,
}

export default RoundImage
