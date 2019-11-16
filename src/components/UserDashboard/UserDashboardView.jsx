import styled from 'styled-components'

import React from 'react'
import RequestPreview from '../Requests/RequestPreview/RequestPreview';
import ContractPreview from '../Contracts/ContractPreview/ContractPreview';

const UserDashboardSection = styled.section`
    
    

`

const serviceFake = {
    name: "Instalación de equipo de videovigilancia",
}

const clientFake = {
    first_names: "Josué Pedro",
    last_names: "Ramirez Ramirez",
}

const UserDashboardView = () => (

    <UserDashboardSection className="UserDashboard">
        <section>
            <h3>
                Nuevas Solicitudes
            </h3>

            <ul>
                <RequestPreview service={serviceFake} client={clientFake}/>
                <RequestPreview service={serviceFake} client={clientFake}/>
                <RequestPreview service={serviceFake} client={clientFake}/>
            </ul>
        </section>
        <section>
            <h3>
                Próximos Contratos
            </h3>
            <ul>
                <ContractPreview service={serviceFake} client={clientFake}/>
                <ContractPreview service={serviceFake} client={clientFake}/>
                <ContractPreview service={serviceFake} client={clientFake}/>
            </ul>
        </section>
    </UserDashboardSection>

)

export default UserDashboardView;