import React from 'react'

import { Redirect } from "react-router-dom";

import LoginView from './LoginView';
import UserMessage from './../../general/UserMessage/UserMessage';

import fields from "../../../data/forms/login-fields"

class Login extends React.Component {


    state = {
        username: "nombreusuario",
        current_state: 0,
        redirect: false
    }


    inputChange = (key,value) => {

        this.setState({
            [key]:value
        })
        
    }
    
    formSubmit = (e) => {

        const {
            username,
            password
        } = this.state;

        this.setState({
            current_state: 1
        })

        setTimeout(()=>{

            if( username == "bedu" && password == "bedu" ) {

                this.setState({
                    redirect: "home"
                })

            } else {
                this.setState({
                    current_state: 2
                })
            }
            
        
            this.setState({
                current_state: (2 + (Math.random() > 0.9 ? 1 : 0))
            })

        },2000)

        
        e.preventDefault()

    }

    
    loginReset = ()=>{
        
        this.setState({
            current_state: 0
        })
        
    }
    

    render() {
        
        if( this.state.redirect == "home") {
            return <Redirect to="/"/>
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
                        title={"Error"}
                        message="Credenciales mal"
                        color={"#f00"}
                        navigateAction={
                            {
                                action: this.loginReset,                                
                                message: "Reintentar"
                            }
                        }
                    />
                )

            default: 
                return <LoginView
                    {...this.state}
                    inputChange={this.inputChange}            
                    formSubmit={this.formSubmit}
                    fields={fields}            
                />
        }
    }

}


export default Login;
