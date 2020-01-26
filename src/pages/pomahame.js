import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Text from "../components/Text"
import BlogPostsSection from "../components/BlogPostsSection"
import ConnectMedailon from "../components/ConnectMedailon"
import { USER_MEDAILON } from "../constants"
import SimpleCard from "../components/SimpleCard"

const HelpingPage = () => (
  <Layout>
    <SEO title="Pomáháme" />

    <Section>
      <Heading>
        Skvělý tým není postaven jen na schopnostech jednotlivců. A my to víme.
      </Heading>
      <Text>
        Postrádáte angažované, odvážné, kooperující ajťáky?
        <br />
        Máte problém s vytvořením efektivně fungujícího týmu?
        <br />
        Chcete ty nejlepšlí lídry za kterými lidi přirozeně půjdou?
      </Text>
    </Section>
    <Section>
      <Heading>
        My Vám s tím pomáháme. Od staffingu po vytváření synergických týmů.
      </Heading>
      <SimpleCard
        heading="Pomáháme s výběrem správných lidí"
        text="Podcenit výběr lidí je první chybou. Čas věnovaný dobrému výběru ušetří mnoho starostí a zvýší efektivitu vašeho týmu."
      />
      <SimpleCard
        heading="Pomáháme s členům týmu osobnostně růst"
        text="Sílu řetězu udává jeho nejslabší článek. Není lepší investice, než rozvíjet každého člena týmu. Tak roste i tým jako celek."
      />
    </Section>
    <Section>
      <ConnectMedailon user={USER_MEDAILON.TOM} />
    </Section>
    <BlogPostsSection
      heading="Příběhy. Know-how. Stalo se"
      text="Kdo ví, kam jde, nemůže se ztratit. V našich článcích sdílíme naše cesty, zkušenosti, pokusy a omyly. Třeba Vám pomohou nalézt i Vaši cestu."
    />
  </Layout>
)

export default HelpingPage
