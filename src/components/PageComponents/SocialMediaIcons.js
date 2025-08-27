import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { colors, fonts, H2Gold } from "../../styles/helpers"

import Facebook from "../Icons/Facebook"
import Twitter from "../Icons/Twitter"
import Instagram from "../Icons/Instagram"

const getData = graphql`
  {
    socialIcons: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          facebookUrl
          instagramUrl
          twitterUrl
        }
      }
    }
  }
`

const SocialMediaIcons = () => {
  const data = useStaticQuery(getData)
  return (
    <SocialMediaStyled>
      <p>Social Media</p>
      <ul className="socialIcons">
        <StyledIcon>
          <a
            title="Follow us on Facebook - Link will open in new window"
            target="_blank"
            rel="noreferrer"
            href={
              data.socialIcons.acfOptionsSiteWideSettings.acfSiteWideSettings
                .facebookUrl
            }
          >
            <i>
              <Facebook />
              <span className="visuallyhidden">Facebook</span>
            </i>
          </a>
        </StyledIcon>
        <StyledIcon>
          <a
            title="Follow us on Instagram - Link will open in new window"
            target="_blank"
            rel="noreferrer"
            href={
              data.socialIcons.acfOptionsSiteWideSettings.acfSiteWideSettings
                .instagramUrl
            }
          >
            <i>
              <Instagram />
              <span className="visuallyhidden">Instagram</span>
            </i>
          </a>
        </StyledIcon>
        <StyledIcon>
          <a
            title="Follow us on Twitter - Link will open in new window"
            target="_blank"
            rel="noreferrer"
            href={
              data.socialIcons.acfOptionsSiteWideSettings.acfSiteWideSettings
                .twitterUrl
            }
          >
            <i>
              <Twitter />
              <span className="visuallyhidden">Twitter</span>
            </i>
          </a>
        </StyledIcon>
      </ul>
    </SocialMediaStyled>
  )
}

const SocialMediaStyled = styled.div`
  display: none;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: calc(100%);
  }

  @media (min-width: 1025px) {
    width: calc(100%);
    padding: 2rem 4rem 5rem;
  }

  p {
    ${H2Gold};
    margin: 0;
    margin-right: 2rem;
    font-family: ${fonts.fontSecondary};
  }

  .socialIcons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-self: center;
    padding: 0 1rem;
  }
`

const StyledIcon = styled.li`
  display: inline-block;
  margin-right: 1rem;
  margin-left: 1rem;

  &:first-of-type {
    margin-left: 0;
  }

  a {
    display: block;
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 6rem;
      height: 6rem;
    }
    @media (min-width: 1025px) {
      width: 6rem;
      height: 6rem;
    }

    &:focus {
      outline: 0.4rem solid #003b49;
      transition: outline-width 0.35s ease-in-out;
    }

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    svg {
      display: block;
      width: 4rem;
      height: 4rem;
      margin: auto;
      transition: all 0.3s ease-out;
      fill: ${colors.colorPrimary};

      @media (min-width: 768px) {
        width: 6rem;
        height: 6rem;
      }
      @media (min-width: 1025px) {
        width: 6rem;
        height: 6rem;
      }

      &:hover {
        fill: ${colors.colorTertiary};
      }
    }
  }
`

export default SocialMediaIcons
