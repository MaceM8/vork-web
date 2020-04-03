import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { string, object } from "prop-types"

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

const PlainImageComponent = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`

const RoundImage = ({ height, fixed, src, ...props }) => (
  <ImageWrapper height={height}>
    {fixed && <ImageComponent fixed={fixed} {...props}></ImageComponent>}
    {src && <PlainImageComponent src={src} {...props} />}
  </ImageWrapper>
)

RoundImage.propTypes = {
  height: string,
  fixed: object, // Object shape from Strapi
  url: string,
}

export default RoundImage
