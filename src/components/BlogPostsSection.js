import React from "react"

import CardList from "./CardList"
import Section from "./Section"
import Heading from "./Heading"
import Text from "./Text"

const cards = [
  {
    title: "Card title",
    text:
      "Blog post text that is slightly longer than title. Blog post text that is slightly longer than title. Blog post text that is slightly longer than title. Blog post text that is slightly longer than title. Blog post text that is slightly longer than title. Blog post text that is slightly longer than title. Blog post text that is slightly longer than title.",
  },
  {
    title: "Second card title",
    text: "Blog post text that is slightly longer than title.",
  },
  {
    title: "Long third card title that doesn't fin on one line",
    text:
      "Blog post text that is slightly longer than title, but not that musch so that its not too long.",
  },
]

const BlogPostsSection = ({ heading, text }) => (
  <Section center dark>
    <Heading>{heading}</Heading>
    <Text>{text}</Text>
    <CardList cards={cards} />
  </Section>
)

export default BlogPostsSection
