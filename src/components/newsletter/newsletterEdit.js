import React, { Component } from 'react';
import NewNewsletterForm from './newsletterNewForm';
import {connect} from 'react-redux';
import * as actions from '../../actions';


class EditNewsletter extends Component{

    onSubmit = (fields) => {
        this.props.history.push('/dashboard')
    };

    onCancel = () => {
       this.props.history.push('/dashboard')
    };

    componentDidMount(){
        this.props.fetchNewsletterWithId(this.props.match.params.id)
    }

    render(){
        return(
            <div className="new-newsletter">
                <NewNewsletterForm 
                newsletterToEdit={this.props.newsletterToEdit} 
                onCancel={(event) => this.onCancel()} 
                onSubmit={(event) => this.onSubmit}
                formTitle='Edit Newsletter'/>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { newsletterToEdit} = state.newsletters;
    return{
        newsletterToEdit
    }
}

export default connect(mapStateToProps, actions)(EditNewsletter);