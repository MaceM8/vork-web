import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import ConnectMedailon from "../components/ConnectMedailon"
import Heading from "../components/Heading"
import Layout from "../components/Layout"
import Section from "../components/Section"
import SEO from "../components/seo"
import Text from "../components/Text"

const ContentSpaceDivider = styled.div`
  margin-bottom: 7rem;
`

const getProjectContacts = contacts => {
  return contacts.edges.filter(
    ({ node }) => node.title.includes("Andrea") || node.title.includes("Lucie")
  )
}

const getPeopleContacts = contacts => {
  return contacts.edges.filter(
    ({ node }) => node.title.includes("Adéla") || node.title.includes("Matěj")
  )
}

const getEffectivityContacts = contacts => {
  return contacts.edges.filter(({ node }) => node.title.includes("Tomáš"))
}

const ContactPage = ({ data: { strapiKontakt, allStrapiUserContact } }) => (
  <Layout>
    <SEO title="Kontakt" />

    <Section>
      <ContentSpaceDivider>
        <Heading>Hledáte zajímavý projekt?</Heading>
        {getProjectContacts(allStrapiUserContact).map(contact => (
          <ConnectMedailon user={contact.node} />
        ))}
      </ContentSpaceDivider>

      <ContentSpaceDivider>
        <Heading>
          Hledáte do týmu IT profíky nebo potřebujete postavit řešení od A do Z?
        </Heading>
        {getPeopleContacts(allStrapiUserContact).map(contact => (
          <ConnectMedailon user={contact.node} />
        ))}
      </ContentSpaceDivider>

      <Heading>Potřebujete zefektivnit práci týmu či jednotlivců?</Heading>
      {getEffectivityContacts(allStrapiUserContact).map(contact => (
        <ConnectMedailon user={contact.node} />
      ))}
    </Section>
    <Section dark grow>
      <Heading>{strapiKontakt.title}</Heading>
      <Text small smallMargin>
        {strapiKontakt.text}
      </Text>
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
    }
    allStrapiUserContact {
      edges {
        node {
          title
          linkedin
          email
          text
          phone
          Picture {
            childImageSharp {
              fixed(width: 100, height: 100) {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
  }
`
