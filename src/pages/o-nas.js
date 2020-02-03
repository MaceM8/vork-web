import React from "react"
import styled from "styled-components"

import Layout from "../components/Layouts"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Text from "../components/Text"
import SimpleCard from "../components/SimpleCard"
import ConnectMedailon from "../components/ConnectMedailon"
import { BREAKPOINTS } from "../constants"
import { graphql } from "gatsby"
import PeopleCard from "../components/PeopleCard"

const PeopleWrapper = styled.div`
  display: grid;
  display: -ms-grid;
  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;
  grid-gap: 2rem;

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: 1fr 1fr;
    -ms-grid-columns: 1fr 1fr;
  }
`

const AboutPage = ({ data: { allStrapiPeople, strapiONas } }) => (
  <Layout>
    <SEO title="O nás" />

    <Section>
      <Heading>{strapiONas.title}</Heading>
      <Text>{strapiONas.text}</Text>
    </Section>
    <Section>
      <Heading center>{strapiONas.ThisIsUsTitle}</Heading>
      <PeopleWrapper>
        {allStrapiPeople.edges.map(({ node }) => (
          <PeopleCard key={node.name} person={node} />
        ))}
        <Heading center small>
          + naše komunita IT specialistů
        </Heading>
      </PeopleWrapper>
    </Section>
    <Section>
      {strapiONas.simple_cards.map(({ Title, Text }) => (
        <SimpleCard key={Title} heading={Title} text={Text} />
      ))}
    </Section>
    <Section>
      <Heading>{strapiONas.whereCanYouFindUsTitle}</Heading>
      <Text>{strapiONas.whereCanYouFindUsText}</Text>
    </Section>
    <Section>
      <ConnectMedailon user={strapiONas.user_contact} />
    </Section>
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query ONasQuery {
    allStrapiPeople {
      edges {
        node {
          name
          about
          picture {
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
    strapiONas {
      title
      text
      whereCanYouFindUsTitle
      whereCanYouFindUsText
      ThisIsUsTitle
      simple_cards {
        Title
        Text
      }
      user_contact {
        title
        text
        email
        linkedin
        phone
        Picture {
          url
        }
      }
    }
  }
`
