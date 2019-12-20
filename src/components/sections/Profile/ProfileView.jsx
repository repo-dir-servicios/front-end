import styled from 'styled-components'

import React from 'react'

const ProfileSection = styled.section`
    .profile{
        justify-content: center;
    }
    img{
        width: 40%;
        padding-top: 40px;
    }
    h3{
        color: #1D606F;
    }
    p{
        text-align: justify;
        border: 2px solid;
        border-color: #2E818A;
        box-shadow: 3px 3px 3px #C5F8E6;

        border-radius: 6px;
        padding: 20px;
    }

`

const ProfileView = () => (

    <ProfileSection className="Profile">
            <center>
            <img src="https://daxenonline.com/inicio/wp-content/uploads/2019/06/user_icon-icons.com_66546.png" alt=""/>
            </center>

        <section className="profile">

            <h3>Ulises Reyes Díaz </h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
               Eum placeat temporibus deserunt aperiam velit dolore eligendi. </p>
            
            {/* <h5>Experiencia</h5>

            <p className="experience">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
               Quos suscipit eaque sequi neque explicabo autem rem, <br/>
               omnis praesentium minima accusamus odit voluptatum in <br/>
               voluptatem itaque reiciendis ea quis nemo excepturi.</p> */}
        </section>

        {/* <center>
        <button>Solicitar Servicio</button>
        </center> */}

    </ProfileSection>

)

export default ProfileView;