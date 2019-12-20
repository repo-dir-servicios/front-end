import styled from 'styled-components'

import React from 'react'

import DynamicForm from '../../general/DynamicForm/DynamicForm';



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
            color: #2E818A;

        }
        
    }
    input{
        border-color: #2E818A;
        box-shadow: 3px 3px 3px #C5F8E6;
        }
    h1, h4{
        color: #2E818A;

    }

`




const RequestFormView = (props) =>  {

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


    const formProps = {

        fields,
        props,
        inputChange,
        data,
        updateService,
        
    }


    return (

        <RequestFormSection className="RequestForm">
                
            <h1>Calcular costo</h1>
            
            <form action="" onSubmit={e=>formSubmit(e)}>
                
                <header>
                    <h4>Precio total</h4>
                    <span>${totalPrice?totalPrice:0}</span>
                </header>
                
                {
                    services.map((s,i)=>(
                        <DynamicForm
                        key={"df_"+i}
                        {...formProps}
                        i={i}
                        />
                    ))
                }

                                
                <input type="submit"/>

            </form>
            
        </RequestFormSection>

    )
}


export default RequestFormView;