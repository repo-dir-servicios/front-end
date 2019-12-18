import React from 'react'

import renderFieldList from '../../../functions/renderFieldList'

import styled from 'styled-components'


const LoginSection = styled.section`
    input{
        border-radius: 4px;
        box-shadow: 2px 2px 2px #C5F8E6;
    }
    .goo{
        background-color: white;
        border: 1px solid;
        border-color: red;
        border-radius: 6px;
        color: red;
    }
    .fb{
        background-color: white;
        border: 1px solid;
        border-color: #3c70a4;
        border-radius: 6px;
        color: #3c70a4;
    }
    .buttons{
        padding-left: 30%;
        flex-direction: column;
        padding-top: 20px;
    }
    

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
            <div className="buttons">
            <button className="fb">Sign with Facebook</button>
            <br/>
            <br/>
            <button className="goo">Sign in whit Google</button>
            </div>
        </LoginSection>

    )
}


export default LoginView;