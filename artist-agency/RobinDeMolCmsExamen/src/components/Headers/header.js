import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './Menu'
import {HeaderNav} from './headerStyles/headerStyles'

const Header = ({ siteTitle }) => {

  const {
    wpcontent: {
      menuItems
    }
  } = useStaticQuery(graphql`
  query {
    wpcontent {
      menuItems {
        edges {
          node {
            path
            label
          }
        }
      }
    }
  }
  `)

return(
  <HeaderNav>
  <Menu menuItems={menuItems.edges} />
  </HeaderNav>
)

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
