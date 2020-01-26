import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Button from "../components/Button"
import Text from "../components/Text"
import Link from "../components/Link"
import BlogPostsSection from "../components/BlogPostsSection"

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
    <BlogPostsSection
      heading="Inspirujte se na našem bloku"
      text="Dostat od někoho zkušeného radu je dar, který často ušetří drahocenný čas. Nejen proto sdílíme zkušenosti. Jak s nimi naložíte, je na Vás."
    />
    <Section center>
      <Link to="o-nas">
        <Button>Více o nás</Button>
      </Link>
      <Heading>A samozřejmě děkujeme všem našim partnerům</Heading>
    </Section>
  </Layout>
)

export default IndexPage
