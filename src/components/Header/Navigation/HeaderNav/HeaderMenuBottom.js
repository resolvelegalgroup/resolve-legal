import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import HeaderNavItem from "./HeaderNavItem"

const getData = graphql`
  {
    headerMenuBot: wpMenu(name: { eq: "Main Menu" }) {
      name
      menuItems {
        nodes {
          label
          url
          path
          parentDatabaseId
          parentId
          id
          databaseId
          childItems {
            nodes {
              label
              url
              path
            }
          }
        }
      }
    }
  }
`

const HeaderMenu = ({ location }) => {
  const data = useStaticQuery(getData)
  const { headerMenuBot } = data
  const allNavItems = headerMenuBot?.menuItems?.nodes
  const navItems = allNavItems.filter(item => item.parentDatabaseId === 0)
  const subItems = allNavItems.filter(item => item.parentDatabaseId !== 0)
  const navItemsWithSubs = navItems.map(item => {
    const itemWithSubs = subItems.filter(
      subItem => subItem.parentDatabaseId === item.databaseId
    )
    item.subItems = itemWithSubs
    return item
  })

  const headerNavigation = navItems ? (
    navItemsWithSubs.length > 0 ? (
      <HeaderNavStyled role="navigation" aria-label="primary">
        <ul className="mainNavWrapper">
          {navItemsWithSubs.map(item => {
            return (
              <HeaderNavItem key={item.id} item={item} location={location} />
            )
          })}
        </ul>
      </HeaderNavStyled>
    ) : null
  ) : null
  return headerNavigation
}

const HeaderNavStyled = styled.nav`
  display: none;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    align-self: center;
    flex-wrap: wrap;
  }

  .mainNavWrapper {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-evenly;
    width: 100%;

    @media (min-width: 1025px) {
      justify-content: space-evenly;
      margin-top: 0;
    }
  }
`

export default HeaderMenu
