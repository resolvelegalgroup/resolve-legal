import React from "react"
import styled from "styled-components"
import { colors, H1Brown, standardWrapper } from "../../styles/helpers"
import Wysiwyg from "./Wysiwyg"

import BgGraphicOne from "../Graphics/BgGraphicOne"

const WysiwygSection = ({ data }) => {
  return (
    <WysiwygSectionStyled>
      <div className="wrapper">
        {data.title && (
          <div className="title">
            <h2>{data.title}</h2>
          </div>
        )}
        <div className="content">
          <Wysiwyg fontsize="small" data={{ wysiwyg: data.wysiwyg }} />
        </div>
      </div>
      {data.backgroundGraphic && (
        <div className="graphic">
          <BgGraphicOne />
        </div>
      )}

      {data.sidebar && <div className="sidebar" />}
    </WysiwygSectionStyled>
  )
}

const WysiwygSectionStyled = styled.section`
  position: relative;

  .wrapper {
    ${standardWrapper};
    margin: 0 auto;
    padding-bottom: 0;
  }

  .title {
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;

    h2 {
      ${H1Brown};
    }
  }

  .content {
    width: 100%;
  }

  .sidebar {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 15rem;
    height: 100%;
    background-color: ${colors.colorAccent};
    z-index: 5;

    @media (min-width: 1025px) {
      display: block;
    }
  }

  .graphic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

export default WysiwygSection
