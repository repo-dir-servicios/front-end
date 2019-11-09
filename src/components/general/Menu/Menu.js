import React from "react"

import { NavLink } from "react-router-dom";

import styled from 'styled-components'

const MenuNav = styled.ul`
    width: 100%;
`

const MenuList = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    * {
        color: #fff;
    }
    .active {
        font-weight: bold;
    }
`

const Menu = () => (
    <MenuNav>
        <MenuList>
            <NavLink exact to="/">
                home
            </NavLink>
            <NavLink exact to="/categories">
                categories
            </NavLink>
            <NavLink exact to="/login">
                login
            </NavLink>
            <NavLink exact to="/providers">
                providers
            </NavLink>
            <NavLink exact to="/services">
                services
            </NavLink>
            <NavLink exact to="/profile">
                profile
            </NavLink>
            <NavLink exact to="/register">
                register
            </NavLink>
        </MenuList>
    </MenuNav>
)

export default Menu;