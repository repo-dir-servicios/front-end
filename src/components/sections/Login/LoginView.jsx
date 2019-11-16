import styled from 'styled-components'

import React from 'react'

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

    const renderFields = fields.map((f,index)=>(
        <label key={ `input_${f.name}_${index}`}>
            <span>
                {f.label}
            </span>
            <input
                type={f.type}
                name={f.name}
                value={ props[f.name] }
                onChange={e=>inputChange(f.name, e.target.value)}
            />
        </label>
    ))

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