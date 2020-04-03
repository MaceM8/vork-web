import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Button from "../components/Button"
import Text from "../components/Text"
import Link from "../components/Link"
import BlogPostsSection from "../components/BlogPostsSection"
// import Customers from "../components/Customers"

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
      heading={strapiHomepage.blogPostHeading || "Inspirujte se na našem blogu"}
      text={
        strapiHomepage.blogPostText ||
        "Náš blog - naše, a třeba i vaše inspirace"
      }
    />
    <Section center>
      <Link to={strapiHomepage.bottomButtonLink}>
        <Button>{strapiHomepage.bottomButtonText}</Button>
      </Link>
      <Heading>{strapiHomepage.bottomText}</Heading>
      {/* Uncomment after partners give consent */}
      {/* <Customers /> */}
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
      # blogPostHeading
      # BlogPostText
    }
  }
`
