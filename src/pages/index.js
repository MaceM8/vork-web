import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Button from "../components/Button"
import Text from "../components/Text"
import Link from "../components/Link"
import BlogPostsSection from "../components/BlogPostsSection"
import { graphql } from "gatsby"

const IndexPage = ({ data: { strapiHomepage } }) => (
  <Layout>
    <SEO title="Home" />

    <Section>
      <Heading>{strapiHomepage.title}</Heading>
      <Text>{strapiHomepage.text}</Text>
      <Link to={strapiHomepage.buttonLink}>
        <Button>{strapiHomepage.buttonText}</Button>
      </Link>
    </Section>
    <BlogPostsSection
      heading="Inspirujte se na našem bloku"
      text="Dostat od někoho zkušeného radu je dar, který často ušetří drahocenný čas. Nejen proto sdílíme zkušenosti. Jak s nimi naložíte, je na Vás."
    />
    <Section center>
      <Link to={strapiHomepage.bottomButtonLink}>
        <Button>{strapiHomepage.bottomButtonText}</Button>
      </Link>
      <Heading>{strapiHomepage.bottomText}</Heading>
    </Section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query HomepageQuery {
    strapiHomepage {
      title
      text
      buttonText
      buttonLink
      bottomText
      bottomButtonText
      bottomButtonLink
    }
  }
`
