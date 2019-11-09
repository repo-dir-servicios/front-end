import styled from 'styled-components'

import React from 'react'
import ProviderPreview from '../ProviderPreview/ProviderPreview';

const ProviderListView = ({
    providers
}) => {

    const renderProviders = providers.map(provider=>(
        <ProviderPreview
            key={`provider_${provider.id}`}
            provider={provider}
        />        
    ))
    return (

        <ul>
            { renderProviders }                
        </ul>
    
    )
}

export default ProviderListView;