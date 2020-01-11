import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Button from "../components/Button"
import Text from "../components/Text"

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
      <Button>S čím pomáháme</Button>
    </Section>
    <Section narrow>
      <Heading>Inspirujte se na našem bloku</Heading>
    </Section>
    <Section>
      <Heading>A samozřejmě děkujeme našim partnerům</Heading>
    </Section>
  </Layout>
)

export default IndexPage
