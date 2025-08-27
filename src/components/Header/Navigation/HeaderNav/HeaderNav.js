import React from "react"
import styled from "styled-components"
import { medWrapper } from "../../../../styles/helpers"

import HeaderMenuBottom from "./HeaderMenuBottom"

const HeaderNav = ({ location }) => {
  return (
    <HeaderNavStyled>
      <div className="wrapperNav">
        <div className="navBot">
          <div className="navBot__wrapper">
            <HeaderMenuBottom location={location} />
          </div>
        </div>
      </div>
    </HeaderNavStyled>
  )
}

const HeaderNavStyled = styled.div`
  .wrapperNav {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 0;
  }

  .navBot {
    width: 100%;
    padding: 0;

    @media (min-width: 768px) {
      padding: 1rem 0;
    }

    &__wrapper {
      ${medWrapper};
      padding: 0 2rem;
    }
  }
`

export default HeaderNav
