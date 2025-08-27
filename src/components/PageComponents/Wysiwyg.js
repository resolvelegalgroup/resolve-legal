import React from "react"
import styled from "styled-components"

import {
  colors,
  medWrapper,
  fonts,
  H1Brown,
  H2Brown,
  H3Brown,
  H3Gold,
  B1Brown,
  fontSizer,
} from "../../styles/helpers"

const Wysiwyg = ({ data, fontsize }) => {
  return (
    <WysiwygStyled fontsize={fontsize}>
      <div className="wrapper">
        <div
          className="wysiwygContent"
          dangerouslySetInnerHTML={{ __html: data?.wysiwyg }}
        />
      </div>
    </WysiwygStyled>
  )
}

const WysiwygStyled = styled.div`
  .wrapper {
    ${medWrapper};
    padding: 0 !important;
  }

  .flexboxDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .wysiwygContent {
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
      ${props =>
        props.theme === "light" ? "color: rgba(245,245,245, 1)" : null};
    }

    h2 {
      ${H2Brown};
      ${props =>
        props.theme === "light" ? "color: rgba(245,245,245, 1)" : null};
    }

    h3 {
      ${H3Brown}
      ${props =>
        props.theme === "light" ? "color: rgba(245,245,245, 1)" : null};
    }

    h4 {
      ${H3Gold}
      ${props =>
        props.theme === "light" ? "color: rgba(245,245,245, 1)" : null};
    }

    p {
      ${B1Brown};
      ${props =>
        props.theme === "light" ? "color: rgba(245,245,245, 1)" : null};
      ${props =>
        props.fontsize === "small"
          ? fontSizer(1.4, 1.6, 76.8, 150, 1.8)
          : null};

      a {
        transition: all 0.3s;
        color: ${colors.colorTertiary};
        ${props =>
          props.theme === "light" ? "color: rgba(245,245,245, 1)" : null};
        font-weight: bold;
        font-size: 1em;

        &:hover {
          color: ${colors.colorSecondary};
          ${props =>
            props.theme === "light" ? "color: rgba(120,119,124, 1)" : null};
        }
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
`

export default Wysiwyg
