import styled from 'styled-components'

import React from 'react'

const ServiceFormSection = styled.section`
    
    

`

const ServiceFormView = ({
    options,
    selected,
    units,

    select,
    unitsSelect,
    
}) => (

    <div className="ServiceForm">
        <select onChange={e=>select(e)}>
            <option></option>
            { 
                !! options &&
                options.map((o,i)=>(
                    <option key={'option_'+i} value={o.id}>
                        {o.name}
                    </option>
                ))
            }
        </select>

        {
            !! selected &&
            <div>

                <dl>
                    <dt>Unidad de Servicio</dt>
                    <dd>{selected.service_unit}</dd>
                    <dt>Precio por unidad</dt>
                    <dd>{selected.price_per_unit}</dd>
                    <dt>Unidades mínimas</dt>
                    <dd>{selected.minimum_units}</dd>
                </dl>

<label>
    <span>
        Unidades
    </span>
    <input
        type="number"
        min={selected.minimum_units}
        value={ !! units ? units : selected.minimum_units }
        onChange={e=>unitsSelect(e)}
    />
</label>

                { selected.name }

            </div>
        }

    </div>

)

export default ServiceFormView;