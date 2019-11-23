import React from 'react'


import ServiceForm from "../components/Service/ServiceForm/ServiceForm";

import providers from '../data/fake/providersFake'
import services from '../data/fake/servicesFake'




const RenderFieldList = (
    list,props,inputChange, data, updateService
) => list.map((f,index)=>(
    <label key={ `input_${f.name}_${index}`}>
        <span>
            {f.label}
        </span>

        {
            f.type === "service_form"
            ?
            <ServiceForm {...data} updateService={updateService}/>
            :
            <input
                type={f.type}
                name={f.name}
                value={ props[f.name] }
                onChange={e=>inputChange(f.name, e.target.value)}
            />
        }
    </label>
))

export default RenderFieldList