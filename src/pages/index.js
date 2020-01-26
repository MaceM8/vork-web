import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Button from "../components/Button"
import Text from "../components/Text"
import CardList from "../components/CardList"
import Link from "../components/Link"

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Section>
      <Heading>Upgradujeme dobré týmy na skvělé</Heading>
      <Text>
        Zavádíme filosofii Leadership do týmů
        <br />
        Rozvíjíme jednotlivce a týmy
        <br />
        Spojujeme týmy s těmi pravými Ajťáky
      </Text>
      <Link to="pomahame">
        <Button>S čím pomáháme</Button>
      </Link>
    </Section>
    <Section center>
      <Heading>Inspirujte se na našem bloku</Heading>
      <Text>
        Dostat od někoho zkušeného radu je dar, který často ušetří drahocenný
        čas.
        <br /> Nejen proto sdílíme zkušenosti. Jak s nimi naložíte, je na Vás.
      </Text>
      <CardList cards={cards} />
    </Section>
    <Section center>
      <Link to="o-nas">
        <Button>Více o nás</Button>
      </Link>
      <Heading>A samozřejmě děkujeme všem našim partnerům</Heading>
    </Section>
  </Layout>
)

export default IndexPage
