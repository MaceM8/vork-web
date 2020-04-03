import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Text from "../components/Text"
import BlogPostsSection from "../components/BlogPostsSection"
// import ConnectMedailon from "../components/ConnectMedailon"
import SimpleCard from "../components/SimpleCard"
import { graphql } from "gatsby"

const HelpingPage = ({ data: { strapiPomahame } }) => (
  <Layout>
    <SEO title="Pomáháme" />

    <Section>
      <Heading>{strapiPomahame.title}</Heading>
      {/* TODO: Text should be with page breaks */}
      {/* <Text>{strapiPomahame.text}</Text> */}
      <Text>
        Hledáte zajímavý projekt?
        <br />
        Postrádáte v týmu angažované a kooperující IT profíky?
        <br />
        Potřebujete postavit projekt od A do Z?
        <br />
        Chcete zefektivnit práci týmu či jednotlivců?
      </Text>
    </Section>
    <Section>
      <Heading>{strapiPomahame.simpleBoxSectionHeading}</Heading>
      {strapiPomahame.simple_cards.map(({ Title, Text }) => (
        <SimpleCard key={Title} heading={Title} text={Text} />
      ))}
    </Section>
    {/* <Section>
      <ConnectMedailon user={strapiPomahame.user_contact} />
    </Section> */}
    <BlogPostsSection
      heading={strapiPomahame.blogPostHeading || "Příběhy. Know-how. Stalo se."}
      text={
        strapiPomahame.blogPostHeading ||
        "Kdo ví, kam jde, nemůže se ztratit. V našich článcích sdílíme naše cesty, zkušenosti, pokusy a omyly. Třeba Vám pomohou nalézt i Vaši cestu."
      }
    />
  </Layout>
)

export default HelpingPage

export const pageQuery = graphql`
  query PomahameQuery {
    strapiPomahame {
      title
      text
      simpleBoxSectionHeading
      simple_cards {
        Text
        Title
      }
      # user_contact {
      #   title
      #   text
      #   linkedin
      #   phone
      #   email
      #   Picture {
      #     url
      #   }
      # }
    }
  }
`
