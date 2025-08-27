import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import HeaderNavItem from "./HeaderNavItem"

const getData = graphql`
  {
    headerMenuTop: wpMenu(name: { eq: "Header Top Menu" }) {
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
        }
      }
    }
  }
`

const HeaderMenu = () => {
  const data = useStaticQuery(getData)
  const { headerMenuTop } = data
  const allNavItems = headerMenuTop?.menuItems?.nodes
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
            return <HeaderNavItem key={item.id} item={item} top={true} />
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
    justify-content: flex-end;
    width: 100%;

    @media (min-width: 1025px) {
      justify-content: flex-end;
      margin-top: 0;
      padding-right: 5rem;
    }
  }
`

export default HeaderMenu
