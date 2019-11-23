import React from 'react'
import RequestDetailView from './RequestDetailView';

import contracts from "../../../data/fake/contractsFake.json"


class RequestDetail extends React.Component {

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
        return <RequestDetailView {...this.state.contract}/>
    }

}


export default RequestDetail;
