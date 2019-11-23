import React from 'react'
import ProviderDetailView from './ProviderDetailView';

import providers from "../../../data/fake/providersFake.json"


class ProviderDetail extends React.Component {

    state = {
        provider: null
    }

    async componentDidMount(){
     
        // obtener ID desde URL
        const id = this.props.match.params.id;
        // buscar proveedor en base de datos
        const provider = await providers.find(p=>p.id==id)
        
        // almacenar en estado para mostrar
        await this.setState({ provider })
        
    }

    render() {
        return <ProviderDetailView {...this.state.provider}/>
    }

}


export default ProviderDetail;
