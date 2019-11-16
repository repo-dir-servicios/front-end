import styled from 'styled-components'

import React from 'react'
import RequestPreview from '../Requests/RequestPreview/RequestPreview';
import ContractPreview from '../Contracts/ContractPreview/ContractPreview';


import style from "./UserDashboard.scss";


const UserDashboardSection = ({
    title,
    list,
    number
}) => (
    <section>
        <header>
            <h3>
                { title }
            </h3>
            <span className="Number">
                { number }
            </span>
        </header>
        <ul>
            { list }
        </ul>
    </section>
)
export default UserDashboardSection;