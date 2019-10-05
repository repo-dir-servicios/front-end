import styled from 'styled-components'

import React from 'react'
import ProviderList from '../../Provider/ProviderList/ProviderList';

const ProvidersSection = styled.section`
    
    

`

const ProvidersView = () => (

    <ProvidersSection className="Providers">
        <h1>
            Providers
        </h1>

        <ProviderList/>
        
    </ProvidersSection>

)

export default ProvidersView;