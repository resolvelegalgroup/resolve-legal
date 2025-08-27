import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { B1Gold, B2White, colors, fontSizer } from "../../styles/helpers"

const getData = graphql`
  {
    quickLinks: wpMenu(name: { eq: "Quick Links Menu" }) {
      name
      menuItems {
        nodes {
          label
          url
          path
          parentDatabaseId
          parentId
          id
          databaseId
        }
      }
    }
  }
`

const QuickLinks = () => {
  const data = useStaticQuery(getData)
  const { quickLinks } = data
  return (
    <QuickLinksStyled>
      <h3>Quick Links</h3>
      <div>
        <nav>
          <ul>
            {quickLinks.menuItems.nodes.map(item => {
              // const slug = item.url
              //   .split("/")
              //   .filter(item => item !== "")
              //   .join("/")
              return (
                <li key={item.id}>
                  <Link to={`${item.path}`}>{item.label}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </QuickLinksStyled>
  )
}

const QuickLinksStyled = styled.div`
  width: calc(100%);

  @media (min-width: 768px) {
    width: calc(25%);
  }

  h3 {
    ${B1Gold};
  }

  nav {
    width: 100%;
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      li {
        ${B2White};
        ${fontSizer(1.2, 1.3, 76.8, 150, 1.8)};
        width: 100%;

        a {
          ${B2White};
          ${fontSizer(1.2, 1.3, 76.8, 150, 1.8)};
          padding: 1rem 0;

          &:hover {
            color: ${colors.colorTertiary};
          }
        }
      }

      li:first-of-type {
        a {
          padding-left: 0;
        }
      }

      span {
        color: ${colors.white};
      }
    }
  }
`

export default QuickLinks
