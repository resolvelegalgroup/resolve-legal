import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import {
  standardWrapper,
  BigWrapper,
  colors,
  H1Brown,
  B1Brown,
  fontSizer,
  Btn1GoldRev,
  medWrapper,
  H3Gold,
} from "../styles/helpers"

import Wysiwyg from "../components/PageComponents/Wysiwyg"
import BgGraphicOne from "../components/Graphics/BgGraphicOne"

const Post = props => {
  const { seo, post, allPosts } = props.data
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next
  const prevPostData = allPosts.edges.find(post => {
    return post.node.slug === prevPost
  })
  const nextPostData = allPosts.edges.find(post => {
    return post.node.slug === nextPost
  })

  const imageDisplay = getImage(
    post.acfPosts.featuredImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = post.acfPosts.featuredImage.altText

  return (
    <Layout location={props.location}>
      <Seo
        title={seo.pageSeoData.swbThemeMetaTitle}
        description={seo.pageSeoData.swbThemeDescription}
        metaImg={seo.pageSeoData.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <PostMain>
        <TitleComponent>
          <div className="title-wrapper">
            <div className="image">
              <GatsbyImage image={imageDisplay} alt={imageAlt} layout="fixed" />
            </div>
            <div className="title">
              <div className="title__inner">
                <h1>{post.title}</h1>
              </div>
              <div className="title__content">
                <p>{post.acfPosts.quoteUnderTitle}</p>
              </div>
            </div>
          </div>
        </TitleComponent>
        <ArticleContent>
          <div className="main-content">
            <Wysiwyg
              fontsize="small"
              data={{ wysiwyg: post.acfPosts.content }}
            />
          </div>
          <div className="side-quote">
            <p>{post.acfPosts.quoteOnSide}</p>
          </div>
        </ArticleContent>
        <PostNav>
          <div className="wrapper">
            <nav>
              {prevPostData && (
                <Link to={`/resources/${prevPostData.node.slug}`}>
                  <span>&lt; </span>
                  Previous Article
                </Link>
              )}

              <Link to="/resources">Home</Link>

              {nextPostData && (
                <Link to={`/resources/${nextPostData.node.slug}`}>
                  Next Article
                  <span> &gt;</span>
                </Link>
              )}
            </nav>
          </div>
        </PostNav>
        <div className="graphic">
          <BgGraphicOne />
        </div>
      </PostMain>
    </Layout>
  )
}

const PostMain = styled.main`
  position: relative;

  .wrapper {
    ${standardWrapper};
  }

  .graphic {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75%;
    z-index: -1;
  }
`

const TitleComponent = styled.section`
  padding: 5rem 0;

  .title-wrapper {
    ${BigWrapper};
    align-items: center;
    padding: 0;
  }

  .image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(35%);
    }
  }

  .title {
    width: calc(100%);
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(65% - 4rem);
      margin-left: 4rem;
      padding-right: 2rem;
    }

    @media (min-width: 1025px) {
      padding-right: 2rem;
    }

    @media (min-width: 1200px) {
      padding-right: 10%;
    }

    &__content {
      @media (min-width: 1025px) {
        max-width: 60rem;
        margin-right: auto;
      }

      p {
        ${B1Brown};
        ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
      }
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Brown};
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    &__inner {
      border-top: solid 0.2rem ${colors.colorTertiary};
    }
  }
`

const ArticleContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  max-width: 110rem;
  margin: auto;
  padding: 2.5rem;

  .main-content {
    width: 100%;
    padding: 0 2rem;

    @media (min-width: 768px) {
      width: 80%;
    }
  }

  .side-quote {
    width: 100%;
    padding: 2.5rem 1rem 2.5rem 0;

    @media (min-width: 768px) {
      width: 20%;
    }

    p {
      ${H3Gold};
      line-height: 1.39;
    }
  }
`

const PostNav = styled.div`
  width: 100%;
  padding-bottom: 5rem;

  .wrapper {
    ${medWrapper};
    max-width: 95rem !important;
    border-top: 0.25rem solid ${colors.colorSecondary};
  }

  nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    a {
      ${Btn1GoldRev};

      @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 2rem;
      }
    }
  }
`

export const query = graphql`
  query singlePostQuery($slug: String!) {
    seo: wpPost(slug: { eq: $slug }) {
      pageSeoData {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }
  
    post: wpPost(slug: { eq: $slug }) {
      id
      date
      slug
      title
      acfPosts {
        content
        quoteUnderTitle
        quoteOnSide
        featuredImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }
      }
      categories {
        nodes {
          name
        }
      }
    }

    allPosts: allWpPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default Post
