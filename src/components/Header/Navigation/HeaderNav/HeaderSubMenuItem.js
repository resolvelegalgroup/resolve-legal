import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, Nav1Gold, fontSizer } from "../../../../styles/helpers"

import HeaderSubTwoMenu from "./HeaderSubTwoMenu"

const HeaderSubMenuItem = ({
  item,
  handleIsActiveOffBlur,
  isLast,
  handleIsActiveOffTopLevel,
}) => {
  const [subActive, setSubActive] = useState(false)

  const handleIsActiveOn = () => {
    setSubActive(true)
  }

  const handleIsActiveOff = () => {
    setSubActive(false)
  }
  const slug = item.url
    .split("/")
    .filter(item => item !== "")
    .filter(item => item !== "http:")
    .filter(item => item !== "https:")
    .join("/")

  const handleDropDownBlur = () => {
    if (!isLast) return
    handleIsActiveOffBlur()
  }

  return (
    <HeaderSubMenuItemStyled
      onMouseEnter={handleIsActiveOn}
      onMouseLeave={handleIsActiveOff}
      subactive={subActive}
    >
      <Link className="subMenuItem" to={`/${slug}`} onBlur={handleDropDownBlur}>
        {item.label}
        {item.childItems.nodes.length > 0 && (
          <span className="subIndicator">&#x25BC;</span>
        )}
      </Link>
      {item.childItems.nodes.length > 0 && (
        <HeaderSubTwoMenu
          handleIsActiveOff={handleIsActiveOff}
          handleIsActiveOffTopLevel={handleIsActiveOffTopLevel}
          subactive={subActive}
          items={item.childItems.nodes}
        />
      )}
    </HeaderSubMenuItemStyled>
  )
}

const HeaderSubMenuItemStyled = styled.li`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;

  a.subMenuItem {
    ${Nav1Gold};
    ${fontSizer(1.2, 1.4, 76.8, 150, 1.8)};
    position: relative;
    display: block;
    width: 100%;
    padding: 0.5rem 1.5rem;
    background-color: ${props =>
      props.subactive ? colors.colorTertiary : "transparent"};
    color: ${props => (props.subactive ? colors.black : colors.colorTertiary)};
    border: none;
    text-align: left;

    .subIndicator {
      position: absolute;
      top: 1rem;
      right: 1.5rem;
      display: inline-block;
      color: ${props =>
        props.subactive ? colors.black : colors.colorTertiary};
      transform: rotate(-90deg);
      font-size: 1rem;
      padding-left: 0.5rem;
    }

    &[aria-current="page"] {
      color: ${colors.white};
      box-shadow: 0 0.15rem 0 0 ${colors.colorTertiary};

      &:hover {
        border: none;
        color: ${colors.white};
        cursor: default;
      }
    }

    &:hover {
      border: none;
      background-color: ${colors.colorTertiary};
      color: ${colors.black};

      .subIndicator {
        color: ${colors.black};
      }
    }

    &::before {
      display: block;
      position: absolute;
      bottom: 0rem;
      right: 1.5rem;
      left: 1.5rem;
      height: 0.1rem;
      background-color: ${colors.colorTertiary};
      content: "";
    }
  }
`

export default HeaderSubMenuItem
