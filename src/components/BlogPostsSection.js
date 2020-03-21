import React from "react"

import CardList from "./BlogCardList"
import Section from "./Section"
import Heading from "./Heading"
import Text from "./Text"

const cards = [
  {
    title: "Jak z výjimečné firmy udělat průměrnou?",
    text:
      "Každá větší firma si tím prošla. Majitel založí firmu se zajímavou, výjimečnou myšlenkou a vytváří “zdravou” firemní kulturu. Zprvu se všichni uvnitř firmy znají, tvoří komunitu lidí se stejnými cíli.",
    imageSrc:
      "https://miro.medium.com/max/1496/1*gxcusr3GoNQ8Gur1Nweolw@2x.jpeg",
    href:
      "https://medium.com/@tom.vodenka/jak-z-v%C3%BDjime%C4%8Dn%C3%A9-firmy-ud%C4%9Blat-pr%C5%AFm%C4%9Brnou-8d6319171262",
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
