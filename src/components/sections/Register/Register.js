import React from 'react'

import { Redirect } from "react-router-dom";

import RegisterView from './RegisterView';
import UserMessage from './../../general/UserMessage/UserMessage';

import fields from "../../../data/forms/register-fields"

class Register extends React.Component {


    state = {
        username: "",
        current_state: 0,
        redirect: false
    }


    inputChange = (key,value) => {

        this.setState({
            [key]:value
        })
        
    }
    
    formSubmit = (e) => {

        console.log(this.state);

        this.setState({
            current_state: 1
        })
        
        setTimeout(()=>{

            this.setState({
                current_state: (2 + (Math.random() > 0.9 ? 1 : 0))
            })

        },2000)

        
        e.preventDefault()

    }

    
    redirectLogin = ()=>{
        
        this.setState({
            redirect: "login"
        })
        
    }
    

    render() {
        
        if( this.state.redirect == "login" ) {
            return <Redirect to="/login"/>
        }
        
        switch( this.state.current_state ) {
    
            case 1:
                return (
                    <UserMessage
                        title={"Cargando"}
                        message="..."
                        color={"#aaa"}
                    />
                )

            case 2:
                return (
                    <UserMessage
                        title={"Bien"}
                        message="..."
                        color={"#0f0"}
                        navigateAction={
                            {
                                action: this.redirectLogin,                                
                                message: "Iniciar"
                            }
                        }
                    />
                )

            case 3:
                return (
                    <UserMessage
                        title={"Error"}
                        message="..."
                        color={"#f00"}
                    />
                )

            default: 
                return <RegisterView
                    {...this.state}
                    inputChange={this.inputChange}            
                    formSubmit={this.formSubmit}
                    fields={fields}            
                />
        }
    }

}


export default Register;
