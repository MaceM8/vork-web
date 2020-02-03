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
    {cards.map(({ title, text, link, imageSrc }) => (
      <BlogCard
        key={title}
        title={title}
        text={text}
        link={link}
        imageSrc={imageSrc}
      />
    ))}
  </ListWrapper>
)

export default CardList
