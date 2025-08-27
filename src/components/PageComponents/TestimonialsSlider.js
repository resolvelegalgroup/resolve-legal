import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { B1White, H1Gold, fontSizer } from "../../styles/helpers"

import TestimonialsIcon from "../Icons/TestimonialsIcon"

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "0",
  arrows: true,
  dots: false,
}

const TestimonialsSlider = ({ testimonials }) => {
  return (
    <TestimonialsSliderStyled>
      <div className="slider-title">
        <h2>Testimonials</h2>
      </div>
      <div className="slider-icon">
        <TestimonialsIcon />
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialSlide key={index}>
              <div
                dangerouslySetInnerHTML={{
                  __html: testimonial.node.testimonials.content,
                }}
              />
              <div>
                <p>{testimonial.node.title}</p>
              </div>
            </TestimonialSlide>
          )
        })}
      </Slider>
    </TestimonialsSliderStyled>
  )
}

const TestimonialsSliderStyled = styled.div`
  position: relative;
  padding: 3rem 4rem;
  background-color: rgba(41, 41, 41, 0.9);
  z-index: 1000;

  @media (min-width: 768px) {
    position: absolute;
    top: 8rem;
    right: 5rem;
    bottom: 8rem;
    width: 60rem;
    padding: 6rem 8rem;
  }

  @media (min-width: 1025px) {
    width: 75rem;
  }

  .slider-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1Gold};
      margin: 0;
    }
  }

  .slider-icon {
    position: absolute;
    bottom: 4rem;
    right: 0;
    left: 0;
    width: 5.5rem;
    height: 5.5rem;
    margin: auto;
  }

  .slick-slider {
    position: relative;
  }
`

const TestimonialSlide = styled.div`
  padding-top: 3.5rem;

  p {
    ${B1White};
    ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
  }
`

export default TestimonialsSlider
