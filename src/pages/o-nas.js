import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Text from "../components/Text"
import SimpleCard from "../components/SimpleCard"
import ConnectMedailon from "../components/ConnectMedailon"
import { USER_MEDAILON } from "../constants"

const AboutPage = () => (
  <Layout>
    <SEO title="O nás" />

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
      <Heading>To jsme my</Heading>
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
