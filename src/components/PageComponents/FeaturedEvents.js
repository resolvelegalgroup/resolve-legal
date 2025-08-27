import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import {
  B1Brown,
  colors,
  fonts,
  H2Brown,
  medWrapper,
} from "../../styles/helpers"

const getData = graphql`
  {
    events: allWpResolveEvents {
      edges {
        node {
          slug
          id
          title
          acfEvents {
            ongoingEvent
            ongoingEventDatesAndTimes
            dateTime
            excerpt
            fieldGroupName
            fullDetails
            location
            featuredImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }

          eventCategories {
            nodes {
              slug
              termTaxonomyId
            }
          }
        }
      }
    }
  }
`

const FeaturedEvents = ({ data }) => {
  const eventData = useStaticQuery(getData)
  const events = eventData.events.edges
  if (!data.featuredEvents) return null

  const featuredEvents = events.filter(event => {
    const isFeatured = event.node.eventCategories.nodes.findIndex(
      cat => cat.slug === "featured"
    )
    if (isFeatured !== -1) return true
  })

  return (
    <FeaturedEventsSection>
      <div className="wrapper">
        {featuredEvents.map(event => {
          const imageDisplay = getImage(
            event.node.acfEvents.featuredImage.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageAlt = event.node.acfEvents.featuredImage.altText

          const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ]

          let dbDay
          let monthName
          let dbYear

          if (!event.node.acfEvents.ongoingEvent) {
            let dateArray = []
            dateArray = event.node.acfEvents.dateTime
              .split("/")
              .join(" ")
              .split(" ")

            dbDay = parseInt(dateArray[0])
            const dbMonth = parseInt(dateArray[1])
            monthName = months[dbMonth]
            dbYear = parseInt(dateArray[2])
          }

          return (
            <EventBlock key={event.node.id} to={`/events/${event.node.slug}`}>
              <div className="image">
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fixed"
                />
              </div>
              <div className="title">
                <h2>{event.node.title}</h2>
                {event.node.acfEvents.ongoingEvent ? (
                  <p>{event.node.acfEvents.ongoingEventDatesAndTimes}</p>
                ) : (
                  <p>{`${monthName}. ${dbDay}, ${dbYear}`}</p>
                )}
              </div>
            </EventBlock>
          )
        })}
      </div>
    </FeaturedEventsSection>
  )
}

const FeaturedEventsSection = styled.section`
  padding-top: 4rem;

  .wrapper {
    ${medWrapper};
  }
`

const EventBlock = styled(Link)`
  position: relative;
  width: 100%;
  margin: 4rem 0;

  @media (min-width: 768px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
  }

  .title {
    position: absolute;
    right: 2.5rem;
    bottom: -3.5rem;
    left: 2.5rem;
    padding: 0.5rem 2rem;
    background-color: ${colors.colorTertiary};
    text-align: center;

    h2 {
      ${H2Brown};
      margin: 0;
      font-family: ${fonts.fontSecondary};
    }

    p {
      ${B1Brown};
      margin: 0;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
  }
`

export default FeaturedEvents
