import React from 'react'
import ProviderDetailView from './ProviderDetailView';



class ProviderDetail extends React.Component {

    state = {
        id: null
    }

    componentDidMount(){
     
        const id = this.props.match.params.id;
        
        this.setState({ id })
        
    }

    render() {
        return <ProviderDetailView id={this.state.id}/>
    }

}


export default ProviderDetail;
