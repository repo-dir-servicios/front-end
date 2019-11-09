import styled from 'styled-components'

import React from 'react'
import {Link} from 'react-router-dom'



const ProviderPreviewView = ({
    id,
    first_name,
    last_name,
    category
}) => (

    <article className="ProviderPreview">
        <Link to={`/providers/${id}`}>
            <header>
                <span>
                    { first_name }
                </span>
                <span>
                    { last_name }
                </span>
            </header>
            <footer>
                <small>
                    { category }
                </small>
            </footer>
        </Link>
    </article>

)

export default ProviderPreviewView;