import React from 'react'

import renderFieldList from '../../../functions/renderFieldList'

import styled from 'styled-components'


const LoginSection = styled.section`
    
    

`




const LoginView = (props) =>  {

    const {
        username,
        password,
        inputChange,
        formSubmit,
        fields
    } = props;

    const renderFields = renderFieldList(fields,props,inputChange)

    return (

        <LoginSection className="Login">
                
            <h1>Login</h1>
            
            <form action="" onSubmit={e=>formSubmit(e)}>
                
                { renderFields }
                                
                <input type="submit"/>

            </form>
            
        </LoginSection>

    )
}


export default LoginView;