import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import {
  colors,
  H2Gold,
  H4IntroGold,
  fonts,
  medWrapper,
} from "../../styles/helpers"
import BgGraphicOne from "../Graphics/BgGraphicOne"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const getData = graphql`
  {
    team: allWpTeamMember {
      edges {
        node {
          slug
          id
          acfTeamMembers {
            name
            title
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
      }
    }
  }
`

const TeamMembers = ({ data }) => {
  const teamData = useStaticQuery(getData)
  const members = teamData.team.edges

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#team-members-trigger",
          markers: false,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        ".team-member",
        {
          autoAlpha: 0,
          y: 150,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: {
            each: 0.1,
          },
        }
      )
  }, [])

  if (!data.display) return null

  return (
    <TeamMembersSection id="team-members-trigger">
      <div className="wrapper">
        {members.map(member => {
          const imageDisplay = getImage(
            member.node.acfTeamMembers.image.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageAlt = member.node.acfTeamMembers.image.altText
          return (
            <Member className="team-member" key={member.node.id}>
              <Link to={`/our-team/${member.node.slug}`}>
                <div className="image">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fixed"
                  />
                </div>
                <div className="title">
                  <h2>{member.node.acfTeamMembers.name}</h2>
                  <h3>{member.node.acfTeamMembers.title}</h3>
                </div>
                <div className="overlay">
                  <p>Read Bio</p>
                </div>
              </Link>
            </Member>
          )
        })}
      </div>
      <div className="graphic">
        <BgGraphicOne />
      </div>
    </TeamMembersSection>
  )
}

const TeamMembersSection = styled.section`
  position: relative;

  .wrapper {
    ${medWrapper};
    justify-content: flex-start;
  }

  .graphic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

const Member = styled.div`
  display: block;
  position: relative;
  width: calc(100%);
  margin: 2.5rem 0;

  @media (min-width: 768px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
  }

  @media (min-width: 1025px) {
    width: calc((100% / 3) - 3rem);
    margin: 1.5rem;
  }

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: all 0.3s ease;

    p {
      ${H2Gold}
      text-align: center;
    }
  }

  &:hover {
    box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.4);

    .overlay {
      opacity: 1;
    }
  }

  .title {
    margin-top: -1rem;
    padding: 2rem;
    background-color: ${colors.colorPrimary};
    text-align: center;

    h2 {
      ${H2Gold};
      margin: 0;
      font-family: ${fonts.fontSecondary};
    }

    h3 {
      ${H4IntroGold};
      margin: 0;
      text-transform: uppercase;
    }
  }
`

export default TeamMembers
