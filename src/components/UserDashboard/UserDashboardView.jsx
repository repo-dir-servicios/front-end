import styled from 'styled-components'

import React from 'react'
import RequestPreview from '../Requests/RequestPreview/RequestPreview';
import ContractPreview from '../Contracts/ContractPreview/ContractPreview';


import style from "./UserDashboard.scss";
import UserDashboardSection from './UserDashboardSection';


const UserDashboardView = ({
    requests,
    contracts,

    // actions:
    requestAccept,
    requestCancel,

    contractCancel,

}) => {
    
    const renderRequests = requests
    .map((r,index)=>(
        <RequestPreview
            {...r}
            key={`request_preview_${index}`}
            accept={()=>requestAccept(r.id)}
            cancel={()=>requestCancel(r.id)}
        />
    ))
    const renderContracts = contracts.map((c,index)=>(
        <ContractPreview
            {...c} key={`contract_preview_${index}`}
            cancel={()=>contractCancel(c.id)}
        />
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