import React from "react"
import styled from "styled-components"
import BlogCard from "./BlogCard"

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const CardList = ({ cards }) => (
  <ListWrapper>
    {cards.map((props, index) => (
      <BlogCard key={index} {...props} />
    ))}
  </ListWrapper>
)

export default CardList
