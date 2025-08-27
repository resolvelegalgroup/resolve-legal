import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { B1Gold, colors, fontSizer } from "../../styles/helpers"

import Wysiwyg from "../PageComponents/Wysiwyg"

const getData = graphql`
  {
    calgary: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          calgaryAddress
        }
      }
    }
  }
`

const Calgary = () => {
  const data = useStaticQuery(getData)
  return (
    <AddressStyled>
      <h3>Calgary</h3>
      <div className="footer-wysiwyg">
        <Wysiwyg
          data={{
            wysiwyg:
              data?.calgary.acfOptionsSiteWideSettings?.acfSiteWideSettings
                ?.calgaryAddress,
          }}
        />
      </div>
    </AddressStyled>
  )
}

const AddressStyled = styled.div`
  width: calc(100%);

  @media (min-width: 768px) {
    width: calc(27.5% - 2rem);
    margin-right: 2rem;
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

export default Calgary
