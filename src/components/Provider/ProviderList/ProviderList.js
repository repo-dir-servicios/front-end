import React from 'react'
import ProviderListView from './ProviderListView';

import providers from "../../../data/fake/providersFake.json" 

class ProviderList extends React.Component {

    render() {
        return <ProviderListView providers={providers}/>
    }

}


export default ProviderList;
