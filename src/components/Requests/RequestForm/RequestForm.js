import React from 'react'

import { Redirect } from "react-router-dom";

import RequestFormView from './RequestFormView';
import UserMessage from './../../general/UserMessage/UserMessage';

import fields from "../../../data/forms/request-form-fields"

class RequestForm extends React.Component {


    state = {
        username: "nombreusuario",
        current_state: 0,
        redirect: false,
        data: {}
    }


    componentDidMount = () => {
       
        const providerId = this.props.match.params.id
       
        let data = this.state.data

        data = {
            ...data,
            providerId
        }

        this.setState({
            data
        })

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


    updateService = (service,units) => {
        const totalUnits = units > 0 ? units : service.minimum_units;
        
        const totalPrice = parseInt(totalUnits) * parseInt(service.price_per_unit);

        this.setState({
            totalPrice
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


                return <RequestFormView
                    {...this.state}
                    inputChange={this.inputChange}            
                    formSubmit={this.formSubmit}
                    fields={fields}     
                    data={this.state.data}   
                    updateService={this.updateService}    
                    totalPrice={this.state.totalPrice}    
                />
        }
    }

}


export default RequestForm;
