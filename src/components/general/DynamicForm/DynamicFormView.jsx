import styled from 'styled-components'

import React from 'react'

import renderFieldList from '../../../functions/renderFieldList'



const DynamicFormSection = styled.section`
    
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




const DynamicFormView = (props) =>  {

    const {
        services,
        username,
        password,
        inputChange,
        formSubmit,
        fields,
        data,
        updateService,
        totalPrice
    } = props;



    return (

        <DynamicFormSection className="DynamicForm">
                
            <h1>DynamicForm</h1>
            
            <form action="" onSubmit={e=>formSubmit(e)}>
                
                <header>
                    <h4>Precio total</h4>
                    <span>${totalPrice?totalPrice:0}</span>
                </header>
                
                {
                    services.map(s=>(s,i)=>(<>{renderFields(i)()}</>))
                }

                                
                <input type="submit"/>

            </form>
            
        </DynamicFormSection>

    )
}


export default DynamicFormView;