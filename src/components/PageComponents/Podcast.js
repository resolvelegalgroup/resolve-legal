import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import {
  B1Brown,
  B1White,
  colors,
  fonts,
  H2Brown,
  H2Gold,
  medWrapper,
} from "../../styles/helpers"
import Wysiwyg from "./Wysiwyg"
import BgGraphicOne from "../Graphics/BgGraphicOne"

const getData = graphql`
  {
    podcasts: allWpPodcastEpisode(sort: { order: ASC, fields: date }) {
      edges {
        node {
          id
          slug
          title
          acfPodcastEpisode {
            episodeEmbed
            showNotes
            showNotesRequired
          }
        }
      }
    }
  }
`

const Podcast = ({ data }) => {
  const podcastsData = useStaticQuery(getData)
  const podcasts = podcastsData.podcasts.edges
  const DISPLAY_NUMBER = 10
  // let podcastCount = 0

  const [podcastList, setPodcastList] = useState({
    max: 0,
    current: 0,
    display: [],
    loading: false,
    isMore: false,
  })
  useEffect(() => {
    setPodcastList(prevState => {
      return {
        ...prevState,
        max: podcasts?.length,
        current: DISPLAY_NUMBER,
        display: podcasts.slice(0, DISPLAY_NUMBER),
        isMore: podcasts?.length > DISPLAY_NUMBER,
      }
    })
  }, [podcasts])

  const loadMoreEpisodes = () => {
    setPodcastList(prevState => {
      return {
        ...prevState,
        current: prevState.current + DISPLAY_NUMBER,
        display: podcasts.slice(0, prevState.current + DISPLAY_NUMBER),
        isMore: prevState.max > prevState.current + DISPLAY_NUMBER,
        loading: false,
      }
    })
  }

  const [activePodcast, setActivePodcast] = useState(podcasts[0])

  if (!data.displayPodcastEpisodes) return null

  const handleEpisodePick = epId => {
    const pickedEpisode = podcasts.findIndex(pod => pod.node.id === epId)
    setActivePodcast(podcasts[pickedEpisode])
  }

  return (
    <PodcastSection>
      <div className="wrapper">
        <div className="episode-list">
          <h2>Episode Listings</h2>
          {podcastList.display.map(podcast => {
            return (
              <div
                className={`podcast-title${
                  podcast.node.id === activePodcast.node.id
                    ? " active-podcast"
                    : ""
                }`}
                data-id={podcast.node.id}
                key={podcast.node.id}
              >
                <p onClick={() => handleEpisodePick(podcast.node.id)}>
                  {podcast.node.title}
                </p>
              </div>
            )
          })}

          <div className="load-more-btn">
            <button disabled={!podcastList.isMore} onClick={loadMoreEpisodes}>
              More Episodes
            </button>
          </div>
        </div>
        <div className="episode-current">
          <div className="episode-current__soundcloud">
            <div
              dangerouslySetInnerHTML={{
                __html: activePodcast.node.acfPodcastEpisode.episodeEmbed,
              }}
            />
          </div>
          {activePodcast.node.acfPodcastEpisode.showNotesRequired && (
            <div className="episode-current__shownotes">
              <h2>{activePodcast.node.title}</h2>
              <Wysiwyg
                fontsize="small"
                data={{
                  wysiwyg: activePodcast.node.acfPodcastEpisode.showNotes,
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="graphic">
        <BgGraphicOne />
      </div>
    </PodcastSection>
  )
}

const PodcastSection = styled.section`
  position: relative;

  .wrapper {
    ${medWrapper}
  }

  .episode-list {
    width: calc(100%);
    padding: 2rem 0;
    background-color: ${colors.colorPrimary};

    @media (min-width: 768px) {
      width: calc(30%);
    }

    h2 {
      ${H2Gold};
      padding: 0 2rem 2rem 5rem;
      font-family: ${fonts.fontSecondary};
    }

    .podcast-title {
      padding: 2rem 2rem 2rem 5rem;

      p {
        ${B1White};
        margin: 0;
        cursor: pointer;
      }
    }

    .active-podcast {
      background-color: ${colors.colorTertiary};
    }

    .load-more-btn {
      width: 100%;

      button {
        ${B1Brown};
        width: 100%;
        padding: 2rem 2rem 2rem 5rem;
        border: none;
        background-color: ${colors.colorTertiary};
        color: ${colors.colorPrimary};
        text-align: left;
        text-transform: uppercase;
        cursor: pointer;

        &:disabled {
          background-color: ${colors.colorShad};
          opacity: 0.75;
          cursor: not-allowed;
        }
      }
    }
  }

  .episode-current {
    width: calc(100%);
    padding: 0 2rem 2rem 7.5rem;

    @media (min-width: 768px) {
      width: calc(70%);
    }

    &__soundcloud {
      margin-bottom: 5rem;
      padding-bottom: 5rem;
      border-bottom: solid 0.25rem ${colors.colorTertiary};
    }

    &__shownotes {
      h2 {
        ${H2Brown};
        margin: 0;
        padding: 1rem;
        font-family: ${fonts.fontSecondary};
      }
    }
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

export default Podcast
