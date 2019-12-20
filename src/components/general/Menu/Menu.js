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
                Home
            </NavLink>
            <NavLink exact to="/categories">
                Categorias
            </NavLink>
            {/* <NavLink exact to="/login">
                Login
            </NavLink> */}
            <NavLink exact to="/providers">
                Proveedores
            </NavLink>
            {/* <NavLink exact to="/services">
                Servicios
            </NavLink> */}
            <NavLink exact to="/profile">
                Perfil
            </NavLink>
            <NavLink exact to="/register">
                Registro
            </NavLink>
        </MenuList>
    </MenuNav>
)

export default Menu;