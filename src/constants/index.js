import { graphql } from "gatsby"

// COLOURS
export const BLUE = "#0B004A"
export const WHITE = "#FFFFFF"
export const BEIGE = "#FBF6F3"
export const GREY1 = "#8A8B8A"
export const GREY2 = "#D8D8D8"
export const GREY3 = "#F4F4F4"
export const GREY4 = "#F2F2F2"

export const PRIMARY = BLUE

// OTHER
export const TRANSITION_TIME = "0.2s"

export const BREAKPOINTS = {
  TABLET: "768px",
  LAPTOP: "1024px",
  DESKTOP: "1440px",
}

export const BORDER_RADIUS = "7px"

export const FONT_SIZE = {
  BASIC: "14px",
  TEXT: "24px",
  HEADING: "30px",
}

export const MENU_LINKS = [
  { to: "/", children: "Domů" },
  { to: "/pomahame", children: "S čím pomáháme" },
  { to: "/o-nas", children: "O nás" },
  { to: "/blog", children: "Blog" },
  { to: "/kontakt", children: "Kontakt" },
]

export const USER_MEDAILON = {
  TOM: {
    photoUrl: "../images/gatsby-astronaut.png",
    title: "Chceš se dozvědět více?",
    text: "Ozvi se Tomášovi, rád se s tebou potká.",
    linkedin: "",
    mail: "tomas.vodenka@vork.cz",
    phone: "+420 724 716 649",
  },
  ANDY: {
    photoUrl: "../images/gatsby-astronaut.png",
    title: "Chceš se s námi spojit?",
    text: "Ozvi se Andy, ráda se s tebou potká.",
    linkedin: "",
    mail: "andrea.sebkova@vork.cz",
    phone: "+420 721 824 455",
  },
  CONTACT: {
    photoUrl: "../images/gatsby-astronaut.png",
    title: "Ozvi se s čímkoliv",
    text: "kontaktuj Andy, ráda se s tebou potká.",
    linkedin: "",
    mail: "andrea.sebkova@vork.cz",
    phone: "+420 721 824 455",
  },
}
