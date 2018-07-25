import React, { Component } from 'react';
import RequestsBox from './requestBox';

class RequestsBoxes extends Component{
    render(){
        return(
            <div className='requests-boxes'>
                <RequestsBox title={'pending'} count={2}/>
            </div>
        )
    }
}

export default RequestsBoxes;