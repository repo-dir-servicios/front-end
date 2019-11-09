import styled from 'styled-components'

import React from 'react'
import {Link} from 'react-router-dom'


// TODO: borrar id falso
const id = Math.ceil(Math.random()*100)

const ProviderPreviewView = () => (

    <article className="ProviderPreview">
        <Link to={`/providers/${id}`}>
            ProviderPreview
        </Link>
    </article>

)

export default ProviderPreviewView;