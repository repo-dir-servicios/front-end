import styled from 'styled-components'

import React from 'react'

import { content } from "../../../data/content/register"

const RegisterSection = styled.section`
    
    

`




const RegisterView = (props) =>  {

    const {
        username,
        first_names,
        last_names,
        phone,
        address,
        profile_picture,
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

        <RegisterSection className="Register">
                
            <h1>Registro</h1>
            
            <section dangerouslySetInnerHTML={{__html: content }}/>

            <form action="" onSubmit={e=>formSubmit(e)}>
                
                { renderFields }
                                
                <input type="submit"/>

            </form>
            
        </RegisterSection>

    )
}


export default RegisterView;