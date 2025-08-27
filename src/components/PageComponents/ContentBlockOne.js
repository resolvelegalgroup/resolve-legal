import React, { useEffect } from "react"
import styled from "styled-components"
import {
  B1Gold,
  B1White,
  Btn1GoldRev,
  colors,
  H1Gold,
  medWrapper,
} from "../../styles/helpers"
import ElementTag from "../../utils/ElementTag"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ContentBlockOne = ({ data }) => {
  const leftTitle = ElementTag(data.leftTitleTag, data.leftTitle)
  const rightTitle = ElementTag(data.rightTitleTag, data.rightTitle)

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#content-block-one`,
          markers: false,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `.content-left`,
        {
          autoAlpha: 0,
          x: -300,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1,
        }
      )

      .fromTo(
        `.content-right`,
        {
          autoAlpha: 0,
          x: 300,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1,
        },
        "start+=0.3"
      )
  }, [])

  return (
    <ContentBlockOneSection
      id="content-block-one"
      bgcolor={data.backgroundColor}
      rightbtn={data.rightButtonRequired}
    >
      <div className="wrapper">
        <div className="content-left">
          <div>{leftTitle}</div>
          <div dangerouslySetInnerHTML={{ __html: data.leftContent }} />
        </div>

        <div className="content-right">
          <div>{rightTitle}</div>
          <div dangerouslySetInnerHTML={{ __html: data.rightContent }} />
          {data.rightButtonRequired && (
            <div className="content-right__btn">
              <Link to={`/${data.rightButtonSlug}`}>
                {data.rightButtonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </ContentBlockOneSection>
  )
}

const ContentBlockOneSection = styled.section`
  padding: 5rem 0;
  background-color: ${props =>
    props.bgcolor === "brown" ? colors.colorAccent : colors.colorPrimary};
  overflow: hidden;

  .wrapper {
    ${medWrapper};
  }

  .content-left {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 0 5rem;
      border-right: 0.1rem solid ${colors.colorTertiary};
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Gold};
      margin-top: 0;
    }

    p {
      ${B1White};
    }
  }

  .content-right {
    position: relative;
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 0 5rem;
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Gold};
    }

    p {
      ${B1Gold};
    }

    &__btn {
      width: 100%;

      @media (min-width: 768px) {
        position: absolute;
        bottom: 2rem;
        left: 5rem;
      }

      a {
        ${Btn1GoldRev};
        min-width: 25rem;
      }
    }
  }
`

export default ContentBlockOne
