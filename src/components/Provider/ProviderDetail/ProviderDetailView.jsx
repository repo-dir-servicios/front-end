import styled from 'styled-components'

import React from 'react'

const ProviderDetailSection = styled.section`
    
    

`

const ProviderDetailView = ({
    id,
    first_name,
    last_name,
    category,
    description
}) => (

    <article className="ProviderDetail">
        <header>
            <h1>
                <span>
                    { first_name }
                </span>
                &nbsp;
                <span>
                    { last_name }
                </span>
                
            </h1>
            
            <h2>
                { category }
            </h2>
        </header>
        <p>
            { description }
        </p>
    </article>

)

export default ProviderDetailView;