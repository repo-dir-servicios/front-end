import styled from 'styled-components'

import React from 'react'

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
        FooterMain
    </Footer>

)

export default FooterMainView;