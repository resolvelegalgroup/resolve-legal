import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

import QuickLinks from "./QuickLinks"
import Calgary from "./Calgary"
import Cochrane from "./Cochrane"
import SpecialRequests from "./SpecialRequests"

const MainContent = () => {
  return (
    <MainContentStyled>
      <QuickLinks />
      <Calgary />
      <Cochrane />
      <SpecialRequests />
    </MainContentStyled>
  )
}

const MainContentStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${colors.colorPrimary};
  width: 100%;
  padding: 4rem 2rem;

  @media (min-width: 768px) {
    width: calc(75%);
    padding: 5rem 4rem;
  }
`

export default MainContent
