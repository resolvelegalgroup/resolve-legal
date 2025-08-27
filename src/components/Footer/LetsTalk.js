import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, H2Brown, Btn1Brown } from "../../styles/helpers"

const LetsTalk = () => {
  return (
    <LetsTalkStyled>
      <div>
        <h3>Let's Talk!</h3>
      </div>
      <div>
        <Link to="/contact">Connect With Us</Link>
      </div>
    </LetsTalkStyled>
  )
}

const LetsTalkStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 2rem;
  background-color: ${colors.colorTertiary};
  text-align: center;

  @media (min-width: 768px) {
    width: calc(25%);
    padding: 0;
  }

  div {
    width: 100%;
  }

  h3 {
    ${H2Brown};
    margin: 0;
    margin-bottom: 2.5rem;
    padding: 0;
  }

  a {
    ${Btn1Brown};
  }
`

export default LetsTalk
