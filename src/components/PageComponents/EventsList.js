import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import {
  colors,
  H2Brown,
  medWrapper,
  fontSizer,
  fonts,
  B1Brown,
  Btn1GoldRev,
} from "../../styles/helpers"

import BgGraphicOne from "../Graphics/BgGraphicOne"

const getData = graphql`
  {
    events: allWpResolveEvents(sort: { order: DESC, fields: date }) {
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

const EventsList = ({ data }) => {
  const eventData = useStaticQuery(getData)
  const events = eventData.events.edges
  if (!data.display) return null

  return (
    <EventsListSection>
      <div className="wrapper">
        {events.map(event => {
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

          if (!event.node.acfEvents.ongoingEvent) {
            let dateArray = []
            dateArray = event.node.acfEvents.dateTime
              .split("/")
              .join(" ")
              .split(" ")

            dbDay = parseInt(dateArray[0])
            const dbMonth = parseInt(dateArray[1])
            monthName = months[dbMonth - 1]
          }

          return (
            <ListItem key={event.node.id}>
              <div className="date">
                <p>
                  {event.node.acfEvents.ongoingEvent ? (
                    <>{event.node.acfEvents.ongoingEventDatesAndTimes}</>
                  ) : (
                    <>
                      <span>{monthName}.</span>
                      <span className="big-number">{dbDay}</span>
                    </>
                  )}
                </p>
              </div>
              <div className="content">
                <div className="content__title">
                  <h2>{event.node.title}</h2>
                </div>
                <div className="content__location">
                  <p>
                    <span>Location: </span>
                    {event.node.acfEvents.location}
                  </p>
                  {event.node.acfEvents.ongoingEvent ? null : (
                    <p>
                      <span>Time: </span>
                      {event.node.acfEvents.dateTime}
                    </p>
                  )}
                </div>
                <div
                  className="content__excerpt"
                  dangerouslySetInnerHTML={{
                    __html: event.node.acfEvents.excerpt,
                  }}
                />
                <div className="content__button">
                  <Link to={`/events/${event.node.slug}`}>
                    More Information
                  </Link>
                </div>
              </div>
            </ListItem>
          )
        })}
      </div>
      <div className="graphic">
        <BgGraphicOne />
      </div>
    </EventsListSection>
  )
}

const EventsListSection = styled.section`
  position: relative;

  .wrapper {
    ${medWrapper};
  }

  .graphic {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    z-index: -1;
  }
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 3rem 0;
  padding: 2rem;
  border-top: solid 0.25rem ${colors.colorTertiary};

  .date {
    width: 100%;

    @media (min-width: 768px) {
      width: 25%;
      text-align: center;
    }

    p {
      ${H2Brown};
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
      font-weight: normal;
      color: ${colors.colorPrimary};

      span {
        display: block;
        margin: 0;
      }

      .big-number {
        ${fontSizer(5, 9, 76.8, 150, 5.0)};
        font-family: ${fonts.fontSecondary};
      }
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(75% - 4rem);
      margin-left: 4rem;
    }

    &__title {
      h2 {
        ${H2Brown};
        font-family: ${fonts.fontSecondary};
      }
    }

    &__location {
      padding-bottom: 2.5rem;

      p {
        ${B1Brown};
        ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
        margin: 0;

        span {
          text-transform: uppercase;
        }
      }
    }

    &__excerpt {
      p {
        ${B1Brown};
        ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
      }
    }

    &__button {
      a {
        ${Btn1GoldRev};
      }
    }
  }
`

export default EventsList
