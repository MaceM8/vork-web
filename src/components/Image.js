import React from "react"
import styled from "styled-components"
import { oneOf } from "prop-types"

const SIZES = {
  sm: 5,
  md: 7,
  lg: 10,
}

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ size }) => SIZES[size]}rem;
  width: 100%;
`

const ImageComponent = styled.img`
  width: 100%;
  border-radius: 50%;
`

const Image = ({ size = "md", ...props }) => {
  return (
    <ImageWrapper size={size}>
      <ImageComponent {...props}></ImageComponent>
    </ImageWrapper>
  )
}

Image.propTypes = {
  size: oneOf(["sm", "md", "lg"]),
}

export default Image
