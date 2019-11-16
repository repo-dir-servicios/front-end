import styled from 'styled-components'

import React from 'react'
import {Link} from 'react-router-dom'

import style from "./ContractPreview.scss"

const ContractPreviewView = ({
    id,
    service,
    client,
    notes,
    service_unit,
    provider,
    location,
    start_date,
    end_date,
    payment_method,
    comments,
}) => (

    <article className="ContractPreview">
            <header>
                <h6>
                    { service.name }
                </h6>

                <section className="ClientInfo">
                    <span>Cliente:</span>
                    <span>
                        {
                            !! client && 
                            (client.first_names+" "+ client.last_names)
                        }
                    </span>
                </section>

                <section className="DateTime">
                    <div>
                        { new Date().toLocaleDateString() }
                    </div>
                    <div>
                        { new Date().toLocaleTimeString() }
                    </div>
                </section>
            </header>

            <footer>
                <Link to={`/requests/${id}`}>
                    <button>
                        Ver
                    </button>
                </Link>

                

                <button>
                    Cancelar
                </button>

            </footer>
    </article>

)

export default ContractPreviewView;