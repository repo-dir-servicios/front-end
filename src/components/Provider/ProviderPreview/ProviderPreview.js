import React from 'react'
import ProviderPreviewView from './ProviderPreviewView';



class ProviderPreview extends React.Component {

    render() {
        return <ProviderPreviewView {...this.props.provider}/>
    }

}


export default ProviderPreview;
