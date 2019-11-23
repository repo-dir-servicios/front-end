import React from 'react'
import ContractDetailView from './ContractDetailView';

import contracts from "../../../data/fake/contractsFake.json"


class ContractDetail extends React.Component {

    state = {
        contract: null
    }

    async componentDidMount(){
     
        // obtener ID desde URL
        const id = this.props.match.params.id;
        // buscar proveedor en base de datos
        const contract = await contracts.find(p=>p.id===id)
        // almacenar en estado para mostrar
        await this.setState({ contract })
        
    }

    render() {
        return <ContractDetailView {...this.state.contract}/>
    }

}


export default ContractDetail;
