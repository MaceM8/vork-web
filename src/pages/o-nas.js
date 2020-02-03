import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Text from "../components/Text"
import SimpleCard from "../components/SimpleCard"
import ConnectMedailon from "../components/ConnectMedailon"
import { USER_MEDAILON, BREAKPOINTS } from "../constants"
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

const AboutPage = ({ data: { allStrapiPeople } }) => (
  <Layout>
    <SEO title="O nás" />
    {console.log("about", allStrapiPeople)}

    <Section>
      <Heading>
        Nedělá-li člověk to, co miluje, pak musí milovat to, co dělá.
      </Heading>
      <Text>
        Milujeme to, co děláme a nakazíme i Vás. Pomáháme týmum k dosažení
        unikátních výsledků. Propojujeme správné lidi se skvělými týmy.
      </Text>
    </Section>
    <Section>
      <Heading center>To jsme my</Heading>
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
      <SimpleCard
        heading="Respektujeme odlišnosti druhých"
        text="Podcenit výběr lidí je první chybou. Čas věnovaný dobrému výběru ušetří mnoho starostí a zvýší efektivitu vašeho týmu."
      />
      <SimpleCard
        heading="Důvěřujeme každému"
        text="Sílu řetězu udává jeho nejslabší článek. Není lepší investice, než rozvíjet každého člena týmu. Tak roste i tým jako celek."
      />
      <SimpleCard
        heading="Komunikujeme s lidmi, ne o lidech"
        text="Sílu řetězu udává jeho nejslabší článek. Není lepší investice, než rozvíjet každého člena týmu. Tak roste i tým jako celek."
      />
      <SimpleCard
        heading="Pomáháme si"
        text="Sílu řetězu udává jeho nejslabší článek. Není lepší investice, než rozvíjet každého člena týmu. Tak roste i tým jako celek."
      />
    </Section>
    <Section>
      <Heading>Kde se můžeme potkat?</Heading>
      <Text>
        Nejsme žádní autoři bestsellerů. Zajímavé lidi rádi poznáváme osobně.
        Nehrajeme si na žádné formality. Potkejte se s námi u piva, sportu, nebo
        jiné akci.
      </Text>
    </Section>
    <Section>
      <ConnectMedailon user={USER_MEDAILON.ANDY} />
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
  }
`
