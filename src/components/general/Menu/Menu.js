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
`

const Menu = () => (
    <MenuNav>
        <MenuList>
            <NavLink to="/home">
                home
            </NavLink>
            <NavLink to="/categories">
                categories
            </NavLink>
            <NavLink to="/login">
                login
            </NavLink>
            <NavLink to="/providers">
                providers
            </NavLink>
            <NavLink to="/services">
                services
            </NavLink>
            <NavLink to="/profile">
                profile
            </NavLink>
            <NavLink to="/register">
                register
            </NavLink>
        </MenuList>
    </MenuNav>
)

export default Menu;