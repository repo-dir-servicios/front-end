import React from 'react'
import ServiceFormView from './ServiceFormView';

import providers from "../../../data/fake/providersFake.json"
import services from "../../../data/fake/servicesFake.json"

/* 

const getValues = (query,data) => {

    if( query.type == "provider" && !! data.id ) {

        const provider = providers.find(p=>p.id==data.id)

        
        if( !! provider ) {
            
            const values = provider[ query.property ].map(
                vId => services.find(s=>s.id==vId).name
            )
            
            
            
            if( !! values ) {            
                return values
            } else {
                return []
            }
            
        }
    }

}

 */

class ServiceForm extends React.Component {

    state = {
        options: [],
        units: 0
    }

    async componentDidUpdate(){
        console.log(this.props);
        
        if( !! this.props.providerId ) {
            
            // obteneer proveedor de db
            const provider = await providers.find(p=>p.id==this.props.providerId)
            const options = await provider.services.map(ps=>{
                const providerService = services.find(s=>s.id==ps)
                return {
                    id: providerService.id, 
                    name: providerService.name, 
                }
            })

            
            if(! this.state.provider) {

                this.setState({
                    provider,
                    options
                })
            }

        }

    }

    serviceSelect = e => {
        const id = e.target.value
        const selected = services.find(s=>s.id==id);

        this.setState({
            selected,
            units: null
        })

        this.props.updateService(
            selected,
            null
        );
        
    }


    unitsSelect = e => {
        const units = e.target.value

        this.setState({
            units
        })

        if( !! this.props.updateService ) {
            this.props.updateService(
                this.state.selected,
                units
            );
    
        }
        
    }

    render() {
        return <ServiceFormView
            {...this.state}
            select={this.serviceSelect}
            unitsSelect={this.unitsSelect} 
        />
    }

}


export default ServiceForm;
