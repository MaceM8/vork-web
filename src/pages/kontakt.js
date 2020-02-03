import React from "react"
import { graphql } from "gatsby"

import ConnectMedailon from "../components/ConnectMedailon"
import Heading from "../components/Heading"
import Layout from "../components/Layouts"
import Section from "../components/Section"
import SEO from "../components/seo"
import Text from "../components/Text"

const ContactPage = ({ data: { strapiKontakt } }) => (
  <Layout>
    <SEO title="Kontakt" />

    <Section>
      <ConnectMedailon user={strapiKontakt.user_contact} />
    </Section>
    <Section dark grow>
      <Heading>{strapiKontakt.title}</Heading>
      <Text smallMargin>{strapiKontakt.text}</Text>
      <Text small>{strapiKontakt.smallText}</Text>
    </Section>
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query UserContactQuery {
    strapiKontakt {
      title
      text
      smallText
      user_contact {
        title
        linkedin
        email
        text
        phone
        Picture {
          url
        }
      }
    }
  }
`
