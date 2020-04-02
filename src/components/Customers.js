import React from "react"
import styled from "styled-components"
import { BREAKPOINTS } from "../constants"

import apolloGames from "../assets/images/partners/apolloGames.jpg"
import fox from "../assets/images/partners/fox.jpg"
import ictPro from "../assets/images/partners/ictPro.jpg"
import kb from "../assets/images/partners/kb.jpg"
import liftago from "../assets/images/partners/liftago.png"
import lundegaard from "../assets/images/partners/lundegaard.jpg"
import railclinic from "../assets/images/partners/railclinic.jpg"
import rohlik from "../assets/images/partners/rohlik.jpg"
import teamIT from "../assets/images/partners/teamIT.jpg"
import zasilkovna from "../assets/images/partners/zasilkovna.png"
import zoomInternational from "../assets/images/partners/zoomInternational.jpg"

const partnerList = [
  apolloGames,
  fox,
  ictPro,
  kb,
  liftago,
  lundegaard,
  railclinic,
  rohlik,
  teamIT,
  zasilkovna,
  zoomInternational,
]

const ImagesGrid = styled.div`
  display: grid;
  display: -ms-grid;
  align-items: center;

  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const ImageWrapper = styled.img`
  width: 100%;
`

const Customers = () => (
  <ImagesGrid>
    {partnerList.map(partner => (
      <ImageWrapper src={partner} />
    ))}
  </ImagesGrid>
)

export default Customers
