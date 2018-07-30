import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Button from '../button';
import RequestsBoxes from './requestBoxes';
import Requests from './requests';
import RequireAdmin from '../auth/requireAdmin';


class RequestGrid extends Component{

    handleAddRequest = () => {
        this.props.history.push('/request/new')
    }

    componentDidMount(){
        this.props.fetchRequests()
    }

    render(){
        return(
            <div className='requests-grid'>
                <RequireAdmin>
                    <Button className="requests-grid__button" icon="fas fa-plus" callback={() =>this.handleAddRequest()}/>
                </RequireAdmin>
                <RequestsBoxes/>
                <Requests/>
            </div>
        )
    }
}

RequestGrid = connect( null, actions)(RequestGrid)

export default RequestGrid;