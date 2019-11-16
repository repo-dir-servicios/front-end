import React from 'react'


import UserDashboardView from './UserDashboardView';


import requestsFake from "../../data/fake/requestsFake"; 
import contractsFake from "../../data/fake/contractsFake" 

import UserMessage from  "../general/UserMessage/UserMessage";



class UserDashboard extends React.Component {


    state = {
    }


    componentDidMount = () => {
        setTimeout( () => {

            this.setState({
                requests: requestsFake,
                contracts: contractsFake,
            })
            
        },2000)
    }


    render() {
        return (
            !! this.state.requests ?
            <UserDashboardView {...this.state}/>
            :
            <UserMessage title="Cargando" message="..."/>
        )
    }

}


export default UserDashboard;
