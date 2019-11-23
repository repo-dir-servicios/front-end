import styled from 'styled-components'

import React from 'react'

import renderFieldList from '../../../functions/renderFieldList'



const RequestFormSection = styled.section`
    
    form>header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        * {
            margin: 0;
        }
        span {
            font-size: 3rem;
            font-weight: bold;
        }
    }

`




const RequestFormView = (props) =>  {

    const {
        username,
        password,
        inputChange,
        formSubmit,
        fields,
        data,
        updateService,
        totalPrice
    } = props;


    const renderFields = renderFieldList(
        fields,
        props,
        inputChange,
        data,
        updateService
    )


    return (

        <RequestFormSection className="RequestForm">
                
            <h1>RequestForm</h1>
            
            <form action="" onSubmit={e=>formSubmit(e)}>
                
                <header>
                    <h4>Precio total</h4>
                    <span>${totalPrice?totalPrice:0}</span>
                </header>
                { renderFields }
                                
                <input type="submit"/>

            </form>
            
        </RequestFormSection>

    )
}


export default RequestFormView;