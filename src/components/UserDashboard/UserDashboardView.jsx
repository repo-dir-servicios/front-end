import styled from 'styled-components'

import React from 'react'
import RequestPreview from '../Requests/RequestPreview/RequestPreview';
import ContractPreview from '../Contracts/ContractPreview/ContractPreview';


import style from "./UserDashboard.scss";
import UserDashboardSection from './UserDashboardSection';


const UserDashboardView = ({
    requests,
    contracts
}) => {


    const renderRequests = requests.map((r,index)=>(
        <RequestPreview {...r} key={`request_preview_${index}`}/>
    ))
    const renderContracts = contracts.map((c,index)=>(
        <ContractPreview {...c} key={`contract_preview_${index}`}/>
    ))

    return (

        <section className="UserDashboard">
            
            <UserDashboardSection
                title="Nuevas Solicitudes"
                list={renderRequests}
                number={requests.length}
            />


            <UserDashboardSection
                title="Proximos Contratos"
                list={renderContracts}
                number={contracts.length}
            />
            
        </section>
    
    )
}

export default UserDashboardView;