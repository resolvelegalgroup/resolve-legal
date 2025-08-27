import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Brown,
  H1Brown,
  H2Brown,
  H3Brown,
  H3Gold,
  fonts,
  medWrapper,
  fontSizer,
  Btn1GoldRev,
  colors,
} from "../../styles/helpers"

import ElementTag from "../../utils/ElementTag"
import BgGraphicOne from "../Graphics/BgGraphicOne"
import { Link } from "gatsby"

const ImageSimpleContent = ({ data }) => {
  const mainTitleDisplay = ElementTag(data.titleTag, data.title)
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <ImageSimpleContentSection
      id={data.sectionId ? data.sectionId : ""}
      reverseimg={data.reverseImage}
    >
      <div className="wrapper">
        <div className="image">
          <GatsbyImage image={imageDisplay} alt={imageAlt} layout="fixed" />
        </div>
        <div className="content">
          {mainTitleDisplay}
          <div
            className="content__wysiwyg"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          {data.buttonRequired && (
            <div className="button">
              <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
            </div>
          )}
        </div>
      </div>
      {data.backgroundGraphic && (
        <div className="graphic">
          <BgGraphicOne />
        </div>
      )}
    </ImageSimpleContentSection>
  )
}

const ImageSimpleContentSection = styled.section`
  position: relative;
  padding: 5rem 0;

  .wrapper {
    ${medWrapper};
    align-items: center;
    flex-direction: ${props => (props.reverseimg ? "row" : "row-reverse")};
  }

  .image {
    width: calc(100%);
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(50% - 4rem);
      margin-right: ${props => (props.reverseimg ? "4rem" : "0rem")};
      margin-bottom: 0;
      margin-left: ${props => (props.reverseimg ? "0rem" : "4rem")};
    }
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Brown};
      margin-top: 0;
      font-weight: normal;
    }

    p {
      ${B1Brown};
      ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};

      &:last-of-type {
        margin: 0;
      }
    }

    .button {
      width: 100%;
      margin-top: 2.5rem;

      a {
        ${Btn1GoldRev};
      }
    }

    &__wysiwyg {
      width: 100%;
      max-width: 90rem;
      margin-top: 2.5rem;
      margin-right: auto;
      margin-bottom: 2.5rem;
      margin-left: auto;

      &::after {
        display: table;
        clear: both;
        content: "";
      }

      .post-edit-link {
        font-size: 1.6rem;
      }

      blockquote {
        display: block;
        width: 95%;
        margin: 1.5rem auto 2rem;
        padding: 0 2.25rem;
        border-right: 5px solid ${colors.grey};
        border-left: 5px solid ${colors.grey};
        font-size: 1.6rem;
        font-style: $italic;

        @media (min-width: 768px) {
          width: 80%;
          margin: 5em auto;
          padding: 0 3rem;
        }

        p {
          margin-bottom: 0;

          &::before,
          &::after {
            font-family: ${fonts.fontAwesome};
            color: rgba($color-secondary, 1);
          }

          &::before {
            padding-right: 0.25em;
            content: "\f10d";
          }

          &::after {
            padding-left: 0.25em;
            content: "\f10e";
          }
        }
      }

      hr {
        display: block;
        height: 0.25em;
        background-color: ${colors.colorSecondary};
      }

      ul {
        margin-bottom: 2.5rem;

        li {
          ${B1Brown};
          ${props =>
            props.fontsize === "small"
              ? fontSizer(1.4, 1.6, 76.8, 150, 1.8)
              : null};
          position: relative;
          margin-bottom: 0.75em;
          margin-bottom: ${props =>
            props.fontsize === "small" ? "0.4rem" : "0.75em"};

          padding-left: 0.75em;
          font-size: 1.6rem;

          &::before {
            position: absolute;
            top: 0;
            left: 0;
            padding-right: 0.5em;
            color: rgba($grey, 0.75);
            content: "-";
          }
        }
      }

      ol {
        margin-bottom: 2.5rem;
        margin-left: 1.75rem;
        font-size: 1.6rem;

        li {
          ${B1Brown};
          position: relative;
          margin-bottom: 0.75em;
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
          list-style-position: outside;
          list-style-type: decimal;
        }
      }

      strong {
        font-weight: bold;
      }

      em {
        font-style: $italic;
      }

      h1 {
        ${H1Brown};
      }

      h2 {
        ${H2Brown};
      }

      h3 {
        ${H3Brown}
      }

      h4 {
        ${H3Gold}
      }

      p {
        ${B1Brown};
        ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
      }

      a {
        ${B1Brown};
        ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
        transition: all 0.3s;
        color: ${colors.colorTertiary};

        &:hover {
          color: ${colors.colorSecondary};
        }
      }

      del {
        color: ${colors.colorSecondary};
      }

      /* WordPress Core */
      .alignnone {
        margin: 5px 20px 20px 0;
      }

      .aligncenter,
      div.aligncenter {
        display: block;
        margin: 2rem auto;
      }

      .alignright {
        float: right;
        margin: 5px 0 20px 20px;
      }

      .alignleft {
        float: left;
        margin: 5px 20px 20px 0;
      }

      a img.alignright {
        float: right;
        margin: 5px 0 20px 20px;
      }

      a img.alignnone {
        margin: 5px 20px 20px 0;
      }

      a img.alignleft {
        float: left;
        margin: 5px 20px 20px 0;
      }

      a img.aligncenter {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .wp-caption {
        background: #fff;
        border: 1px solid #f0f0f0;
        max-width: 96%; /* Image does not overflow the content area */
        padding: 5px 3px 10px;
        text-align: center;
      }

      .wp-caption.alignnone {
        margin: 5px 20px 20px 0;
      }

      .wp-caption.alignleft {
        margin: 5px 20px 20px 0;
      }

      .wp-caption.alignright {
        margin: 5px 0 20px 20px;
      }

      .wp-caption img {
        border: 0 none;
        height: auto;
        margin: 0;
        max-width: 98.5%;
        padding: 0;
        width: auto;
      }

      .wp-caption p.wp-caption-text {
        font-size: 1.1rem;
        line-height: 17px;
        margin: 0;
        padding: 0 4px 5px;
      }

      /* Text meant only for screen readers. */
      .screen-reader-text {
        clip: rect(1px, 1px, 1px, 1px);
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }

      .screen-reader-text:focus {
        background-color: #f1f1f1;
        border-radius: 3px;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
        clip: auto !important;
        color: #21759b;
        display: block;
        font-size: 14px;
        font-size: 0.875rem;
        font-weight: bold;
        height: auto;
        left: 5px;
        line-height: normal;
        padding: 15px 23px 14px;
        text-decoration: none;
        top: 5px;
        width: auto;
        z-index: 100000; /* Above WP toolbar. */
      }

      img {
        width: auto;
      }
    }
  }

  .graphic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 140%;
    z-index: -1;
  }
`

export default ImageSimpleContent
