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
        }
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
                
            <h1>RequestForm</h1>
            
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