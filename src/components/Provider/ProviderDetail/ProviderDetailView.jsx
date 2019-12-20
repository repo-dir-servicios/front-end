import React from 'react'
import {Link} from 'react-router-dom'

import styled from 'styled-components'


const ProviderDetailSection = styled.section`
    header{
        background-color: black;
    }
`

const ProviderDetailView = ({
    id,
    first_name,
    last_name,
    category,
    description
}) => (

    <article className="ProviderDetail">
        <header className="prov">
            <h1 className="Title">
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

        <footer>
            <Link to={`/provider/${id}/new-request`}>
                <button>
                    Solicitar un servicio
                </button>
            </Link>
        </footer>

    </article>


)

export default ProviderDetailView;