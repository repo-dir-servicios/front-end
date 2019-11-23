import React from 'react'

import { Redirect } from "react-router-dom";

import RequestFormView from './RequestFormView';
import UserMessage from './../../general/UserMessage/UserMessage';

import fields from "../../../data/forms/request-form-fields"

import services from "../../../data/fake/servicesFake"

class RequestForm extends React.Component {


    state = {
        username: "nombreusuario",
        current_state: 0,
        redirect: false,
        servicesData: [
            {
                id: null,
                units: null
            },
            {
                id: null,
                units: null
            },
            {
                id: null,
                units: null
            },
        ],
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


    updateService = (service,units,index) => {
        
        if( !! service ) {

            
            const servicesData = this.state.servicesData

            let chosenService = servicesData[index]
            
            if( !! chosenService ) {

                const totalUnits = units > 0 ? units : service.minimum_units;

                chosenService.id = service.id
                
                chosenService.units = totalUnits

            }

            

            let totalPrice = 0
            
            for( let serviceData of servicesData ) {
                                
                // let serviceData = services[sI]

                if( !!  serviceData.units && ! serviceData.units.isNaN ) {
                    
                    const servicePrice = parseInt(serviceData.units) * parseInt(
                        services.find(s=>s.id==serviceData.id).price_per_unit
                    );
                    
                    totalPrice += servicePrice;

                }
            }

            this.setState({
                services,
                totalPrice
            })
            
        } else {
            this.setState({
                totalPrice: null
            })

        }
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
                    
                    services={this.state.servicesData}     

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
