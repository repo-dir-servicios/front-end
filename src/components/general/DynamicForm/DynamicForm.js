import React from 'react'

import { Redirect } from "react-router-dom";

import renderFieldList from '../../../functions/renderFieldList'


import UserMessage from './../../general/UserMessage/UserMessage';

import fields from "../../../data/forms/request-form-fields"

class DynamicForm extends React.Component {

    render() {
        
        const {
            fields,
            props,
            inputChange,
            data,
            updateService,
            i
        } = this.props

        return (
            <div className="DynamicForm">
                
                {
                    renderFieldList(
                        fields,
                        props,
                        inputChange,
                        data,
                        updateService,
                        i
                    )        
                }

            </div>
        )

    }

}


export default DynamicForm;
