import React from 'react'
import styled from 'styled-components'

import Menu from "../Menu/Menu"


const Footer = styled.footer`
    
    display: flex;
    
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 3rem;

    background-color: #388187;
    color: #fff;
    

`

const FooterMainView = () => (

    <Footer className="FooterMain">
        <Menu/>
    </Footer>

)

export default FooterMainView;