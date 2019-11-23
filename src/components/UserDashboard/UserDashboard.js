import React from 'react'


import UserDashboardView from './UserDashboardView';


import requestsFake from "../../data/fake/requestsFake"; 
import contractsFake from "../../data/fake/contractsFake" 

import simulateContractNew from "../../simulation/simulateContractNew" 


import UserMessage from  "../general/UserMessage/UserMessage";



class UserDashboard extends React.Component {


    state = {
        requests: [],
        contracts: []
    }




    componentDidMount = () => {
        setTimeout( () => {
            
            this.setState({
                requests: requestsFake,
                contracts: contractsFake,
            })
            
            // setTimeout( () => {
            //     this.requestAccept("0")
            // },1000)
        },2000)
    }




    requestAccept = (id) => {
        // console.log("requestAccept", id);
        
        // enviar solicitud a backend
        
        
        // simular actualizacion de estado
            
            const requests = this.state.requests

            const r = requests.find(r=>r.id===id)

            if( !! r ) {

                r.status = "accepted"
                
                const contracts = simulateContractNew(
                    r,
                    this.state.contracts
                );

                this.setState({
                    requests,
                    contracts
                })
            }
            
    }

    requestCancel = id => {

        // simular actualizacion de estado
                
            const requests = this.state.requests

            const r = requests.find(r=>r.id===id)


            if( !! r ) {

                r.status = "canceled"
                
                this.setState({
                    requests,
                })
            }
            

    }

    contractCancel = (id) => {
        // simular actualizacion de estado
                            
            const contracts = this.state.contracts

            const c = contracts.find(c=>c.id===id)


            if( !! c ) {

                c.status = "canceled"
                
                this.setState({
                    contracts,
                })
            }
            
    }



    render() {
        
        const data = {
            contracts: this.state.contracts.filter(c=>(
                c.status!=="canceled"
            )),
            requests: this.state.requests.filter(r=>(
                r.status!=="accepted"
                &&
                r.status!=="canceled"
            ))
        }

        const actions = {
            requestAccept: this.requestAccept,
            requestCancel: this.requestCancel,
            
            contractCancel: this.contractCancel,
        }

        return (
            !! this.state.requests ?
            <UserDashboardView
                {...data}
                {...actions}
            />
            :
            <UserMessage title="Cargando" message="..."/>
        )
    }

}


export default UserDashboard;
