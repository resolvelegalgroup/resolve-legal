import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BgGraphicOne from "../components/Graphics/BgGraphicOne"
import {
  colors,
  H2Brown,
  fontSizer,
  fonts,
  B1Brown,
  Btn1GoldRev,
  standardWrapper,
  Nav1Gold,
  medWrapper,
} from "../styles/helpers"

const event = props => {
  const { seo, event, allEvents } = props.data
  const prevEvent = props.pageContext.prev
  const nextEvent = props.pageContext.next
  const prevEventData = allEvents.edges.find(post => {
    return post.node.slug === prevEvent
  })
  const nextEventData = allEvents.edges.find(post => {
    return post.node.slug === nextEvent
  })

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

  if (!event.acfEvents.ongoingEvent) {
    let dateArray = []
    dateArray = event.acfEvents.dateTime.split("/").join(" ").split(" ")

    dbDay = parseInt(dateArray[0])
    const dbMonth = parseInt(dateArray[1])
    monthName = months[dbMonth - 1]
  }

  return (
    <Layout>
      <Seo
        title={seo.pageSeoData.swbThemeMetaTitle}
        description={seo.pageSeoData.swbThemeDescription}
        metaImg={seo.pageSeoData.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <EventMain>
        <div className="wrapper">
          <div className="event-article">
            <div className="date">
              <p>
                {event.acfEvents.ongoingEvent ? (
                  <>{event.acfEvents.ongoingEventDatesAndTimes}</>
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
                <h2>{event.title}</h2>
              </div>
              <div className="content__location">
                <p>
                  <span>Location: </span>
                  {event.acfEvents.location}
                </p>
                {event.acfEvents.ongoingEvent && (
                  <p>
                    <span>Time: </span>
                    {event.acfEvents.dateTime}
                  </p>
                )}
              </div>
              <div
                className="content__excerpt"
                dangerouslySetInnerHTML={{
                  __html: event.acfEvents.excerpt,
                }}
              />
            </div>
          </div>
        </div>
        <EventNav className="team-nav">
          <div className="wrapper">
            <nav>
              {nextEventData && (
                <Link to={`/events/${nextEventData.node.slug}`}>
                  <span>&lt;</span>
                  Previous Event
                </Link>
              )}
              <Link to="/events">View All Events</Link>
              {prevEventData && (
                <Link to={`/events/${prevEventData.node.slug}`}>
                  Next Event
                  <span>&gt;</span>
                </Link>
              )}
            </nav>
          </div>
        </EventNav>
        <div className="graphic">
          <BgGraphicOne />
        </div>
      </EventMain>
    </Layout>
  )
}

const EventMain = styled.main`
  position: relative;

  .wrapper {
    ${standardWrapper};
  }

  .graphic {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    z-index: -1;
  }

  .event-article {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 3rem 0;
    padding: 2rem;
    border-top: solid 0.25rem ${colors.colorTertiary};
  }

  .date {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(25% - 2rem);
      margin-right: 2rem;
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
      width: 75%;
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
      p,
      a,
      li {
        ${B1Brown};
        ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
      }

      li {
        margin-bottom: 1rem;
      }
    }

    &__button {
      a {
        ${Btn1GoldRev};
      }
    }
  }
`

const EventNav = styled.div`
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
      ${Nav1Gold};

      @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 2rem;
      }
    }
  }
`

export const query = graphql`
  query singleEventQuery($slug: String!) {
    seo: wpResolveEvents(slug: { eq: $slug }) {
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
  
    event: wpResolveEvents(slug: { eq: $slug }) {
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
    }

    allEvents: allWpResolveEvents {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default event
