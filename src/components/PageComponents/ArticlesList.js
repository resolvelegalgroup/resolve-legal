import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import {
  colors,
  medWrapper,
  fontSizer,
  fonts,
  Btn1GoldRev,
  H2Gold,
  B1White,
} from "../../styles/helpers"

const getData = graphql`
  {
    posts: allWpPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          slug
          id
          title
          acfPosts {
            excerpt
            featuredImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }
        }
      }
    }
  }
`

const ArticlesList = ({ data }) => {
  const postsData = useStaticQuery(getData)
  const posts = postsData.posts.edges
  if (!data.display) return null
  return (
    <ArticlesListSection>
      <div className="wrapper">
        {posts.map(post => {
          const imageDisplay = getImage(
            post.node.acfPosts.featuredImage.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageAlt = post.node.acfPosts.featuredImage.altText
          return (
            <ArticleCard key={post.node.id}>
              <div className="image">
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fixed"
                />
              </div>
              <div className="content">
                <div className="content__title">
                  <h2>{post.node.title}</h2>
                </div>
                <div
                  className="content__excerpt"
                  dangerouslySetInnerHTML={{
                    __html: post.node.acfPosts.excerpt,
                  }}
                />
                <div className="content__links">
                  <Link to={`/resources/${post.node.slug}`}>Read More</Link>
                </div>
              </div>
            </ArticleCard>
          )
        })}
      </div>
    </ArticlesListSection>
  )
}

const ArticlesListSection = styled.section`
  .wrapper {
    ${medWrapper};
    justify-content: flex-start;
  }
`

const ArticleCard = styled.div`
  width: 100%;
  position: relative;
  margin: 2rem 0;
  padding-bottom: 7.5rem;
  background-color: ${colors.colorAccent};

  @media (min-width: 768px) {
    width: calc((100% / 2) - 2rem);
    margin: 1rem;
  }

  @media (min-width: 1025px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
  }

  .image {
    background-color: ${colors.white};
  }

  .content {
    padding: 4rem;
    background-color: ${colors.colorAccent};

    &__title {
      text-align: center;

      h2 {
        ${H2Gold};
        margin: 0;
        font-family: ${fonts.fontSecondary};
      }
    }

    &__excerpt {
      margin-top: 2.5rem;

      p {
        ${B1White};
        ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
        margin: 0;
      }
    }

    &__links {
      position: absolute;
      right: 4rem;
      bottom: 4rem;
      left: 4rem;

      a {
        ${Btn1GoldRev};
      }
    }
  }
`
export default ArticlesList
