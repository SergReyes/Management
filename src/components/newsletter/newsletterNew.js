import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from './newsletterNewForm'

class NewNewsletter extends Component{

    onSubmit = fields => {

        const { title, body, image } = fields;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);
        
        this.props.createNewRequest(formData, () => {
            this.props.history.push('/dashboard');
        })

    };

    onCancel = () => {
       this.props.history.push('/dashboard')
    }

    render(){
        return(
            <div className="new-newsletter">
                <NewNewsletterForm 
                onCancel={(event) => this.onCancel()} 
                onSubmit={(event) => this.onSubmit}
                formTitle='New Newsletter'
                fieldOnePlaceholder='Newsletter Title'
                fieldOneTitle='Newsletter Title'
                fieldTwoPlaceholder='Body Description'
                fieldTwoTitle='Body'
                />
            </div>
        )
    }
}

NewNewsletter = connect(null, actions)(NewNewsletter);

export default NewNewsletter;