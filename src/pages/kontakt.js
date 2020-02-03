import React from "react"
import { graphql } from "gatsby"

import ConnectMedailon from "../components/ConnectMedailon"
import Heading from "../components/Heading"
import Layout from "../components/Layout"
import Section from "../components/Section"
import SEO from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Kontakt" />

    <Section>
      <ConnectMedailon user={data} />
    </Section>
    <Section>
      <Heading>Vork consulting s.r.o.</Heading>
    </Section>
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query UserContactQuery {
    strapiUserContact {
      id
      title
      text
      linkedin
      email
      phone
      Picture {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
