import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { B1Gold, colors, fontSizer } from "../../styles/helpers"

import Wysiwyg from "../PageComponents/Wysiwyg"

const getData = graphql`
  {
    special: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          specialRequests
        }
      }
    }
  }
`

const SpecialRequests = () => {
  const data = useStaticQuery(getData)
  return (
    <SpecialRequestsStyled>
      <h3>Special Requests</h3>
      <div className="footer-wysiwyg">
        <Wysiwyg
          data={{
            wysiwyg:
              data?.special.acfOptionsSiteWideSettings?.acfSiteWideSettings
                ?.specialRequests,
          }}
        />
      </div>
    </SpecialRequestsStyled>
  )
}

const SpecialRequestsStyled = styled.div`
  width: calc(100%);

  @media (min-width: 768px) {
    width: calc(20%);
  }

  h3 {
    ${B1Gold};
  }

  .footer-wysiwyg {
    .wysiwygContent {
      margin: 0;

      p,
      a {
        ${fontSizer(1.2, 1.3, 76.8, 150, 1.8)};
        color: ${colors.white};
      }

      a {
        font-weight: normal;
      }

      a:hover {
        color: ${colors.colorTertiary};
      }
    }
  }
`

export default SpecialRequests
