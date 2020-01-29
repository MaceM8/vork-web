import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import ConnectMedailon from "../components/ConnectMedailon"
import { USER_MEDAILON } from "../constants"
import Heading from "../components/Heading"

const ContactPage = () => (
  <Layout>
    <SEO title="Kontakt" />

    <Section>
      <ConnectMedailon user={USER_MEDAILON.CONTACT} />
    </Section>
    <Section>
      <Heading>Vork consulting s.r.o.</Heading>
    </Section>
  </Layout>
)

export default ContactPage
