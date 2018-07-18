import React, { Component } from 'react';
import SignupForm from './signupForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';




class Signup extends Component {

    onSubmit = (fields) => {
        this.props.signUp(fields, () => {
        console.log('navigate to dashboard');
        this.props.history.push('/dashboard')
    })
}


    render() {
        return (
            <div className='sign-up'>
                <SignupForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default connvect(null, actions)(signUp);