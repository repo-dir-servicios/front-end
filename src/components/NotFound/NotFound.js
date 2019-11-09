import React from 'react'

import styled from 'styled-components'

const NotFoundSection = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


class NotFound extends React.Component {

    render() {
        return (
            <NotFoundSection>
                <h1>
                    404
                </h1>
                <p>
                    No Encontrado
                </p>
            </NotFoundSection>
        )
    }

}


export default NotFound;
