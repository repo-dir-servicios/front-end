import styled from 'styled-components'

import React from 'react'
import ProviderList from '../../Provider/ProviderList/ProviderList';

const ProvidersSection = styled.section`
    h1{
        color: #2E818A;
    }
    

`

const ProvidersView = () => (

    <ProvidersSection className="Providers">
        <h1>
            Proveedores
        </h1>

        <ProviderList/>
        
    </ProvidersSection>

)

export default ProvidersView;