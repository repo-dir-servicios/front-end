import styled from 'styled-components'

import React from 'react'

const ProviderDetailSection = styled.section`
    
    

`

const ProviderDetailView = ({
    id
}) => (

    <ProviderDetailSection className="ProviderDetail">
        ProviderDetail { id }
    </ProviderDetailSection>

)

export default ProviderDetailView;