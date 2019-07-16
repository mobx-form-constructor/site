import React from 'react'
import { NavLink } from 'react-router-dom'

import { Wrap, Menu, Logo, MenuDivider } from './styled'

function Sidebar() {
  return (
    <Wrap>
      <Logo to="/">🚀 Mobx form constructor</Logo>
      <Menu>
        <li>
          <NavLink to="/" exact>
            Introduction
          </NavLink>
        </li>
        <MenuDivider>Examples:</MenuDivider>
        <li>
          <NavLink to="/examples/simple">Simple form</NavLink>
        </li>
        <li>
          <NavLink to="/examples/field-array">Field Array</NavLink>
        </li>
      </Menu>
    </Wrap>
  )
}

export default Sidebar
