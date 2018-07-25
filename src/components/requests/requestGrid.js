import React, { Component } from 'react';
import Button from '../button';
import RequestsBoxes from './requestBoxes';
import Requests from './requests';


class RequestGrid extends Component{

    handleAddRequest = () => {
        this.props.history.push('/request/new')
    }

    render(){
        return(
            <div className='requests-grid'>
                <Button className="requests-grid__button" icon="fas fa-plus" callback={() =>this.handleAddRequest()}/>
                <RequestsBoxes/>
                <Requests/>
            </div>
        )
    }
}

export default RequestGrid;