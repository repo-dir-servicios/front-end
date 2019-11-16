import styled from 'styled-components'

import React from 'react'

const RegisterSection = styled.section`
    
    

`

const RegisterView = () => (

    <RegisterSection className="Register">
        
        <h1>Registro</h1>
        
        <p>
            Ullamco aliquip in consectetur commodo sit esse exercitation non excepteur sit veniam voluptate reprehenderit mollit. Dolor amet aute exercitation ad eiusmod aliqua duis laborum amet cillum veniam et ex officia. 
        </p>
        <p>
            Lorem commodo excepteur do et labore sunt. Fugiat aliquip reprehenderit sit labore sint pariatur ipsum officia.
        </p>

        <form action="" onSubmit={e=>e.preventDefault()}>
            <label>
                <span>
                    username
                </span>
                <input type="text" name="username"/>
            </label>
            <label>
                <span>
                    first_names
                </span>
                <input type="text" name="first_names"/>
            </label>
            <label>
                <span>
                    last_names
                </span>
                <input type="text" name="last_names"/>
            </label>
            <label>
                <span>
                    phone
                </span>
                <input type="text" name="phone"/>
            </label>
            <label>
                <span>
                    address
                </span>
                <input type="text" name="address"/>
            </label>
            <label>
                <span>
                    profile_picture
                </span>
                <input type="text" name="profile_picture"/>
            </label>
            <input type="submit"/>
        </form>
    </RegisterSection>

)

export default RegisterView;