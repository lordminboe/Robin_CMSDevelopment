import React from 'react'
import {Link} from 'gatsby'
import {MenuList,MenuItemsUL} from './headerStyles/headerStyles'

const Menu = ({menuItems}) => {
return (
<MenuList>
{menuItems.map(({node: item}, index) => (
    <MenuItemsUL key={index}>
        <Link activeClassName="nav-active" to={item.path}>
            {item.label}
            </Link>
    </MenuItemsUL>
))}
</MenuList>
)
}

export default Menu;