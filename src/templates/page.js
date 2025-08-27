import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PageComponentGroups from "../components/PageComponentGroups"

const Page = props => {
  const { components, seo, pageStyles } = props.data
  return (
    <Layout pagestyles={pageStyles}>
      <Seo
        title={seo.pageSeoData.swbThemeMetaTitle}
        description={seo.pageSeoData.swbThemeDescription}
        metaImg={seo.pageSeoData.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <PageComponentGroups pageStyles={pageStyles} components={components} />
    </Layout>
  )
}

export const pageTempQuery = graphql`
  query pageTempPage($id: String!) {
    seo: wpPage(id: { eq: $id }) {
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

    pageStyles: wpPage(id: { eq: $id }) {
      acfPageStyles {
        backgroundGraphicActive
        heroImageTop
        sideStripe
      }
    }

    components: wpPage(id: { eq: $id }) {
      acfMainTemplateFields {
        pageComponents {
          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroOne {
            fieldGroupName
            logoDisplay
            subTitleDisplay
            subTitle
            title
            titleTag
            buttonRequired
            buttonOneText
            buttonOneSlug
            secondButtonRequired
            secondButtonText
            secondButtonSlug
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2000)
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ImageByContent {
            fieldGroupName
            title
            titleTag
            content
            buttonRequired
            buttonText
            buttonSlug
            backgroundColor
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2000)
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentBlockOne {
            fieldGroupName
            leftTitle
            leftTitleTag
            leftContent
            rightTitle
            rightTitleTag
            rightContent
            rightButtonRequired
            rightButtonText
            rightButtonSlug
            backgroundColor
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ThreeColumnsContent {
            fieldGroupName
            columns {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1250)
                  }
                }
              }
              linkRequired
              linkSlug
              title
              content
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_SocialMediaIcons {
            fieldGroupName
            displaySocialMediaIcons
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_Testimonials {
            fieldGroupName
            displayTestimonials
            testimonialImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2000)
                  fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DidYouKnow {
            fieldGroupName
            displayDidYouKnow
            didYouKnowImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                  fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_LinkBoxes {
            fieldGroupName
            boxes {
              title
              subTitle
              slug
              icon {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1250)
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_CalloutAction {
            fieldGroupName
            title
            content
            buttonText
            buttonSlug
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_TitleNoImage {
            fieldGroupName
            title
            titleTag
            content
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_TitleOne {
            fieldGroupName
            title
            titleTag
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_TitleTwo {
            fieldGroupName
            title
            titleTag
            content
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_TitleThree {
            fieldGroupName
            title
            titleTag
            content
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_TitleFour {
            fieldGroupName
            title
            titleTag
            content
            buttonRequired
            buttonPhoneNumber
            buttonText
            buttonSlug
            secondButton
            secondButtonText
            secondButtonSlug
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_TitleSimpleContent {
            fieldGroupName
            title
            titleTag
            content
            backgroundGraphic
            buttonRequired
            buttonOneText
            buttonOneSlug
            sectionButtonRequired
            buttonTwoText
            buttonTwoSlug
            sectionId
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroPage {
            fieldGroupName
            backgroundGraphic
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2000)
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ImageSimpleContent {
            fieldGroupName
            title
            titleTag
            content
            backgroundGraphic
            reverseImage
            buttonRequired
            buttonText
            buttonSlug
            sectionId
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_Logos {
            fieldGroupName
            title
            logos {
              url
              logo {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 750)
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_WysiwygImages {
            fieldGroupName
            title
            wysiwyg
            imagesPosition
            sideImages {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1500)
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_Directory {
            fieldGroupName

            sections {
              title
              sectionDirectoryTitle
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1000)
                  }
                }
              }

              items {
                title
                content
                url
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 500)
                    }
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ImageLinks {
            fieldGroupName
            title
            links {
              title
              slug
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1000)
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_WysiwygSection {
            fieldGroupName
            title
            wysiwyg
            sidebar
            backgroundGraphic
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_BlockItems {
            fieldGroupName
            blockItems {
              title
              content
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1500)
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_TeamMembers {
            fieldGroupName
            display
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_EventsList {
            fieldGroupName
            display
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_FeaturedEvents {
            fieldGroupName
            featuredEvents
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ResourceArticles {
            fieldGroupName
            display
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_LunchLearnForm {
            fieldGroupName
            displayForm
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContactForm {
            fieldGroupName
            displayForm
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_SupportForm {
            fieldGroupName
            displayForm
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_PhotoGallery {
            fieldGroupName
            gallery {
              altText
              localFile {
                publicURL
                childImageSharp {
                  gatsbyImageData(width: 1750)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_Podcast {
            fieldGroupName
            displayPodcastEpisodes
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_WysiwygGrid {
            fieldGroupName
            content
          }
        }
      }
    }
  }
`

export default Page
