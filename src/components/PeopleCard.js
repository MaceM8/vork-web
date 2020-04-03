import React from "react"
import styled from "styled-components"

import { WHITE, BORDER_RADIUS } from "../constants"
import Heading from "./Heading"
import Text from "./Text"
import RoundImage from "./RoundImage"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: ${WHITE};
  border-radius: ${BORDER_RADIUS};
  margin: 0 auto;
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
  max-width: 275px;
`

const BioWrapper = styled.div`
  margin-top: 2rem;
`

const getAboutText = (name, about) => {
  if (name === "Adéla Klapková") {
    return "Starám se o portfolio partnerů a projektů, kterým můžeme v rámci našich kapacit pomoci. Jednám otevřeně, odkrývám karty našeho businessu a v rámci nastavování spolupráce se zákazníky řeším ,,fair rate”. Ráda přijímám nové výzvy v podobě náročnějších a komplexnějších  projektů. Ve volném čase ráda cestuji, sportuji, rozšiřuji si IT dovednosti a  zkouším nové recepty."
  }

  if (name === "Lucie Kotorová") {
    return "Ráda poznávám a komunikuji s lidmi, kteří pracují nebo chtějí pracovat v IT. Naslouchám, co je baví a na základě toho jim pomáhám najít ten správný a zajímavý projekt. Hodně si v životě zakládám na upřímnosti a tu přenáším i do své práce. Co dalšího mne charakterizuje, je odvaha. Pouštím se do nových věcí po hlavě a proto mě ve volném čase najdete buď po vodou, nebo na skále, na kole či inlinech, v Čechách nebo v zahraničí, a sem tam vám upletu i košík z pedigu."
  }

  return about
}

const PeopleCard = ({ person: { name, about, picture } }) => (
  <Wrapper>
    <RoundImage
      fixed={picture.childImageSharp.fixed}
      alt={picture.childImageSharp.Alt}
    />
    <BioWrapper>
      <Heading small center>
        {name}
      </Heading>
      <Text small>{getAboutText(name, about)}</Text>
    </BioWrapper>
  </Wrapper>
)

export default PeopleCard
